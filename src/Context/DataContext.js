import { createContext} from "react";
import { useState,useEffect } from "react";
import { format } from "date-fns";
import useWindowSize from "../hooks/useWindowSize";
import useAxiosFetch from "../hooks/useAxiosFetch";
import api from "../api/posts";
import { useNavigate } from "react-router-dom";
const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [posts, setpost] = useState([]);
  const [searchs, setsearch] = useState("");
  const [searchResult, setsearchResult] = useState([]);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");
  const navigate = useNavigate();
  const { width } = useWindowSize();
  const { data, fetchError, isLoading } = useAxiosFetch(
    "http://localhost:3500/posts"
  );

  useEffect(() => {
    setpost(data);
  }, [data]);

  useEffect(() => {
    const filteredResults = posts.filter((post) =>
      ((post.body).toLowerCase()).includes(searchs.toLowerCase())
      || ((post.title).toLowerCase()).includes(searchs.toLowerCase()));

    setsearchResult(filteredResults.reverse());
  }, [posts, searchs])


  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), "MMMM dd,yyyy pp");
    const newPost = { id, title: postTitle, datetime, body: postBody };
    try {
      const response = await api.post("/posts", newPost);
      const allpost = [...posts, response.data];
      setpost(allpost);
      setPostTitle("");
      setPostBody("");
      navigate("/");
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  const handleEdit = async (id) => {
    const datetime = format(new Date(), "MMMM dd,yyyy pp");
    const updatepost = { id, title: editTitle, datetime, body: editBody };
    try {
      const response = await api.put(`posts/${id}`, updatepost);

      setpost(
        posts.map((post) => (post.id === id ? { ...response.data } : post))
      );
      setEditTitle(" ");
      setEditBody("");
      navigate("/");
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`posts/${id}`);
      const postlist = posts.filter((post) => post.id !== id);
      setpost(postlist);
      navigate("/");
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };


  return <DataContext.Provider value={{
    width, searchs, setsearch, searchResult, isLoading, fetchError, handleSubmit, postTitle, setPostTitle, postBody, setPostBody,  posts ,editTitle,setEditTitle,editBody, setEditBody,handleEdit ,handleDelete
    }}>
    {children}
    </DataContext.Provider>;
};

export default DataContext;
