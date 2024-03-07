import contactform from '@/app/utils/html-templates/contactform'
import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request) {
  try {
    const req = await request.json()

    if (!req.email && req.email === '') {
      return NextResponse.json(
        { message: 'Email send failed. please add email address' },
        { status: 200 },
      )
    }
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      secure: true,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
      },
    })

    const mailOption = {
      from: process.env.MAIL_USER,
      to: req.email,
      subject:
        'Thanks for submit your contact form . We will react out to you sortly .',
      html: contactform(req),
    }

    await transporter.sendMail(mailOption)

    return NextResponse.json(
      { message: 'Contact Form Email Sent Successfully' },
      { status: 200 },
    )
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to Send Email' },
      { status: 500 },
    )
  }
}
