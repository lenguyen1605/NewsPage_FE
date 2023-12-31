import React, { useEffect, useState } from 'react'
import NavBar from './navbar'
import Home from './home'
import './styles.css'
import { UserService } from '../services/users.service'
import { Link } from 'react-router-dom'
import { Button } from 'primereact/button'; 
import jwt from 'jwt-decode'
import { Dropdown, Space } from 'antd'
import { UserOutlined } from '@ant-design/icons';
export default function MainHeader() {
    // const [userData, setUserData] = useState({
    //     email: '',
    //     password: '',
    //     username: '',
    //     id_post: []
    // })
    const [userData, setUserData] = useState(null)
    const [formvisible, setFormVisible] = useState(false)
    const [refresh, setRefresh] = useState(false)

    const submitForm = () => {
        console.log("userData", userData)
        setFormVisible(false)
        let res = UserService.NewUser.Set(userData)

    }
    const handleSignOut = () => {
        localStorage.removeItem("_TOKEN")
        setUserData(null)
        setRefresh(!refresh)
    }

    const items = [
        {
            label: 'Edit profile',
            key: '1'
        },
        {
            label: 'Sign out',
            key: '2',
            onClick: () => handleSignOut()
        }
    ]

    useEffect(() => {
        const token = localStorage.getItem("_TOKEN")
        if (token) {
            try {
                const decodedToken = jwt(token)
                if (decodedToken) {
                    console.log("decoded successfully", decodedToken)
                    setUserData(decodedToken)
                }
            }
            catch (error) {
                console.error('Error decoding')
            }
        }
    }, [refresh])
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
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{textShadow: '4px 4px 4px rgba(255, 192, 203, 1)', fontSize:42, fontWeight: 'bold',
                        marginLeft: '10%', marginTop: '2%', marginBottom: '2%'}}>NewsNewsNews
                    </div>
                    <div style={{marginLeft: '38%', display: 'inline-flex'}}>
                        {/* <Link to="/newpost">
                            <Button label="Add new" link icon="pi pi-plus" style={{color: 'black'}}></Button>
                        </Link> */}
                        {/* {userData ? (<Button label={userData?.username} link icon="pi pi-user" style={{color: 'black'}}></Button>):(<Link to="/signin">
                            <Button label="Sign in" link icon="pi pi-user" style={{color: 'black'}}></Button>
                        </Link>)} */}
                        {userData ? (
                             <div style={{display: 'flex'}}>
                                <div >
                        <Link to="/newpost">
                            <Button label="Add new" link icon="pi pi-plus" style={{color: 'black'}}></Button>
                        </Link></div>
                        <div style={{fontWeight: 'bold', marginTop: '5.0%'}}>
                            <Dropdown menu={{items}}
                            >
                                <a>
                                    <Space>
                                        {userData?.username}
                                        <UserOutlined/>
                                    </Space>
                                </a>
                            </Dropdown></div></div>
                        ): (<Link to="/signin">
                        <Button label="Sign in" link icon="pi pi-user" style={{color: 'black'}}></Button>
                    </Link>)}
                        {/* // <Link to="/signin">
                        //     <Button label="Sign in" link icon="pi pi-user" style={{color: 'black'}}></Button>
                        // </Link> */}
                    </div>
                </div>
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