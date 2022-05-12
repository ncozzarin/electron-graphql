/* eslint-disable prettier/prettier */
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './welcome-styles.scss';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  margin: theme.spacing(4),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Welcome = () => {
  return (
    <>
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={4}>
            <Grid item xs={6}>
              <div>
                <h1>Upcoming</h1>
                <Item>
                  {' '}
                  <h2>List view</h2>Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Quis, iure!{' '}
                </Item>
              </div>
              <div>
                <h1>Past</h1>
                <Item>
                  {' '}
                  <h2>List view</h2>Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Quis, iure!{' '}
                </Item>
              </div>
              <div>
                <h1>Draft events</h1>
                <Item>
                  {' '}
                  <h2>List view</h2>Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Quis, iure!{' '}
                </Item>
              </div>
            </Grid>
            <Grid item xs={6}>
              <Item>
                {' '}
                <h1>New blank event</h1>Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Id fugiat, amet rem quam incidunt beatae
                obcaecati ipsa fuga. Beatae quae sed fugiat incidunt natus ex
                cumque veritatis, ducimus quaerat iure!
              </Item>
              <Item>
                {' '}
                <h2>List view</h2>Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Id fugiat, amet rem quam incidunt beatae
                obcaecati ipsa fuga. Beatae quae sed fugiat incidunt natus ex
                cumque veritatis, ducimus quaerat iure!
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};
export default Welcome;
