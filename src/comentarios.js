// npx create-react-app my-app 
// npm install @mui/material @emotion/react @emotion/styled @types/material-ui


// 4. Image Optimization
// https://tinyjpg.com/
// Smart WebP, JPEG and PNG compression
// https://jakearchibald.github.io/svgomg/
// Editar SVG

// 6. The AppBar Component
// Header.js: Crear ui components Header. Contiene AppBar y Toolbar
// App.js; llamar a Header.js y usarlo. Notar que la palabra hello world no lo muestra. Es porque esta debajo de AppBar.
// <AppBar > contenido horizontal usando   <Toolbar position="fixed">
// my : margin bottom <Box sx={{ my: 10 }}>
// useScrollTrigger:
// disableHysteresis: true: delay cuando el usuario hace scrolling
// threshold: 0 llevaría al usuario desplazarse un poco antes de que el componente se despliegue. 
// React.cloneElement: cualquier componente que este envuelto con desplazamiento de elevación clona a los children.
// elevation: trigger ? 5 : 0, la sombra de elevación.

// ScrollTop: aparece un botón de scroll hacia arriba. al presionarlo, el scroll se mueve hacia arriba.

// 8. Styling - Themes (Setup)
// ThemeProvider Componente para inyectar un tema en su aplicación.
// ThemeProvider se basa en la función de contexto de React para pasar el tema a los componentes, por lo que debe asegurarse de que ThemeProvider sea un elemento principal de los componentes que está intentando personalizar. Puede obtener más información sobre esto en la sección API.
// createTheme: es un objeto que contiene las propiedades de tema.

// https://mui.com/customization/default-theme/

// 10. Styling - Themes (Palette)
// Palette: es un objeto que contiene las propiedades de color.
// Palette.primary: es un objeto que contiene las propiedades de color.
// Palette.common: es un objeto que contiene las propiedades de color.
// Para usar la config de color de tema, se debe usar el ThemeProvider.
// Para usar la config de color de tema local, se ocupa color="secondary"
// Default Theme

// 11. Styling - Themes (Typography)
// https://mui.com/components/typography/
// Modificar tipografia global
// h1. Heading
// h2. Heading
// h3. Heading
// h4. Heading
// h5. Heading
// h6. Heading
// subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
// subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
// body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.

// body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.

// BUTTON TEXT
// caption text
// OVERLINE TEXT

// typography: Object
    // htmlFontSize: 16
    // pxToRem: f ()
    // fontFamily: ""Roboto", "Helvetica", "Arial", sans-serif"
    // fontSize: 14
    // fontWeightLight: 300
    // fontWeightRegular: 400
    // fontWeightMedium: 500
    // fontWeightBold: 700
        // h1: Object
        // fontFamily: ""Roboto", "Helvetica", "Arial", sans-serif"
        // fontWeight: 300
        // fontSize: "6rem"
        // lineHeight: 1.167
        // letterSpacing: "-0.01562em"
// Uso global. cada vez que se ocupa h1, usará esta configuración.
// Header.js: <Typography variant='h1' >
// theme.js:  typography: { h1: { fontWeight: 700 } }
// props variant='h1'
// props color='secondary' (primary, error)

// 12. Styling – Inline
// Uso Local. Solo para modificar un componente
// https://mui.com/system/styled/ 
// https://mui.com/customization/default-theme/
// mixins: Object
// toolbar: Object
// minHeight: 56
// @media (min-width:0px) and (orientation: landscape): Object
// minHeight: 48
// @media (min-width:600px): Object
// minHeight: 64
// fixed no afecta la dimensión de la página. Una parte del contenido queda debajo de la barra de navegación.
// Solución: usar theme.mixins.toolbar. Para que ocupe el espacio.

// 13. AppBar Logo
// Header.js:
// queda con un espacio en lado izquierda y derecha y hello desaparicio.
// {/* <img src={logo} alt="logo" /> */}
// Toolbar tiene padding de 24px. 
// La imagen es grande, entonces desaparece el texto hello. Agregar más margin-top
// https://mui.com/api/toolbar/#heading-props
// toolbar: disableGutters={true} deshabilita el padding de la barra de navegación.
// El logo queda fijo, no es responsive.
// const Offset = styled('div')( ({ theme }) => ({
//   minHeight: theme.mixins.toolbar,
//   marginBottom: "7rem",
// }));

// const TamanaDeLogo = styled('img')(({ theme }) => ({
//   height: "7rem"
// }) );

// 14. Favicon
// Eliminar logo192 y logo512. produce un mensaje de error.
// PWA progresive web app.
// 1Introduction\1test\public\manifest.json

// 15. Tabs Overview
// https://mui.com/components/tabs/
//<AntTabs  sx={{ ml: 7 }} >
// const AntTabs = styled(Tabs)({
// const TamanaDeLogo = styled('img')

