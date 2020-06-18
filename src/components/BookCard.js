import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, Button} from '@material-ui/core';

const useStyles = makeStyles({
    root: {
      maxWidth: 300,
      margin: '0 auto',
      padding: '5px',
      border: '2px solid #2E4272',
      color: '#2E4272',
    },
    media: {
      height: "200px",
      wdith: "200px",
      margin: '0 auto',
    },

    author:{
        fontSize: '20px'
    },

    description:{
        maxHeight: '75px',
        overflow: 'auto',
        color: '#2E4272',
    },

    link:{
        margin: '0 auto',
        '&:hover':{
            textDecoration: 'underline'
        }
    }
});
  

export default function BookCard(props) {
    const classes = useStyles();
    let imgSrc = '//:0';
    if(props.book.volumeInfo.imageLinks){
        imgSrc = props.book.volumeInfo.imageLinks.thumbnail;
    }
    return (
      <Grid container direction='row'>
          <Grid item xs={false} lg={4}>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image={imgSrc}
                    title={props.book.volumeInfo.title}
                    alt={props.book.volumeInfo.title}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.book.volumeInfo.title}
                    </Typography> 
                    <Typography gutterBottom variant="h5" component="h2" className={classes.author}>
                        {props.book.volumeInfo.authors? 'by ' + props.book.volumeInfo.authors.map((author, index, arr) => {
                            if(index === 0){
                                return ' ' + author + ', '
                            }
                            if(index < (arr.length-1)){
                                return author + ', '
                            }else{
                                return author + '.'
                            }
                        }): 'by unknown'}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" className={classes.description}>
                        {props.book.volumeInfo.description}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" href={props.book.volumeInfo.infoLink} className={classes.link}>
                    More info
                    </Button>
                </CardActions>
            </Card>
          </Grid>
          <Grid item xs={false} lg={4}>

          </Grid>
      </Grid>
    );
  }