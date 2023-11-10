
import ListPostView from './ListPostView'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ListPostController = () => {

    const [postData,setPostData] =useState(null);
    const [showPopup,setShowPopup]=useState(false);
    const [userName,setUserName] = useState('')


    useEffect(()=>{
        axios.get(' http://localhost:3001/posts')
        .then((res)=> setPostData(res.data))
    },[])
  return (
  <ListPostView postData={postData} setShowPopup={setShowPopup} showPopup={showPopup} userName={userName} setUserName={setUserName} />
  )
}

export default ListPostController