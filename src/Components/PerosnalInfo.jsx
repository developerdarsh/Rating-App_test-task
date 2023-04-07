import { Container, Grid, TextField } from '@mui/material'
import React from 'react'

export default function PerosnalInfo({ personal, setPersonal }) {

    return (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ height: '70vh' }}>
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Container maxWidth='lg' sx={{ bgcolor: '#cfe8fc', height: '70vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '65%', boxShadow: "10px 5px 5px white" }}>
                    <TextField label="Name" variant="filled" color="warning" focused fullWidth type='text' value={personal.name} onChange={(e) => setPersonal({ ...personal, name: e.target.value })} />
                    <TextField label="Email" variant="filled" color="warning" focused fullWidth type='email' value={personal.email} onChange={(e) => setPersonal({ ...personal, email: e.target.value })} />
                    <TextField label="Phone" variant="filled" color="warning" focused fullWidth type='number' value={personal.phone} onChange={(e) => setPersonal({ ...personal, phone: e.target.value })} />
                </Container>
            </Grid>
        </Grid>
    )
}
