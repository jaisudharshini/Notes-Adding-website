import React from "react";
import PostPage from "./PostPage";
import Header from "./Header";
import Home from "./Home";
import Nav from "./Nav";
import NewPost from "./NewPost";
import About from "./About";
import Footer from "./Footer";
import Missing from "./Missing";
import { Route,Routes } from "react-router-dom";
import Editpost from "./Editpost";
import { DataProvider } from "./Context/DataContext";

function App() {


  return (
    <div className="App">
      <DataProvider>
        <Header title="Note Me"/>
        <Nav />
        <Routes>
        <Route path="/" element={  <Home /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/post">
        <Route index  element={ <NewPost /> } />
        
        <Route path=":id" element={<PostPage />} />
        </Route>
         <Route path="/edit/:id" element={<Editpost />}/> 
        <Route path="*" element={<Missing/>} />
        </Routes>
        <Footer/>
        </DataProvider>
    </div>

   
  )
}

export default App;

//notes

/* <nav>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/newpost">New Post</Link></li>
        <li><Link to="/postpage">Post Page</Link></li>
      </nav>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="/newpost" element={ <NewPost/> } />
        <Route path="/postpage" element={<PostLayout/>}>

            <Route index element={<PostPage/>} />
            <Route path=":id" element={ <Post/> } />
            <Route path="newpost" element={<NewPost/>} />
        </Route>
       
        <Route path="*" element={<Missing/>} />
      </Routes>
*/