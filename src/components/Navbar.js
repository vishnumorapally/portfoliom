import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import "./nav.css"
const Navbar = () => {

    const op = () => {
        var open = document.querySelector(".op")
        var close = document.querySelector(".cl")
        close.style.display = "block"
        open.style.display = "none"
        var nav = document.querySelector(".nav")
        nav.style.height = "50vh"
        nav.style.backgroundColor = "black"
    }
    const cl = () => {
        var open = document.querySelector(".op")
        var close = document.querySelector(".cl")
        open.style.display = "block"
        close.style.display = "none"

        var nav = document.querySelector(".nav")
        nav.style.height = "9vh"
        nav.style.backgroundColor = "transparent"


    }




    const reset = () => {
        var links = document.querySelectorAll(".link")
        links.forEach((val) => {
            val.style.color = "white"
        })
    }

    const changecolor = () => {
        var links = document.querySelectorAll(".link")
        links.forEach((val) => {
            val.addEventListener("click", () => {
                reset()
                val.style.color = "rgb(119, 180, 255)"
                cl()
            })
        })
    }
    var links = document.querySelectorAll(".link")
    links.forEach((val) => {
        val.addEventListener("click", () => {
            reset()
            val.style.color = "rgb(119, 180, 255)"
            cl()
        })
    })

    return (
        <>
            <div className='nav'>
                <div className='logo'>
                    <h2>Portfolio</h2>
                    <div className='menu'>
                        <span class="material-symbols-outlined op" onClick={op}>menu</span>
                        <span class="material-symbols-outlined cl" onClick={cl}>close</span>
                    </div>
                </div>


                <div className='links'>
                    <Link to={{
                        pathname : "",
                        hash : "false"
                    }} className='link active' onClick={changecolor}>Home</Link>
                    <Link to={{
                        pathname : "/about",
                        hash : "false"
                    }} className='link' onClick={changecolor}>About</Link>
                    <Link to={{
                        pathname : "/skills",
                        hash : "false"
                    }} className='link' onClick={changecolor}>Skills</Link>
                    <Link to={{
                        pathname : "/projects",
                        hash : "false"
                    }} className='link' onClick={changecolor}>Projects</Link>
                    <Link to={{
                        pathname : "/contact",
                        hash : "false"
                    }} className='link' onClick={changecolor}>Contact</Link>
                </div>
            </div>
            <div className='space'></div>
        </>
    )
}

export default Navbar
