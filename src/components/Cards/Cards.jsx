import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } } ) => {
    if(!confirmed){
        return 'Loading...';
    }


    return(
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                 <h2>Infected</h2>

                  <h1>
                   <CountUp start={0} end={confirmed.value} duration={3} separator=","  />
                   </h1>
                 <h3>{new Date(lastUpdate).toDateString()}</h3>
                 <p> Number of Active cases of COVID-19</p>
                 </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                  <h2>Recovered</h2>

                  <h1>
                   <CountUp start={0} end={recovered.value} duration={3} separator=","  />
                   </h1>
                 <h3>{new Date(lastUpdate).toDateString()}</h3>
                 <p> Number of recovered people from COVID-19</p>
                 </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                 <h2>Deaths</h2>

                  <h1>
                   <CountUp start={0} end={deaths.value} duration={3} separator=","  />
                   </h1>
                 <h3>{new Date(lastUpdate).toDateString()}</h3>
                 <p> Number of deaths due to COVID-19</p>
                 </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;