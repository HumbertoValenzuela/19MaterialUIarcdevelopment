import React, { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,  
} from 'react-router-dom';

// import { Fab} from '@mui/material';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { ThemeProvider } from '@mui/material/styles';

// import ScrollTop from './muihelpers/ScrollTop';
import Header from './ui/Header';
import outerTheme from './ui/theme/theme';
import Footer from './ui/footer/Footer';
import LandingPage from './pages/LandingPage';
import Services from './ui/services/Services';
import CustomSoftware from './ui/services/CustomSoftware';
import MobileApps from './ui/mobileapp/MobileApps';
import Websites from './ui/websites/Websites';
import Revolution from './ui/revolutions/Revolution';
import About from './ui/about/About';
import Contact from './ui/contact/Contact';
import Estimate from './ui/estimate/Estimate';



function App(props) {

  // tabs 0,1,2,3,4,5
  const [value, setValue] = useState(0);
  // --------------------------------------------------
  // menuItems
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (

    <ThemeProvider theme={outerTheme}  >
      <BrowserRouter>
        <div>
          <Header
            value={value}
            setValue={setValue}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
          />

          <Routes>
            <Route
              exact
              path="/"
              element={
                <LandingPage
                  setValue={setValue}
                  setSelectedIndex={setSelectedIndex}
                />
              }
            />

            <Route
              exact
              path="/services"
              element={<Services
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
              } />
            <Route
              // exact 
              path="/customsoftware"
              element={
                <CustomSoftware
                  setValue={setValue}
                  setSelectedIndex={setSelectedIndex}
                />
              }
            />
            <Route
              exact
              path="/mobileapps"
              element={
                <MobileApps
                  setValue={setValue}
                  setSelectedIndex={setSelectedIndex}
                />
              }
            />
            <Route
              exact
              path="/websites"
              element={
                <Websites
                  setValue={setValue}
                  setSelectedIndex={setSelectedIndex}
                />
              }
            />

            <Route
              exact
              path="/revolution"
              element={<Revolution
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
              }
            />

            <Route
              exact
              path="/about"
              element={
                <About
                  setValue={setValue}
                  setSelectedIndex={setSelectedIndex}
                />
              }
            />
            <Route
              exact
              path="/contact"
              element={<Contact
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
              }
            />
            <Route
              exact
              path="/estimate"
              element={<Estimate
                />}
            />
          </Routes>

        </div>
        <Footer
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
      </BrowserRouter>

      {/* <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop> */}

    </ThemeProvider>

  );
}

export default App;



