/* eslint-disable prettier/prettier */
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Route } from 'react-router-dom';
import MenuComp from '../MenuComp';
import Datagrid from '../Datagrid/Datagrid';
import Participants from '../Participants/Participants';
import Checkpoints from '../Checkpoints/Checkpoints';

export default function Dashboard() {
  return (
    <>
      <MenuComp />
        <Route path="/participants" element={<Participants />} />
        <Route path="/fiveK" element={<h2>5K</h2>} />
        <Route path="/tenK" element={<h2>10K</h2>} />
        <Route path="/data" element={<Datagrid />} />
        <Route path="/checkpoints" element={<Checkpoints />} />
        <Route path="/dashboard" element={<Dashboard />} />

      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <h1>/ welcome from Dashboards comp</h1>
        </Box>
      </Container>
    </>
  );
}
