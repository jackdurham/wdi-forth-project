import React from 'react';
import ReactFilestack from 'react-filestack';


const RegisterForm = ({ handleChange, handleSubmit, user, errors, handleImageUpload }) => {
  const formIsInvalid = Object.keys(errors).some(key => errors[key]);

  return (
    <div className="image4">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="email"
                  placeholder="Email Address"
                  onChange={handleChange}
                  value={user.email}
                  className="form-control"
                />
                { errors && <p>{errors.email}</p> }
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  onChange={handleChange}
                  value={user.username}
                  className="form-control"
                />
                { errors && <p>{errors.username}</p> }
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                  value={user.password}
                  className="form-control"
                />
                { errors && <p>{errors.password}</p> }
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="passwordConfirmation"
                  placeholder="Confirm Password"
                  onChange={handleChange}
                  value={user.passwordConfirmation}
                  className="form-control"
                />
                { errors && <p>{errors.passwordConfirmation}</p> }
              </div>
              <div className="form-group">
                <label htmlFor="image">Choose a Profile Picture</label>
                <br />
                <ReactFilestack
                  apikey="AIuCIUuXNTxasxVkblVY6z"
                  buttonText="Upload a picture"
                  className="btn btn-secondary"
                  onSuccess={handleImageUpload}
                />
                { errors && <p>{errors.image}</p> }
              </div>

              <button disabled={formIsInvalid} className="btn btn-secondary">Register your account</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