// 19. Styling The Active Tab
// Header.js: <AntTabs value={value} es el valor que contiene cada pestaña. Value cambiará al hacer onChange. Crear un useState para value. 
// onChange={handleChange} es una función que se ejecuta al cambiar el valor value.
// textColor="secondary" pestaña activa, cambia el color del texto.
// indicatorColor="secondary" pestaña activa, cambia el color del indicador (una línea abajo).
//<AntTab value="uno" valor de la pestaña.

// 20. Navigation With React Router
// Versión 6
// npm install react-router-dom
// https://reactrouter.com/docs/en/v6/getting-started/overview
// Switch lo cambian a Routes. component a element
// App.js: <Route exact path="/" element={ <Homes /> } />
// Header.js <AntTab  component={Link} to="/"
// Al actualizar la página tab queda en uno pero el navegador - dirección queda en otro link ej: /services

// 21. Active Tab Refresh Fix
// Verificar la URL cada vez que la página se carga o actualiza y que estamos configurada en la pestaña activa correcta.
// es un ciclo de vida de React. usando useEffect.
// https://mui.com/guides/routing/#tabs
//   const routeMatch = useRouteMatch(['/', '/services', '/revolution', '/about', '/contact' ]);
//   const currentTab = routeMatch?.pattern?.path;
// <AntTabs value={ currentTab }   
// value="/services" mismo nombre que indica useRouteMatch
// logo al hacer clic enviar a /
// usando button, estilo padding: 0, margin: 0,
// Quitar el efecto del boton.
// disableRipple: Si es verdadero, el efecto dominó está desactivado.
// Sin una ondulación, no hay estilo para: foco visible de forma predeterminada. Asegúrese de resaltar el elemento aplicando estilos separados con la clase .Mui-focusVisible.

// 3. Adding Header Features - Menus and Responsive Design
// 1. Section 3 Intro
// menu - responsive design - drawers

// 2. Menus Overview
// https://mui.com/components/menus/
// 

// 4. Using Menus – Setup
// HeaderTabs.js: services - menú de navegación con 3 MenuItems.
// Al salir con el mouse onMouseLeave, el menú desaparece.
// Al hacer clic fuera del menú, el menú desaparece.

// 5. Using Menus – Navigation
// headerTabs.js: El tab Services tiene un menú de 3 opciones. Estos deben tener valor value 1
//  <MenuItem  onClick={ () => {handleClose(); setValue(1);} } 
// con esto se evita problemas de path.
// tab y Menu no funcionan juntos correctamente. Para que el usuario el cambio. Se crea Services en tab y MenuItem.
//<MenuItem onClick={ () => {handleClose(); setValue(1);} }component={Link}to="/services">Services </MenuItem>

// 6. Using Menus – Styling
// Positioned menu
// Debido a que el componente Menú usa el componente Popover para posicionarse, puede usar los mismos accesorios de posicionamiento para posicionarlo. Por ejemplo, puede mostrar el menú en la parte superior del ancla:


// 7. Using Menus – Selection
// crear hook usestate
// refactorizar MenuItem
// crear un arreglo de objeto que contiene los menuitem
// recorrer el arreglo de objeto con .map
// handleMenuItemClick para las acciones que tendrá los items del menú.
// No navega, corregir.
/* <MenuItem  
        onClick={ () => {handleClose(); setValue(1);} }
        component={Link}
        to="/services"
        
      >Services </MenuItem>
      <MenuItem  
        onClick={ () => {handleClose(); setValue(1);} }
        component={Link}
        to="/customsoftware"
        
      >Custom Software </MenuItem>
      <MenuItem  
        onClick={() => {handleClose(); setValue(1);}}
        component={Link}
        to="/mobileapps"
        
      >Custom 2 </MenuItem>
            <MenuItem  
        onClick={() => {handleClose(); setValue(1);}}
        component={Link}
        to="/websites"
     
      >Custom 3 </MenuItem> 
      */
// 8. Using Menus - Refresh Fix
// Verificar la URL cada vez que la página se carga o actualiza y que estas configurada en la pestaña activa correcta.
// es un ciclo de vida de React. usando useEffect.

// https://mui.com/guides/responsive-ui/
// https://mui.com/customization/breakpoints/
// https://mui.com/components/use-media-query/

