import React from 'react';
import { useState } from 'react';
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
import { UserService } from '../services/users.service';
import { Password } from 'primereact/password'
const SignIn = () => {
    // Sign up page visible
    const [visible, setVisible] = useState(true)
    const [newdata, setNewdata] = useState({
        email: '',
        password: '',
        username: ''
    })
    const [data, setData] = useState({
        email: '',
        password: ''
    })

    const setForm = (value, prop) => {
        setData({
            ...data,
            [prop]: value
        })
    }
    const setInfo = (value, prop) => {
        setNewdata({
            ...newdata,
            [prop]: value
        })
    }
    const handleLogIn = async () => {
        let res = await UserService.NewUser.SignIn(data)
        if (res && res.token) {
            localStorage.setItem("_TOKEN", res.token)
            window.location.href = '/'
            
        } else {
            console.log("failed")
        }

    }
    const handleSignUp = async () => {
        let res = await UserService.NewUser.Set(newdata)
        setVisible(true)

    }
    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            {visible ? (<div style={{height: '500px', border: '1px solid black', borderRadius: 10, alignItems: 'center', marginTop: '5%', backgroundColor: 'white',
        width: '40%', textAlign: 'center'}}>
            <div style={{fontWeight: 'bold', marginTop: '2%', fontSize: 20}}>Sign In</div>
            <div style={{marginTop: '10%'}}>
            <InputText style={{width: 280}} placeholder='Email' value={data?.email} onChange={(e) => setForm(e.target.value, "email")}></InputText>
            </div>
            <div style={{marginTop: '10%'}}>
            <Password style={{width: 280}} placeholder='Password' value={data?.password} onChange={(e) => setForm(e.target.value, "password")}
            toggleMask></Password>
            </div>
            <div style={{marginTop: '15%'}}>
            <Button label="Create new account" link onClick={() => setVisible(false)}></Button>
            <Button label="Sign In" onClick={() => handleLogIn()}></Button>
            </div>
        </div>) : (<div style={{height: '500px', border: '1px solid black', borderRadius: 10, alignItems: 'center', marginTop: '5%', backgroundColor: 'white',
        width: '40%', textAlign: 'center'}}>
            <div style={{fontWeight: 'bold', marginTop: '2%', fontSize: 20}}>Sign Up</div>
            <div style={{marginTop: '5%'}}>
            <InputText style={{width: 280}} placeholder='Username' value={newdata?.username} 
            onChange={(e) => setInfo(e.target.value, "username")}></InputText>
            </div>
            <div style={{marginTop: '10%'}}>
            <InputText style={{width: 280}} placeholder='Email' value={newdata?.email} 
            onChange={(e) => setInfo(e.target.value, "email")}></InputText>
            </div>
            <div style={{marginTop: '10%'}}>
            <Password style={{width: 280}} placeholder='Password' value={newdata?.password}
            onChange={(e) => setInfo(e.target.value, "password")} toggleMask></Password>
            </div>
            <div style={{marginTop: '10%'}}>
            <Button label="Sign up" onClick={() => handleSignUp()}></Button>
            </div>
        </div>)}
        </div>
    )
}
export default SignIn