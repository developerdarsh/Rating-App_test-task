import { Box, Card, Checkbox, Container, FormControlLabel, FormGroup, Grid, Radio, RadioGroup, Typography } from '@mui/material'
import "../App.css"
import React from 'react'

export default function Flavor({ flavor, setFlavor }) {

    return (
        <>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ height: '70vh' }}>
                <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Container>
                        <Typography variant="h3" component="h2" sx={{ color: '#cfe8fc' }}> Have your says! </Typography>
                        <Typography variant="h4" component="h2" sx={{ color: '#cfe8fc' }}> Which is our best flavor yet ?   </Typography>
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
                            <div className='checkbox_main'>
                                <RadioGroup
                                    aria-labelledby="demo-controlled-radio-buttons-group"
                                    name="controlled-radio-buttons-group"
                                >
                                    <Card sx={{ width: '350px', display: "flex", padding: "8px", color: '#FFF', background: "#0a1929" }}>
                                        <FormControlLabel value="Salted Caramel" control={<Radio sx={{ color: '#FFF' }} onClick={(e) => setFlavor([e.target.value])} />} label="Salted Caramel" />
                                    </Card>
                                    <Card sx={{ width: '350px', display: "flex", padding: "8px", color: '#FFF', background: "#0a1929" }}>
                                        <FormControlLabel value="Blueberry" control={<Radio sx={{ color: '#FFF' }} onClick={(e) => setFlavor([e.target.value])} />} label="Blueberry" />
                                    </Card>
                                    <Card sx={{ width: '350px', display: "flex", padding: "8px", color: '#FFF', background: "#0a1929" }}>
                                        <FormControlLabel value="Red Velvet" control={<Radio sx={{ color: '#FFF' }} onClick={(e) => setFlavor([e.target.value])} />} label="Red Velvet" />
                                    </Card>
                                </RadioGroup>
                            </div>
                        </Box>
                    </Container>
                </Grid>
            </Grid>
        </>
    )
}