/*1. em - unidad de respuesta estática basada en el tamaño de fuente del elemento principal. Si el elemento principal fontSize: 8px, el elemento secundario 1em = 8px.

Debido a que las unidades 'em' no siempre se refieren al mismo valor (si cambia el tamaño de fuente de un elemento, sus elementos secundarios tendrán un valor em diferente), de hecho, he comenzado a evitar su uso.

2. rem - unidad de respuesta estática basada en el tamaño de fuente de la página. Si HTML fontSize: 8px entonces 1rem = 8px.

Las unidades 'rem' siempre se refieren al tamaño de fuente de la página. Esto significa que siempre proporcionará un valor constante donde sea que se use en su aplicación. Esto ha hecho que 'rem' sea mi unidad de elección para casi todos los valores: fontSize, margin, padding, width / height, etc. Utilice 'rem' cuando desee definir un valor explícito, como width: 5rem. Esto calculará un valor de px fijo correspondiente a 5 * page fontSize, por lo que a medida que cambie el tamaño de la ventana, el ancho no cambiará; sin embargo, lo que la hace receptiva es que cuando se carga en pantallas más pequeñas, el valor calculado será proporcional.

3.% - unidad de respuesta fluida basada en las dimensiones del elemento principal. Este valor cambia constantemente el valor de px subyacente devuelto para mantener el porcentaje especificado. A medida que cambia el tamaño de la pantalla, esta unidad cambia en tiempo real manteniendo proporciones.

Desea utilizar '%' cuando desee que el valor cambie en tiempo real a medida que cambia el tamaño de la ventana. Entonces, un ancho: 100% siempre abarcará todo el ancho del espacio disponible, independientemente de los valores reales de px. Esto le permite definir elementos fluidos con tamaños relativos.

4. px - unidad fija estándar. Otras unidades calculan y devuelven los valores px respectivos. 1 px = 1/96 de 1 pulgada

La unidad 'px' solo debe usarse cuando desee un valor muy explícito, independientemente del tamaño de la pantalla. Esto a veces puede ser útil para espaciar ciertos elementos, pero en la práctica, trato de evitarlo y uso 'rem' en su lugar.*/

// 12. Using Media Queries
// useTheme da acceso al tema predeterminado dentro del componente
// Using MUI's breakpoint helpers useMediaQuery, useTheme
// cortar tabs y menu y dejar en la constante tabs
// Ternario matches si estamos en md y abajo, regresemos null : si estamos en una pantalla por encima de md regresemos el componente tabs
// md 900px debe desaparecer tabs
// Estilos responsive: cambiar tamaño de logo
// TamanaDeLogo, Offset

// 13. Drawers Overview
// Paneles son páginas que estan ancladas fuera de la pantalla ya sea en la parte izquierda o derecha, superior o inferior
// https://mui.com/components/drawers/
// https://mui.com/api/drawer/#css
// https://mui.com/components/material-icons/
// https://mui.com/components/icons/
// https://mui.com/components/icons/#svgicon

// 14. Using Drawers
// Las siguientes propiedades se utilizan en este sitio web de documentación para una usabilidad óptima del componente:

// iOS está alojado en dispositivos de gama alta. La transición de fondo se puede habilitar sin perder fotogramas. El rendimiento será lo suficientemente bueno.
// iOS tiene una función de "deslizar para volver" que interfiere con la función de descubrimiento, por lo que el descubrimiento debe estar deshabilitado.
// const iOS =
//   typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);
// <SwipeableDrawer disableBackdropTransition={!iOS} disableDiscovery={iOS} />;
// Cuando responsive es pequeño entonces usar MenuIcon
// Crear estilos para IconButton MenuIcon
// index.js:1 Warning: Failed prop type: MUI: You are providing an onClick event listener to a child of a button element.
// Prefer applying it to the IconButton directly.
// Solución:
/* <DrawerIconContainer 
// size="large"
onClick={ () => setOpenDrawer( !openDrawer) } 
> */

// 15. Lists Overview
// https://mui.com/components/lists/
// Las listas son un grupo continuo de texto o imágenes. Se componen de elementos que contienen acciones primarias y complementarias, que están representadas por iconos y texto.
// Componentes básicos
// import ListItem from '@mui/material/ListItem';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';

// 16. Using Lists – Setup
// HeaderDrawer.js: 
// remover estilo default: prop, 
// <List disablePadding > desactiva el paddgin por default
// divider inserta una division entre elementos
// button crea el estilo de boton
// Cada vez clic, se cierra el Drawer 

// 17. Using Lists – Styling
// Aplicar estilo a SwipeableDrawer, ListItemEstimate, ListItemTexDrawerItems, SwipeableDrawerIzquierdo

// 18. Using Lists – Selection
// selected prop
// Indicar que listItem esta seleccionado

// 19. Section Cleanup refactorización
// HeaderTabs.js: useEffect - refactor switch
// Crear una constante array routes, name link.
// array menuOptions agregar activeIndex, selectedIndex 
// case enlace  marcar como activo. if Asegurar  de que el valor no esta configurado. Y luego, si no lo es, seguimos adelante y establecemos los valores correctos.
// Crear Array con spread operator menuOptions, routes. recorrer con forEach los items. Dentro de la función flecha usar un switch para comparar el valor de la ruta actual (window.location.pathname)con el valor de la ruta que tiene el array.
// Si nuestro valor actual no es igual a nuestro indice activo current route
// Si route.selectedIndex existe y route.selectedIndex no es igual al indice seleccionado. entonces
// break;
// Agregar el case predeterminado
// Agregar dependencias al useEffect
// Quitar lo que se quiere refactorizar
   // if ( window.location.pathname === '/' && value !== 0) {
    //   setValue(0);
    // } else if ( window.location.pathname === '/services' && value !== 1 ) {
    //   setValue(1);
    // } else if ( window.location.pathname === '/revolution' && value !== 2 ) {
    //   setValue(2);
    // } else if ( window.location.pathname === '/about' && value !== 3 ) {
    //   setValue(3);
    // } else if ( window.location.pathname === '/contact' && value !== 4 ) {
    //   setValue(4);}
