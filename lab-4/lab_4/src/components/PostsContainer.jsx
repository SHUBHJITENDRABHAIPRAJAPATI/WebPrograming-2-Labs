//posts container component to display list of posts
//It takes posts array as prop and maps through it to render PostCard component for each post.
//Each PostCard displays the title and body of the post.
import PostCard from "./PostCard";

export default function PostsContainer({ posts }) {
  return (
    <div>
      {posts.map((post, index) => (
        <PostCard key={index} title={post.title} body={post.body} />
      ))}
    </div>
  );
}
