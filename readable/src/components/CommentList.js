import React from 'react';
import List, { ListItem, ListItemText } from 'material-ui/List';
import { Edit, DeleteForever } from 'material-ui-icons';
import VoteScore from './VoteScore';
import moment from 'moment';
import Card from 'material-ui/Card';
import CommentForm from './CommentForm';
import { timeFormat } from '../utils/config';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';

const Content = ({ item }) => (
  <div style={{ paddingLeft: 10 }}>
    <ListItemText
      primary={item.body}
      secondary={`${moment(item.timestamp).format(
        timeFormat
      )} - Author: ${item.author}`}
    />
  </div>
);

const CommentList = ({
  items,
  handleDelete,
  handleVote,
  editComment,
  handleEditButton,
  handleFinishEdit
}) => {
  return (
    <List>
      {items &&
        items.length > 0 &&
        items.map((item, i) => (
          <div key={i}>
            <Card style={{ padding: 5, margin: 5 }}>
              {!(editComment && editComment.id === item.id) && (
                <ListItem>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      flex: '1 1 auto'
                    }}
                  >
                    
                    <Content item={item} />
                    <div
                      style={{
                        flex: '1 1 auto'
                      }}
                    />
                    
                    <IconButton aria-label="Edit">
                      <Edit onClick={() => handleEditButton(item)} />
                    </IconButton>
                    <IconButton aria-label="DeleteForever">
                      <DeleteForever onClick={() => handleDelete(item)} />
                    </IconButton>
                    
                  </div>
                </ListItem>
              )}
              {editComment &&
                editComment.id === item.id && (
                  <CommentForm
                    comment={item}
                    handleFinishEdit={handleFinishEdit}
                  />
                )}
              <VoteScore item={item} handleVote={handleVote} />
            </Card>
          </div>
        ))}
    </List>
  );
};

Content.propTypes = {
  item: PropTypes.object.isRequired
};

CommentList.propTypes = {
  items: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleVote: PropTypes.func.isRequired,
  editComment: PropTypes.bool,
  handleEditButton: PropTypes.func.isRequired,
  handleFinishEdit: PropTypes.func.isRequired
};

export default CommentList;