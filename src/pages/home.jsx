import {React, useState, useEffect} from 'react';
import { UserService } from '../services/users.service'
import 'primeicons/primeicons.css';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import './styles.css'


const Home = () => {

  const [allPosts,setAllPosts] = useState([])

  const renderForm = async () => {
    let res = await UserService.NewUser.GetAllPosts()
    setAllPosts(res)
    // console.log('res',res);
    // console.log('allPosts',res[0]?.author_name);
  };
  
  useEffect(() => {
    renderForm();
  }, []);


  const header = (
    <img alt="Card" src="https://www.etonline.com/sites/default/files/styles/840x470/public/images/2020-06/1280bey2013.jpg?h=c673cd1c&itok=E_fprIAn" />
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
                <div className='column' style={{display: 'flex'}}>
                    <Card title={post?.title} subTitle={post?.author_name} footer={footer} 
                    header={() => {return (
                      <img alt="Card" src={post?.image}></img>
                    )}} className="card" style={{marginLeft: '10%', marginTop: '2%', display: 'inline-block'}}>
                        <p className="" style={{fontSize:'95%', marginTop:'3px'}}>
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