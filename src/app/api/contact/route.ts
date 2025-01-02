import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // E-posta gönderme işlemi için transporter oluştur
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    // E-posta içeriğini hazırla
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'furkanardcm@gmail.com',
      subject: `Portfolio İletişim Formu - ${name}`,
      text: `
        İsim: ${name}
        E-posta: ${email}
        
        Mesaj:
        ${message}
      `,
      html: `
        <h3>Portfolio İletişim Formu</h3>
        <p><strong>İsim:</strong> ${name}</p>
        <p><strong>E-posta:</strong> ${email}</p>
        <br/>
        <p><strong>Mesaj:</strong></p>
        <p>${message}</p>
      `
    };

    // E-postayı gönder
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
} 