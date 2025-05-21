import { useState } from 'react';
import styles from '../css/LoginPage.module.css';
import apple from '../assets/icon/apple.png';    
import google from '../assets/icon/google.png';
import facebook from '../assets/icon/facebook.png';    
import { LargeButton } from '../components/button.jsx';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h1 className={styles.logo}>Slotion</h1>
      <h2 className={styles.subtitle}>Login</h2>

      <form className={styles.form}>
        <label className={styles.label}>Username</label>
        <input className={styles.input} type="text" placeholder="Username" />

        <label className={styles.label}>Password</label>
        <div className={styles.passwordWrapper}>
          <input
            className={styles.input}
            type={showPassword ? "text" : "password"}
            placeholder="Password"
          /> 
        </div>
        <span className={styles.forgot}>Forgot password?</span>
      </form>

      <div className={styles.loginButton}>
      <LargeButton text="Log in" type="primary" onClick={() => navigate('/')}/>
      </div>

      <div className={styles.orDivider}>
        <hr className={styles.line} />
        <span className={styles.orText}>Or</span>
        <hr className={styles.line} />
      </div>

      <div className={styles.socials}>
        <button className={styles.socialBtn}><img src={apple} alt="Apple" /></button>
        <button className={styles.socialBtn}><img src={google} alt="Google" /></button>
        <button className={styles.socialBtn}><img src={facebook} alt="Facebook" /></button>
      </div>



      <hr className={styles.bottomLine} />

      <div className={styles.signup}>
        Don't have an account?{' '}
        <a href="/signup" className={styles.signupLink}>Sign up here</a>
      </div>
    </div>
  );
}

export default Login;