// EmailJS Service Configuration
// Provide these via environment variables (recommended):
// - VITE_EMAILJS_SERVICE_ID
// - VITE_EMAILJS_TEMPLATE_ID
// - VITE_EMAILJS_PUBLIC_KEY
const EMAILJS_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

// Formspree fallback configuration:
// - VITE_FORMSPREE_FORM_ID (preferred)
//   OR
// - VITE_FORMSPREE_ENDPOINT (full URL)
const FORMSPREE_ENDPOINT =
  import.meta.env.VITE_FORMSPREE_ENDPOINT ||
  (import.meta.env.VITE_FORMSPREE_FORM_ID
    ? `https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_FORM_ID}`
    : null);

const CONTACT_API_URL = import.meta.env.VITE_CONTACT_API_URL || "/api/contact";

export const sendWithBackend = async (formData) => {
  try {
    const response = await fetch(CONTACT_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) return { success: true, response };

    const data = await response.json().catch(() => null);
    throw new Error(data?.error || `Server error (${response.status})`);
  } catch (error) {
    console.error("Backend Email Error:", error);
    return { success: false, error: error.message };
  }
};

export const sendEmailWithJS = async (formData) => {
  try {
    if (!EMAILJS_CONFIG.SERVICE_ID || !EMAILJS_CONFIG.TEMPLATE_ID || !EMAILJS_CONFIG.PUBLIC_KEY) {
      return { success: false, error: "EmailJS is not configured" };
    }

    // Initialize EmailJS (only once)
    if (!window.emailjs) {
      // Load EmailJS script dynamically
      await loadEmailJSScript();
    }

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: 'Samruddhi Gaikwad',
      reply_to: formData.email,
    };

    const response = await window.emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams,
      EMAILJS_CONFIG.PUBLIC_KEY
    );

    return { success: true, response };
  } catch (error) {
    console.error('EmailJS Error:', error);
    return { success: false, error: error.text || 'Failed to send email' };
  }
};

const loadEmailJSScript = () => {
  return new Promise((resolve, reject) => {
    if (window.emailjs) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
    script.async = true;
    
    script.onload = () => {
      window.emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
      resolve();
    };
    
    script.onerror = () => {
      reject(new Error('Failed to load EmailJS script'));
    };
    
    document.head.appendChild(script);
  });
};

// Alternative: Formspree fallback (current implementation)
export const sendWithFormspree = async (formData) => {
  try {
    if (!FORMSPREE_ENDPOINT) {
      throw new Error("Formspree is not configured");
    }

    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      return { success: true, response };
    } else {
      const text = await response.text().catch(() => '');
      throw new Error(`Formspree submission failed (${response.status})${text ? `: ${text}` : ''}`);
    }
  } catch (error) {
    console.error('Formspree Error:', error);
    return { success: false, error: error.message };
  }
};

// Unified email service that tries EmailJS first, then falls back to Formspree
export const sendEmail = async (formData, preferredMethod = 'emailjs') => {
  if (preferredMethod === "backend") {
    return await sendWithBackend(formData);
  }

  if (preferredMethod === 'emailjs') {
    const result = await sendEmailWithJS(formData);
    if (result.success) {
      return result;
    }
    console.warn('EmailJS failed/unconfigured, falling back to Formspree');
  }
  
  // Fallback to Formspree
  return await sendWithFormspree(formData);
};
