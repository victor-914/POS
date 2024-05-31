import dynamic from 'next/dynamic'
const BarcodeScanner = dynamic(() => {
  import('react-barcode-scanner/polyfill')
  return import('react-barcode-scanner').then(mod => mod.BarcodeScanner)
}, { ssr: false })
import React, { FC, useState } from 'react'
import { useTorch, } from 'react-barcode-scanner'
import styled from 'styled-components'
import BottomDrawer from './BottomDrawer'
import { Button } from '@mui/material'
import { TryOutlined } from '@mui/icons-material'

const Barcode: FC = () => {
  const [isSupportTorch, isOpen, onTorchSwitch] = useTorch()
  const [openDrawer, setOpenDrawer] = useState(false)

  const handleBarcode = (barcode: any) => {
    console.log(barcode);
    // Handle the barcode
    setOpenDrawer(true)
  };

 


  return (
    <StyledBarcode >
      <main className='barcode'>
        <BarcodeScanner
          onCapture={handleBarcode}
        />
      </main>

      
      {/* isSupportTorch
        ? <Button 
          variant='contained'
        onClick={onTorchSwitch}>Switch Torch</Button>
        : null}{ */}

      <BottomDrawer
       state={openDrawer}
       setState={setOpenDrawer}
      />
    </StyledBarcode>
  )
}

export default Barcode

const StyledBarcode = styled.section`
width: 50%;
height:100vh;
margin:auto;
display: flex;
flex-direction: column;
align-items: center;


.barcode{
    width: 80%;
    height: 50%;
    
}


@media (min-width:320px) and (max-width: 480px){
  
  
  background-color:#D2E7FD;
  width: 98%;
  height: 90vh;
  justify-content: center;
  align-items: center;
} 


.barcode{
    width: 96%;
    height: 50%;
    
}
`