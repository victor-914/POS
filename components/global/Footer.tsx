"use client"

import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ShoppingBag from '@mui/icons-material/ShoppingBag';
import { AddCircleSharp, QrCodeScannerOutlined } from '@mui/icons-material';
import { useRouter } from 'next/navigation';






export default function Footer() {
  const [value, setValue] = React.useState(0);
  const router = useRouter();



  const handleRoute = (value: string) => {

    return router.push(`/${value}`)
  };



  return (
    <Box sx={{
      width: "100%",
      position: "fixed",
      bottom: '3px'
    }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      > 
        <BottomNavigationAction label="Bag" 
         onClick={ () => handleRoute("cart")}
        icon={<ShoppingBag />} />
        <BottomNavigationAction label="Add Product" 
         onClick={ () => handleRoute("addProduct")}
        icon={<AddCircleSharp />} />
        <BottomNavigationAction label="Scan"
          onClick={ () => handleRoute("scan")}
          icon={<QrCodeScannerOutlined />}
        />


      </BottomNavigation>
    </Box>
  );
}
