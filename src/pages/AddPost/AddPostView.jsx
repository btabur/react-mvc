import React from 'react'


const AddPostView = ({handleSubmit, onInputChange}) => {
  
  return (
   <form onSubmit={handleSubmit}>
    <h2>Yeni Gönderi Ekle</h2>
    <fieldset>
      <label htmlFor="">Kullanıcı Adı</label>
      <input onChange={(e)=>onInputChange('user',e)}
      type="text" placeholder='Örn:Ahmet' />
    </fieldset>
    <fieldset>
      <label htmlFor="">Başlık</label>
      <input onChange={(e)=> onInputChange('title', e)}
      type="text" placeholder='Örn:Ahmet' />
    </fieldset>
    <fieldset>
      <label htmlFor="">Açıklama</label>
      <textarea onChange={(e)=> onInputChange('text', e )}
       type='text' placeholder='Açıklama Giriniz' ></textarea>
    </fieldset>
    <button>Gönder</button>
   </form>
  )
}

export default AddPostView