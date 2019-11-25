import React from 'react';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';

import axios from 'axios';

function App() {
  const nameSelector = useSelector(state=>state.name);
  const dispatch = useDispatch();

  //ACTION
const name = (fullName)=>{
  console.log(fullName);
    return {
        type:'NAME',
        fullName:fullName
    }
}

  function setRedux(){
    axios.get(`https://randomuser.me/api/`)
      .then(res => {
        const persons = res.data;
        const Fullname = persons.results[0].name
        // console.log(Fullname.title+". "+ Fullname.first +" "+Fullname.last);
        dispatch(name(Fullname.title+". "+ Fullname.first +" "+Fullname.last));
      })
  }

  return (
    <div>
<button onClick={setRedux}>CLICK ME</button>

   {nameSelector === 0 ? " ":<p> {nameSelector}</p>}
    </div>
  );
}

export default App;
