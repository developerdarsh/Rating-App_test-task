import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'


export default function Experience({ review, setReview }) {

    return (
        <>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ height: '70vh' }} >
                <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Container>
                        <Typography variant="h4" component="h2" sx={{ color: '#cfe8fc' }}> Tell us about your experience or leave a review. <br /> this will help other people find us based on your experience.  </Typography>
                        <Typography variant="h5" component="h4" sx={{ color: '#cfe8fc', margin: '35px 0' }}>Selected : {review}</Typography>
                    </Container>

                </Grid>
                <Grid item xs={6} sx={{ display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: 'center' }}>
                    {/* <Box fullWidth> */}
                    <Container maxWidth="sm" sx={{ bgcolor: '#cfe8fc', height: '65%', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: "10px 5px 5px white" }}>
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: "15px", height: 'fit-content' }}>
                            <Button variant="outlined" onClick={() => setReview('Review on Google')}>Review on Google</Button>
                            <Button variant="outlined" onClick={() => setReview('Review on Facebook')}>Review on Facebook</Button>
                            <Button variant="outlined" onClick={() => setReview('Share on Google')}>Share on Facebook</Button>
                            <Button variant="outlined" onClick={() => setReview('Tweet')}>Tweet</Button>
                        </div>
                    </Container>
                    {/* </Box> */}
                </Grid>
            </Grid >
        </>
    )
}
