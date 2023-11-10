import React from 'react'

const PopView = ({setShowPopup,userName,userPost }) => {
  return (
    <div className='wrapper'>
        <div className="popup">
            <div className="btn-wrap">
                <h4><span>{userName}</span> Kullanıcısının Gönderileri</h4>
                <button onClick={()=>setShowPopup(false)}>Kapat</button>
            </div>

            {userPost?.map(post=>(
              <div className='post'>
              <h2>{post.title}</h2>
              <p>{post.text}</p>
          </div>
            ))}

        </div>

    </div>
  )
}

export default PopView