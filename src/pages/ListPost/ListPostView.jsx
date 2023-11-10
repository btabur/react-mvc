import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PopView from '../../components/Popup/PopView'
import PopupController from '../../components/Popup/PopupController'

const ListPostView = ({postData,setShowPopup,showPopup,userName,setUserName}) => {
   
  return (
    <div className='container'>
            {
                postData?.map((post)=> (
                    <div className='post'>
                        <div className='info'>
                            <h3> {post.title} </h3>
                            <p onClick={()=>{ 
                                setShowPopup(true)
                                setUserName(post.user)
                                }}> {post.user} </p>
                        </div>
                        <p className='text'> {post.text} </p>
                    </div>
                ))
            }
       
        
        {showPopup && <PopupController setShowPopup= {setShowPopup} userName = {userName} />}
        
     </div>
  )
}

export default ListPostView