import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Card,
  CardContent,
  Grid,
  Typography,
  colors,
  makeStyles
} from '@material-ui/core';

import DoneIcon from '@material-ui/icons/Done';
import ProgressBar from "@ramonak/react-progress-bar";


import DescUser from '../DescUser/DescUser';



const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    width: "100%"
  },
  avatar: {
    backgroundColor: colors.red[600],
    height: 56,
    width: 56
  },
  differenceIcon: {
    color: colors.red[900]
  },
  differenceValue: {
    color: colors.red[900],
    marginRight: theme.spacing(1)
  },
  contenteFlex: {
    display: "flex",
    marginLeft: "1rem"
  },
  icon: {
    marginLeft: "1rem"
  },
  typographyvalue: {
    display: "flex",
    justifyContent: "flex-end",
    alignContent: "flex-end"
  }
}));




const CardDash = ({ className, dado, ...rest }) => {
  const classes = useStyles();


  const porcentagenPreenchido = (dado.redirecionados / dado.redirecionamentos) * 100

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardContent>
        <Grid
          container
          justify="space-between"
          spacing={3}
        >


          <Grid item xs={12} >
            <DescUser 
              nomeCampanha={dado.nomecampanha}
            />
          </Grid>

          <Grid item xs={12} className={classes.contenteFlex}>
            <Typography noWrap>
              {dado.linkcampanha}{dado.id}
            </Typography>
            <DoneIcon className={classes.icon}/>
          </Grid>

          
          <Grid item xs={12}>
            <Typography variant="caption" display="block" gutterBottom >
              {dado.email_user}
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <ProgressBar completed={Math.round(porcentagenPreenchido)} />
          </Grid>




          <Grid item xs={12} className={classes.contenteFlex}>

            <Grid item xs={6}>
              <Typography variant="subtitle1" display="block" gutterBottom >
                <strong>Grupos</strong>
              </Typography>
            </Grid>

            <Grid item xs={6} className={classes.typographyvalue}>
              <Typography variant="subtitle1" display="block" gutterBottom >
                {dado.qtd_gruops}
              </Typography>
            </Grid>

          </Grid>

          <Grid item xs={12} className={classes.contenteFlex}>

            <Grid item xs={6}>
              <Typography variant="subtitle1" display="block" gutterBottom >
                <strong>Redirecionamentos</strong>
              </Typography>
            </Grid>

            <Grid item xs={6} className={classes.typographyvalue}>
              <Typography variant="subtitle1" display="block" gutterBottom >
                {dado.redirecionamentos}
              </Typography>
            </Grid>

          </Grid>

          <Grid item xs={12} className={classes.contenteFlex}>

            <Grid item xs={6}>
              <Typography variant="subtitle1" display="block" gutterBottom >
                <strong>Redirecionados</strong>
              </Typography>
            </Grid>

            <Grid item xs={6} className={classes.typographyvalue}>
              <Typography variant="subtitle1" display="block" gutterBottom >
                {dado.redirecionados}
              </Typography>
            </Grid>

          </Grid>




          <Grid item xs={12} className={classes.contenteFlex}>


          </Grid>




          
        </Grid>
      </CardContent>
    </Card>
  );
};

CardDash.propTypes = {
  className: PropTypes.string
};

export default CardDash;
