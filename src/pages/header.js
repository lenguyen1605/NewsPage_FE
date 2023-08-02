import React from 'react'
import NavBar from './navbar'
import './styles.css'
export default function MainHeader() {
    return (
        <>
            <div className='bs-head-detail'>
                <div style={{marginLeft: '10%',
            padding: '10px', borderWidth: '2px', borderColor: '#FFFFFF', borderStyle: 'solid', width: '5%', borderRadius: 7,
            textAlign: 'center'}}>
                    <div style={{color: 'white', fontWeight: 'bold'}}>Breaking</div>
                </div>
            </div>
            <div>
                <div style={{textShadow: '4px 4px 4px rgba(255, 192, 203, 1)', fontSize:42, fontWeight: 'bold',
            marginLeft: '10%', marginTop: '2%'}}>Title</div>
            </div>
            <div>
                <NavBar></NavBar>
            </div>
        </>
    )
}