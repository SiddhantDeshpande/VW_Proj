import React from 'react'
import About from '../common_components/About/About'
import Mentor from '../common_components/Mentor/Mentor';
import {Aboutme, Mentordata} from "../Data/Data";

function AboutUs() {
    return (
        <div>
            <Mentor {...Mentordata}/>
            <About {...Aboutme}/>
            
        </div>
    )
}

export default AboutUs
