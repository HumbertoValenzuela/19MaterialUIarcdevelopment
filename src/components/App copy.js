import React, { useState } from 'react';
import { 
  BrowserRouter,
  Routes,
  Route,
  Link, 
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


function App(props) {

   // tabs 0,1,2,3,4,5
   const [value, setValue] = useState(0);
   // --------------------------------------------------
   // menuItems
   const [selectedIndex, setSelectedIndex] = useState( 0 );

  return (
    
    <ThemeProvider theme={ outerTheme }  >
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
              element={ <LandingPage 
                          // setValue={setValue} 
                          // setSelectedIndex={setSelectedIndex}
                        /> }
            />
            <Route 
              exact 
              path="/services" 
              element={ <Services 
                // setValue={setValue} 
                // setSelectedIndex={setSelectedIndex} 
                /> }
            />
            <Route 
              exact 
              path="/revolution" 
              element={ <Users /> }
            />
            <Route 
              exact 
              path="/about" 
              element={ <Users /> }
            />
            <Route 
              exact 
              path="/contact" 
              element={ <Users /> }
            />
            <Route 
              exact 
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
              element={ <Mobileapps /> }
            />
            <Route 
              exact 
              path="/websites" 
              element={ <Users /> }
            />
            <Route 
              exact 
              path="/estimate" 
              element={ <Users /> }
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

function Users() {
  return (
    <div>
      <nav>
        <Link to="me">My Profile</Link>
      </nav>

      <h1>Users</h1>
    </div>
  );
}


function Mobileapps() {
  return (
    <div>
      <nav>
        <Link to="me">My Profile</Link>
      </nav>

      <h1>Mobileapps</h1>
    </div>
  );
}