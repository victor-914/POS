import React, { FC } from 'react'
import { BarcodeScanner, useTorch } from 'react-barcode-scanner'
import styled from 'styled-components'

 const Barcode:FC =  () => {
  const [isSupportTorch, isOpen, onTorchSwitch] = useTorch()

  return (
    <StyledBarcode >
        <main className='barcode'>
        <BarcodeScanner />

        </main>
      {isSupportTorch
        ? <button onClick={onTorchSwitch}>Swtich Torch</button>
        : null}
    </StyledBarcode>
  )
}

export  default Barcode 

const StyledBarcode = styled.section`
width: 50%;
height:100vh;
margin:auto;
display: flex;
align-items: center;

.barcode{
    width: 100%;
    height: 50%;
    
}
`