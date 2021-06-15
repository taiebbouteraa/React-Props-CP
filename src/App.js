import './App.css';
import Profile from './profile/Profile';
import PropTypes from "prop-types";

function App() {
  const myProps = {
    fullName : 'Mohamed Taieb Bouteraa',
    bio : 'this is my bio',
    profession : 'student',
  };
  const handleName = (name) => alert(`My name is ${name}`);
  return (
    <>
    <Profile prop1={myProps} handleName={handleName}> 
      <img src='profile.jpg' alt='alt' style={{width:250,borderRadius:250}} />
    </Profile>
    </>
  );
}
export default App;
