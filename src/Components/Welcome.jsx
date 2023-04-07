import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'

export default function Welcome() {
    return (
        <>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ height: '70vh' }}>
                <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <iframe width="520" height="445" src="https://www.youtube.com/embed/2mRlUWNIPzo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </Grid>
                <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Container maxWidth="sm" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', bgcolor: '#cfe8fc', height: '65%', boxShadow: "10px 5px 5px white" }}>
                            <h1>Welcome !</h1>
                            <Container>
                                <Typography> we'd love to know how we're doing </Typography>
                                <Typography> Tell us about your experience or leave a review. You can also share your experience with online friends  </Typography>
                            </Container>
                        </Box>
                    </Container>
                </Grid>
            </Grid>
        </>
    )
}
