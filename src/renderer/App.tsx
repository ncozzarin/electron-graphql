/* eslint-disable prettier/prettier */
// import Container from '@mui/material/Container';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
// import { ThemeProvider } from '@mui/material/styles';
import Participants from './components/Participants/Participants';
import Datagrid from './components/Datagrid/Datagrid';
import Welcome from './components/Welcome/Welcome';
// import './App.scss';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00f',
    },
    secondary: {
      main: '#f0f',
    },
  },
});

export default function App() {
  return (
    <>
      <CssBaseline />
      <Router>
        <ThemeProvider theme={theme}>
        <MenuComp />
        </ThemeProvider>
        <Container>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/participants" element={<Participants />} />
            <Route path="/fiveK" element={<h2>5K</h2>} />
            <Route path="/tenK" element={<h2>10K</h2>} />
            <Route path="/data" element={<Datagrid />} />
          </Routes>
        {/* </Container> */}
      </Router>
    </>

