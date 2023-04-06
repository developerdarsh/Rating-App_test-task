import { useState } from 'react';
import './App.css';
import Experience from './Components/Experience';
import Response from './Components/Response';
import RatingStar from './Components/RatingStar';
import Welcome from './Components/Welcome';
import { Button, Container, Grid } from '@mui/material'
import PerosnalInfo from './Components/PerosnalInfo';
import ThankYou from './Components/ThankYou';

function App() {
  const [steps, setSteps] = useState(0)
  const [rating, setRating] = useState(0)
  const [response, setResponse] = useState('')
  const [review, setReview] = useState('')
  const [personal, setPersonal] = useState({
    name: '',
    email: '',
    phone: null
  })

  const submitHandler = () => {
    setSteps(0)
    setRating(0)
    setResponse('')
    setPersonal({
      name: '',
      email: '',
      phone: null
    })
  }

  // Use Switch cases for track active steps 
  function getModelContent(steps) {
    switch (steps) {
      case 0:
        return (
          <Welcome />
        )
      case 1:
        return (
          <RatingStar rating={rating} setRating={setRating} />
        )
      case 2:
        return (
          <Experience review={review} setReview={setReview} />
        )
      case 3:
        return (
          <Response response={response} setResponse={setResponse} />
        )
      case 4:
        return (
          <PerosnalInfo personal={personal} setPersonal={setPersonal} />
        )
      case 5:
        return (
          <ThankYou Data={[rating, response, review, personal]} />
        )
      default:
        return (
          <Welcome />
        )
    }
  }
  return (
    <>
      <div className="App">
        {getModelContent(steps)}
        <Grid container xs={12} className='action-buttons' sx={{ margin: '50px 0' }}>
          <Container sx={{ display: 'flex', justifyContent: 'space-between' }} maxWidth="lg">
            <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'flex-start' }}>
              {steps > 0 &&
                <Button variant="outlined" onClick={() => setSteps(steps - 1)}>Previous</Button>
              }
            </Grid>
            <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              {steps < 5 ?
                <Button variant="contained" onClick={() => setSteps(steps + 1)}>Next</Button>
                :
                <Button variant="contained" onClick={submitHandler}>Submit</Button>
              }
            </Grid>
          </Container>
        </Grid>
      </div>
    </>
  )
}

export default App;
