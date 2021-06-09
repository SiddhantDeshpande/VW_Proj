import React from 'react'
import Hero from '../common_components/Hero/Hero'
import {homeObjOne} from "../Data/Data";

function HomePage() {
    return (
        <div>
            <Hero {...homeObjOne}/>
        </div>
    )
}

export default HomePage
