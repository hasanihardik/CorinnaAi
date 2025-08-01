# Corinna AI

An intelligent AI-powered chatbot SaaS platform built with Next.js that helps businesses automate customer interactions, capture leads, and provide 24/7 support through customizable chatbots.

![Next.js](https://img.shields.io/badge/Next.js-14.2.8-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Prisma](https://img.shields.io/badge/Prisma-5.19.1-darkgreen)

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Features

🤖 **AI-Powered Chatbots**
- Google Gemini AI integration for intelligent responses
- Customizable chatbot personality and behavior
- Multi-domain support for different businesses

💬 **Real-Time Chat**
- Live chat capabilities powered by Pusher
- Real-time message synchronization
- Typing indicators and message status

📊 **Analytics Dashboard**
- Detailed metrics and usage statistics
- Customer interaction insights
- Performance monitoring and reporting

🎓 **Bot Training**
- FAQ management system
- Custom filter questions for lead capture
- Automated response training

🎨 **Customization**
- Customizable chatbot themes and colors
- Brand-specific styling options
- Domain-specific configurations

💳 **Payment Integration**
- Stripe payment processing
- Subscription management
- Billing and invoicing

🔐 **Authentication & Security**
- Clerk authentication system
- Secure user management
- Role-based access control

📧 **Communication Tools**
- Email marketing capabilities
- Appointment scheduling
- Customer relationship management

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/hasanihardik/corinnaAi.git
   cd corinna-ai
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

3. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   bun dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## Usage

### Basic Setup

1. **Create an account** and log in through the authentication system
2. **Add your domain** in the dashboard to integrate the chatbot
3. **Configure your chatbot** settings, including welcome messages and appearance
4. **Train your bot** by adding FAQ questions and filter questions
5. **Embed the chatbot** on your website using the provided integration code

### Dashboard Navigation

- **Dashboard**: View metrics, customer interactions, and analytics
- **Settings**: Manage account preferences and integrations
- **Domains**: Add and configure multiple business domains
- **Bot Training**: Set up FAQ questions and lead capture forms
- **Email Marketing**: Send bulk emails to customers
- **Appointments**: Manage scheduling and bookings

## Configuration

Create a `.env.local` file in the root directory with the following variables:

```env
# Database
DATABASE_URL="your_postgresql_database_url"

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your_clerk_publishable_key"
CLERK_SECRET_KEY="your_clerk_secret_key"
NEXT_PUBLIC_CLERK_SIGN_IN_URL="/sign-in"
NEXT_PUBLIC_CLERK_SIGN_UP_URL="/sign-up"

# Google Gemini AI
GEMINI_API_KEY="your_gemini_api_key"

# Stripe Payments
STRIPE_SECRET_KEY="your_stripe_secret_key"
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="your_stripe_publishable_key"

# Pusher (Real-time Chat)
PUSHER_APP_ID="your_pusher_app_id"
PUSHER_APP_KEY="your_pusher_app_key"
PUSHER_APP_SECRET="your_pusher_app_secret"
PUSHER_APP_CLUSTER="your_pusher_cluster"
NEXT_PUBLIC_PUSHER_APP_KEY="your_pusher_app_key"

# Upload Care (File Uploads)
NEXT_PUBLIC_UPLOAD_CARE_PUBLIC_KEY="your_uploadcare_public_key"

# Email Service
MAILER_EMAIL="your_email_service"
MAILER_PASSWORD="your_email_password"
```

### Required Services

- **PostgreSQL Database**: For data storage
- **Clerk**: For authentication and user management
- **Google Gemini API**: For AI-powered responses
- **Stripe**: For payment processing
- **Pusher**: For real-time chat functionality
- **Upload Care**: For file upload handling

## Examples

### Integrating the Chatbot

Add the chatbot to your website by including the integration script:

```html
<script>
  window.embeddedChatbotConfig = {
    chatbotId: "your_chatbot_id",
    domain: "your_domain.com"
  }
</script>
<script src="https://your-app-domain.com/chatbot/embed.js"></script>
```

### API Usage

The platform provides various API endpoints for integration:

```typescript
// Get chatbot configuration
const chatbot = await onGetCurrentChatBot(domainId);

// Send message to AI assistant
const response = await onAiChatBotAssistant(
  botId,
  chatHistory,
  userRole,
  message
);
```

## Tech Stack

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, Prisma ORM
- **Database**: PostgreSQL
- **Authentication**: Clerk
- **AI**: Google Gemini API
- **Payments**: Stripe
- **Real-time**: Pusher
- **File Upload**: Upload Care
- **Deployment**: Vercel (recommended)

## Contributing

We welcome contributions to Corinna AI! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Use ESLint and Prettier for code formatting
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed

## Acknowledgements

- **Next.js** - The React framework for production
- **Prisma** - Next-generation ORM for Node.js and TypeScript
- **Clerk** - User authentication and management
- **Google Gemini** - AI language model for intelligent responses
- **Stripe** - Payment processing platform
- **Pusher** - Real-time communication infrastructure
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautifully designed components

---