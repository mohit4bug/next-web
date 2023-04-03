import { useRouter } from "next/router"
import { withRouter } from 'next/router'
import { redditRequest } from "../../lib/axios"
import { useEffect, useState } from "react"
import Link from "next/link"

function Verify() {
    const router = new useRouter()
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')

    useEffect(() => {
        const token = router.query.token;

        const verify = async () => {
            setLoading(true)
            try {
                const res = await redditRequest.get('/verify?token=' + token)
                console.log(res)
                setMessage(res.data.message)
            }
            catch (error) {
                console.log(error)
                setMessage(error.response.data.message)
            }
            setLoading(false)
        }
        verify()

    }, [router.query.token])



    return (
        <div className="h-screen w-full items-center
        justify-center flex flex-col gap-3 px-5">
            <h1 className="text-4xl text-zinc-800">{message}!</h1>
            <p className="text-zinc-500
            text-center">
                {
                    message === 'User verified' && 'Congratulations 🥳, your registration is complete and you are now an official Redditor.'
                }
            </p>
            <Link href='/'><button
                className="bg-orange-500
             w-24 h-8 rounded-sm text-white shadow-sm"
            >{loading ? 'Loading...' : ' Redirect'}</button></Link>
        </div>
    )
}

export default withRouter(Verify)