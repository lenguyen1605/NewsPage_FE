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


  const header = (
    <img alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" />
  );
  const footer = (
      <div className="flex flex-wrap justify-content-end gap-2">
          {/* <Button label="Save" icon="pi pi-check" /> */}
          <Button  label="Read more" className="p-button-outlined p-button-secondary" />
      </div>
  );

  return (
    <div className="row">
            {allPosts.map((post,idx)=>{
                return (
                    <div className='column'>
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
                            className="card" style={{marginLeft: '10%', marginTop: '2%'}}>
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
