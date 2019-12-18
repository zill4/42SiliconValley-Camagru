import React from 'react';
import  './imageViewerStyles.css';
import Post from '../Post/post.js';
import posts from '../../data/posts.json';
import ProjectCards from '../ProjectCards/projectCards.js'
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CardActionArea from '@material-ui/core/CardActionArea';


const styles = theme => ({
     card: {
          maxWidth: 345,
        },
        media: {
          height: 140,
        },
   });

const ImageViewer = props => {  
     const {classes, post} = props;
          return(<div className="bot">
                    <Grid container spacing={1}>
                         <Grid item xs={4}>
                         <Card className={classes.card}>
                              <CardActionArea>
                              <CardMedia
                                   className={classes.media}
                                   image="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/s960x960/80805629_2542206669189266_5537335634894520320_o.jpg?_nc_cat=105&_nc_ohc=BC5f-MMjBzsAQlEBZ-XfXfPtKgx1EzLKDjvzb1KCU7dB9UXkltpUKLAJw&_nc_ht=scontent-sjc3-1.xx&oh=b94f588e2ece455070e3d00c835474c7&oe=5EAFB951"
                                   title="Contemplative Reptile"
                              />
                              <CardContent>
                                   <Typography gutterBottom variant="h5" component="h2">
                                   Resume
                                   </Typography>
                                   <Typography variant="body2" color="textSecondary" component="p">
                                   My objective is to provide value and creativity to an organization’s web application development team while my technical and business skills. I am laser focused on results and delivery, and I am passionate about working with developers in helping them succeed. My core technical competencies include C/C++, JS, and Python.
                                   </Typography>
                              </CardContent>
                              </CardActionArea>
                              <CardActions>
                              <Button size="small" color="primary">
                                   Share
                              </Button>
                              <Button size="small" color="primary">
                                   Download
                              </Button>
                              </CardActions>
                         </Card>
                         </Grid>
                         <Grid item xs={4}>
                         <Card className={classes.card}>
                              <CardActionArea>
                              <CardMedia
                                   className={classes.media}
                                   image="https://66.media.tumblr.com/a58bcef5668713531a7e45282069cda3/tumblr_ovr8wlPHpR1wxdq3zo1_500.gifv"
                                   title="Contemplative Reptile"
                              />
                              <CardContent>
                                   <Typography gutterBottom variant="h5" component="h2">
                                   Portfolio
                                   </Typography>
                                   <Typography variant="body2" color="textSecondary" component="p">
                                        Projects from Hackathons, personal ideas, school assignments and more!
                                   </Typography>
                              </CardContent>
                              </CardActionArea>
                              <CardActions>
                              <Button size="small" color="primary">
                                   Share
                              </Button>
                              <Button size="small" color="primary">
                                   Download
                              </Button>
                              </CardActions>
                         </Card>
                         </Grid>
                         <Grid item xs={4}>
                         <Card className={classes.card}>
                              <CardActionArea>
                              <CardMedia
                                   className={classes.media}
                                   image="https://i1.sndcdn.com/artworks-000486259404-atjni8-t500x500.jpg"
                                   title="Contemplative Reptile"
                              />
                              <CardContent>
                                   <Typography gutterBottom variant="h5" component="h2">
                                   Social
                                   </Typography>
                                   <Typography variant="body2" color="textSecondary" component="p">
                                   Check out my LinkedIn, Twitter, Angellist, Medium, and more!
                                   </Typography>
                              </CardContent>
                              </CardActionArea>
                              <CardActions>
                              <Button size="small" color="primary">
                                   Share
                              </Button>
                              <Button size="small" color="primary">
                                   Download
                              </Button>
                              </CardActions>
                         </Card>
                         </Grid>
                    </Grid>
               </div>
               );
};
export default withStyles(styles)(ImageViewer);
