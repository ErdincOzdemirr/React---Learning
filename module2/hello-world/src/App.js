import './App.css';
import User from './components/user';

const friends = [
{id: 1,
name:"Erdinc"},
{id: 2,
name:"Hava"},
{id: 3,
name:"Ismail"},
]

function App(){
  return (
    <>
      <User
        // name="Erdinc"
        surName="Ozdemir"
        isLoggedIn={true}
        age={"30"}
        friends={friends}
        address={{
          title:"Kocaeli",
          zip: "41700"
        }}
      />
    </>
  )
}

export default App;