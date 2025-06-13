# EmailJS Setup Instructions

To enable email notifications when users submit their email addresses, you need to set up EmailJS:

## Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

## Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Set up your template with these variables:
   - `{{to_email}}` - Recipient email (bingisaikumar97@gmail.com)
   - `{{from_name}}` - Sender name
   - `{{user_email}}` - The user's submitted email
   - `{{message}}` - Notification message
   - `{{subject}}` - Email subject

Example template:
```
Subject: {{subject}}

Hello,

{{message}}

User Email: {{user_email}}

Best regards,
{{from_name}}
```

4. Note down your **Template ID**

## Step 4: Get Public Key
1. Go to "Account" in your EmailJS dashboard
2. Find your **Public Key**

## Step 5: Update the Code
Replace the placeholders in `src/components/ComingSoon.tsx`:
- `YOUR_PUBLIC_KEY` with your actual public key
- `YOUR_SERVICE_ID` with your service ID
- `YOUR_TEMPLATE_ID` with your template ID

## Security Note
The public key is safe to use in frontend code as it's designed for client-side usage. EmailJS handles the secure email sending on their servers.