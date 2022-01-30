import React,
{
  useState
} from 'react';

import Lottie from 'react-lottie-player';
import {
  Grid,
  Typography,
} from '@mui/material';
import EstimatePrimeraSeccion from './EstimatePrimeraSeccion';

import estimateAnimation from '../../../animations/estimateAnimation/data.json';
import EstimateDialog from './EstimateDialog';
import { defaultQuestions } from './json';

// let newQuestions = [];
// newQuestions = JSON.parse(JSON.stringify([...defaultQuestions]));
// newQuestions[0].options[0].selected = true;
// console.log(newQuestions[0].options[0]);
// console.log(defaultQuestions[0].options[0]);

const Estimate = () => {

  const [showModal, setShowModal] = useState(false);
  const [questions, setQuestions] = useState(defaultQuestions);
  const [total, setTotal] = useState(0);

  const [service, setService] = useState([]);
  const [platforms, setPlatforms] = useState([]);
  const [features, setFeatures] = useState([]);
  const [customFeatures, setCustomFeatures] = useState('');
  const [users, setUsers] = useState('');
  const [category, setCategory] = useState('');



  return (
    <Grid
      container
      direction="row"
      justifyContent='space-around'
      alignItems="center"
    >

      <Grid 
        item 
        container 
        direction='column' md
        alignItems="center"
      >
        <Grid item style={{ marginTop: '1em' }}>
          <Typography
            variant="h2"           
          >
            Estimate
          </Typography>
        </Grid>

        <Grid item
          style={{ maxWidth: '25em' }}
        >
          <Lottie
            loop={false}
            animationData={estimateAnimation}
            play
            style={{ width: '100%', height: '100%' }}
          />
        </Grid>
      </Grid>

      <EstimatePrimeraSeccion
        setShowModal={setShowModal}
        questions={questions}
        setQuestions={setQuestions}
        setTotal={setTotal}

        setService={setService}
        setPlatforms={setPlatforms}
        setFeatures={setFeatures}
        setCustomFeatures={setCustomFeatures}
        setUsers={setUsers}
        setCategory={setCategory}

      />
      <EstimateDialog
        showModal={showModal}
        setShowModal={setShowModal}
        questions={questions}
        total={total}
        service={service}
        platforms={platforms}
        features={features}
        customFeatures={customFeatures}
        users={users}
        category={category}
      />
    </Grid>
  )
}

export default Estimate
