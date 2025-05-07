import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import {
  TextField,
  Button,
  Typography,
  Box
} from '@mui/material';
import { withRouter } from '../utils/withRouter';

// Validation schema using Yup
const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(4, 'Too Short!').required('Required'),
});

class Login extends Component {
  handleSubmit = (values, actions) => {
    const { email, password } = values;

    if (email === 'admin@gmail.com' && password === 'admin123') {
      localStorage.setItem('isLoggedIn', 'true');
      this.props.navigate('/dashboard');
    } else {
      alert('Invalid credentials');
      actions.setSubmitting(false);
    }
  };

  render() {
    return (
      <Box
        sx={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1498050108023-c5249f4df085)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            backdropFilter: 'blur(10px)',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            borderRadius: 4,
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            p: 4,
            maxWidth: 400,
            width: '90%',
          }}
        >
          <Typography
            component="h1"
            variant="h5"
            textAlign="center"
            gutterBottom
            sx={{ color: '#fff', fontWeight: 'bold' }}
          >
            Login
          </Typography>

          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={LoginSchema}
            onSubmit={this.handleSubmit}
          >
            {({ errors, touched, isSubmitting }) => (
              <Form>
                <Field
                  as={TextField}
                  name="email"
                  label="Email"
                  fullWidth
                  margin="normal"
                  autoComplete="email"
                  error={touched.email && !!errors.email}
                  helperText={touched.email && errors.email}
                  InputProps={{ style: { backgroundColor: 'rgba(255, 255, 255, 0.8)' } }}
                />

                <Field
                  as={TextField}
                  name="password"
                  label="Password"
                  type="password"
                  fullWidth
                  margin="normal"
                  autoComplete="current-password"
                  error={touched.password && !!errors.password}
                  helperText={touched.password && errors.password}
                  InputProps={{ style: { backgroundColor: 'rgba(255, 255, 255, 0.8)' } }}
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  disabled={isSubmitting}
                  sx={{
                    mt: 2,
                    py: 1,
                    fontWeight: 'bold',
                    letterSpacing: 1,
                    transition: '0.3s',
                    '&:hover': {
                      backgroundColor: '#1565c0',
                    },
                  }}
                >
                  LOGIN
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      </Box>
    );
  }
}

export default withRouter(Login);
