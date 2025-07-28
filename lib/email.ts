import nodemailer from 'nodemailer'

interface EmailOptions {
  to: string
  subject: string
  html: string
  text?: string
}

// Create transporter
const createTransporter = () => {
  if (process.env.EMAIL_PROVIDER === 'smtp') {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    })
  }
  
  // Default to Gmail
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_FROM,
      pass: process.env.EMAIL_PASSWORD,
    },
  })
}

export async function sendEmail({ to, subject, html, text }: EmailOptions) {
  try {
    const transporter = createTransporter()
    
    const info = await transporter.sendMail({
      from: `"SNUGGLES Streetwear" <${process.env.EMAIL_FROM}>`,
      to,
      subject,
      html,
      text: text || html.replace(/<[^>]*>/g, ''), // Strip HTML for text version
    })

    console.log('Email sent:', info.messageId)
    return { success: true, messageId: info.messageId }
  } catch (error) {
    console.error('Email sending failed:', error)
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' }
  }
}

// Email templates
export const emailTemplates = {
  orderConfirmation: (order: any) => ({
    subject: `SNUGGLES Order Confirmation - #${order.id.slice(-8)}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>SNUGGLES Order Confirmation</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .header { background: #000; color: #fff; padding: 20px; text-align: center; }
          .logo { font-size: 24px; font-weight: bold; color: #d4a422; }
          .content { padding: 30px 20px; }
          .order-details { background: #f8f9fa; padding: 20px; margin: 20px 0; border-radius: 8px; }
          .item { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #eee; }
          .total { font-size: 18px; font-weight: bold; color: #d4a422; }
          .footer { background: #f8f9fa; padding: 20px; text-align: center; font-size: 14px; color: #666; }
        </style>
      </head>
      <body>
        <div class="header">
          <div class="logo">SNUGGLES</div>
          <p>Your Comfort Has Arrived</p>
        </div>
        
        <div class="content">
          <h2>Order Confirmation</h2>
          <p>Thank you for your SNUGGLES order! We're preparing your streetwear with care.</p>
          
          <div class="order-details">
            <h3>Order #${order.id.slice(-8)}</h3>
            <p><strong>Email:</strong> ${order.email}</p>
            <p><strong>Status:</strong> ${order.status}</p>
            <p><strong>Order Date:</strong> ${new Date(order.createdAt).toLocaleDateString()}</p>
            
            <h4>Items Ordered:</h4>
            ${order.items.map((item: any) => `
              <div class="item">
                <span>${item.product.name} (${item.size}, ${item.color}) × ${item.quantity}</span>
                <span>₦${(item.price / 100).toLocaleString()}</span>
              </div>
            `).join('')}
            
            <div class="item total">
              <span>Total</span>
              <span>₦${(order.total / 100).toLocaleString()}</span>
            </div>
          </div>
          
          <p>We'll send you another email when your order ships. If you have any questions, feel free to contact us.</p>
        </div>
        
        <div class="footer">
          <p>© 2024 SNUGGLES Streetwear. Made with ❤️ in Lagos, Nigeria.</p>
          <p>This email was sent to ${order.email}</p>
        </div>
      </body>
      </html>
    `,
  }),

  welcomeEmail: (user: any) => ({
    subject: 'Welcome to the SNUGGLES Family!',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome to SNUGGLES</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .header { background: #000; color: #fff; padding: 30px 20px; text-align: center; }
          .logo { font-size: 28px; font-weight: bold; color: #d4a422; }
          .content { padding: 30px 20px; }
          .cta { background: #d4a422; color: #000; padding: 15px 30px; text-decoration: none; border-radius: 5px; font-weight: bold; display: inline-block; margin: 20px 0; }
          .footer { background: #f8f9fa; padding: 20px; text-align: center; font-size: 14px; color: #666; }
        </style>
      </head>
      <body>
        <div class="header">
          <div class="logo">SNUGGLES</div>
          <p>Your Comfort Has Arrived</p>
        </div>
        
        <div class="content">
          <h2>Welcome to SNUGGLES, ${user.firstName || 'Streetwear Enthusiast'}!</h2>
          
          <p>Thank you for joining the SNUGGLES family! You're now part of a community that celebrates authentic streetwear culture from Lagos to the world.</p>
          
          <p>Here's what you can expect:</p>
          <ul>
            <li>🔥 Early access to new drops and limited releases</li>
            <li>👕 Premium streetwear crafted with authentic culture</li>
            <li>🚚 Free delivery on orders over ₦50,000</li>
            <li>📱 Exclusive member updates and street culture content</li>
          </ul>
          
          <p>Ready to explore? Check out our latest collection:</p>
          <a href="${process.env.NEXT_PUBLIC_BASE_URL}/shop" class="cta">SHOP SNUGGLES</a>
          
          <p>Welcome to the streets. Welcome to SNUGGLES.</p>
        </div>
        
        <div class="footer">
          <p>© 2024 SNUGGLES Streetwear. Made with ❤️ in Lagos, Nigeria.</p>
          <p>This email was sent to ${user.email}</p>
        </div>
      </body>
      </html>
    `,
  }),

  orderStatusUpdate: (order: any) => ({
    subject: `SNUGGLES Order Update - #${order.id.slice(-8)} is now ${order.status}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>SNUGGLES Order Update</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .header { background: #000; color: #fff; padding: 20px; text-align: center; }
          .logo { font-size: 24px; font-weight: bold; color: #d4a422; }
          .content { padding: 30px 20px; }
          .status { background: #d4a422; color: #000; padding: 15px; text-align: center; font-weight: bold; border-radius: 8px; margin: 20px 0; }
          .footer { background: #f8f9fa; padding: 20px; text-align: center; font-size: 14px; color: #666; }
        </style>
      </head>
      <body>
        <div class="header">
          <div class="logo">SNUGGLES</div>
          <p>Your Comfort Has Arrived</p>
        </div>
        
        <div class="content">
          <h2>Order Update</h2>
          <p>Your SNUGGLES order has been updated!</p>
          
          <div class="status">
            Order #${order.id.slice(-8)} is now: ${order.status}
          </div>
          
          <p>
            ${order.status === 'SHIPPED' ? 'Your order is on its way! You should receive it within 2-3 business days.' :
              order.status === 'DELIVERED' ? 'Your order has been delivered! We hope you love your new SNUGGLES pieces.' :
              order.status === 'PROCESSING' ? 'We\'re preparing your order with care. It will ship soon!' :
              'Your order status has been updated.'}
          </p>
          
          <p>Thank you for choosing SNUGGLES streetwear.</p>
        </div>
        
        <div class="footer">
          <p>© 2024 SNUGGLES Streetwear. Made with ❤️ in Lagos, Nigeria.</p>
          <p>This email was sent to ${order.email}</p>
        </div>
      </body>
      </html>
    `,
  }),
}
