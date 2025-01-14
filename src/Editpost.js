import { useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import DataContext from "./Context/DataContext";

const Editpost = () => {

const { posts,editTitle,setEditTitle,editBody, setEditBody,handleEdit}=useContext(DataContext);
  const { id } = useParams();

  const post = posts.find(post => (post.id).toString() === id);

  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    
    }
  },[post, setEditTitle, setEditBody]);

  return (
    <main className="NewPost">
      {editTitle && 
        <>
          <h2>New Post</h2>
          <form className="newPostForm" onSubmit={(e)=>e.preventDefault()}>
            <label htmlFor="postTitle">Title:</label>
            <input
              type="text"
              id="postTitle"
              required
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />
            <label htmlFor="postBody">Post:</label>
            <textarea
              type="text"
              id="postBody"
              required
              value={editBody}
              onChange={(e) => setEditBody(e.target.value)}
            />
            <button type="submit" onClick={()=>handleEdit(post.id)}>Submit</button>
          </form>
        </>
      }

      {!editTitle && 
        <>
          <h2>Page Not Found</h2>
          <p>Well! that's disappointing</p>
          <Link to="/">Visit our homepage!</Link>
        </>
      }
   
  
        </main>
  );
};

export default Editpost;
