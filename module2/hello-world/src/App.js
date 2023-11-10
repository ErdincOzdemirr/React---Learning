import './App.css';
import Header from './components/header';
import React from "react";

const name = "Erdinc"
const surname = "Ozdemir"
const isLoggedIn = false;

function App(){
  // return React.createElement('div', null, "Hello")
  return (
    <>
      {/* <h1>
     {isLoggedIn && `Benim adım ve soyadım "${name} ${surname}" dir.`}
      </h1>
      {!isLoggedIn && "Giris Yapilmadi"} */}
      <h1>
        {isLoggedIn ? `Benim adım ve soyadım "${name} ${surname}" dir.` : "Giris Yapilmadi"}
      </h1>
    </>
  )

}

export default App;