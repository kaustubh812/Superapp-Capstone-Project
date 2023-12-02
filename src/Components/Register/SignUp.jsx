import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './SignUp.module.css';

const SignUp = () => {
  const [formValues, setFormValues] = useState({
    check: false,
    name: '',
    username: '',
    email: '',
    mobile: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    username: '',
    email: '',
    mobile: '',
    check: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    setFormValues({ ...formValues, [name]: newValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;
    const newErrors = { ...errors };

    // Validation logic for each field
    if (!formValues.name.trim()) {
      newErrors.name = 'Field is Required';
      isValid = false;
    } else {
      newErrors.name = '';
    }

    if (!formValues.username.trim()) {
      newErrors.username = 'Field is Required';
      isValid = false;
    } else {
      newErrors.username = '';
    }

    if (!formValues.email.trim()) {
      newErrors.email = 'Field is Required';
      isValid = false;
    } else {
      newErrors.email = '';
    }

    if (!formValues.mobile.trim()) {
      newErrors.mobile = 'Field is Required';
      isValid = false;
    } else {
      newErrors.mobile = '';
    }

    if (!formValues.check) {
      newErrors.check = 'Please tick this';
      isValid = false;
    } else {
      newErrors.check = '';
    }

    setErrors(newErrors);

    if (isValid) {
      window.localStorage.setItem('userInfo', JSON.stringify(formValues));
      navigate('./CategoryPage');
    }
  };

  return (
    <div>
      <h1>Super app</h1>
      <h3>Create your new account</h3>

      <form>
        <input
          type="text"
          onChange={(e) => handleChange(e)}
          className={style.input_text}
          style={{ top: '230px' }}
          placeholder='   Name'
          name='name'
        />
        {errors.name && <p className={style.error} style={{ top: '263px' }}>{errors.name}</p>}

        <input
          type="text"
          onChange={(e) => handleChange(e)}
          className={style.input_text}
          style={{ top: '290px' }}
          placeholder='   UserName'
          name='username'
        />
        {errors.username && <p className={style.error} style={{ top: '323px' }}>{errors.username}</p>}

        <input
          type="text"
          onChange={(e) => handleChange(e)}
          className={style.input_text}
          style={{ top: '350px' }}
          placeholder='   Email'
          name='email'
        />
        {errors.email && <p className={style.error} style={{ top: '383px' }}>{errors.email}</p>}

        <input
          type="text"
          onChange={(e) => handleChange(e)}
          className={style.input_text}
          style={{ top: '410px' }}
          placeholder='   Mobile'
          name='mobile'
        />
        {errors.mobile && <p className={style.error} style={{ top: '444px' }}>{errors.mobile}</p>}

        <input
          type="checkbox"
          onChange={(e) => handleChange(e)}
          name="check"
          className={style.checkbox}
        />
        <p id={style.checktext}>Share my registration data with Superapp</p>
        {errors.check && <p className={style.error} style={{ top: '500px' }}>{errors.check}</p>}

        <button type="submit" className={style.signUpButton} onClick={(e) => handleSubmit(e)}>
          SIGN UP
        </button>

        <p className={style.terms} style={{ top: '580px' }}>By clicking on Sign up. You agree to Superapp Terms and Conditions of Use</p>

        <p className={style.terms} style={{ top: '630px' }}>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp Privacy Policy</p>
      </form>
    </div>
  );
};

export default SignUp;
