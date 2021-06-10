import React from 'react'
import Hero from '../common_components/Hero/Hero'
import {homeObjOne, Skillstwo, Skillsthree ,Skillsfour,Skillsfive, Aboutint} from "../Data/Data";
import {Skillsone} from "../Data/Data";
import Skills from "../common_components/Skills/Skills";
import About from '../common_components/About/About';

function HomePage() {
    return (
        <div>
            <Hero {...homeObjOne}/>
            <About {...Aboutint}/>
            <Skills {...Skillsone}{...Skillstwo}{...Skillsthree}{...Skillsfour}{...Skillsfive}/>
        </div>
    )
}

export default HomePage
