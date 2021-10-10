import React from 'react'
import PropTypes from "prop-types";
function Profile(props) {
    return (
        <div className="profile">
          <img src={props.children} alt="Myphoto"></img>
          <h2>{props.fullname}</h2>
          <p className="bio">{props.bio}</p>
          <p className="prof">{props.profession}</p>
          <div className="logos">
              <a href="https://github.com/Amal-benhenia">
                  <img  src="./github.png" alt="github"></img>
                  </a>
                  <a href="https://tn.linkedin.com/in/amal-ben-henia-a081a2215" >
                  <img  src="./linkedin.png" alt="linkedin"></img>
                  </a>
                  <a href="https://www.facebook.com/amal.benhenia.39/"><img  src="./facebook.png" alt="facebook"></img></a>
                  </div>
                  <button onClick={() => props.handleName(props.fullname)}>My name</button>
        </div>
    )
}

Profile.defaultProps = {
fullname:"Your Name",
bio:"Your Degree ",
profession:"Your Profession",
children: "https://imgur.com/a/DTQs4Yf"
};
Profile.propTypes = {
 fullname: PropTypes.string,
 bio:PropTypes.string,
 profession:PropTypes.string,
 handleName:PropTypes.func
};


export default Profile