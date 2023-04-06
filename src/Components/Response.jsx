import { Box, Container, Grid, TextField, Typography } from '@mui/material'
import React from 'react'

export default function Response({ response, setResponse }) {

    return (
        <>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Container>
                        <Typography variant="h3" component="h2" sx={{ color: '#cfe8fc' }}> We's love to be better next time. </Typography>
                        <Typography variant="h4" component="h2" sx={{ color: '#cfe8fc' }}> Why did you give a rating of 2 stars?   </Typography>
                        <Typography variant="h4" component="h4" sx={{ color: '#cfe8fc' }}> Let us know exactly what went wroong so that we can improve our offerings. </Typography>
                    </Container>
                </Grid>
                <Grid item xs={6} sx={{ display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: 'center' }}>
                    <Container maxWidth="sm" sx={{ bgcolor: '#cfe8fc', height: '70vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: "15px" }}>
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
