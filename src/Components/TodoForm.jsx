import React, { Component } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

class TodoForm extends Component {
  render() {
    return (
      <Formik
        initialValues={{ title: '', description: '' }}
        validationSchema={Yup.object({
          title: Yup.string().required('Title is required')
        })}
        onSubmit={(values, { resetForm }) => {
          this.props.onAdd({ ...values, completed: false });
          resetForm();
        }}
      >
        {({ values, handleChange, errors, touched }) => (
          <Form>
            <Box sx={{ mt: 3 }}>
              <TextField
                fullWidth
                name="title"
                label="Title"
                value={values.title}
                onChange={handleChange}
                error={touched.title && Boolean(errors.title)}
                helperText={touched.title && errors.title}
                margin="normal"
              />
              <TextField
                fullWidth
                name="description"
                label="Description"
                value={values.description}
                onChange={handleChange}
                margin="normal"
              />
              <Button type="submit" variant="contained" sx={{ mt: 2 }}>
                Add Task
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    );
  }
}

export default TodoForm;
