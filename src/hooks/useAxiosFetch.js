
import axios from 'axios'
import { useState,useEffect } from 'react'

const useAxiosFetch = (dataUrl) => {
    const [data,setdata]=useState([])
    const [fetchError,setFetchError]=useState('')
    const [isLoading,setIsLoading]=useState('')

    useEffect(()=>{
        let isMounted=true;
        const source=axios.CancelToken.source();
         
        const fetchData=async(url)=>{
            try{
                const response=await axios.get(url,{cancelToken:source.token});
                if(isMounted){
                    setdata(response.data)
                    setFetchError(null)
                }
            }catch(err){
                if(isMounted){
                    setFetchError(err.message)
                    setdata([])
                }
            }finally{
                isMounted && setTimeout(()=> setIsLoading(false), 4000);
            }
        }

        fetchData(dataUrl);

        const cleanup=()=>{
            isMounted=false;
            source.cancel();
        }
        return cleanup;

    },[dataUrl])

  return {data, fetchError,isLoading}
}

export default useAxiosFetch