//  // switch ( window.location.pathname ) {
    //   case '/':
    //     if ( value !== 0 ) {
    //       setValue(0);
    //     }
    //     break;
    //   case '/services':
    //     if ( value !== 1 ) {
    //       setValue(1);
    //       setSelectedIndex( 0 );
    //     }
    //     break;
    //   case '/customsoftware':
    //     if ( value !== 1 ) {
    //       setValue(1);
    //       setSelectedIndex( 1 );
    //     }
    //     break;
    //   case '/mobileapps':
    //     if ( value !== 1 ) {
    //       setValue(1);
    //       setSelectedIndex( 2 );
    //     }
    //     break;
    //   case '/websites':
    //     if ( value !== 1 ) {
    //       setValue(1);
    //       setSelectedIndex( 3 );
    //     }
    //     break;
    //   case '/revolution':
    //     if ( value !== 2 ) {
    //       setValue(2);          
    //     }
    //     break;
    //   case '/about':
    //     if ( value !== 3 ) {
    //       setValue(3);          
    //     }
    //     break;
    //   case '/contact':
    //     if ( value !== 4 ) {
    //       setValue(4);          
    //     }
    //     break;
    //   case '/estimate':
    //     if ( value !== 5 ) {
    //       setValue(5);          
    //     }
    //     break;

    //   default:
    //     break;
    // }

// 20. Section Cleanup Continued. Refactorización
// HeaderTabs.js: tab contiene component, to, label. esos datos es posible obtener desde el Array
// tab services es diferente contiene más propiedades. Estas propiedades agregarlas al Array Routes de objetos en services
// <tabs> debajo crear un { para insertar JSX}
// routes.map lo que nos dará acceso a cada route individual junto con un indice
// Si las otras routes que no tienen una propiedad de aria que simplemente retorna undefined, es equivalente a no estableces la propiedad.
      /* <AntTab 
        // value= "0" 
        label="Home" 
        to="/"
        component={Link}
      />
      <AntTab 
        aria-owns={ anchorEl ? 'simple-menu' : undefined }
        aria-haspopup={ anchorEl ? 'true' : undefined }
        onMouseOver={ event => handleClick(event) }
        // value="1" 
        label="Services" 
        to="/services"
        component={Link}

        // id="basic-tab"
        // aria-controls="basic-menu"
        // aria-expanded={open ? 'true' : undefined}
      />
      <AntTab 
        // value="2" 
        label="The Revolution" 
        to="/revolution"
        component={Link}
      />
      <AntTab 
        // value="3" 
        label="About us" 
        to="/about"
        component={Link}
      />
      <AntTab 
        // value="4" 
        label="Contact Us" 
        to="/contact"
        component={Link}
      />
      <AntTab 
        // value="5" 
        label="Estimate" 
        to="/estimate"
        component={Link}
      /> */
// HeaderDrawer.js: refactorizar list, ListItemButton
     /* <ListItemButton
            component={Link}
            to='/'  
            divider   
            onClick={ () => {setOpenDrawer(false); setValue(0);} }  
            selected={ value === 0 }    
          >

          {
            value === 0 
              ? <ListItemTexDrawerItemsSelected>Home
                </ListItemTexDrawerItemsSelected>
              : <ListItemTexDrawerItems >Home
                </ListItemTexDrawerItems>
          }
          </ListItemButton>

          <ListItemButton
            component={Link}
            to='/services'
            divider 
            onClick={ () => {setOpenDrawer(false); setValue(1);} }  
            selected={ value === 1 }    
          >
           {
            value === 1 
              ? <ListItemTexDrawerItemsSelected>Services
                </ListItemTexDrawerItemsSelected>
              : <ListItemTexDrawerItems >Services
                </ListItemTexDrawerItems>
          }
          </ListItemButton>

          <ListItemButton
            component={Link}
            to='/revolution'
            divider 
            onClick={ () => {setOpenDrawer(false); setValue(2);} }  
            selected={ value === 2 }     
          >
       {
            value === 2 
              ? <ListItemTexDrawerItemsSelected>Revolution
                </ListItemTexDrawerItemsSelected>
              : <ListItemTexDrawerItems >Revolution
                </ListItemTexDrawerItems>
          }
          </ListItemButton>

          
          <ListItemButton
            component={Link}
            to='/about'
            divider 
            onClick={ () => {setOpenDrawer(false); setValue(3);} }  
            selected={ value === 3 }     
          >
          {
            value === 3 
              ? <ListItemTexDrawerItemsSelected>About us
                </ListItemTexDrawerItemsSelected>
              : <ListItemTexDrawerItems >About us
                </ListItemTexDrawerItems>
          }
          </ListItemButton>

          <ListItemButton
       
            component={Link}
            to='/contact'
            divider 
            onClick={ () => {setOpenDrawer(false); setValue(4);} }  
            selected={ value === 4 } 
              
          >
          {
            value === 4 
              ? <ListItemTexDrawerItemsSelected>Contact us
                </ListItemTexDrawerItemsSelected>
              : <ListItemTexDrawerItems >Contact us
                </ListItemTexDrawerItems>
          }
          </ListItemButton> */

