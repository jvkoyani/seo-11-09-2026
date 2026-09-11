// API endpoint for collecting Core Web Vitals metrics
// This helps identify performance issues across pages

export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const { name, value, rating, delta, id, page_path, user_agent } = req.body;

    // Log metrics for monitoring
    const metric = {
      timestamp: new Date().toISOString(),
      name,
      value,
      rating,
      delta,
      id,
      page_path: req.headers.referer,
      user_agent: req.headers['user-agent'],
    };

    // In production, send to external monitoring service (e.g., Google Analytics, Datadog)
    // Example:
    // await fetch('https://your-analytics-endpoint.com/vitals', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(metric),
    // });

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log('[Web Vital]', {
        name,
        value: Math.round(value),
        rating,
        page: req.headers.referer,
      });
    }

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error tracking Web Vital:', error);
    res.status(500).json({ error: 'Failed to track metric' });
  }
}
