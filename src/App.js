import logo from './logo.svg';
import './App.css';

import { useEffect, useState } from "react"

import axios from 'axios';

const BASE_API_URL = "http://localhost:3001";

async function GetAllPosts() 
{
  let data = await axios({
    url: "/posts",
    method: "get",
    baseURL: BASE_API_URL
  })

  return data;
}

//Component App
function App() {
  //State config
  const [listOfPosts, setListOfPost] = useState([]);
  const [valueOfTitleInput, setValueOfTitleInput] = useState("");

  useEffect(() => {
    async function api() {
      let {data} = await GetAllPosts();
      //[{id:1,title:"hndoeqhdoqhdoq"}]
      setListOfPost(data);
    }
    api();
  })

  const OnButtonTitleChange = (e) => {
    console.log(e.target)
    setValueOfTitleInput(e.target.value)
  }

  async function AddPost() 
{
  let data = await axios({
    url: "/posts",
    method: "post",
    baseURL: BASE_API_URL,
    data: {
      title: valueOfTitleInput
    }
  })

  return data;
}

const AddPostButtonClick = async(e) => {
  await AddPost(); 
}
  return (
    <div className="App">
      {
        //[ {id:1,title:"hndoeqhdoqhdoq"}, {id:2,title:"dsa"}]
        listOfPosts.map((post) => {
          return (
            <div className='title'>
              <h1>{post.title}</h1>
              <p>`Id of post: ${post.id}`</p>
            </div>
          )
        })
      }
      <input placeholder='Enter Title' onChange={OnButtonTitleChange} value={valueOfTitleInput}></input>
      <button onClick={AddPostButtonClick}>Add Post</button>
    </div>
  );
}

export default App;
