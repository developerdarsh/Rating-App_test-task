import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import Rating from '@mui/material/Rating';


export default function RatingStar({ rating, setRating }) {
    return (
        <>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Container maxWidth="sm" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <Box sx={{ bgcolor: '#cfe8fc', height: '70vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <h1>Welcome !</h1>
                            <Container>
                                <Typography>How would you rate your experience with CupCake Central </Typography>
                            </Container>
                        </Box>
                    </Container>
                </Grid>

                <Grid className='rating-comp' item xs={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Box
                        sx={{
                            '& > legend': { mt: 2 },
                        }}
                    >
                        <h1 style={{ color: '#cfe8fc' }}>Rate Us</h1>
                        <Rating
                            name="simple-controlled"
                            value={rating}
                            onChange={(event, newValue) => {
                                setRating(newValue);
                            }}
                        />
                    </Box>
                </Grid>

            </Grid>
        </>
    )
}
