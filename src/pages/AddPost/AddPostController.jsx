import React, { useState } from 'react'
import AddPostView from './AddPostView'
import AddPostModel from './AddPostModel'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const AddPostController = () => {

  const model = new AddPostModel()
  const [form,setForm] = useState(model.state)
  const navigate = useNavigate();

  const onInputChange = (key,e)=> {
    setForm({...form, [key]:e.target.value})
  }
  const handleSubmit = (e)=> {
    e.preventDefault();

    if(!form.user || !form.text) {
      alert('Lütfen tüm alanları doldurun')
    }else {
      axios.post(' http://localhost:3001/posts',form)
      .then (()=> navigate('/'))
    }

  }
  return (
    <AddPostView handleSubmit= {handleSubmit} onInputChange= {onInputChange} />
  )
}

export default AddPostController