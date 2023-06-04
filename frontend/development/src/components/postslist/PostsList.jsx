import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { NavLink } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';


export default function PostsList() {
  
  const posts = [
    {
      title: 'Mimo',
      slug: 'mimo',
      img: {
        teaserURL: 'mimo_140.jpg',
        alt: 'mimo image teaser',
      },
      description: 'Sei in grado di farti capire a gesti prima della scadenz del tempo?'
    },
    {
      title: 'Mimo',
      slug: 'mimo',
      img: {
        teaserURL: 'mimo_140.jpg',
        alt: 'mimo image teaser',
      },
      description: 'Sei in grado di farti capire a gesti prima della scadenz del tempo?'
    },
    {
      title: 'Mimo',
      slug: 'mimo',
      img: {
        teaserURL: 'mimo_140.jpg',
        alt: 'mimo image teaser',
      },
      description: 'Sei in grado di farti capire a gesti prima della scadenz del tempo?'
    },
  ];


  const postsComponents = posts.map((post, i) => (
    <Grid key={i} item xs={12} md={4}>
      
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          {/* <CardMedia
            component="img"
            height="140"
            image={"/assets/img/" + post.img.teaserURL}
            alt={post.img.alt}
          /> */}
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {post.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {post.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            <NavLink to={'/article/' + post.slug}>
              Leggi
            </NavLink>

          </Button>
        </CardActions>
      </Card>

    </Grid>

  ));


  return (
    <Container>
      <h1>Posts</h1>
      <Grid container spacing={3}>
        {postsComponents}
      </Grid>
    </Container>
  );
}