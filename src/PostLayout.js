import React from 'react'
import {Link,Outlet} from 'react-router-dom';

const PostLayout = () => {
  return (
    <div>
     <Link to="/PostPage/1">Post 1</Link>
     <br/>
     <Link to="/PostPage/2">Post 2</Link>
     <br/>
     <Link to="/PostPage/3">Post 3</Link>
     <br/>
     <Link to="/PostPage/NewPost">New Post</Link>
     <Outlet/>
    </div>
  )
}

export default PostLayout