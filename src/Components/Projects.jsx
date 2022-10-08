import React from 'react'

export const Projects = () => {
    return (
        <div className='projects-main'>
            <h2 className='headings pinkColor projects'>
                <p className='displayInline'> &lt; </p> Projects <p className='displayInline'> &gt;</p>
            </h2>
            <div className="menu flex">
                <div className='borders flex'>Services</div>
                <div className='borders flex'>Clients</div>
                <div className='borders flex'>Contact</div>
            </div>
            <h2 className='headings pinkColor projects'>
                <p className='displayInline'> &lt; </p> Projects <p className='displayInline'> /&gt;</p>
            </h2>
        </div>
    )
}
