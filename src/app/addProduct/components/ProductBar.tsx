import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { Add } from '@mui/icons-material';
import { useRouter } from 'next/navigation';

export default function ProductBar() {

     const router = useRouter()
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
                        fontWeight:"600"

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
                        onClick={() => router.push("/addProduct/newProduct")}

                    >New Product</Typography>
                </Button>
            </Box>
        </Box>
    );
}
