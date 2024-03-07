import React, { useEffect } from 'react';
import { Grid } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import Layout from '../shared/components/Layout';

import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCars } from '../store/actions/itemActions';

import AnnoucmentBox from '../shared/components/AnnoucmentBox';
import TaskCardList from '../shared/components/TaskCardLis';
import TableOfElectricCars from '../shared/components/TableOfElectricCars';
import GridOfChartCards from '../shared/components/GridOfChartCards';

const useStyles = makeStyles({
  container: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridRowGap: '50px',
  },
});

const Dashboard = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const items = useSelector((state) => state.item.cars);
  useEffect(() => {
    if (!items?.length) {
      dispatch(fetchAllCars());
    }
  }, [dispatch, items]);

  console.log('items', items);
  // const deleteExistItem = (id) => {
  //   dispatch(deleteItem(id, true));
  // };

  return (
    <>
      <Layout>
        <Grid className={classes.container}>
          <GridOfChartCards />
          <AnnoucmentBox />
          <TaskCardList />
          <TableOfElectricCars />
        </Grid>
      </Layout>
    </>
  );
};

export default Dashboard;