// 21. Clipped AppBar
// HeaderDrawer.js: tener el drawer debajo de nuestra barra de navegación.
// MUI proporciona un ejemplo
// HeaderTabs.js:
// export const AppBarPosicion = styled(AppBar)(({ theme }) => ({  
//   zIndex: theme.zIndex.modal + 1
// }) );
// Queda debajo de la barra de navegación pero aplicar padding-top: 64px para que sea todas las opciones

// 2. Footer Setup
// Tiene un margen quitarlo en index.html - body - style="margin: 0"

// 3. Grid Overview
// La interfaz de usuario receptiva de Material Design se basa en un diseño de cuadrícula de 12 columnas.

// 5. Using Grids – Setup
// Al usar grid en el footer, este queda encima del fondo negro. usar grid container position absolute. y en el grid item usar el color texto en blanco

// Se crea 5 columnas

// 6. Using Grids – Navigation
// layout margin - spacing en grid container - Link
// 

// 7. Active Tab Footer Refactor
// Los link del footer funcionan pero no cambia a la pestaña activa. Estos link no estan conectados al sistema de enrutamiento.
// Refactorizar para que los link funcionen con el sistema de enrutamiento.
// App.js: pasar por props estos useState entre header -headertabs - footer
// const [value, setValue] = useState(0);
// Para saber que esta seleccionado en el menuItem
// const [selectedIndex, setSelectedIndex] = useState( 0 );

// 8. Responsive Grids
// md, medium: 900px esconder los enlaces del footer
// [theme.breakpoints.down('md')]: {
// display: 'none',
// },

// 9. Social Media Icons
// importar los .svg de facebook, twitter, instagram.
// crear un grid que contenga los .svg
// Pero no se muestran, pero si se puede observar que el footer cambio. Establecer un height y width para los .svg
// usar styled component para establecer el width y height
// Al dar clic en ImgSocialIcon Ir a la página.
// component={"a"}
// href="https://www.twitter.com/Humberto"
// rel="noopener noreferrer"
// target="_blank"
// Dar posicion a los.svg
// export const GridSocialContainer = styled(Grid) ( ({ theme }) => ({
   // desaparece el .svg
  //  position: 'absolute',
   // para que aparezcan los iconos.
  //  marginTop: '-6em',
  //  right: '1.5em',
   // Pero no se muestran correctamente. justify para mandar a la derecha
  //  justifyContent: 'flex-end',
// }));
//agregar espacio entre los iconos spacing={2} 
// en Mobile los iconos no desaparecen.

// 5. Hitting The Ground Running - Animations and The Landing Page
// 2. Animation Export & Bodymovin
// After Effect tiene un complemento llamado Bodymovin.
// https://aescripts.com/bodymovin/
// Exports animations to json files and pngs (if necessary).
// Animations can be played on the web via the bodymovin player or natively in iOS and Android through Lottie.
// For playing the animations, get the player in the extension panel, and load it in a browser.

// 3. Animation Configuration
// // 4. react-lottie
//https://www.npmjs.com/package/react-lottie-player
// Wapper of bodymovin.js
// bodymovin is Adobe After Effects plugin for exporting animations as JSON, also it provide bodymovin.js for render them as svg/canvas/html.

// 

// 4.1 React-Lottie Documentation
// https://www.npmjs.com/package/react-lottie-player
// npm install --save react-lottie-player

// 5. Creating The Hero Block
// LandingPage.js: 
// estará construido en blog, se encuentra uno encima de otro con el bloque en la parte superior

// 6. Styling The Hero Block
// el svg colocar a la derecha
// botones y texto quede en el medio
// grid item text y de la animacion se rompe el responsive en 900px. Agregar sm small props. Si solo establecemos un breakpoint sin ningun numero en el, se va a configurar la propiedad auto
// Significa que automaticamente comparte este espacio hasta que esten por debajo del breakpoint, cada una recibira su propia línea
// Al moficar el tamaño del navegador el texto y y el svg se muestran horizontalmente. intentando acomodar hasta que se quiebra y queda en block.
// svg establecer un tamaño minimo y maximo

// 7. Styling The Hero Block Continued
// Centrar botones justifyContent="center"
// Dar estilo a boton freeEstimate, learn more, flecha

