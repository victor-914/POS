import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import Typography from '@mui/material/Typography';
import { ShoppingBag } from '@mui/icons-material';

export default function BagIndicator() {
    return (
        <Card variant="outlined" sx={{ width: "100%" }}>
            <Box sx={{ p: 2 }}>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Typography gutterBottom variant="h5" component="div">
                        Customer Bag
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                        <Badge badgeContent={4} color="primary">
                            <ShoppingBag color="action" />
                        </Badge>
                    </Typography>
                </Stack>

            </Box>
            <Divider />

        </Card>
    );
}
