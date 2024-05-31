"use client"
import React, { useState } from 'react'
import styled from 'styled-components'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Box, Typography } from '@mui/material'
import { QrCodeScannerOutlined } from '@mui/icons-material'
import BagIndicator from '../../../components/global/BagIndicator';
import Barcode from './components/Barcode';
import { FlashlightOn } from '@mui/icons-material'

type props = {}

const Scan: React.FC<props> = () => {
  const [openBarcode, setOpenBarcode] = useState(false)

  const handleBarcodeToggle = () => {
    setOpenBarcode(true)
  }

  return (
    <StyledScan>
      <BagIndicator />
      {
        openBarcode && <Barcode />
      }
      {/* {
        openBarcode && <Button
          sx={{
            width: "80%",
            margin: "auto",
            marginTop: "20px"

          }}
          variant="contained">
          <FlashlightOn />
        </Button>
      } */}
      <Stack
        sx={{
          width: "80%",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          lineHeight: "3",
          padding: "8px",
          fontSize: "18px",
          margin: "auto",
        }}
        direction="row" spacing={2}>
      </Stack>
      {!openBarcode &&
        <Stack
          sx={{
            height: "60%",
            display: "flex",
            width: '90%',
            margin: "auto",
            justifyContent: "center",
            alignContent: "center"

          }}
          spacing={6} direction="column">
          <Button
            onClick={handleBarcodeToggle}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignContent: "center"
            }}
            variant="contained">
            <Typography>
              Scan
            </Typography>
            <Box>
              <QrCodeScannerOutlined />
            </Box>
          </Button>
        </Stack>

      }

      {/* <BottomDrawer /> */}
      {/* <Footer /> */}
    </StyledScan>
  )
}

export default Scan


const StyledScan = styled.section`
width: 100%;
height: 80vh;
display: flex;
flex-direction: column;
/* align-items: center; */
/* justify-content: center; */
/* background-color: #fff; */

`


