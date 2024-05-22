"use client"

import React from 'react'
import styled from 'styled-components'

type props = {}

const Navbar: React.FC<props> = () => {
    return (
        <StyledNav>
            <div className='secNavbar'>
                <aside className='logo'>logo</aside>

                <main className='secNavbar-content'>
                    <li >Profile</li>
                    <li>signup/login</li>
                    <li>cart</li>
                </main>

            </div>
            <main>
                <li>Home</li>
                <li>Scan</li>
                <li>Products</li>
            </main>
        </StyledNav>
    )
}

export default Navbar



const StyledNav = styled.section`


width:100%;
display:flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
background-color: #000;
color:#ffc94a;


  .secNavbar{
    width:100%;
    background-color: #fff;

  }
    
 main{
    width:70%;
    display:flex;
    align-items:center;
    justify-content:space-around;
    padding:10px;
    font-weight: 600;
    list-style:none;
    font-family: var(--main-font);
    cursor:pointer;

 }

 .secNavbar{
    display:flex;
    justify-content: space-between;
    color: #000;
 }

 .secNavbar-content{
    display:flex;
    width:50%;
    /* background-color:red; */
 }

`







