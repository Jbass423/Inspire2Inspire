import React from 'react';
import { useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { ImageList, ImageListItem } from '@mui/material';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import CommentSection from '../CommentSection/CommentSection';
import CommentMapping from '../CommentSection/CommentMapping';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

function InfoPage() {
  const images = useSelector(store => store.images);
  const dispatch = useDispatch();

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/images/${id}`);
      dispatch({ type: 'DELETE_IMAGE', payload: id });
    } catch (error) {
      console.error('Error deleting image:', error);
    }
  };

  return (
    <>
      <div style={{
        background: 'rgb(0,36,33)',
        background: 'linear-gradient(90deg, rgba(0,36,33,1) 0%, rgba(9,121,25,1) 35%, rgba(0,153,255,1) 100%)',
        padding: '20px',
        borderRadius: '8px',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
        justifyContent: 'center',
      }}>
        {images.map((img, index) => (
          <RecipeReviewCard key={index} img={img} handleDelete={handleDelete} />
        ))}
      </div>
    </>
  );
}

const RecipeReviewCard = ({ img, handleDelete }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings" onClick={() => handleDelete(img.id)}>
            <MoreVertIcon />
          </IconButton>
        }
        title={`Image ${img.id}`}
        subheader={img.date}
      />
      <CardMedia
        component="img"
        height="194"
        image={img.url}
        alt={`Image ${img.id}`}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {img.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Comments:</Typography>
          <CommentSection imageId={img.id} />
          <CommentMapping />
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default InfoPage;
