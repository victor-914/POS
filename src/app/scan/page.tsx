"use client"
import React, { useState } from 'react'
import styled from 'styled-components'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Box, Typography } from '@mui/material'
import { QrCodeScannerOutlined, Search } from '@mui/icons-material'
import BagIndicator from '../../../components/global/BagIndicator';
type props = {}

const Scan: React.FC<props> = () => {
  const [openBarcode, setOpenBarcode] = useState(false)
  return (
    <StyledScan>

      {/* scan bar  */}

      <BagIndicator />

      {/* search bar  */}
      {/* <Barcode /> */}

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


