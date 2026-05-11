import connectDB from '../lib/mongodb';
import Contact from '../models/Contact';

// Configure API route
export const config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
  },
};

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false, 
      error: 'Method not allowed. Use POST.' 
    });
  }

  // CORS headers (adjust origin in production)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    // Connect to database
    await connectDB();

    // Extract data from request body
    const { name, email, message, subject } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        error: 'Please provide name, email, and message.' 
      });
    }

    // Email validation
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        success: false, 
        error: 'Please provide a valid email address.' 
      });
    }

    // Length validation
    if (name.length > 100) {
      return res.status(400).json({ 
        success: false, 
        error: 'Name is too long (max 100 characters).' 
      });
    }

    if (message.length > 1000) {
      return res.status(400).json({ 
        success: false, 
        error: 'Message is too long (max 1000 characters).' 
      });
    }

    // Get client info for spam prevention
    const ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const userAgent = req.headers['user-agent'];

    // Rate limiting: Check if same IP submitted in last 5 minutes
    const recentSubmission = await Contact.findOne({
      ipAddress,
      createdAt: { $gte: new Date(Date.now() - 5 * 60 * 1000) } // 5 minutes
    });

    if (recentSubmission) {
      return res.status(429).json({ 
        success: false, 
        error: 'Please wait a few minutes before submitting again.' 
      });
    }

    // Create contact entry in database
    const contact = await Contact.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      message: message.trim(),
      subject: subject?.trim() || 'Portfolio Contact',
      ipAddress,
      userAgent,
    });

    // Optional: Send email notification (uncomment when ready)
    /*
    try {
      await sendEmailNotification({
        to: process.env.NOTIFICATION_EMAIL,
        from: email,
        name,
        message,
        subject: subject || 'New Portfolio Contact',
      });
    } catch (emailError) {
      console.error('Email notification failed:', emailError);
      // Don't fail the request if email fails
    }
    */

    // Success response
    return res.status(201).json({ 
      success: true, 
      message: 'Thank you for your message! I will get back to you soon.',
      data: {
        id: contact._id,
        createdAt: contact.createdAt,
      }
    });

  } catch (error) {
    console.error('Contact form error:', error);

    // Handle validation errors
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({ 
        success: false, 
        error: messages.join(', ') 
      });
    }

    // Handle duplicate errors or other DB errors
    if (error.code === 11000) {
      return res.status(400).json({ 
        success: false, 
        error: 'Duplicate submission detected.' 
      });
    }

    // Generic error response
    return res.status(500).json({ 
      success: false, 
      error: 'Something went wrong. Please try again later.' 
    });
  }
}
