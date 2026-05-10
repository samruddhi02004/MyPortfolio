import { useEffect } from 'react';

export const useSmoothScroll = () => {
  useEffect(() => {
    // Smooth scroll behavior for anchor links
    const handleAnchorClick = (e) => {
      const href = e.currentTarget.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.slice(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          const offset = 80; // Navbar height offset
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });

          // Update URL without page reload
          window.history.pushState(null, null, href);
        }
      }
    };

    // Add click event listeners to all anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
      link.addEventListener('click', handleAnchorClick);
    });

    // Handle scroll position on page load
    const handleScrollPosition = () => {
      const hash = window.location.hash;
      if (hash) {
        // If the user is reloading the page while a hash is present (e.g. "#stats"),
        // prefer starting from the top/hero instead of jumping mid-page.
        // Deep-links (first navigation to a hashed URL) still work.
        const navEntry = performance.getEntriesByType?.("navigation")?.[0];
        const navType = navEntry?.type; // "navigate" | "reload" | "back_forward" | "prerender"
        const legacyNavType = performance.navigation?.type; // 0=navigate, 1=reload, 2=back_forward

        const isReloadLike =
          (navType && navType !== "navigate") ||
          (typeof legacyNavType === "number" && legacyNavType !== 0);

        if (isReloadLike) {
          window.history.replaceState(null, "", window.location.pathname + window.location.search);
          window.scrollTo({ top: 0, left: 0, behavior: "auto" });
          return;
        }

        const targetElement = document.getElementById(hash.slice(1));
        if (targetElement) {
          setTimeout(() => {
            const offset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }, 100);
        }
      }
    };

    handleScrollPosition();

    // Cleanup
    return () => {
      anchorLinks.forEach(link => {
        link.removeEventListener('click', handleAnchorClick);
      });
    };
  }, []);
};

export const useActiveSection = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          // Remove active class from all links
          navLinks.forEach((link) => {
            link.classList.remove('text-primary', 'border-primary');
            link.classList.add('text-muted-foreground', 'border-transparent');
          });
          
          // Add active class to current section link
          const activeLink = document.querySelector(`a[href="#${sectionId}"]`);
          if (activeLink) {
            activeLink.classList.remove('text-muted-foreground', 'border-transparent');
            activeLink.classList.add('text-primary', 'border-primary');
          }
        }
      });
    };

    window.addEventListener('scroll', updateActiveSection);
    updateActiveSection(); // Initial check

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
    };
  }, []);
};
