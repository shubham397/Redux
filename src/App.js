import React from 'react';
import './App.css';

import axios from 'axios';

function App() {

  function setRedux(){
    axios.get(`https://randomuser.me/api/`)
      .then(res => {
        const persons = res.data;
        const Fullname = persons.results[0].name 
        console.log(Fullname.title+". "+ Fullname.first +" "+Fullname.last);
      })
  }

  return (
    <div>
      <button onClick={setRedux}>CLICK ME</button>
    </div>
  );
}

export default App;
