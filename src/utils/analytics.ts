// Analytics and affiliate tracking utilities
interface AffiliateLink {
  id: string;
  url: string;
  product: string;
  category: string;
  commission: number;
}

interface AnalyticsEvent {
  event: string;
  category: string;
  action: string;
  label?: string;
  value?: number;
  affiliateId?: string;
}

export class AffiliateTracker {
  private static instance: AffiliateTracker;
  private links: Map<string, AffiliateLink> = new Map();
  
  private constructor() {}
  
  static getInstance(): AffiliateTracker {
    if (!AffiliateTracker.instance) {
      AffiliateTracker.instance = new AffiliateTracker();
    }
    return AffiliateTracker.instance;
  }
  
  // Track affiliate link clicks
  trackAffiliateClick(linkId: string, productName: string, category: string): void {
    this.trackEvent({
      event: 'affiliate_click',
      category: 'affiliate',
      action: 'click',
      label: productName,
      affiliateId: linkId
    });
    
    // Store in localStorage for conversion tracking
    const clickData = {
      linkId,
      productName,
      category,
      timestamp: Date.now()
    };
    
    const existingClicks = JSON.parse(localStorage.getItem('affiliate_clicks') || '[]');
    existingClicks.push(clickData);
    localStorage.setItem('affiliate_clicks', JSON.stringify(existingClicks));
  }
  
  // Track product views
  trackProductView(productName: string, category: string, price?: string): void {
    this.trackEvent({
      event: 'product_view',
      category: 'product',
      action: 'view',
      label: productName,
      value: price ? parseFloat(price.replace('$', '')) : undefined
    });
  }
  
  // Track newsletter signups
  trackNewsletterSignup(): void {
    this.trackEvent({
      event: 'newsletter_signup',
      category: 'engagement',
      action: 'signup',
      label: 'newsletter'
    });
  }
  
  // Track section visits
  trackSectionView(sectionName: string): void {
    this.trackEvent({
      event: 'section_view',
      category: 'navigation',
      action: 'scroll_to',
      label: sectionName
    });
  }
  
  // Generic event tracking
  private trackEvent(event: AnalyticsEvent): void {
    // Google Analytics 4
    if (typeof gtag !== 'undefined') {
      gtag('event', event.action, {
        event_category: event.category,
        event_label: event.label,
        value: event.value,
        custom_parameter_affiliate_id: event.affiliateId
      });
    }
    
    // Facebook Pixel
    if (typeof fbq !== 'undefined') {
      fbq('track', event.event, {
        content_category: event.category,
        content_name: event.label,
        value: event.value
      });
    }
    
    // Console logging for development
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics Event:', event);
    }
  }
  
  // Get affiliate performance data
  getAffiliatePerformance(): Array<{
    linkId: string;
    productName: string;
    category: string;
    clicks: number;
    lastClick: number;
  }> {
    const clicks = JSON.parse(localStorage.getItem('affiliate_clicks') || '[]');
    const performance = new Map();
    
    clicks.forEach((click: {linkId: string; productName: string; category: string; timestamp: number}) => {
      const key = `${click.linkId}_${click.productName}`;
      if (performance.has(key)) {
        performance.get(key).clicks += 1;
      } else {
        performance.set(key, {
          linkId: click.linkId,
          productName: click.productName,
          category: click.category,
          clicks: 1,
          lastClick: click.timestamp
        });
      }
    });
    
    return Array.from(performance.values());
  }
}

// Utility functions for affiliate links
export const generateAffiliateLink = (baseUrl: string, affiliateId: string, productId: string): string => {
  const url = new URL(baseUrl);
  url.searchParams.append('ref', affiliateId);
  url.searchParams.append('pid', productId);
  return url.toString();
};

export const createAffiliateButton = (
  productName: string,
  affiliateUrl: string,
  linkId: string,
  category: string
) => {
  return (onClick: () => void) => {
    const tracker = AffiliateTracker.getInstance();
    tracker.trackAffiliateClick(linkId, productName, category);
    window.open(affiliateUrl, '_blank', 'noopener,noreferrer');
    onClick();
  };
};

// SEO and performance tracking
export const trackPagePerformance = (): void => {
  if (typeof performance !== 'undefined') {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    
    if (navigation) {
      const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
      const ttfb = navigation.responseStart - navigation.requestStart;
      
      AffiliateTracker.getInstance().trackEvent({
        event: 'performance',
        category: 'site_performance',
        action: 'page_load',
        label: 'load_time',
        value: Math.round(loadTime)
      });
      
      AffiliateTracker.getInstance().trackEvent({
        event: 'performance',
        category: 'site_performance',
        action: 'ttfb',
        label: 'time_to_first_byte',
        value: Math.round(ttfb)
      });
    }
  }
};

// Initialize tracking when the module loads
if (typeof window !== 'undefined') {
  window.addEventListener('load', trackPagePerformance);
}