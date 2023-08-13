import {React, useEffect, useState} from 'react';
// import {useLocation} from 'react-router-dom';
import {useParams} from "react-router-dom";
import { UserService } from '../services/users.service'
import './styles.css'
import { Button } from 'primereact/button';
import 'primeicons/primeicons.css';
import { icons } from 'react-icons';

const Detail = () => {
    const { id } = useParams();
    const [thisPost,setThisPost] = useState([])
    const [visible, setVisible] = useState(false)

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

    const [like, setLike] = useState(0)
    const [likeClicked, setLikeClicked] = useState(false)
    const handleClick = () => {
        setLikeClicked(!likeClicked);
        if (likeClicked) {
            setLike(like - 1);
        }
        else if (!likeClicked){
            setLike(like + 1);
        }
        console.log(like);
        console.log(likeClicked);
    };
    
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
        <div>
            {/* <Button icon= 'pi pi-thumbs-up' rounded text className="bg-bluegray-600 hover:bg-bluegray-400 border-bluegray-700"
                onClick={like_count}
            >    {like} </Button> */}
            {/* <div className='icon-container'>
                <i className='pi pi-thumbs-up' onClick={() => setIconActive(!iconActive)}> {iconActive ? null : this} </i>
                <i className='pi pi-thumbs-up-fill'onClick={like_count}> {like} </i>
            </div> */}

            <Button onClick={handleClick} severity="danger" style={{background: 'black', border: 'black', color:'rgba(255, 192, 203, 1)'}}>
                {likeClicked ? <i className='pi pi-thumbs-up-fill' > {like} </i> :  
                                <i className='pi pi-thumbs-up' > {like} </i>}
            </Button>
            &nbsp;
            <Button severity="danger" style={{background: 'black', border: 'black', color:'rgba(255, 192, 203, 1)' }} onClick={() => {
                setVisible(!visible)
            }}>
                <i className='pi pi-comment'></i>
            </Button>
            
        </div>
            <br/><br/><br/>
        {visible ?
            <div>
                ...
            </div>
        :null}
    </div>
    )
};
  
export default Detail;