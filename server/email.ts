// Resend email integration
import { Resend } from 'resend';

let connectionSettings: any;

async function getCredentials() {
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME;
  const xReplitToken = process.env.REPL_IDENTITY 
    ? 'repl ' + process.env.REPL_IDENTITY 
    : process.env.WEB_REPL_RENEWAL 
    ? 'depl ' + process.env.WEB_REPL_RENEWAL 
    : null;

  if (!xReplitToken) {
    throw new Error('X_REPLIT_TOKEN not found for repl/depl');
  }

  connectionSettings = await fetch(
    'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=resend',
    {
      headers: {
        'Accept': 'application/json',
        'X_REPLIT_TOKEN': xReplitToken
      }
    }
  ).then(res => res.json()).then(data => data.items?.[0]);

  if (!connectionSettings || (!connectionSettings.settings.api_key)) {
    throw new Error('Resend not connected');
  }
  return { apiKey: connectionSettings.settings.api_key, fromEmail: connectionSettings.settings.from_email };
}

export async function getResendClient() {
  const { apiKey, fromEmail } = await getCredentials();
  return {
    client: new Resend(apiKey),
    fromEmail
  };
}

export async function sendDemoRequestNotification(data: {
  firstName: string;
  lastName: string;
  email: string;
  company?: string | null;
}) {
  try {
    const { client, fromEmail } = await getResendClient();
    
    await client.emails.send({
      from: fromEmail || 'WuunderFund <notifications@resend.dev>',
      to: 'steve@wuunderfund.com',
      subject: `New Demo Request: ${data.firstName} ${data.lastName}`,
      html: `
        <h2>New Demo Request</h2>
        <p>A new demo request has been submitted:</p>
        <ul>
          <li><strong>Name:</strong> ${data.firstName} ${data.lastName}</li>
          <li><strong>Email:</strong> ${data.email}</li>
          <li><strong>Company:</strong> ${data.company || 'Not provided'}</li>
        </ul>
        <p>Please follow up within 24 hours.</p>
      `
    });
    
    console.log('Demo notification email sent to steve@wuunderfund.com');
  } catch (error) {
    console.error('Failed to send demo notification email:', error);
  }
}