// 8. Creating The Services Block Software
// LandingPage.js: segundo bloque. 
// Crear html usando material ui y estilos con styled component
// Crear estilos en theme.js

// 9. Creating The Services Block - Custom Software Continued

// 10. Creating The Services Block - iOSMobile App Development
// Crear html usando material ui y estilos con styled component
// Crear estilos en theme.js

// 11. Creating The Services Block - Website Development
// Crear html usando material ui y estilos con styled component
// Crear estilos en theme.js

// 12. Cards Overview
// https://mui.com/components/cards/
// Las tarjetas contienen contenido y acciones sobre un solo tema.
// Las tarjetas son superficies que muestran contenido y acciones sobre un solo tema.
// Deben ser fáciles de escanear en busca de información relevante y procesable. Los elementos, como texto e imágenes, deben colocarse en ellos de una manera que indique claramente la jerarquía.

// 13. Creating The Revolution Block
// dentro de CardContent voy a usar la grid para ayudar a desenrollar algunos de estos elementos porque
// Estoy diseñando esto de manera diferente a los ejemplos
// detras de card va un background. Usar grid
// Fuera de la Card, crear Grid container
//height: '100%',//que ocupe todo el espacio disponible. pero el contenedor solo contiene la tarjeta y nada más. Así que la imagen en realidad no tiene espacio para mostrarse. Y lo que se hace es agregar una height fija a nuestro contenedores para que la imagen sepa llenar
// Al grid container dar un height fijo para que la imagen se muestre.
/* <Grid // Para el background
container 
justifyContent="center"
style={{ height: '100em'}}          
> */
// Pero aún no aparece. ocupa el espacio pero no muestra. Agregar el width por default es 0
// Muestra el contenido y el background en columna
// <CardRevolution> position absolute 

// 14. Creating The Revolution Block Continued
// Margin para separar card con block
// gutterBottom: Si es verdadero, el texto tendrá un margen inferior.
// Responsives

// 15. Creating The Information Block
// crear html usando material ui y estilos con styled component.
// crear subtitulo2 en theme.js
// crear el bloque contenedor de la informacion DivInfoBackground
// La informacion va encima del background usando position absolute

// 16. Creating The Information Block Continued
// Emoji Unicode Reference &#128075;
// Eslint los emojis deben estar envueltas en etiqueta spam y un role img y tener acceso a descripcion con Aria-label
// Al tener dos códigos iguales con un absolute quedan uno encima del otro. 
// crear un grid container que contenga los dos. quitar los absolute. Pero agregar el absolute al container
// Agregar el grid container justifyContent='space-between'
/* <Grid 
item 
style={{ marginLeft: '3em'}}
sm
> */
// sm para qeudar responsive y además los grid item quedan con un space beetween pero no esta totalmente en las esquinas
// Al colocar los Breakpoints estos quedan en auto. cada uno hace diferentes comportamientos. sm quedaron about y contact separados pero no estan pegados en las esquinas. lg quedaron about y contact con space beetween. hacerlo responsives

// 17. Creating The Call To Action
// Se encuentra en la parte inferior de la mayoria de las páginas. Al usuario un recordatario de que puede ir y obtener un presupuesto gratis de la calculadora
// CalltoAction.js: crear html usando material ui y estilos con styled component. Uso de Grid (container, item) Typography

// 18. Creating The Call To Action Continued
// Establecer un background img. La imagen no aparece, debido a que se debe agregar un height fijo en el grid container padre style={{ height: '60em'}}.
// El texto queda arriba de la imagen. Usar position absolute.
// Texto quedar en el centro.
// Crear otro boton free estimate colocar al lado derecho del texto usando space-between. luego en responsive mobile queda mal. se debe ajustar

// 19. Finishing The Call To Action
// hacerlo responsives

// 20. Section Cleanup
// bug boton free estimate añadir router. Notar que Home queda seleccionado y no el boton
// Pasar el valor de tab al indice  onClick={ () => props.setValue(5) }
// Al refrezcar la pagina el boton free estimate queda seleccionado. en el useEffect se debe poner el setValue(5)
// Agregando a los botones los links
// Agregando props a los link routers

// 7. Custom Software Development Page - Middle Icons
// CustomSoftware.js:
// Diseño GridHeading width, 
// Flechas GridArrowContainer
// Para que el estilo hover no se aplique usar transparent
// Agregar relleno para los bordes
// Estilos a los Arrow
// Agregar Link a las flechas.
// Agregar a las flechas el indicar value y setvalue

// {/* <Grid item container direction='row'> */}
// no los deja en row porque al revisar en el navegador este ocupa todo el ancho, es por eso que se ve en columna
// <Grid item container direction='column'> este le da un width100%
// Al agregar md se indica que comparte el espacio disponible. Y al dar con una pantalla más pequeña, quedará en columna y no en row
// Que no ocupe todo el espacio disponible style={{ maxWidth: '20em'}}
// centrar con justifyContent='center' y alignItems='center'

