import {React, useEffect, useState} from 'react';
// import {useLocation} from 'react-router-dom';
import {useParams} from "react-router-dom";
import { UserService } from '../services/users.service'
import './styles.css'


const Detail = () => {
    const { id } = useParams();
    const [thisPost,setThisPost] = useState([])

    const renderForm = async () => {
        let res = await UserService.Posts.GetPostByID(id)
        setThisPost(res)
        console.log('res', res)
    };
  
    useEffect(() => {
        renderForm();
    }, [id]);

    return (
    <>
        <h1 className= "fonthead" style ={{marginRight: '20%', marginLeft: '10%'}}>
            
            {thisPost.title}
        </h1>
    </>
    )
};
  
export default Detail;