import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button, Stack } from '@mui/material';
import { Add } from '@mui/icons-material';

export default function ProductBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>

            <Box
                sx={{
                    // backgroundColor:'green',
                    display: "flex",
                    alignItems: 'center',
                    width: "95%",
                    margin: "auto",
                    flexDirection: 'row',
                    padding:"10px 5px 10px 5px", 
                    justifyContent: 'space-between'
                }}
            >

                <Typography
                    sx={{
                        fontSize: "20px",
                        width: "auto",
                        textAlign: "center",
                        lineHeight: "2",

                    }}

                >Products</Typography>
                <Button variant="outlined">
                    <Add />

                    <Typography
                        sx={{
                            fontSize: "12px",
                            width: "100%",
                            textAlign: "center",
                            lineHeight: "2",
                        }}

                    >New Product</Typography>
                </Button>
            </Box>
        </Box>
    );
}
