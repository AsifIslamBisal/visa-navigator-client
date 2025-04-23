import React, { useContext, useState } from 'react';
import { Link, useNavigate } from "react-router-dom"; 
import { AuthContext } from '../Provider/AuthProvider';

const SignUp = () => {

    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();
  
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: '',
      image: null
    });
  
    const handleChange = (e) => {
      if (e.target.name === "image") {
        setFormData({ ...formData, image: e.target.files[0] });
      } else {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      }
    };
  
    const handleRegister = (e) => {
      e.preventDefault();
      const { name, email, password, image } = formData;
  
      console.log({ name, email, password, image });
  
      if (!createUser) {
        console.error('Auth context not available');
        return;
      }
  
      createUser(email, password)
        .then(result => {
          console.log("User Created:", result.user);
          e.target.reset();
          navigate('/login'); 
        })
        .catch(error => {
          console.log('ERROR:', error.message);
        });
    };
  


    return (
        <div>
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col ">
            <div className="text-center lg:text-left">
              <h1 className="text-2xl font-bold">Register now!</h1>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <form onSubmit={handleRegister} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text" name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email" name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="input input-bordered"
                    required
                  />
                </div>
                
                
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Profile Picture</span>
                  </label>
                  <input
                    type="file" name="image"
                    accept="image/*"
                    onChange={handleChange}
                    className="file-input file-input-bordered"
                  />
                </div>
  
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password" name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Register</button>
                </div>
                
              </form>
              <p className="ml-4 mb-4 mr-4">
                Already have an account? Please <Link to="/signin" className="text-blue-500">Login</Link>.
              </p>
              
            </div>
          </div>
        </div>
      </div>
    );
};

export default SignUp;