import { BlogPosts } from "../global/posts";

function Writing() {
    return (<div className="my-8 vertical space-y-3">
        <p><b>writing</b></p>
        <BlogPosts />
        <p>also, for what it's worth: i was previously writing <a href="https://alignment.guide" target="_blank" className="link">alignment.guide</a> but have since tabled that project.</p>

    </div>);
}

export default Writing;