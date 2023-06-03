import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter } from 'react-router-dom';
import { Theme } from './utils/Theme';
import {ThemeProvider} from '@mui/material';

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={Theme}>
          <NavBar />
        </ThemeProvider>

      </BrowserRouter>

    </>

  );
}

export default App;
