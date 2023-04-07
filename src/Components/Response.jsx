import { Box, Container, Grid, TextField, Typography } from '@mui/material'
import React from 'react'

export default function Response({ rating, response, setResponse }) {

    return (
        <>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ height: '70vh' }} >
                <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Container>
                        {rating === 0 && <Typography variant="h3" component="h2" sx={{ color: '#cfe8fc' }}> Poor ! </Typography>}
                        {rating === 1 && <Typography variant="h3" component="h2" sx={{ color: '#cfe8fc' }}> Poor ! </Typography>}
                        {rating === 2 && <Typography variant="h3" component="h2" sx={{ color: '#cfe8fc' }}> Ops ! </Typography>}
                        {rating === 3 && <Typography variant="h3" component="h2" sx={{ color: '#cfe8fc' }}> Good ! </Typography>}
                        {rating === 4 && <Typography variant="h3" component="h2" sx={{ color: '#cfe8fc' }}> Fantastic ! </Typography>}
                        {rating === 5 && <Typography variant="h3" component="h2" sx={{ color: '#cfe8fc' }}> Excellent ! </Typography>}

                        {/* <Typography variant="h4" component="h2" sx={{ color: '#cfe8fc' }}> We're glad  you had a great experience with us.  </Typography> */}
                        <Typography variant="h5" component="h1" sx={{ color: '#cfe8fc', margin: '35px 0' }}>Why did you give a rating of {rating} star? </Typography>
                    </Container>
                </Grid>
                <Grid item xs={6} sx={{ display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: 'center' }}>
                    <Container maxWidth="sm" sx={{ bgcolor: '#cfe8fc', height: '70vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: "15px", height: '65%', boxShadow: "10px 5px 5px white" }}>
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <div>
                                <TextField
                                    id="filled-multiline-flexible"
                                    label="Type your Response."
                                    multiline
                                    maxRows={4}
                                    variant="filled"
                                    value={response}
                                    onChange={(e) => setResponse(e.target.value)}
                                />
                            </div>
                        </Box>
                    </Container>
                </Grid>
            </Grid>
        </>
    )
}
