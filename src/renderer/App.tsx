/* eslint-disable prettier/prettier */
import Container from '@mui/material/Container';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import Participants from './components/Participants/Participants';
import MenuComp from './components/MenuComp';
import './App.scss';
import Datagrid from './components/Datagrid/Datagrid';

export default function App() {
  return (
    <>
      <Router>
        <MenuComp />
        <Container>
          <Routes>
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="/participants" element={<Participants />} />
            <Route path="/fiveK" element={<h2>5K</h2>} />
            <Route path="/tenK" element={<h2>10K</h2>} />
            <Route path="/data" element={<Datagrid />} />
          </Routes>
        </Container>
      </Router>
   </>
  );
}
