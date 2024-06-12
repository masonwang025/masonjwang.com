import "./post.css"

function Post({ children }: { children: React.ReactNode }) {
    return (<div className="bg-background-light text-neutral-900">
        <div>{children}</div>
    </div>);
}

export default Post;