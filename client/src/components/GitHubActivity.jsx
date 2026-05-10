import { motion } from 'framer-motion';
import { Github, Star, GitBranch, Users, Calendar, Activity, Code, GitPullRequest, CircleDot, GitCommit } from 'lucide-react';
import { useGitHubActivity, useGitHubContributionGraph } from '../hooks/useGitHubActivity.js';
import { GITHUB_USERNAME } from "@/constants/socialUrls.js";

export const GitHubActivity = ({ username = GITHUB_USERNAME }) => {
  const { activity, loading, error } = useGitHubActivity(username);
  const { contributions, loading: contributionsLoading } = useGitHubContributionGraph(username);

  if (loading) {
    return (
      <div className="bg-background/60 backdrop-blur-sm border border-border rounded-2xl p-8">
        <div className="animate-pulse">
          <div className="h-6 bg-muted rounded w-1/3 mb-4"></div>
          <div className="space-y-3">
            <div className="h-4 bg-muted rounded w-full"></div>
            <div className="h-4 bg-muted rounded w-3/4"></div>
            <div className="h-4 bg-muted rounded w-1/2"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-background/60 backdrop-blur-sm border border-border rounded-2xl p-8">
        <div className="text-center">
          <Github className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground">Unable to load GitHub activity</p>
        </div>
      </div>
    );
  }

  const getEventIcon = (eventType) => {
    switch (eventType) {
      case 'PushEvent': return <GitCommit className="h-4 w-4" />;
      case 'PullRequestEvent': return <GitPullRequest className="h-4 w-4" />;
      case 'IssuesEvent': return <CircleDot className="h-4 w-4" />;
      case 'CreateEvent': return <Code className="h-4 w-4" />;
      default: return <Activity className="h-4 w-4" />;
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    return date.toLocaleDateString();
  };

  const getContributionColor = (level) => {
    switch (level) {
      case 0: return 'bg-muted';
      case 1: return 'bg-green-200';
      case 2: return 'bg-green-400';
      case 3: return 'bg-green-600';
      case 4: return 'bg-green-800';
      default: return 'bg-muted';
    }
  };

  return (
    <motion.div 
      className="bg-background/60 backdrop-blur-sm border border-border rounded-2xl p-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <motion.div 
            className="p-3 rounded-2xl bg-gradient-to-r from-gray-700 to-gray-900"
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Github className="h-6 w-6 text-white" />
          </motion.div>
          <div>
            <h3 className="text-2xl font-bold text-foreground">GitHub Activity</h3>
            <p className="text-muted-foreground">@{username}</p>
          </div>
        </div>
        
        <motion.a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View Profile
        </motion.a>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <motion.div 
          className="text-center p-4 rounded-xl bg-primary/5 border border-primary/10"
          whileHover={{ scale: 1.02 }}
        >
          <div className="text-2xl font-bold text-primary">{activity?.stats?.repositories || 0}</div>
          <div className="text-sm text-muted-foreground">Repositories</div>
        </motion.div>
        
        <motion.div 
          className="text-center p-4 rounded-xl bg-primary/5 border border-primary/10"
          whileHover={{ scale: 1.02 }}
        >
          <div className="text-2xl font-bold text-primary">{activity?.stats?.totalStars || 0}</div>
          <div className="text-sm text-muted-foreground">Total Stars</div>
        </motion.div>
        
        <motion.div 
          className="text-center p-4 rounded-xl bg-primary/5 border border-primary/10"
          whileHover={{ scale: 1.02 }}
        >
          <div className="text-2xl font-bold text-primary">{activity?.stats?.followers || 0}</div>
          <div className="text-sm text-muted-foreground">Followers</div>
        </motion.div>
        
        <motion.div 
          className="text-center p-4 rounded-xl bg-primary/5 border border-primary/10"
          whileHover={{ scale: 1.02 }}
        >
          <div className="text-2xl font-bold text-primary">{activity?.stats?.totalContributions || 0}</div>
          <div className="text-sm text-muted-foreground">Contributions</div>
        </motion.div>
      </div>

      {/* Contribution Graph (Simplified) */}
      <div className="mb-8">
        <h4 className="text-lg font-semibold text-foreground mb-4">Recent Activity</h4>
        <div className="grid grid-cols-7 gap-1">
          {contributions.slice(-28).map((contrib, index) => (
            <motion.div
              key={contrib.date}
              className={`aspect-square rounded-sm ${getContributionColor(contrib.level)} hover:ring-2 hover:ring-primary/50 transition-all cursor-pointer`}
              title={`${contrib.date}: ${contrib.count} contributions`}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.02 }}
              whileHover={{ scale: 1.2 }}
            />
          ))}
        </div>
        <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
          <span>Less</span>
          <div className="flex gap-1">
            <div className="w-3 h-3 bg-muted rounded-sm"></div>
            <div className="w-3 h-3 bg-green-200 rounded-sm"></div>
            <div className="w-3 h-3 bg-green-400 rounded-sm"></div>
            <div className="w-3 h-3 bg-green-600 rounded-sm"></div>
            <div className="w-3 h-3 bg-green-800 rounded-sm"></div>
          </div>
          <span>More</span>
        </div>
      </div>

      {/* Recent Events */}
      <div>
        <h4 className="text-lg font-semibold text-foreground mb-4">Recent Activity</h4>
        <div className="space-y-3">
          {activity?.events?.map((event, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                {getEventIcon(event.type)}
              </div>
              <div className="flex-1">
                <div className="font-medium text-foreground text-sm">
                  {event.type.replace('Event', '')} in <span className="text-primary">{event.repo}</span>
                </div>
                <div className="text-xs text-muted-foreground">
                  {formatDate(event.created_at)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Recent Repositories */}
      {activity?.repositories && activity.repositories.length > 0 && (
        <div className="mt-8">
          <h4 className="text-lg font-semibold text-foreground mb-4">Recent Repositories</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activity.repositories.slice(0, 4).map((repo, index) => (
              <motion.div
                key={repo.name}
                className="p-4 rounded-lg border border-border hover:border-primary/50 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h5 className="font-semibold text-foreground">{repo.name}</h5>
                    {repo.description && (
                      <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                        {repo.description}
                      </p>
                    )}
                    <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                      {repo.language && (
                        <span className="flex items-center gap-1">
                          <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                          {repo.language}
                        </span>
                      )}
                      <span className="flex items-center gap-1">
                        <Star className="h-3 w-3" />
                        {repo.stars}
                      </span>
                      <span className="flex items-center gap-1">
                        <GitBranch className="h-3 w-3" />
                        {repo.forks}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
};
