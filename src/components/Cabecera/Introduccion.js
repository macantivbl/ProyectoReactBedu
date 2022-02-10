import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { typography } from '@mui/system';

const card = (
    <React.Fragment>

        <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Proyecto de React
            </Typography>

            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Vicente Barbosa Leon
            </Typography>
            <Typography >
                En este proyecto se utilizo
            </Typography>

            <Typography variant="body2">
                <br />
                {'Mui'}
            </Typography >

            <Typography variant="body2">
                <br />
                {'Emailjs'}
            </Typography>

            <Typography variant="body2">
                <br />
                {'react route'}
            </Typography>

            <Typography variant="body2">
                <br />
                {'PWA'}
            </Typography>

            <Typography variant="body2">
                <br />
                {'React Hooks'}
            </Typography>
        </CardContent>


    </React.Fragment>
);

export default function OutlinedCard() {
    return (


        <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">{card}</Card>
        </Box>



    );
}