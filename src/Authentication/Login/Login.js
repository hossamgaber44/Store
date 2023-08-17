import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'
import { useEffect } from 'react'
import { toast } from 'react-toastify';


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    useEffect(() => {
        sessionStorage.clear();
    }, [])
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            fetch("http://localhost:5000/user/" + email).then((res) => {
                return res.json();
            }).then((resp) => {

                if (resp.password === password && resp.password !== '' && resp.password !== null) {
                    sessionStorage.setItem('email', email);
                    sessionStorage.setItem('password', password);
                    navigate('/')
                    toast.success('Success')
                } else {
                    toast.error('Please Enter Valid Password')
                }
            }).catch((err) => {
                console.log(err)
            })
        }
    }

    const validate = () => {
        let result = true
        if (email === '' || email === null) {
            result = false;
            toast.error('Please Enter The Email')
        }

        if (password === '' || password === null) {
            result = false;
            toast.error('Please Enter The Password')
        }

        return result
    }



    return (
        <>
            <section className="log-in-bg">
                <div className="login-content">
                    <form onSubmit={handleSubmit} className="login" >
                        <div className="login-img">
                            <img src="images/user.png" />
                        </div>
                        <h2>login</h2>
                        <input type="text" placeholder="Email " value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <input type="password" placeholder="Passward" value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <input className="btn" type="submit" value="Login"
                        />
                        <div className="createAccount">
                            <span>Not a member?</span>
                            <Link to='/register' className="sign-up">Register Now</Link>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Login