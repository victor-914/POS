"use client"
import React from 'react'
import styled from 'styled-components'
import Barcode from './components/Barcode'
type props = {}

const Scan: React.FC<props> = () => {
  return (
    <StyledScan>
      <header>scan</header>
      <Barcode />
    </StyledScan>
  )
}

export default Scan


const StyledScan = styled.section`
width: 100%;
height: 100vh;
/* background-color: #fff; */

`