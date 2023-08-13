import React from 'react';
import { useState } from 'react';
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
import { UserService } from '../services/users.service';
const SignIn = () => {
    // Sign up page visible
    const [visible, setVisible] = useState(true)
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

    const handleLogIn = async () => {
        let res = await UserService.NewUser.SignIn(data)
        if (res && res.token) {
            localStorage.setItem("_TOKEN", res.token)
            window.location.href = '/'
            
        } else {
            console.log("failed")
        }

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
            <InputText style={{width: 280}} placeholder='Password' value={data?.password} onChange={(e) => setForm(e.target.value, "password")}></InputText>
            </div>
            <div style={{marginTop: '15%'}}>
            <Button label="Create new account" link onClick={() => setVisible(false)}></Button>
            <Button label="Sign In" onClick={() => handleLogIn()}></Button>
            </div>
        </div>) : (<div style={{height: '500px', border: '1px solid black', borderRadius: 10, alignItems: 'center', marginTop: '5%', backgroundColor: 'white',
        width: '40%', textAlign: 'center'}}>
            <div style={{fontWeight: 'bold', marginTop: '2%', fontSize: 20}}>Sign Up</div>
            <div style={{marginTop: '5%'}}>
            <InputText style={{width: 280}} placeholder='Full Name'></InputText>
            </div>
            <div style={{marginTop: '10%'}}>
            <InputText style={{width: 280}} placeholder='Email'></InputText>
            </div>
            <div style={{marginTop: '10%'}}>
            <InputText style={{width: 280}} placeholder='Password'></InputText>
            </div>
        </div>)}
        </div>
    )
}
export default SignIn