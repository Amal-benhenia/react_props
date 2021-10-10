
import './App.css';
import './profile/Navbar.css';
import './profile/profile.css'
import Nav from './profile/Navbar.js';
import Profile from'./profile/profile.js';





function App() {
   const handleName  = fullname => alert(fullname);
  return (
    <div>
     <Nav/>
     <div className="aboutMe">
     { <Profile  fullname="Amal Ben Henia" bio=" From theoretical physics to web develpoment." profession="Astrophysics and Condensed Matter Physics graduate student"  handleName={handleName}></Profile> }
     </div>
    </div>
  );
}


export default App;