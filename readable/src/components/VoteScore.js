import React from 'react';
import { upVote, downVote } from '../utils/config';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import FavoriteIcon from 'material-ui-icons/Favorite';
import ThumbsDownIcon from 'material-ui-icons/ThumbDown';
import { Link } from 'react-router-dom';
import Button from 'material-ui/Button';
import { CardActions } from 'material-ui/Card';
import { red, lightBlue } from 'material-ui/colors';

const favoRed = red[500];
const thumbsDownBlue = lightBlue[900]; 

const VoteScore = ({ item, handleVote, secondItem }) => (
  <CardActions disableActionSpacing>
    <IconButton aria-label="FavoriteIcon">
      <FavoriteIcon onClick={() => handleVote(item, upVote)} color={favoRed}/>
    </IconButton>    
    <IconButton aria-label="ThumbsDownIcon">
      <ThumbsDownIcon onClick={() => handleVote(item, downVote)} color={thumbsDownBlue} />
    </IconButton>
    <div>{item.voteScore}</div>
    <div style={{flex: '1 1 auto'}} />
    {
      secondItem !== undefined &&
      <Link
        to={`/${item.category}/${item.id}`}
        style={{ textDecoration: 'none', color: 'black' }}
      >
        <Button dense color="primary">
          Learn More
        </Button>
      </Link>      
    }
  </CardActions>
);

VoteScore.propTypes = {
  item: PropTypes.object.isRequired,
  handleVote: PropTypes.func.isRequired,
  secondItem: PropTypes.bool.isNotRequired
};

export default VoteScore;