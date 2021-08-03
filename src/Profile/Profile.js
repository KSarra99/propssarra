import React from 'react';
import propTypes from 'prop-types';
const Profile = (props) => {

    
     return (
         <div>
             
              <h1 style={{ color:'#9c27b0',fontStyle:'italic',backgroundColor:'beige'}}>{props.fullName}</h1>
              <h2 style={{color:'red',fontSize:25,fontStyle:'oblique',marginLeft:100,marginBottom:250, letterSpacing:2}}>{props.profession}</h2>
              <h3 style={{ color:'fushia',fontStyle:'italic',backgroundColor:'beige'}}>{props.bio}</h3>

             {props.handleName(props.fullName)}

             <div>

             <img src="/me.jpg" alt="me" /> 
             {props.children}
             </div>

               
              </div>
     )
 }
 Profile.propTypes = {
     fullName: propTypes.string,
     bio: propTypes.string,
     profession: propTypes.string,   
 };
 Profile.defaultProps = {
     fullName: "indifined",
     bio: "indefined",
     profession: "indifined",
   };
 
 export default Profile;