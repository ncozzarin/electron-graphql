/* eslint-disable prettier/prettier */
import { MemoryRouter as Router, Route, Routes } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
// import { createTheme } from '@mui/material';
import ResponsiveAppBar from './components/material-comp/ResponsiveAppBar';
import Welcome from './components/Welcome/Welcome';

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#00f',
//     },
//     secondary: {
//       main: '#f0f',
//     },
//   },
// });

export default function App() {
  return (
    <>
      <CssBaseline />

      <Router>
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<Welcome />} />
        </Routes>
      </Router>
    </>
  );
}
