"use client";
import Link from 'next/link';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faEye, faEyeSlash, faUser, faGlobe } from '@fortawesome/free-solid-svg-icons';

const RegistrationForm = () => {
  const [siteName, setSiteName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [country, setCountry] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Site Name:', siteName);
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Country:', country);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Agree to Terms:', agreeTerms);
  };

  return (
    <section className='register-sec d-flex align-items-center' style={{ height: '100vh' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5">
            <div className="card register-card px-2 py-5  bg-white">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3 input-group">
                    <span className="input-group-text">
                      <FontAwesomeIcon icon={faGlobe} />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      id="siteName"
                      value={siteName}
                      onChange={(e) => setSiteName(e.target.value)}
                      placeholder='Site Name'
                      required
                    />
                  </div>
                    <div className="row">
                        <div className="col-lg-6">
                        <div className="mb-3 input-group">
                    <span className="input-group-text">
                      <FontAwesomeIcon icon={faUser} />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder='First Name'
                      required
                    />
                  </div>
                        </div>
                        <div className="col-lg-6">
                        <div className="mb-3 input-group">
                    <span className="input-group-text">
                      <FontAwesomeIcon icon={faUser} />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder='Last Name'
                      required
                    />
                  </div>
                        </div>
                    </div>
                  <div className="mb-3 input-group">
                    <span className="input-group-text">
                      <FontAwesomeIcon icon={faGlobe} />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      id="country"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      placeholder='Country'
                      required
                    />
                  </div>
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
                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="agreeTerms"
                      checked={agreeTerms}
                      onChange={(e) => setAgreeTerms(e.target.checked)}
                      required
                    />
                    <label className="form-check-label" htmlFor="agreeTerms">
                      I agree to Frappe Terms of Service, Privacy Policy & Cookie Policy.
                    </label>
                  </div>
                  <button type="submit" className="btn btn-dark btn-sm w-100">Register</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
