import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import User from '../../../models/User'
import dbConnect from '../../../lib/mongodb'

const handler = async (req, res) => {
    await dbConnect()

    if (req.method === 'POST') {
        try {
            const { username } = req.body

            // Field validation
            if (!username || !req.body.password) {
                return res.status(409).json({
                    message: 'Please fill all fields',
                    success: false
                })
            }

            // searching user by username
            const isUser = await User.findOne({ username: username })


            // if user not found
            if (!isUser) return res.status(409).json({
                message: 'User does not exists',
                success: false
            })

            // If user not verified
            if (!isUser.isVerified) {
                return res.status(403).json({
                    message: 'Please verify your email!',
                    success: false
                })
            }

            // Compare password
            const isValid = await bcrypt.compare(req.body.password, isUser.password)


            // If password not matching
            if (!isValid) return res.status(403).json({
                message: 'Invalid credentials',
            })

            // Token creation
            const token = jwt.sign({
                id: isUser._id
            }, process.env.JWT_SECRET, {
                expiresIn: '10d'
            })

            // removing password before sending
            const { password, isVerified, createdAt, email, ...others } = isUser._doc


            // setting cookie
            res.setHeader('Set-Cookie', `reddit-clone-auth=${token}; Path=/; HttpOnly; SameSite=Strict; Max-Age=864000;`)
            return res.status(201).json({
                message: 'User logged in succesfully!',
                success: true,
                user: others
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