// 8. Custom Software Development Page - Animations Row 1
// Tercera Sección
// las palabras y la imagen en fila. Agregar md para que no ocupe todo el ancho
// cuarta seccion
// copiar la tercera para obtener la cuarta, cambiar la animación

// 9. Custom Software Development Page - Row 2
// para que tercera y cuarta parta compartan espacio en row indicar md por default. cuando baja de 900px queda en columna
/* Tercera Sección 
<Grid 
item 
container 
direction='row' 
justifyContent='space-between'
>*/
// debajo de la tecera seccion. agregar una img arbol, debajo unas palabras, centrar

// 10. Custom Software Development Page - Responsive Design

// 11. Custom Software Development Page - Responsive Design Continued
// mobile centrado
// Agregar componente CallToAction
// Quitar los bordes
// Quitar GridMainContainer y agregar GridRowMainContainer para que el padding de callToAction tenga cero 0

// 14. iOSAndroid App Development Page - Responsive Design
// MobileAppsSegundaSeccion Animación svg ajustar tamaño
// MobileAppsTerceraSeccion html, ajustes de tamaño, agregar imagenes
// Ajustes responsives para las tres secciones

// 15. Website Development Page – Overview
// 16. Website Development Page – Setup

// 25. About Us Page – Team
// Avatar https://mui.com/components/avatars/
// 

// 7. Inputs, Validation, and Confirmation
// 4. Contact Information
// verticalAlign: 'bottom'
// deja el icono alineado al texto desde el bottom

// 9. Using TextFields - Validation
// error coloca el input en rojo
// helperText: para dar información de ayuda
// mostrar solo helperText solo cuando se tiene un error

// 10. Using TextFields - Validation Continued
// button disabled cuando name phone email message esten vacios
// Mover los useState al padre para luego pasar a los hijos usando props

// 13. Using Dialogs – Styling
// uso de fullscreen modal
// TransitionComponent={Transition}
// responsives modal
// PaperProps={{ style: { width: '100%'} }} ocupa el 100% del contenido

// 14. Section Cleanup
// zindex para modal debido a problema con el navbar

// useref: en vez de ocupar eventos de javascript, usar useref para agregar eventos de react. con esto se evita modificar el DOM y solo lo hace el DOM virtual. si se ocupa hooks, se puede usar useRef
// createref: no se puede ocupar en functional component, se debe usar useRef. createRef se ocupa para los class component

// 8. Google Cloud Functions
// firebase - crear un proyecto - dar un nombre - quitar analityc - comenzar - Compilacion - functions = esta opción se necesita tarjeta de crédito, no ocupar firebase . Otra alternativa es gratuita y más facil es SendGrid.

// SendGrid: Crear una cuenta - es gratis.
// SendGrid - Settings - Sender Authentication - Single Sender Verification - Get Started - llenar el formulario - verificar el correo - gmail y ver si llego correo de verificacion - verify sender email - debe de aparecer Verified con un checked.
// Generar un API Keys. Setting - API KEys - Create API Keys - API KEy Name - Restricted Access - Access Details - Mail Send - Mail Send (Solo Enviar) - Create & View - Copiar la API Key
// Instalacion de dependencias 
// https://www.npmjs.com/package/@sendgrid/mail
// npm i --save @sendgrid/mail
// Express: npm install --save express
// Nodemon: npm install --save-dev nodemon
// npm install dotenv --save
// npm install --save-dev jest
// npm install supertest --save-dev
// cors: npm install --save cors

// package.json: "start": "node index.js",
// sirve para iniciar el servidor y el modo producción para cuando se suba a heroku
// "dev": "nodemon index.js", para cuando se haga un cambio este se reinicia

// "test": "jest --verbose ./routes"
// para que solo escuche esa ruta
// crear unit test para probar el envio de correo.

// Al verificar que llega a la cuenta de gmail. Notar que el correo llega pero no se quiere eso cuando se esta en desarrollo.
//  SendGrid - Sandbox Mode

// test: retornar 400 status code

// jest y supertest se realiza un test unitario para probar el envio de correo.

// 10. Putting It All Together - Estimate Page
// 5. Question Navigation
// Problema es que al tener datos anidados este cambia en el nuevo array y array actual. lo cual no se debe hacer.
//Si queremos copiar los valores de un objeto a otras variables, en realidad, no copiamos los valores, sino la referencia al espacio en memoria que ocupan dichos objetos.cuando copiamos una variable de tipo objeto a, otras variables, no importa cuál de todas estas variables modifiquemos, en realidad, estamos modificando todas las variables con referencia a este mismo objeto. 
// let persona = {
//   nombre: “Nombre por defecto”,
//   edad: 0,
// }

// let juandc = persona
// juandc.nombre = “Juan David”

// console.log(juandc.nombre) // “Juan David”

// console.log(persona.nombre) // “Juan David” ???En vez de copiar los valores de nuestros objetos, cuando utilizamos el = lo que copiamos es la referencia a dicho objeto con sus respectivos valores.

