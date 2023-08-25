import { Link, useNavigate } from 'react-router-dom'
import './Login.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { UserUrl } from '../../slice/constant'

const Login = () => {
    // Navigator 
    let navigate = useNavigate()
    // local State 
    let [user, setUser] = useState({
        email: "",
        password: ""
    })
    let [token, setToken] = useState(localStorage.getItem('token'))
    // UseState Hook
    useEffect(() => {
        if (token) {
            navigate('/')
        }
    }, [token])
    // Set State
    let handelChange = e => {
        setUser({
            ...user, [e.target.name]: e.target.value
        })
    }
    // Submit Form Handler
    let submitForm = async (e) => {
        e.preventDefault()
        try {
            let { data } = await axios.post(`${UserUrl}/login`, user)
            localStorage.setItem("token", data.token)
            localStorage.setItem("user", JSON.stringify(data.user))
            setToken(data.token)
        } catch (error) {
            toast.error("Something went Wronge", { position: toast.POSITION.BOTTOM_CENTER, theme: "dark", autoClose: 1000 })
        }
    }

    return (
        <div className='container'>
            <div className='loginFormConatiner'>

                <form className='loginForm' onSubmit={submitForm}>

                    <h2 className='formHeading'>Login</h2>
                    <input type="email" name='email' value={user.email} placeholder='Email' onChange={handelChange} />
                    <input type="password" name='password' value={user.password} autoComplete="" onChange={handelChange} placeholder='Password' />
                    <input type="submit" className='FormButton' value="Login" />
                    <br />
                    <h6> <Link to="/forget/password" >Forget Password</Link><span> | </span><Link to="/singup" >Singup</Link></h6>

                </form>
            </div>
        </div>
    )
}

export default Login