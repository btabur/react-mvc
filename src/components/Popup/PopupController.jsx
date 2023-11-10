import React, { useEffect, useState } from 'react'
import PopView from './PopView'
import axios from 'axios'


const PopupController = ({setShowPopup,userName}) => {
  const [userPost,setUserPost] = useState([])

  useEffect(()=> {
    axios.get(` http://localhost:3001/posts?user=${userName}`)
    .then(res =>setUserPost(res.data))
  },[])

  return (
  <PopView setShowPopup={setShowPopup} userName = {userName} userPost = {userPost}/>
  )
}

export default PopupController