import Post from "./post/Post"


export default function PostList({ posts }) {
    return (
        <div className="gap-5 flex flex-col">
            {
                posts.map((post, idx) => {
                    return <Post post={post} key={idx} />
                })
            }
        </div>
    )
}
