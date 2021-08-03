import Profile from './Profile/Profile.js';

function App() {
  const handleName =fullName=> 
    alert ("Hello I am Khmila Sarra") ;
  
  return (
    <div className="App">
      
     <Profile
       fullName = 'Khmila Sarra'
       bio = 'Hello World'
       profession = 'Job Seeker'
       handleName = {handleName} 
       />
       
    </div>
  );
}

export default App;