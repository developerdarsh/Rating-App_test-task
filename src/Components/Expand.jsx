import { Box, Card, Checkbox, Container, FormControlLabel, FormGroup, Grid, TextField, Typography } from '@mui/material'
import "../App.css"
import React from 'react'

export default function Expand({ expand, setExpand }) {
    const handleCheck = (event) => {
        var updatedList = [...expand];
        if (event.target.checked) {
            updatedList = [...expand, event.target.value];
        } else {
            updatedList.splice(expand.indexOf(event.target.value), 1);
        }
        setExpand(updatedList);
    };
    return (
        <>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ height: '70vh' }}>
                <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Container>
                        <Typography variant="h3" component="h2" sx={{ color: '#cfe8fc' }}> Help Us grow! </Typography>
                        <Typography variant="h4" component="h2" sx={{ color: '#cfe8fc' }}> How would you say should we expand next ?   </Typography>
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
                                <Card sx={{ width: '350px', display: "flex", padding: "8px", color: '#FFF', background: "#0a1929" }}>
                                    <FormControlLabel control={<Checkbox sx={{ color: '#FFF' }}
                                        // onClick={( e ) => setExpand( [ ...expand, e.target.value ] )}
                                        onChange={handleCheck}
                                    />} label="Add more flavore" value={"Add more flavore"} />
                                </Card>
                                <Card sx={{ width: '350px', display: "flex", padding: "8px", color: '#FFF', background: "#0a1929" }}>
                                    <FormControlLabel control={<Checkbox sx={{ color: '#FFF' }}
                                        // onClick={( e ) => setExpand( [ ...expand, e.target.value ] )} 
                                        onChange={handleCheck}
                                    />} label="Next day delivery" value={"Next day delivery"} />
                                </Card>
                                <Card sx={{ width: '350px', display: "flex", padding: "8px", color: '#FFF', background: "#0a1929" }}>
                                    <FormControlLabel control={<Checkbox sx={{ color: '#FFF' }}
                                        //  onClick={( e ) => setExpand( [ ...expand, e.target.value ] )}
                                        onChange={handleCheck}
                                    />} label="Catering for events and parties" value={"Catering for events and parties"} />
                                </Card>
                            </div>
                        </Box>
                    </Container>
                </Grid>
            </Grid>
        </>
    )
}