// Afortunadamente, JavaScript nos permite solucionar este problema utilizando la función Object.assign
// let persona = {
//   nombre: “Nombre por defecto”,
//   edad: 0,
// }

// let juandc = Object.assign({} , persona)
// juandc.nombre = “Juan David”

// console.log(juandc.nombre) // “Juan David”

// console.log(persona.nombre) // “Nombre por defecto”

// Aún tenemos problemas cuando nuestros objetos tienen, a su vez, subobjetos y más subobjetos
// let persona = {
//   nombre: “Nombre por defecto”,
//   edad: 0,
//   mascota: {
//       nombre: “Mascota por defecto”,
//       edad: 0,
//   }
//   }
  
//   let juandc = Object.assign({} , persona)
//   juandc.mascota.nombre = “Chacarron”
  
//   console.log(juandc.mascota.nombre) // “Chacarron”
  
//   console.log(persona.mascota.nombre) // “Chacarron” ???????

// JSON.parse y JSON.stringify al rescate
// ¡A prueba de errores y problemas de referencias! La respuesta definitiva para copiar objetos de JavaScript sin morir en el intento es utilizando las funciones JSON.stringify y JSON.parse.

// La primera (JSON.stringify) se encarga de transformar los objetos en cadenas de texto mientras que, la segunda (JSON.parse) se encarga de transformar cadenas de texto en objetos.

// let persona = {
//   nombre: “Nombre por defecto”,
//   edad: 0,
//   mascota: {
//       nombre: “Mascota por defecto”,
//       edad: 0,
//   }
//   }
  
//   let juandc = JSON.parse(JSON.stringify(persona))
//   juandc.mascota.nombre = “Chacarron”
  
//   console.log(juandc.mascota.nombre) // “Chacarron”
  
//   console.log(persona.mascota.nombre) // “Mascota por defecto”!!

// 7. Question Navigation Fix
// Problema con el array al terminar o iniciar el arreglo. Al intentar presionar el sgte o anterior al no existir da error. undefined
// En los botones agregar la propiedad disabled para cuando no tenga mas elementos queda deshabilitado y cuando tenga elementos habilita el boton.
// disabled={ navigationPreviousDisabled() }

// 8. Multiple Option Selection
// Agregar al componente Grid otro componente Button
//* <Grid component={Button}
// Esto hace que los estilos del boton se apliquen a Grid. Deshabilitar estilos predeterminados del boton.
// Modificar el array selected a true o false. Para cambiar el estilo del boton.

// 9. Single Option Selection
// Determinar que es una opcion seleccionada con .subtitle Selected one.
// switch ( currentlyActive[0].subtitle ) {
// Al seleccionar, reconocer que es una opcion seleccionada con .subtitle Selected one. y no permitir que se seleccione otra opcion.
// const previousSelected = currentlyActive[activeIndex].options.filter(option => option.selected);
// case 'Selected one': verificar si existe una opcion seleccionada.
// Se tiene 3 opciones seleccionar una con el titulo y mostrar los arreglos 
// switch(newSelected.title){

  // 11. Calculate Estimate Cost
// Estimate Dialog.js total useState(0). funcion ccon el get total.
// Todas las preguntas excepto la primera, tiene un registro llamado cost.
// La última tiene cost con  un número multiplicador, es decir se sumara al total, luego multiplicar el total por el cost del id:6 how many users do you expect?
//getTotal - selections tendrá todas las opciones seleccionadas  actualmente en el estado de preguntas.
//  .map a todas las preguntas que tenemos para que nos nos regrese acceso a la pregunta individual y tomar la question.options.filter filtrar todas las preguntas que nos dará acceso individual. y verificar que la option.selected sea true
// agregar la funcion al boton estimate.
// Probar usando el boton de estimate y ver el console.log. notar que entrega los registros de las preguntas unos vacios y los que se han seleccionados los muestra con datos
// El registro 0 cambiando su propio seleccionada a true, siplemente cambiar al nuevo conjunto de preguntas.
// Para que no muestre los array vacios. fuera del filter agregar otro filter para que no muestre los vacios question.length > 0
// selections.map(options => options.map(option => cost += option.cost));
// el primer .map se obtiene el array de preguntas el segunda .map se obtiene el sub Array de option

// 15. Finishing Selection Review
// getCustomFeatures que selecciona las dos ultimas opciones.
// se modifica getTotal Se obtiene el cost multiplicador setUsers(userCost.title) userCost.cost;

// 16. Selection Review Websites Fix
//EstimatePrimeraSeccion - handleSelect: Borrar(dejar vacio) los previos seleccionados
// mostrar correctamente en EstimateDialog las opciones seleccionadas. y mostrarlas en pantalla

// Para que modal ocupe mas expacio
// fullWidth
// maxWidth='lg'

// 20. Sending The Estimate Continued
// Si selecciona un service y luego se presiona boton get estimate este da error. Debido a que no puede ir vacio.

