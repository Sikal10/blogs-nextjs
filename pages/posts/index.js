import AllPosts from "../../components/Posts/AllPosts/AllPosts";

const DUMMY_POSTS = [
    {
        title: "Getting Started With Nextjs",
        image: "getting-started-nextjs.png",
        excerpt: "NextJS is the react framework for production.",
        slug: "getting-started-with-nextjs",
        date: "2021-06-12"
    },
    {
        title: "Getting Started With Nextjs",
        image: "getting-started-nextjs.png",
        excerpt: "NextJS is the react framework for production.",
        slug: "getting-started-with-nextjs2",
        date: "2021-06-12"
    },
    {
        title: "Getting Started With Nextjs",
        image: "getting-started-nextjs.png",
        excerpt: "NextJS is the react framework for production.",
        slug: "getting-started-with-nextjs3",
        date: "2021-06-12"
    },
    {
        title: "Getting Started With Nextjs",
        image: "getting-started-nextjs.png",
        excerpt: "NextJS is the react framework for production.",
        slug: "getting-started-with-nextjs4",
        date: "2021-06-12"
    },
]

const AllBlogsPage = () => {
    return (
        <div>
            <AllPosts posts={DUMMY_POSTS} />
        </div>
    );
};

export default AllBlogsPage;