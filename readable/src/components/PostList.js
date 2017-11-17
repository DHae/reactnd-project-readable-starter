import React from 'react';
import List, { ListItemText } from 'material-ui/List';
import { Edit, DeleteForever } from 'material-ui-icons';
import VoteScore from './VoteScore';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Card, { CardHeader } from 'material-ui/Card';
import { timeFormat } from '../utils/config';
import IconButton from 'material-ui/IconButton';
import PropTypes from 'prop-types';
import Avatar from 'material-ui/Avatar';

const Content = ({ item }) => (
  <div style={{ paddingLeft: 10 }}>
    <ListItemText
      primary={
        <Link
          to={`/${item.category}/${item.id}`}
          style={{ textDecoration: 'none', color: 'black' }}
        >
          {item.title}
        </Link>
      }
      
    />
  </div>
);

const PostList = ({ items, handleDelete, handleVote }) => {
  return (
    <List>
      {items &&
        items.length > 0 &&
        items.map((item, i) => (
          <div key={i}>
            <Card style={{ padding: 5, margin: 5 }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  paddingLeft: 16,
                  paddingRight: 16
                }}
              >
                  {
                    item.category === 'react' &&
                    <CardHeader
                      avatar= {
                        <Avatar style={{backgroundColor: '#61dafb'}}>
                          R                     
                        </Avatar>
                      }
                      title={item.title} 
                      subheader={`Sent ${moment(item.timestamp).format(
                        timeFormat
                      )} - Author: ${item.author} - Comments: ${item.commentCount}`}>
                      <Link
                        to={`/${item.category}/${item.id}`}
                        style={{ textDecoration: 'none', color: 'black' }}
                      >
                        {item.title}
                      </Link>
                    </CardHeader>
                  }
                  {
                    item.category === 'redux' &&
                    <CardHeader
                    avatar= {
                      <Avatar style={{backgroundColor: '#764abc'}}>
                        R                     
                      </Avatar>
                    }
                    title={item.title} 
                    subheader={`Sent ${moment(item.timestamp).format(
                      timeFormat
                    )} - Author: ${item.author} - Comments: ${item.commentCount}`}>
                    <Link
                        to={`/${item.category}/${item.id}`}
                        style={{ textDecoration: 'none', color: 'black' }}
                      >
                        {item.title}
                      </Link>
                    </CardHeader>
                  }
                  {
                    item.category === 'udacity' &&
                    <CardHeader
                    avatar= {
                      <Avatar style={{backgroundColor: '#02b4e4'}}>
                        U                     
                      </Avatar>
                    }
                    title={item.title} 
                    subheader={`Sent ${moment(item.timestamp).format(
                      timeFormat
                    )} - Author: ${item.author} - Comments: ${item.commentCount}`}>
                    <Link
                        to={`/${item.category}/${item.id}`}
                        style={{ textDecoration: 'none', color: 'black' }}
                      >
                        {item.title}
                      </Link>
                    </CardHeader>
                  }
                
                <div
                    style={{
                      flex: '1 1 auto'
                    }}
                  />
                <div>
                  <Link
                    to={`post/edit/${item.id}`}
                    style={{ textDecoration: 'none', color: 'black' }}
                  >
                    <IconButton aria-label="Edit">
                      <Edit />
                    </IconButton>
                  </Link>
                  <IconButton aria-label="DeleteForever">
                    <DeleteForever onClick={() => handleDelete(item)} />
                  </IconButton>
                </div>                
              </div>            
              <VoteScore item={item} handleVote={handleVote}  secondItem={true}/>
            </Card>
          </div>
        ))}
    </List>
  );
};

Content.propTypes = {
  item: PropTypes.object.isRequired
};

PostList.propTypes = {
  items: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleVote: PropTypes.func.isRequired
};

export default PostList;