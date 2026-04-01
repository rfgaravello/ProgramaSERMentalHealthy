export const trackEvent = (eventName, params = {}) => {
    if (!window.gtag) return;
  
    window.gtag('event', eventName, {
      event_category: 'engagement',
      ...params,
    });
  };