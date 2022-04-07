import React from 'react';
import PropTypes from "prop-types";
import './Profile.css'

const Profile = (props) =>{
    Profile.propTypes ={
        name : PropTypes.string,
        bio : PropTypes.string,
        profession : PropTypes.string,
    };
    
    // alert('Hi'.concat(' ',props.fullName));
    return (
        <>

        <h1 style={{fontWeight:"bold"}}>{props.fullName}</h1>
        <h1>{props.bio}</h1>
        <h1>{props.profession}</h1>
        <div className="newdiv"><img className="image" src={props.src} alt="child"/>{props.children}</div>
        
        </>
    );


}


Profile.defaultProps = {fullName :'Ashraf Ben Khemis',bio:'Student',profession:'Enginer',src:'./Ashraf.png'};
export default Profile;