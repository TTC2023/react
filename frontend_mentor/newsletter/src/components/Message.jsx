import React from 'react'
import list from '../assets/list.svg'
import "./Message.css"
import desktop from '../assets/desktop.svg'
import { useFormik } from 'formik'

const validate = (values) => {
  const errors = {}

  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  return errors
}

const Message = () => {

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  return (
    <div className='news'>
      <div className='message'>
        <h1>Stay Updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        {[...Array(3)].map((_, i) => (
          <div className='list' key={i}>
            <img src={list} alt='list'></img>
            <p style={{ margin: '10px' }}>Product discovery and building what matters</p>
          </div>
        ))}
        <form onSubmit={formik.handleSubmit} className='form'>
          <div>
            <label htmlFor="email">Email Address:</label>
            {formik.touched.email && formik.errors.email && (
              <span className='error'>{formik.errors.email}</span>
            )}
            <div>
              <input type="email" name="email" className='email'
                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
              <button type='submit' className='email'>Subscribe to monthly newsletter</button>
            </div>
          </div>
        </form>
      </div>
      <div className='picture'>
        <img className='desktop-img' src={desktop} alt="desktop" />
      </div>
    </div>
  )
}

export default Message
