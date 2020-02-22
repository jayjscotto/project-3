import React from 'react';
import { Container, Grid, Paper, Box, Typography } from '@material-ui/core';
// import json file
// import shopping card component

const styles = {
  root: {
    margin: '2em auto',
    padding: '20px 20px'
  },
  header: {
    marginBottom: '0.5em'
	},
	card: {
		margin: '1em',
		padding: '20px'
	}
};

const ShopContainer = () => {
  return (
    <Container>
      <Grid container>
        <Grid item>
          <Paper style={styles.root}>
            <Box style={{ margin: '3em' }}>
              <Typography variant='h3' style={styles.header}>
                Habit-dashery
              </Typography>
              <Typography variant='body1'>
                One of the biggest challenges to creating eco-friendly daily
                habits is finding the items to help you do so! Items below are
                either completely reusable or completely compostable to ensure
                they are helping you on your quest for the best EcoHabits.
              </Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid container>
          <Grid item lg={4} md={6} s={12}>
            <Paper style={styles.card}>
              <Box style={{ margin: '3em' }}>
                <Typography variant='h3' style={styles.header}>
                  Habit-dashery
                </Typography>
                <Typography variant='body1'>
                  One of the biggest challenges to creating eco-friendly daily
                  habits is finding the items to help you do so! Items below are
                  either completely reusable or completely compostable to ensure
                  they are helping you on your quest for the best EcoHabits.
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ShopContainer;
