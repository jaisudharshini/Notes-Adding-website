
import { useContext } from "react"
import Feed from "./Feed"
import DataContext from "./Context/DataContext"


const Home = () => {

  const {searchResult,isLoading,fetchError}=useContext(DataContext)

  return (
    <main className='Home'>
      {isLoading && <p  className="statusMsg">Loading Content...</p>}
      {!isLoading && fetchError && <p className="statusMsg" style={{color: "red"}}>{fetchError}</p>}
      {!isLoading && !fetchError &&  
      (searchResult.length) ? (
        <Feed posts={searchResult}/>
      ):(
        <p style={{marginTop:"2rem"}}>No Post to show</p>
      )}
    </main>

   
  )
}

export default Home