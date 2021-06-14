import classes from "./post-content.module.css";
import PostHeader from "../PostHeader/PostHeader";


const DUMMY_POST =  {
    title: "Getting Started With Nextjs",
    image: "getting-started-nextjs.png",
    slug: "getting-started-with-nextjs",
    date: "2021-06-12",
    content: "# This is the first page"
}


const PostContent = () => {
    const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

    return (
        <article className={classes.content}>
            <PostHeader image={imagePath} title={DUMMY_POST.title} />
            {DUMMY_POST.content}
        </article>
    );
};

export default PostContent;