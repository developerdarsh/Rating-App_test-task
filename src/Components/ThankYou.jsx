import React from 'react'
import { Container, Grid, Typography } from '@mui/material'

export default function ThankYou({ Data }) {
    console.log(Data)
    return (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Container sx={{ height: '70vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Typography variant="h3" component="h2" sx={{ color: '#cfe8fc' }}> Thank You ! </Typography>
                    <Typography variant="h4" component="h2" sx={{ color: '#cfe8fc' }}> Name : {Data[3].name}  </Typography>
                    <Typography variant="h4" component="h2" sx={{ color: '#cfe8fc' }}> Email : {Data[3].email}  </Typography>
                    <Typography variant="h4" component="h2" sx={{ color: '#cfe8fc' }}> Phone : {Data[3].phone}  </Typography>
                    <Typography variant="h4" component="h2" sx={{ color: '#cfe8fc' }}> Rating : {Data[0]}  </Typography>
                    <Typography variant="h4" component="h2" sx={{ color: '#cfe8fc' }}> Review : {Data[2]}  </Typography>
                    <Typography variant="h4" component="h2" sx={{ color: '#cfe8fc' }}> Response : {Data[1]}  </Typography>
                </Container>
            </Grid>

        </Grid>
    )
}
