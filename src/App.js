import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import GetList from './components/GetList';

function App() {
  const [all, setAll] = useState([]);
  useEffect(()=>{
     async function fetchall(){
      try{
        const requestUrl = 'https://kontests.net/api/v1/all';
        const reponse = await fetch(requestUrl);
        const reponseJSON = await reponse.json()
        console.log(reponseJSON);
        setAll(reponseJSON);
      }catch{

      }
     }
     fetchall();
  }, []);
  return (
    <div className="App">
      <GetList all={all}/>
    </div>
  );
}

export default App;
