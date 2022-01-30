import React,
{
  Fragment,
  // useState 
} from 'react';
import {
  Grid,
  IconButton,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
  // IconButton,
} from '@mui/material';
import backArrow from '../../../assets/backArrow.svg';
import forwardArrow from '../../../assets/forwardArrow.svg';
import backArrowDisabled from '../../../assets/backArrowDisabled.svg';
import forwardArrowDisabled from '../../../assets/forwardArrowDisabled.svg';
import { ButtonFreeEstimate } from '../../pages/estiloLandingPage';
import {
  softwareQuestions,
  websiteQuestions,
  // defaultQuestions 
} from './json';

const EstimatePrimeraSeccion = (props) => {

  const {
    setShowModal,
    questions,
    setQuestions,
    setTotal,
    setService,
    setPlatforms,
    setFeatures,
    setCustomFeatures,
    setUsers,
    setCategory,
  } = props;

  const theme = useTheme();
  const matchesmd = useMediaQuery(theme.breakpoints.down('md'));

  const getTotal = () => {
    let cost = 0;
    const selections = questions.map(question =>
      question.options.filter(option => option.selected)
    ).filter(question => question.length > 0);
    // console.log(selections);

    selections.map(options => options.map(option => cost += option.cost));
    // selections.map(options => console.log(options));

    // Se obtiene el cost multiplicador
    if (questions.length > 2) {
      const userCost = questions
        .filter(question => question.title === 'How many users do you expect?')
        .map(question =>
          question.options.filter(option => option.selected)
          // )[0][0].cost;
        )[0][0];

      // console.log(userCost);
      // Notar que el cost se suma con el multiplicador, se debe restar
      // console.log(cost);

      setUsers(userCost.title)

      cost -= userCost.cost;
      cost *= userCost.cost;
      // console.log(cost);
    }

    setTotal(cost);
  }

  const nextQuestion = () => {
    // Crear una copia del array
    const newQuestions = JSON.parse(JSON.stringify([...questions]));
    // Buscar la pregunta actual. question.active si es true
    const currentlyActive = newQuestions.filter(question => question.active);
    const activeIndex = currentlyActive[0].id - 1;// 1       
    const nextIndex = activeIndex + 1; // 2    

    newQuestions[activeIndex] = { ...currentlyActive[0], active: false };//  id 1
    newQuestions[nextIndex] = { ...newQuestions[nextIndex], active: true };//id 2   

    // set con la nueva pregunta activa
    setQuestions(newQuestions);
  }

  const previousQuestion = () => {
    // Crear una copia del array
    const newQuestions = JSON.parse(JSON.stringify([...questions]));
    // Buscar la pregunta actual. question.active si es true
    const currentlyActive = newQuestions.filter(question => question.active);
    const activeIndex = currentlyActive[0].id - 1;
    const nextIndex = activeIndex - 1;

    newQuestions[activeIndex] = { ...currentlyActive[0], active: false };
    newQuestions[nextIndex] = { ...newQuestions[nextIndex], active: true };

    // set con la nueva pregunta activa
    setQuestions(newQuestions);
  }

  const navigationPreviousDisabled = () => {

    const currentlyActive = questions.filter(question => question.active);

    if (currentlyActive[0].id === 1) {// Si es la primera pregunta
      // Deshabilitar el boton de retroceder
      return true;
    } else {
      return false;
    }
  }


  const navigationNextDisabled = () => {
    // Buscar la pregunta actual del array original. question.active si es true
    const currentlyActive = questions.filter(question => question.active);
    // console.log(currentlyActive[0].id);
    if (currentlyActive[0].id === questions[questions.length - 1].id) {// Si es la ultima pregunta
      // Deshabilitar el boton de avanzar
      return true;
    } else {
      return false;
    }
  }

  const handleSelect = (id) => {

    const newQuestions = JSON.parse(JSON.stringify([...questions]));
    const currentlyActive = newQuestions.filter(question => question.active);

    const activeIndex = currentlyActive[0].id - 1;

    const newSelected = newQuestions[activeIndex].options[id - 1];
    // arrar activo del sub array option. Si option.selected es true
    const previousSelected = currentlyActive[0].options.filter(option => option.selected);


    switch (currentlyActive[0].subtitle) {
      // Si el array dice subtitle es Select one.
      case 'Select one.':
        if (previousSelected[0]) {
          previousSelected[0].selected = !previousSelected[0].selected;
        }
        // Si es true, queda en false. Si es false, queda en true
        newSelected.selected = !newSelected.selected;
        break;

      default:
        // Si estamos en otra pregunta
        // Si es true, queda en false. Si es false, queda en true
        newSelected.selected = !newSelected.selected;
        break;
    }


    switch (newSelected.title) {
      case 'Custom Software Development':
        setQuestions(softwareQuestions);
        setService(newSelected.title);

        // Resetear el array 
        setPlatforms([]);
        setFeatures([]);
        setCustomFeatures("");
        setCategory('');
        setUsers('');
        break;
      case 'iOS / Android App Development':
        setQuestions(softwareQuestions);
        setService(newSelected.title);

        // Resetear el array 
        setPlatforms([]);
        setFeatures([]);
        setCustomFeatures("");
        setCategory('');
        setUsers('');
        break;
      case 'Website Development':
        setQuestions(websiteQuestions);
        setService(newSelected.title);

        // Resetear el array 
        setPlatforms([]);
        setFeatures([]);
        setCustomFeatures("");
        setCategory('');
        setUsers('');
        break;
      default:
        setQuestions(newQuestions);
    }
    // setQuestions(newQuestions);
  };

  const getPlatforms = () => {
    let newPlatforms = [];

    if (questions.length > 2) {
      newPlatforms = questions
        .filter(question => question.title === 'Which platforms do you need supported?'
        )
        .map(question => question.options
          .filter(option => option.selected))[0]
        .map(option => newPlatforms.push(option.title));

      setPlatforms(newPlatforms)
    }
    // console.log(newPlatforms);
  }

  const getFeatures = () => {
    let newFeatures = [];

    if (questions.length > 2) {
      // newFeatures =
      questions
        .filter(
          question => question.title === 'Which features do you expect to use?'
        )
        .map(question => question.options
          .filter(option => option.selected))
        // .map(option => console.log(option));
        .map(option =>
          option.map(newFeature => newFeatures.push(newFeature.title)));


      // console.log(newFeatures);
      setFeatures(newFeatures);
    }
  };

  const getCustomFeatures = () => {
    if (questions.length > 2) {
      const newCustomFeatures =
        questions.filter(question =>
          question.title === 'What type of custom features do you expect to need?'
        ).map(question =>
          question.options.filter(option => option.selected))[0][0].title

      setCustomFeatures(newCustomFeatures)
    }

  }

  const getCategory = () => {
    if (questions.length === 2) {
      const newCategory =
        questions.filter(question =>
          question.title === 'Which type of website are you wanting?')[0]
          .options.filter(option => option.selected)[0].title

      // console.log(newCategory);
      setCategory(newCategory);
    }
  }

  const estimateDisabled = () => {
    let disabled = true;

    // Cada vez que tiene una questions, ver si tiene un option
    // Sino tiene una seleccion el array estará vacio. y se puede preguntar lenght === 0
    const emptySelections =
      questions.map(question =>
        question.options.filter(option => option.selected)).filter(question => question.length === 0);

    if (questions.length === 2) {
      if (emptySelections.length === 1) {
        disabled = false;
      }
    } else if (questions.length === 1) {
      disabled = true;
    } else if (
      emptySelections.length < 3 && 
      questions[questions.length - 1].options.filter(option => option.selected).length > 0) {
      disabled = false;
    }
    // console.log(emptySelections);
    return disabled;
  }

  return (
    <Grid
      item
      container
      direction='column'
      md={7}
      style={{
        marginBottom: '10em',
        marginRight: matchesmd ? 0 : '1em'
      }}
      alignItems="center"
    >

      {
        // Si active es true entonces .map
        questions.filter(question => question.active)
          .map((question, index) => (
            <Fragment key={index} >
              <Grid item>
                <Typography
                  variant="h2"
                  align="center"
                  style={{
                    fontWeight: 500, marginTop: '1em', fontSize: '1.9rem', lineHeight: '1.25'
                  }}
                >
                  {question.title}
                </Typography>
                <Typography
                  variant="body1"
                  align="center"
                  style={{ marginBottom: '1em' }}
                  gutterBottom
                >
                  {question.subtitle}
                </Typography>
              </Grid>

              <Grid item container>
                {
                  question.options.map(option => (
                    <Grid
                      item
                      container
                      direction='column'
                      md
                      key={option.iconAlt}
                      component={Button}
                      style={{
                        display: 'grid',
                        textTransform: 'none',
                        borderRadius: '0',
                        backgroundColor: option.selected ? theme.palette.common.arcOrange : null,

                      }}
                      onClick={() => handleSelect(option.id)}
                    >
                      <Grid item style={{ maxWidth: '12em' }}>
                        <Typography
                          variant="h6"
                          align="center"
                          style={{ marginBottom: '1em' }}
                        >
                          {option.title}
                        </Typography>
                        <Typography variant='caption' align='center'>
                          {option.subtitle}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <img
                          src={option.icon}
                          alt={option.iconAlt}
                          style={{ width: '12em', height: '10em' }}
                        />
                      </Grid>
                    </Grid>
                  ))
                }

              </Grid>
            </Fragment>
          ))
      }




      <Grid
        item
        container
        justifyContent='space-between'
        style={{ marginTop: '2em', width: '15em' }}
      >
        <Grid item>
          <IconButton
            onClick={previousQuestion}
            disabled={navigationPreviousDisabled()}
          >
            <img
              src={navigationPreviousDisabled() ?
                backArrowDisabled : backArrow
              }
              alt="Previous questions"
              style={{ width: '3em', height: '3em' }} />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
            onClick={nextQuestion}
            disabled={navigationNextDisabled()}
          >
            <img
              src={navigationNextDisabled() ?
                forwardArrowDisabled : forwardArrow}
              alt="Next questions"
              style={{ width: '3em', height: '3em' }}
            />
          </IconButton>
        </Grid>
      </Grid>

      <Grid item>
        <ButtonFreeEstimate
          variant='contained'
          style={{ marginLeft: '1em' }}
          onClick={() => { setShowModal(true); getTotal(); getPlatforms(); getFeatures(); getCustomFeatures(); getCategory(); }}
          disabled={estimateDisabled()}
        >
          Get Estimate
        </ButtonFreeEstimate>
      </Grid>
    </Grid>
  );
};

export default EstimatePrimeraSeccion;
