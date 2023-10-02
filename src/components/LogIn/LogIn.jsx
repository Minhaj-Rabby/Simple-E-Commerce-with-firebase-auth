import React, { useContext, useState } from 'react';
import './LogIn.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const LogIn = () => {
  const [error, setError] = useState('');
  const { signIn } = useContext(AuthContext);

  const handleSignIn = (event) => {
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      
      console.log(email, password);

      if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&?"]).{8,}$/.test(password)) {
          setError('Password Must Contain a Uppercase, a Lowercase , a Special character, a Digit   and 8 Character.');
          return;
      }

      signIn(email,password)
      .then(result=>{
          const loggedUser = result.user
          // console.log(loggedUser);
          form.reset();
          setError('');
          alert(`${email} Log In Successfully`);
      })
      .catch(error => {
          console.log(error);
          setError(error.message);

      })
  }

  return (
    <div className='form-container'>
      <h2 className='form-title'>Login</h2>
      <form onSubmit={handleSignIn} className='form-control'>
        <div className='form-control'>
          <label htmlFor='email'>Email</label>
          <input type="email" name="email" id="email" required />
        </div>
        <div className='form-control'>

          <label htmlFor='password'>Password</label>
          <input type="password" name="password" id="password" required />
        </div>

        <input type="submit" className='btn-submit' value="login" />

      </form>
      <p><small>New To This site?<Link to='/signup'>Create New Account</Link></small></p>
    <p><small className='text-error'>{error}</small></p>

    </div>
  )
}

export default LogIn