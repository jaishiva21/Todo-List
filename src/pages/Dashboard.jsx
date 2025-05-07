import React, { Component } from 'react';
import {
  Button,
  Container,
  Typography,
  TextField,
  Box,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Paper,
  Divider,
} from '@mui/material';
import { Delete, CheckCircle, RadioButtonUnchecked } from '@mui/icons-material';
import { Formik, Form, Field } from 'formik';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    this.state = {
      tasks,
    };
  }

  componentDidMount() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      window.location.href = '/login';
    }
  }

  handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    window.location.href = '/ ';
  };

  handleAddTask = (values, actions) => {
    const newTask = {
      id: Date.now(),
      title: values.title,
      description: values.description,
      completed: false,
    };

    const updatedTasks = [...this.state.tasks, newTask];
    this.setState({ tasks: updatedTasks });
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    actions.resetForm();
  };

  handleToggle = (id) => {
    const updatedTasks = this.state.tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    this.setState({ tasks: updatedTasks });
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  handleDelete = (id) => {
    const updatedTasks = this.state.tasks.filter((task) => task.id !== id);
    this.setState({ tasks: updatedTasks });
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  render() {
    return (
      <Box
        sx={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          py: 6,
          px: 2,
        }}
      >
        <Container maxWidth="sm">
          <Box
            sx={{
              mb: 3,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              p: 2,
              borderRadius: 2,
              boxShadow: 3,
            }}
          >
            <Typography variant="h4" fontWeight="bold">
              Dashboard
            </Typography>
            <Button variant="outlined" color="error" onClick={this.handleLogout}>
              Logout
            </Button>
          </Box>

          {/* Add Task Form with Glass Effect */}
          <Paper
            elevation={4}
            sx={{
              p: 3,
              borderRadius: 3,
              mb: 4,
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
              border: '1px solid rgba(255, 255, 255, 0.18)',
            }}
          >
            <Typography variant="h6" gutterBottom>
              Add New Task
            </Typography>
            <Formik initialValues={{ title: '', description: '' }} onSubmit={this.handleAddTask}>
              {() => (
                <Form>
                  <Field
                    as={TextField}
                    name="title"
                    label="Title"
                    fullWidth
                    required
                    margin="normal"
                  />
                  <Field
                    as={TextField}
                    name="description"
                    label="Description"
                    fullWidth
                    multiline
                    rows={2}
                    margin="normal"
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{
                      mt: 2,
                      fontWeight: 'bold',
                      py: 1.2,
                      backgroundColor: '#1976d2',
                      '&:hover': { backgroundColor: '#1565c0' },
                    }}
                  >
                    Add Task
                  </Button>
                </Form>
              )}
            </Formik>
          </Paper>

          {/* Tasks List with Glass Effect */}
          <Box>
            <Typography variant="h6" gutterBottom sx={{ color: '#fff', textShadow: '1px 1px 2px rgba(0,0,0,0.6)' }}>
              Your Tasks
            </Typography>
            <Paper
              elevation={3}
              sx={{
                borderRadius: 2,
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                border: '1px solid rgba(255, 255, 255, 0.18)',
              }}
            >
              <List>
                {this.state.tasks.length === 0 ? (
                  <Typography variant="body2" sx={{ p: 2, textAlign: 'center' }}>
                    No tasks added yet.
                  </Typography>
                ) : (
                  this.state.tasks.map((task, index) => (
                    <React.Fragment key={task.id}>
                      <ListItem
                        secondaryAction={
                          <>
                            <IconButton onClick={() => this.handleToggle(task.id)} edge="end">
                              {task.completed ? (
                                <CheckCircle color="success" />
                              ) : (
                                <RadioButtonUnchecked />
                              )}
                            </IconButton>
                            <IconButton onClick={() => this.handleDelete(task.id)} edge="end">
                              <Delete color="error" />
                            </IconButton>
                          </>
                        }
                      >
                        <ListItemText
                          primary={task.title}
                          secondary={task.description}
                          primaryTypographyProps={{
                            sx: {
                              textDecoration: task.completed ? 'line-through' : 'none',
                              fontWeight: task.completed ? 'normal' : 'medium',
                            },
                          }}
                        />
                      </ListItem>
                      {index !== this.state.tasks.length - 1 && <Divider />}
                    </React.Fragment>
                  ))
                )}
              </List>
            </Paper>
          </Box>
        </Container>
      </Box>
    );
  }
}

export default Dashboard;
