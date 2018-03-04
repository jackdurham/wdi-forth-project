import React from 'react';
import Axios from 'axios';

import RegisterForm from './RegisterForm';
import Auth from '../../lib/Auth';

class Register extends React.Component {

  state = {
    user: {
      email: '',
      username: '',
      password: '',
      passwordConfirmation: '',
      image: ''
    },
    errors: {}
  };

  handleChange = ({ target: { name, value } }) => {
    const user = Object.assign({}, this.state.user, { [name]: value });
    const errors = Object.assign({}, this.state.errors, { [name]: '' });
    this.setState({ user, errors });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    Axios
      .post('/api/register', this.state.user)
      .then(res => {
        Auth.setToken(res.data.token);

        this.props.history.push('/');
      })
      .catch(err => this.setState({errors: err.response.data.errors}));
  }

  handleImageUpload = result => {
    const user = Object.assign({}, this.state.user, { image: result.filesUploaded[0].url });
    this.setState({ user });
  }

  render() {
    return(
      <RegisterForm
        user={this.state.user}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        handleImageUpload={this.handleImageUpload}
        errors={this.state.errors}
      />
    );
  }
}

export default Register;
