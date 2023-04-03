import nodemailer from 'nodemailer'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import User from '../../../models/User'
import dbConnect from '../../../lib/mongodb'

const handler = async (req, res) => {
    await dbConnect()

    if (req.method === 'POST') {
        try {
            const { username, password, email } = req.body

            if (!username || !password || !email) {
                return res.status(409).json({
                    message: 'Please fill all fields',
                    success: false
                })
            }

            const isUser = await User.findOne({ email: email })

            if (isUser) return res.status(409).json({
                message: 'User already exists',
                success: false
            })

            const salt = await bcrypt.genSalt(10)
            const hash = await bcrypt.hash(password, salt)

            // User creation
            const newUser = await User.create({
                email,
                username,
                password: hash
            })
            await newUser.save()


            // Token creation
            const token = jwt.sign({
                email: email
            }, process.env.JWT_MAIL_SECRET, {
                expiresIn: '30m'
            })


            // Mailing user
            const transport = nodemailer.createTransport({
                service: 'Gmail',
                auth: {
                    user: 'next.tsx@gmail.com',
                    pass: process.env.GMAIL_SECRET
                }
            })

            // DEPLOYEMENT = https://reddit-mohitkhatri.vercel.app/verify?token=${token}
            const mailOptions = {
                from: 'Reddit-Clone <next.tsx@gmail.com>',
                to: email,
                subject: 'Please verify your email',
                html: `<h1><a href="http://localhost:3000/verify?token=${token}">Click here to verify</a></h1>`
            };
            transport.sendMail(mailOptions, (err, info) => {
                if (err) {
                    return res.status(500).json({
                        message: 'Something went wrong!',
                        success: false,
                    })

                }


                return res.status(201).json({
                    message: 'Please check your email for verification!',
                    success: true
                })
            })

        } catch (error) {
            console.log(error)
            return res.status(500).json({
                message: 'Somthing went wrong',
                success: false,
            })
        }
    }
}


export default handler