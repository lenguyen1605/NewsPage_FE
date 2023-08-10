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

    const dateconverter = (fullDate) => {
        // Assuming fullDate is in the format 'YYYY-MM-DD'
        const dateObject = new Date(fullDate);
        const day = dateObject.getDate();
        const month = dateObject.getMonth() + 1; // Months are zero-based
        const year = dateObject.getFullYear();
      
        // Create formatted date string in 'dd-mm-yyyy' format
        const formattedDate = `${day < 10 ? '0' : ''}${day}-${month < 10 ? '0' : ''}${month}-${year}`
        return (formattedDate)
      }
    
    return (
    <div style ={{marginRight: '30%', marginLeft: '10%'}}>
        <h1 className= "fonthead">
            {thisPost.title}
        </h1>
        <div style = {{color: 'gray'}}>
            <div>Written by {thisPost.author_name}</div>
            <div>Published on {dateconverter(thisPost.date_created)}</div>
        </div>
        <br/>
        <div><img alt="Card" style={{maxWidth: '90%'}} src={thisPost?.image}></img></div>
        <br/>
        <div className='para'>
            {thisPost.content}
        </div>
        <br/>

    </div>
    )
};
  
export default Detail;