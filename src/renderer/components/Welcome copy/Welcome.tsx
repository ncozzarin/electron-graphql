/* eslint-disable prettier/prettier */
import Container from '@mui/material/Container';
// import { ThemeProvider } from '@mui/material/styles';
// import { Line } from 'react-chartjs-2';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ResponsiveAppBar from '../material-comp/ResponsiveAppBar';
import './welcome-styles.scss';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const Welcome = () => {

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
        <ResponsiveAppBar />
        <Container>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Item>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, iure! </Item>
                <Item>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, iure! </Item>
                <Item>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, iure! </Item>
              </Grid>
              <Grid item xs={6}>
                <Item>xs=4</Item>
                <Item>xs=8</Item>
              </Grid>
            </Grid>
          </Box>
            <h1>/ welcome from welcome comp</h1>
            {/* <Line
              data={data}
              // options={...}
              // {...props}
            /> */}
        </Container>
    </>
  );
}
export default Welcome;
