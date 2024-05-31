import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button, Stack } from '@mui/material';
import { Add } from '@mui/icons-material';

export default function ProductBar() {
    return (
        <Box sx={{ flexGrow: 1, }}>
            <Typography
                sx={{
                    fontSize: "20px",
                    width: "100%",
                    textAlign: "center",
                    lineHeight: "2",

                }}

            >Products</Typography>
            <Box
                sx={{
                    // backgroundColor:'green',
                    display: "flex",
                    alignItems: 'flex-end',
                    width: "95%",
                    margin: "auto",
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}
            >
                <Button variant="contained">
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
