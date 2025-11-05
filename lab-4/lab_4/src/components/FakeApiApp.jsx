import { useState, useEffect } from "react";
import PostForm from "./PostForm";
import PostsContainer from "./PostsContainer";


//degfault function which fetches data from fake api and displays it.
//Also Used setdata, setloading, setnewpost states to avoid unnecessary re-renders.
export default function FakeApiApp() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newPost, setNewPost] = useState({
    title: "",
    body: "",
  });

  // useEffect to fetch data on component and mount
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((posts) => {
        setData(posts.reverse()); // this states the posts in reverse order,so that latest post appears first
        setLoading(false);
      })
      .catch((err) => console.error(err));//catch error if any,like user error
  }, []);

  // handle chages in form inputs
  //when user types in the form, this function updates the newPost state with the input values.
  const handleChange = (e) => {
    setNewPost({
      ...newPost,
      [e.target.name]: e.target.value,
    });
  };

  // handle adding a new post
  const handleAddPost = () => {
    if (newPost.title && newPost.body) {
      setData([newPost, ...data]); // add new post to the top of the posts list
      setNewPost({ title: "", body: "" }); // if someone want to reset the form after adding post
    }
  };

  //rendering the component
  //Displaying loading message while fetching data and then displaying posts using PostsContainer component.

  return (
    <div>
      <h1>Fake API Posts</h1>
      <PostForm
        newPost={newPost}
        handleChange={handleChange}
        handleAddPost={handleAddPost}
      />
      {loading ? <p>Loading posts...</p> : <PostsContainer posts={data} />}
    </div>
  );
}
