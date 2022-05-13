/* eslint-disable prettier/prettier */
import Container from '@mui/material/Container';
import { Line } from 'react-chartjs-2';
import Box from '@mui/material/Box';
import MenuComp from '../MenuComp'
import './checkpoints-styles.scss';
// import ResponsiveAppBar from '../material-comp/ResponsiveAppBar';


const Checkpoints = () => {

  const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ];

  const data = {
    labels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45],
    }]
  };

  const config = {
    type: 'line',
    data,
    options: {}
  };


  return (
    <>
        <MenuComp />
        <Container>
          <Box sx={{ flexGrow: 1 }}>

            <h1>/ welcome from welcome comp</h1>
            <Line
              data={data}
              options={config.options}
              // {...props}
            />
            </Box>
        </Container>
    </>
  );
}
export default Checkpoints;
