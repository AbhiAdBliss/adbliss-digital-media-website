import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const body = await req.json();
    const { role, firstName, lastName, company, email, country, comments } = body;

    // Configure transporter (direct credentials)
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: 'abhishek@blissdigitalmedia.com', // sender email
        pass: 'strd rdnj ecwf vall', // Gmail app password
      },
    });

    // 2️⃣ Branded AdBliss email template
    const mailOptions = {
      from: '\'AdBliss Contact\' <abhishek@blissdigitalmedia.com>',
      to: 'abhishek@blissdigitalmedia.com',
      subject: `📩 New Contact Request from ${firstName} ${lastName}`,
      html: `
        <div style="
          font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
          background-color: #f4f6fb;
          padding: 40px 0;
          display: flex;
          justify-content: center;
        ">
          <div style="
            width: 100%;
            max-width: 600px;
            background: #ffffff;
            border-radius: 16px;
            box-shadow: 0 6px 25px rgba(0,0,0,0.08);
            overflow: hidden;
          ">
            <!-- Header -->
            <div style="
              background: linear-gradient(135deg, #7c3aed, #4f46e5);
              color: #ffffff;
              text-align: center;
              padding: 24px;
            ">
              <h2 style="margin: 0; font-size: 20px;">New Contact Submission</h2>
            </div>

            <!-- Body -->
            <div style="padding: 32px;">
              <p style="font-size: 16px; color: #374151;">
                You’ve received a new inquiry via the <b>AdBliss Contact Form</b>.
              </p>

              <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
                <tr>
                  <td style="padding: 8px 0; color: #6b7280; font-weight: 600;">Role:</td>
                  <td style="padding: 8px 0; color: #111827;">${role}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #6b7280; font-weight: 600;">First Name:</td>
                  <td style="padding: 8px 0; color: #111827;">${firstName}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #6b7280; font-weight: 600;">Last Name:</td>
                  <td style="padding: 8px 0; color: #111827;">${lastName}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #6b7280; font-weight: 600;">Company:</td>
                  <td style="padding: 8px 0; color: #111827;">${company}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #6b7280; font-weight: 600;">Email:</td>
                  <td style="padding: 8px 0; color: #111827;">${email}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #6b7280; font-weight: 600;">Country:</td>
                  <td style="padding: 8px 0; color: #111827;">${country}</td>
                </tr>
              </table>

              <div style="margin-top: 24px;">
                <p style="color: #6b7280; font-weight: 600;">Additional Comments:</p>
                <div style="
                  background: #f9fafb;
                  border: 1px solid #e5e7eb;
                  border-radius: 8px;
                  padding: 12px;
                  color: #111827;
                  white-space: pre-line;
                ">
                  ${comments || 'No additional comments.'}
                </div>
              </div>
            </div>

            <!-- Footer -->
            <div style="
              background: #f3f4f6;
              padding: 16px 24px;
              text-align: center;
              font-size: 13px;
              color: #6b7280;
            ">
              © ${new Date().getFullYear()} AdBliss · Intelligent Ad Solutions
            </div>
          </div>
        </div>
      `,
    };

    // 3️⃣ Send email
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ success: true, message: 'Email sent successfully' }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Email error:', error);
    return new Response(
      JSON.stringify({ success: false, error: 'Failed to send email' }),
      { status: 500 }
    );
  }
}
