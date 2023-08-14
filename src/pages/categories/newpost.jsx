import React from 'react';
import { useState, useEffect } from 'react';
import { Checkbox } from "primereact/checkbox";
import { UserService } from '../../services/users.service';
import { Button } from 'primereact/button'; 
import jwt from 'jwt-decode'
const NewPost = () => {
    const [refresh, setRefresh] = useState(false)
    const categories = [
        {name: 'Entertainment', key: 'entertainment'},
        {name: 'Health', key: 'health'},
        {name: 'Sports', key: 'sports'},
        {name: 'Technology and Science', key: 'techandsci'},
    ]
    const [selectedCategories, setSelectedCategories] = useState([])
    const [cats, setCats] = useState([])
    const [data, setData] = useState({
        'categories': cats,
        'content': '',
        'likes': 0,
        'title': '',
        'summary': '',
        'image': '',
        'id_author': ''
        // 'author_name': ''
    })

    useEffect(() => {
        const token = localStorage.getItem("_TOKEN")
        if (token) {
            try {
                const decodedToken = jwt(token)
                if (decodedToken) {
                    console.log("decoded successfully", decodedToken)
                    data.id_author = decodedToken?.id_user
                   
                }
            }
            catch (error) {
                console.error('Error decoding')
            }
        }
    }, [])

    const onCategoryChange = (e) => {
        let _selectedCategories = [...selectedCategories];

        if (e.checked)
            _selectedCategories.push(e.value);
        else
            _selectedCategories = _selectedCategories.filter(category => category.key !== e.value.key);

        setSelectedCategories(_selectedCategories);
        // setCats(_selectedCategories.map(item => item.key))
        console.log("categories", cats)
    };
    const setForm = (prop, value) => {
        setData({...data, [prop]: value})
    }
    const handleSubmit = async () => {
        let cats = selectedCategories.map(item => item.key)
        data.categories = cats
        console.log("data...", data)
        let res = await UserService.Posts.SetPost(data)

    }


    return (
    <>
        <h1 style={{color:"black", fontSize: 25, marginLeft: '3%'}}>
        Add New Article</h1>
        <form style={{marginLeft: '3%'}}>
            <div style={{marginBottom: '2%'}}>
            <label>Title:</label>
            <input type="text" name="Title" onChange={(e) => setForm("title", e.target.value)} value={data?.title} style={{marginLeft: '4.5%', width: '50%', height: '30px',
        borderRadius: 3}}></input></div>
        <div style={{marginBottom: '2%', display: 'flex', alignItems: 'center'}}>
            <label>Summary:</label>
            <textarea type="text" name="Title" style={{marginLeft: '1.6%', width: '50%', height: '100px'}} onChange={(e) => setForm("summary", e.target.value)}
            value={data?.summary}></textarea></div>
            <div>
                <div style={{marginBottom: '2%'}}>Category:</div>
            <div>
                {categories.map((category) => {
                    return (
                        <div key={category.key} className="flex align-items-center" style={{marginBottom: '1%'}}>
                            <Checkbox style={{marginRight: '2%'}} inputId={category.key} name="category" value={category}
                            onChange={onCategoryChange} checked={selectedCategories.some((item) => item.key === category.key)}/>
                            <label htmlFor={category.key} className="ml-2">
                                {category.name}
                            </label>
                        </div>
                    );
                })}
            </div>
                    <div style={{marginBottom: '2%', display: 'flex', alignItems: 'center'}}>
            <label>Content:</label>
            <textarea type="text" name="Content" style={{marginLeft: '1.25%', width: '50%', height: '200px'}}
            value={data?.content} onChange={(e) => setForm("content", e.target.value)}></textarea></div>
            <div style={{marginBottom: '2%', display: 'flex', alignItems: 'center'}}>
            <label>Image url:</label>
            <input type="text" name="Image" style={{marginLeft: '0.75%', width: '50%', height: '30px',
        borderRadius: 3}} value={data?.image} onChange={(e) => setForm("image", e.target.value)}></input></div>
            <button style={{marginLeft: '50%', height: '35px', width: '80px'}} onClick={(e) => {
                handleSubmit();
            }}>Submit</button>
            {/* <Button label="Check" onClick={() => console.log(cats)}></Button> */}
            
        </div>
        </form>
        

    </>
    )
};
  
export default NewPost;