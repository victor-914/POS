"use client"

import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ShoppingBag from '@mui/icons-material/ShoppingBag';
import { AddCircleSharp, QrCodeScannerOutlined} from '@mui/icons-material';
export default function Footer() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: "100%",
     position:"fixed",
     bottom:'3px'
    }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Bag" icon={<ShoppingBag />} />
        <BottomNavigationAction label="Add Product" icon={<AddCircleSharp  />} />
        <BottomNavigationAction label="Scan" icon={<QrCodeScannerOutlined />} />
      </BottomNavigation>
    </Box>
  );
}
