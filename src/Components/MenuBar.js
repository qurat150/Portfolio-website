import React from 'react'
export const MenuBar = () => {
    const openNav = () => {
        document.getElementById("mySidebar").style.width = "100%";
        setTimeout(() => {
            document.getElementById("mySidebar1").style.width = "100%";
            document.getElementById("mySidebar1").style.backgroundColor = "#FF4200"
            setTimeout(() => {
                document.getElementById("mySidebar2").style.width = "100%";
                document.getElementById("mySidebar2").style.backgroundColor = "black"
            }, 300)
        }, 300)
    }
    const closeNav = () => {
        document.getElementById("mySidebar2").style.width = "0";
        setTimeout(() => {
            document.getElementById("mySidebar1").style.width = "0";
            setTimeout(() => {
                document.getElementById("mySidebar").style.width = "0";
            }, 300)
        }, 300)

    }
    return (
        <>
            <div id="mySidebar" className="sidebar"></div>
            <div id="mySidebar1" className="sidebar"></div>
            <div id="mySidebar2" className="sidebar">
                <div className="closebtn" onClick={closeNav}><i className="fa-solid fa-xmark"></i></div>
                <div className="menu flex">
                    <div className='borders flex'>About</div>
                    <div className='borders flex'>Services</div>
                    <div className='borders flex'>Clients</div>
                    <div className='borders flex'>Contact</div>
                </div>
            </div>
            <div className="menu-bar">
                <i onClick={openNav} className="fa-solid fa-bars"></i>
            </div>
        </>
    )
}


