import { ThemeProvider ,createTheme} from '@mui/material';

import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import CoinPage from './pages/CoinPage';
import HomePage from './pages/HomePage';

const theme = createTheme({
 
 palette:{
  primary:{
    main: '#14161a',
    // light: 'white'
  }
 }
})
function App() {

  return (
    <ThemeProvider theme={theme}>

    <BrowserRouter>
      <div style={{backgroundColor:theme.palette.primary.main, color:'white', minHeight:'100vh'}}>
        <Header/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/coins/:id' element={<CoinPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
