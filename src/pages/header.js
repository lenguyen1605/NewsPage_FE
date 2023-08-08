import React, { useState } from 'react'
import NavBar from './navbar'
import Home from './home'
import './styles.css'
import { UserService } from '../services/users.service'
export default function MainHeader() {
    const [userData, setUserData] = useState({
        email: '',
        password: '',
        username: '',
        id_post: []
    })
    const [formvisible, setFormVisible] = useState(false)

    const submitForm = () => {
        console.log("userData", userData)
        setFormVisible(false)
        let res = UserService.NewUser.Set(userData)

    }
    const setForm = (value, prop) => {
        if (value !== undefined) {
          setUserData({
            ...userData,
            [prop]: value,
          });
        }
      };
    return (
        <>
            {/* <div className='bs-head-detail'>
                <div style={{marginLeft: '10%',
            padding: '1%', borderWidth: '2px', borderColor: '#FFFFFF', borderStyle: 'solid', width: '5%', borderRadius: 7,
            textAlign: 'center'}}>
                    <div style={{color: 'white', fontWeight: 'bold'}}>Breaking</div>
                </div>
            </div> */}
            <div>
                <div style={{textShadow: '4px 4px 4px rgba(255, 192, 203, 1)', fontSize:42, fontWeight: 'bold',
            marginLeft: '10%', marginTop: '2%', marginBottom: '2%'}}>NewsNewsNews</div>
            </div>
            <div>
                <NavBar></NavBar>
            </div>
            {/* <div>
                <button onClick={() => setFormVisible(!formvisible)
                }>Signup</button>
            </div>
            {formvisible ? <form>
                <label>
                    Email:
                    <input type="text"
                    value={userData?.email} onChange={(e) => {setForm(e.target.value, "email")
                    console.log(e.target.value)}}/>
                </label><br></br>
                <label>
                    Username:
                    <input type="text" value={userData?.username} onChange={(e) => setForm(e.target.value, "username")}/>
                </label><br></br>
                <label>
                    Password:
                    <input type="text" value={userData?.password} onChange={(e) => setForm(e.target.value, "password")}/>
                </label><br></br>
                <button onClick={submitForm}>Submit</button>
            </form>: <></>} */}
        </>
    )
}