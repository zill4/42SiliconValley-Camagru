import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import './projectCards.css';

const styles = theme => ({
    // card: {
    //   maxWidth: 250,
    //   maxHeight: 450
    // },
    // media: {
    //   height: '50%',
    //   width: '50%',
    //   paddingTop: '56.25%', // 16:9
    // },
    // actions: {
    //   display: 'flex',
    // },
    // expand: {
    //   transform: 'rotate(0deg)',
    //   marginLeft: 'auto',
    //   transition: theme.transitions.create('transform', {
    //     duration: theme.transitions.duration.shortest,
    //   }),
    // },
    // expandOpen: {
    //   transform: 'rotate(180deg)',
    // },
    // avatar: {
    //   backgroundColor: blue[200],
    // },
  });

const ProjectCards = props => {
    const {classes, post} = props;
    console.log(props);
    return (      
        <Card body>
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </Card>
  );
};

export default withStyles(styles)(ProjectCards);