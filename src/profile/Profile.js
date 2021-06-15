import React from 'react'

const Profile = ({prop1,handleName,children}) => {
    return (
        <div style={{textAlign:'center'}}>
            {children}
            <p>{prop1.profession} </p>
            <p>{prop1.bio} </p>
            <button onClick={() => handleName(prop1.fullName)} >click</button>
        </div>
    )
}

Profile.defaultProps = {
    fullName: "No Name added",
    bio: "...",
    proFession: "No profession",
    children: "no image",
};

Profile.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    proFession: PropTypes.string,
    children: PropTypes.string,
};

export default Profile
