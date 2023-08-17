import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Register.css'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
const Register = () => {
    const [userData, setUserData] = useState({})
    const [name, setName] = useState('')
    const [id, setId] = useState('')
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')
    const navigate = useNavigate()
    console.log(userData)

    async function fetchUserData() {
        try {
            const response = await fetch("http://localhost:5000/user");
            const data = await response.json();
            setUserData(data);
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchUserData()
    }, [])


    const handleSubmit = (e) => {
        e.preventDefault();
        const dataPost = { name, id, password, rePassword };
        if (validate()) {
            fetch("http://localhost:5000/user", {
                method: 'POST',
                body: JSON.stringify(dataPost),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((json) => console.log(json));
            navigate('/login')
            toast.success('Success')
            console.log('dataPost');
        }
    }

    const validate = () => {
        let result = true

        if (password !== rePassword) {
            result = false
            toast.error('Enter Valid Password')
        }
        if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(id)) { } else {
            result = false;
            toast.error('Please Enter Valid Email')
        }
        userData.map(i => {
            if (i.id === id) {
                toast.error('This Email is Used')
                result = false
            }
        })
        return result
    }


    return (
        <div className='Register' >
            <div className="createAccount-page">
                <form onSubmit={handleSubmit} className="Register-content">
                    <div className="Register-img">
                        <img src="images/user.png" />
                    </div>
                    <h2>Sign Up</h2>
                    <input required value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="User Name" />
                    <input required value={id} onChange={(e) => setId(e.target.value)} type="email" placeholder="Email" />
                    <input required value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Passward" />
                    <input required value={rePassword} onChange={(e) => setRePassword(e.target.value)} type="password" placeholder="Re-Enter Passward" />
                    <input className="btn" type="submit" value="Sign Up" />
                    <div className="createAccount">
                        <span>Already a member?</span>
                        <Link to='/login' className="log-in">Login Here</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register