import React, { useContext, useState } from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';


const SignUp = () => {
    const [error, setError] = useState('');
    const { createUser } = useContext(AuthContext);

    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirmPassword.value;
        console.log(email, password, confirm);

        if (password !== confirm) {
            setError('Your password is not matches');
            return;
        }
        else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&?"]).{8,}$/.test(password)) {
            setError('Password Must Contain a Uppercase, a Lowercase , a Special character, a Digit   and 8 Character.');
            return;
        }
        createUser(email,password)
        .then(result=>{
            const loggedUser = result.user
            console.log(loggedUser);
            form.reset();
            setError('');
          
        })
        .catch(error => {
            console.log(error);
            setError(error.message);
 
        })
    }

    return (
        <div className='form-container'>
            <h2 className='form-title'>SignUp</h2>
            <form onSubmit={handleSignUp} className='form-control'>
                <div className='form-control'>
                    <label htmlFor='email'>Email</label>
                    <input type="email" name="email" id="email" required />
                </div>
                <div className='form-control'>

                    <label htmlFor='password'>Password</label>
                    <input type="password" name="password" id="password" required />
                </div>
                <div className='form-control'>

                    <label htmlFor='confirmPassword'>Confirm Password</label>
                    <input type="password" name="confirmPassword" id="confirmPassword" required />
                </div>

                <input type="submit" className='btn-submit' value="login" />

            </form>
            <p><small>Already have an Account?<Link to='/login'>SignIn</Link></small></p>
            <p className='text-error'>{error}</p>

        </div>
    )
}

export default SignUp