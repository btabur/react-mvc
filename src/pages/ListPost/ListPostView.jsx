import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PopView from '../../components/Popup/PopView'

const ListPostView = ({postData,setShowPopup,showPopup}) => {
   
  return (
    <div className='container'>
            {
                postData?.map((post)=> (
                    <div className='post'>
                        <div className='info'>
                            <h3> {post.title} </h3>
                            <p> {post.user} </p>
                        </div>
                        <p className='text'> {post.text} </p>
                    </div>
                ))
            }
       
        
        {showPopup && <PopView/>}
        
     </div>
  )
}

export default ListPostView