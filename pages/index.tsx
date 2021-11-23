import { useState, useEffect } from "react";
import {
  collectionGroup,
  query,
  where,
  orderBy,
  limit,
  getDocs,
  startAfter,
} from "firebase/firestore";

import { firestore, postToJSON, fromMillis } from "../lib/firebase";

import PostFeed from "../components/PostFeed";
import Metatags from "../components/Metatags";
import Loader from "../components/Loader";
import ImageGrid from "../components/ImageGrid";

const LIMIT = 1;

// export async function getServerSideProps() {
//   const cgRef = collectionGroup(firestore, "posts");
//   const q = query(
//     cgRef,
//     where("published", "==", true),
//     orderBy("createdAt", "desc"),
//     limit(LIMIT)
//   );

//   const posts = (await getDocs(q)).docs.map(postToJSON);

//   return {
//     props: { posts },
//   };
// }

export default function Home(props) {
  const [posts, setPosts] = useState(props.posts);
  const [loading, setLoading] = useState(false);
  const [postsEnd, setPostsEnd] = useState(false);

  const [showImages, setShowImages] = useState(false);

  useEffect(() => {
    setShowImages(true)
    console.log('setShowImages')
  }, [])

  // Get next page in pagination query
  const getMorePosts = async () => {
    setLoading(true);
    const last = posts[posts.length - 1];

    const cursor =
      typeof last.createdAt === "number"
        ? fromMillis(last.createdAt)
        : last.createdAt;

    const cgRef = collectionGroup(firestore, "posts");
    const q = query(
      cgRef,
      where("published", "==", true),
      orderBy("createdAt", "desc"),
      limit(LIMIT),
      startAfter(cursor)
    );

    const newPosts = (await getDocs(q)).docs.map((doc) => doc.data());

    setPosts(posts.concat(newPosts));
    setLoading(false);

    if (newPosts.length < LIMIT) {
      setPostsEnd(true);
    }
  };

  return (
    <main>
      <Metatags
        title="Home Page"
        description="Get the latest posts on our site"
      />

      { showImages && <ImageGrid /> }

      {/* <PostFeed posts={posts} admin={false} /> */}

      {!loading && !postsEnd && (
        <button onClick={getMorePosts}>Load more</button>
      )}

      <Loader show={loading} />

      {postsEnd && "You have reached the end!"}
    </main>
  );
}
