import { BlogPosts } from "../global/posts";

function Writing() {
    return (<div className="my-8 vertical space-y-3">
        <h1 className="font-semibold text-2xl my-8">writing</h1>
        <BlogPosts />
    </div>);
}

export default Writing;