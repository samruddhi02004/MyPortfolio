import { useState, useEffect } from 'react';

export const useGitHubActivity = (username) => {
  const [activity, setActivity] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setLoading(true);
        
        // Fetch user data
        const userResponse = await fetch(`https://api.github.com/users/${username}`);
        if (!userResponse.ok) throw new Error('Failed to fetch user data');
        const userData = await userResponse.json();

        // Fetch recent events
        const eventsResponse = await fetch(`https://api.github.com/users/${username}/events?per_page=10`);
        if (!eventsResponse.ok) throw new Error('Failed to fetch events');
        const eventsData = await eventsResponse.json();

        // Fetch repositories
        const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?per_page=6&sort=updated`);
        if (!reposResponse.ok) throw new Error('Failed to fetch repositories');
        const reposData = await reposResponse.json();

        // Calculate contribution streak (simplified version)
        const today = new Date();
        const contributionDays = new Set();
        
        eventsData.forEach(event => {
          if (event.type === 'PushEvent') {
            const eventDate = new Date(event.created_at).toDateString();
            contributionDays.add(eventDate);
          }
        });

        const activityData = {
          user: {
            login: userData.login,
            name: userData.name,
            bio: userData.bio,
            public_repos: userData.public_repos,
            followers: userData.followers,
            following: userData.following,
            avatar_url: userData.avatar_url,
            html_url: userData.html_url,
            created_at: userData.created_at
          },
          events: eventsData.slice(0, 5).map(event => ({
            type: event.type,
            repo: event.repo.name,
            created_at: event.created_at,
            payload: event.payload
          })),
          repositories: reposData.map(repo => ({
            name: repo.name,
            description: repo.description,
            language: repo.language,
            stars: repo.stargazers_count,
            forks: repo.forks_count,
            updated_at: repo.updated_at,
            html_url: repo.html_url
          })),
          stats: {
            totalContributions: contributionDays.size,
            currentStreak: 0, // Would need more complex calculation for real streak
            repositories: userData.public_repos,
            followers: userData.followers,
            totalStars: reposData.reduce((acc, repo) => acc + repo.stargazers_count, 0)
          }
        };

        setActivity(activityData);
        setError(null);
      } catch (err) {
        setError(err.message);
        console.error('GitHub API Error:', err);
      } finally {
        setLoading(false);
      }
    };

    if (username) {
      fetchGitHubData();
      
      // Refresh data every 5 minutes
      const interval = setInterval(fetchGitHubData, 5 * 60 * 1000);
      
      return () => clearInterval(interval);
    }
  }, [username]);

  return { activity, loading, error };
};

export const useGitHubContributionGraph = (username) => {
  const [contributions, setContributions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        // GitHub's GraphQL API would be better for this, but we'll simulate with REST
        const response = await fetch(`https://api.github.com/users/${username}/events?per_page=100`);
        const events = await response.json();

        // Process events into daily contributions
        const dailyContributions = {};
        const today = new Date();
        
        // Initialize last 365 days
        for (let i = 364; i >= 0; i--) {
          const date = new Date(today);
          date.setDate(date.getDate() - i);
          const dateStr = date.toISOString().split('T')[0];
          dailyContributions[dateStr] = 0;
        }

        // Count contributions
        events.forEach(event => {
          if (event.type === 'PushEvent') {
            const date = event.created_at.split('T')[0];
            if (dailyContributions[date] !== undefined) {
              dailyContributions[date] += event.payload.commits?.length || 1;
            }
          } else if (['IssuesEvent', 'PullRequestEvent', 'CreateEvent'].includes(event.type)) {
            const date = event.created_at.split('T')[0];
            if (dailyContributions[date] !== undefined) {
              dailyContributions[date] += 1;
            }
          }
        });

        const contributionData = Object.entries(dailyContributions).map(([date, count]) => ({
          date,
          count,
          level: count === 0 ? 0 : count <= 3 ? 1 : count <= 6 ? 2 : count <= 9 ? 3 : 4
        }));

        setContributions(contributionData);
      } catch (error) {
        console.error('Failed to fetch contributions:', error);
      } finally {
        setLoading(false);
      }
    };

    if (username) {
      fetchContributions();
    }
  }, [username]);

  return { contributions, loading };
};
