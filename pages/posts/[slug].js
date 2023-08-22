import { Fragment } from "react";
import PostContent from "../../components/posts/post-details/post-content";
import { getPostData } from "../../lib/posts-util";
import { getPostsFiles } from "../../lib/posts-util";
import Head from "next/head";
function PostDetails(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.post.title}</title>
        <meta name="description" content={props.post.excerpt} />
      </Head>
      <PostContent post={props.post} />
    </Fragment>
  );
}

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}
// we can revalidate here since its only on post and can update if we make any edit on md file without rebuild the app

export function getStaticPaths() {
  const postFilenames = getPostsFiles();

  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ""));
  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}
// generate all single page post for advance

// we are going to pre-render all post because its a small blog
// but most of the times we make fallback:blocking and add just the pages or posts that has high traffic
// and blocking will wait until pre render end then load the page
export default PostDetails;
