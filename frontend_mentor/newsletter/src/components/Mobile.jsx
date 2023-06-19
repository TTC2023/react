import React from 'react'
import styles from './Mobile.module.css'
import mobile from '../assets/mobile.svg'
import list from '../assets/list.svg'
import { useFormik } from 'formik'
import {useNavigate} from 'react-router-dom'


const validate = (values) => {
    const errors = {}

    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }

    return errors
}

const Mobile = ({email, setEmail}) => {

    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validate,
        onSubmit: (values) => {
            setEmail(values.email);
            navigate('/success')
            console.log(email)
        },
    })

    return (
        <div className={styles.container}>
            <img className={styles.mobileImg} src={mobile} alt="mobile" />
            <h1>Stay Updated!</h1>
            <p>Join 60,000+ product managers receiving monthly updates on:</p>
            {[...Array(3)].map((_, i) => (
                <div className={styles.list} key={i}>
                    <img src={list} alt='list'></img>
                    <p style={{ margin: '10px' }}>Product discovery and building what matters</p>
                </div>
            ))}
            <form onSubmit={formik.handleSubmit} className={styles.form}>
                <div>
                    <label htmlFor="email">Email Address:</label>
                    {formik.touched.email && formik.errors.email && (
                        <span className={styles.error}>{formik.errors.email}</span>
                    )}
                    <div>
                        <input type="email" name="email" className={styles.email}
                            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
                        <button type='submit' className={styles.email}>Subscribe to monthly newsletter</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Mobile