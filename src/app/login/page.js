"use client";
import Link from 'next/link';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <section className='login-sec d-flex align-items-center' style={{ height: '100vh' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5">
            <div className="card login-card p-5 bg-white">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3 input-group">
                    <span className="input-group-text">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </span>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder='info@example.com'
                      required
                    />
                  </div>
                  <div className="mb-3 input-group">
                    <span className="input-group-text">
                      <FontAwesomeIcon icon={faLock} />
                    </span>
                    <input
                      type={showPassword ? "text" : "password"}
                      className="form-control"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder='Your Password'
                      required
                    />
                    <span className="input-group-text" onClick={() => setShowPassword(!showPassword)} style={{ cursor: 'pointer' }}>
                      <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                    </span>
                  </div>
                  <div className='login-forgot'>
                    <p className='text-center'><Link href={'#'}>Forgot Password?</Link></p>
                  </div>
                  <button type="submit" className="btn btn-dark btn-sm w-100">Login</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
