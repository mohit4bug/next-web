import jwt from 'jsonwebtoken'
import User from '../../../models/User'
import dbConnect from '../../../lib/mongodb'

const handler = async (req, res) => {
    await dbConnect()

    if (req.method === 'GET') {


        try {
            const { token } = req.query
            console.log(token)
            if (!token) {
                return res.status(400).json({
                    message: 'No token provided',
                    success: false,
                })
            }
            let decodedToken
            try {
                decodedToken = jwt.verify(token, process.env.JWT_MAIL_SECRET)
            } catch (error) {
                return res.status(401).json({
                    message: 'Invalid token',
                    success: false,
                })
            }
            const user = await User.findOne({ email: decodedToken.email })
            if (!user) {
                return res.status(404).json({
                    message: 'Email not found',
                    success: false,
                })
            }
            if (user.isVerified) {
                return res.status(400).json({
                    message: 'User already verified',
                    success: false,
                })
            }
            if (decodedToken.exp <= Date.now() / 1000) {
                return res.status(400).json({
                    message: 'Token has expired',
                    success: false,
                })
            }
            user.isVerified = true
            await user.save()
            return res.status(200).json({
                message: 'User verified',
                success: true,
            })
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                message: 'Something went wrong',
                success: false,
            })
        }
    }

}


export default handler