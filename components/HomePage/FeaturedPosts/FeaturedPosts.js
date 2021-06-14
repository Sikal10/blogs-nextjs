import classes from "./featured-posts.module.css";
import PostsGrid from "../../Posts/PostGrid/PostsGrid";

const FeaturedPosts = ({posts}) => {
    return (
        <section className={classes.latest}>
            <h2>Featured posts</h2>

            <PostsGrid posts={posts} />
        </section>
    );
};

export default FeaturedPosts;