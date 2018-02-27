import React from 'react';

const LoginForm = ({ handleChange, handleSubmit, user }) => {
  return(
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          name="email"
          placeholder="Enter Your Email Address"
          onChange={handleChange}
          value={user.email}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="password"
          placeholder="Enter Your Password"
          onChange={handleChange}
          value={user.password}
          className="form-control"
        />
      </div>
      <button className="main-button">Login</button>
    </form>
  );
};

export default LoginForm;
