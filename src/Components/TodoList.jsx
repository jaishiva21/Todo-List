import React, { Component } from 'react';
import { List, ListItem, ListItemText, IconButton, Checkbox } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

class TodoList extends Component {
  render() {
    return (
      <List>
        {this.props.tasks.map((task, index) => (
          <ListItem key={index} secondaryAction={
            <IconButton edge="end" onClick={() => this.props.onDelete(index)}>
              <DeleteIcon />
            </IconButton>
          }>
            <Checkbox
              edge="start"
              checked={task.completed}
              onChange={() => this.props.onToggle(index)}
            />
            <ListItemText
              primary={task.title}
              secondary={task.description}
              style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
            />
          </ListItem>
        ))}
      </List>
    );
  }
}

export default TodoList;
