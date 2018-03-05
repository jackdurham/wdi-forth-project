import React from 'react';

const LoginForm = ({ handleChange, handleSubmit, user, error }) => {
  const formIsInvalid = !!error;

  return(
    <div className="image3">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="email"
                  placeholder="Enter Your Email Address"
                  onChange={handleChange}
                  value={user.email}
                  className="form-control spacing"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Your Password"
                  onChange={handleChange}
                  value={user.password}
                  className="form-control"
                />
                { error && <p>{error}</p> }
              </div>
              <button disabled={formIsInvalid} className="btn btn-secondary">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
