import React from 'react'
import Hero from '../common_components/Hero/Hero'
import {homeObjOne, Skillstwo, Skillsthree ,Skillsfour,Skillsfive} from "../Data/Data";
import {Skillsone} from "../Data/Data";
import Skills from "../common_components/Skills/Skills";

function HomePage() {
    return (
        <div>
            <Hero {...homeObjOne}/>
            <Skills {...Skillsone}{...Skillstwo}{...Skillsthree}{...Skillsfour}{...Skillsfive}/>
        </div>
    )
}

export default HomePage
