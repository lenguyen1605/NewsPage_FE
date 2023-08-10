import {React, useState, useEffect} from 'react';
import { UserService } from '../services/users.service'
import 'primeicons/primeicons.css';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import './styles.css';
import { useNavigate } from "react-router-dom";
// import Detail from './postdetail';
// import { Route, Routes } from "react-router-dom";
import {useParams, Link} from "react-router-dom";

const Home = () => {

  const [allPosts,setAllPosts] = useState([])
  const [visible, setVisible] = useState(false)

  const renderForm = async () => {
    let res = await UserService.Posts.GetAllPosts()
    setAllPosts(res)
  };
  
  useEffect(() => {
    renderForm();
  }, []);

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

  const navigate = useNavigate()
  

  return (
    <div className="row">
            {allPosts.map((post,idx)=>{
                return (
                    <div className='column' style={{display: 'flex', minHeight: '750px'}}>
                        <Card title={post?.title} subTitle={`${post?.author_name}` +" "+ `${dateconverter(post?.date_created)}`} 
                            footer={()=>{
                                return (
                                    <div className="flex flex-wrap justify-content-end gap-2">
                                        {/* <Link to={`/postdetail/${post.id}`}>
                                            <Button  label="Read more" className="p-button-outlined p-button-secondary"/>
                                        </Link> */}
                                        <Button  label="Read more" className="p-button-outlined p-button-secondary" onClick={()=>{
                                            navigate(`/postdetail/${post.id}`);
                                        }}/>
                                    </div>
                                )
                            }} 
                            header={() => {return (
                                <img alt="Card" src={post?.image}></img>
                              )}}
                            className="card" style={{marginLeft: '10%', marginTop: '2%', height: "680px", minHeight: "680px"}}>
                            <p className="" style={{fontSize:'95%', marginTop:'3px', overflow:'auto'}}>
                                {post.summary}
                            </p>
                        </Card>
                    </div>
                )
            })}
        </div>
        
  )
};

  
export default Home;
