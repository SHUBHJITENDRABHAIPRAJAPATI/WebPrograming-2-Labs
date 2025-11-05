// Form component to create a new post
// It takes newPost object, handleChange and handleAddPost functions as props.

export default function PostForm({ newPost, handleChange, handleAddPost }) {
  return (
    <div>
      <h2>Create a Post</h2>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={newPost.title}
        onChange={handleChange}
      />
      <br />
      <textarea
        name="body"
        placeholder="Body"
        value={newPost.body}
        onChange={handleChange}
      />
      <br />
      <button onClick={handleAddPost}>Add Post</button>
    </div>
  );
}
