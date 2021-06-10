import React from 'react'
import Project from '../common_components/Projects/Project'
import Work from '../common_components/Work/Work'
import { Projects, Tasks } from '../Data/Data'

function Mywork() {
    return (
        <div>
            <Project {...Projects}/>
            <Work {...Tasks}/>
        </div>
    )
}

export default Mywork
