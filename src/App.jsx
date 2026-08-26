import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Props from "./components/Props"
import Card from "./components/Card"

function App(){
  
const team = [
  {
    name: 'Ada Lovelace',
    role: 'Software Engineer',
    avatar: 'https://i.pravatar.cc/150?img=47',
  },
  {
    name: 'Alan Turing',
    role: 'Backend Developer',
    avatar: 'https://i.pravatar.cc/150?img=12',
  },
  {
    name: 'Grace Hopper',
    role: 'DevOps Engineer',
    avatar: 'https://i.pravatar.cc/150?img=32',
  },
   {
    name: 'Ade Bisi',
    role: 'Civil Engineer',
    avatar: 'https://i.pravatar.cc/150?img=35',
  },
];

  return(
    <>
    <Navbar/>
      <h1>Home Page</h1>
         <div className="cards">
    
      {team.map((member) => (
       <Card><Props name={member.name} avatar={member.avatar} role={member.role}/></Card>

      ))}

     </div>


    <Footer/>
    </>
  )
}

export default App;