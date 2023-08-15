import React from "react";
import './MainContent.css'
import facebook from './assets/facebook.svg'
import linkedin from './assets/linkedin.svg'
import github from './assets/github.svg'
import mail from './assets/Mail.svg'
import instagram from './assets/instagram.svg'
import me from './assets/me.jpg'


export default function MainContent() {
    console.log(me)
return(
    <>
    <div className="container">
        <div className="img-container">
            <img src={me} alt="me" className="main-img"/>

        </div>
        <div className="sub-container">
            <h2 className="name">Nimit Bhansali</h2>
            <h4 className="role">Software Developer</h4>
            <h5 className="web"></h5>
            <div className="connect">
                <a href="mailto:nimitbhansali519@gmail.com" className="mail"><img  src={mail}></img>Email</a>
                <a href="https://www.linkedin.com/in/nimitbhansali/" className="linkedin"><img  src={linkedin}></img>LinkedIn</a>
            </div>
            <div className="about">
                <h3>About</h3>
                <p>Currently pursuing Master's in Computer Application(MCA) From Vellore Institute of Technology , Bhopal.
A young enthusiast with curiosity to explore different areas of interest.
I am also interested in Programming, Data structures and algorithm the logic behind them makes me curious.
Want to be Good Developer and be happily curious about new things everyday! 
I am a extrovert like to meet new people and also try to get to know about how they think!</p>
            </div>
            <div className="interest">
                <h3>Interest</h3>
                <p>Chess. Sport. Online Games. HackerRank. LeetCode. CodeChef</p>
            </div>
        </div>
        <div className="footer">
            {/* <a href="https://www.linkedin.com/in/nimitbhansali/"><img className='linkedin' src={linkedin}  alt=""></img></a> */}
            <a href="https://github.com/NimitBhansali"><img className='github' src={github}  alt=""></img></a>
            
            <a href="https://www.facebook.com/nimit.bhansali.1?mibextid=ZbWKwL"><img className='facebook' src={facebook}  alt=""></img></a>
            <a href="https://instagram.com/c_h_e_r_r__y?igshid=YmMyMTA2M2Y="><img className='instagram' src={instagram}  alt=""></img></a>
        </div>
    </div>
    </>
)
}