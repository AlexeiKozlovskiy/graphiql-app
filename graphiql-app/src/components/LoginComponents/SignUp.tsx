import { ChangeEvent, useEffect, useState } from 'react';
import { auth, registerWithEmailAndPassword } from '../../auth/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import InfoModal from '../InfoModal';
import SignUpValidator from '../../helpers/signUpValidator';
import { IStore } from '../../@types/store';
import AuthSignUpInput from './authSignUpInput';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [user, loading] = useAuthState(auth);
  const [showModal, setShowModal] = useState(false);
  const [APIError, setAPIError] = useState({
    type: '',
    message: '',
  });
  const [validState, setValidState] = useState({
    valid: false,
    details: {
      nameValid: {
        res: true,
        message: '',
      },
      emailValid: {
        res: true,
        message: '',
      },
      passwordValid: {
        res: true,
        message: '',
      },
    },
  });
  const userName = useSelector((store: IStore) => store.auth.authInfo.displayName);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const validator = new SignUpValidator();

  const handleCloseModalClick = () => {
    setShowModal(!showModal);
  };

  async function register() {
    const validationResult = validator.ValidateSignUp(name, email, password);
    setValidState(validationResult);
    if (validationResult.valid) {
      const msg = await registerWithEmailAndPassword(name, email, password);
      setAPIError(msg);
      if (msg.type === 'other') setShowModal(true);
    }
  }

  useEffect(() => {
    if (loading) {
      console.log('loading...');
      return;
    }
    if (user) {
      if (!userName) {
        setShowModal(true);
        dispatch({ type: 'login/loggedIn', payload: true });
        setTimeout(() => {
          navigate('/graphiql', { replace: true });
        }, 2000);
      } else {
        navigate('/graphiql', { replace: true });
      }
    }
  }, [user, loading, navigate, dispatch, userName]);

  return (
    <div className="signup__form">
      <div className="signup__form-bigtext">Sign up</div>
      <p className="signup__form-subtext">Join the GraphGl community.</p>
      <AuthSignUpInput
        name="name"
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        errorType={!validState.details.nameValid.res}
        errorMessage={validState.details.nameValid.message}
      />
      <AuthSignUpInput
        name="email"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        errorType={!validState.details.emailValid.res || APIError.type === 'email'}
        errorMessage={validState.details.emailValid.message || APIError.message}
      />
      <AuthSignUpInput
        name="password"
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        errorType={!validState.details.passwordValid.res || APIError.type === 'password'}
        errorMessage={validState.details.passwordValid.message || APIError.message}
      />
      <button className="signup__form-btn-signup btn-signup btn" onClick={register}>
        Get started now
      </button>
      <div className="signin__form-text--under-container">
        Already a user?{' '}
        <Link to="/signin" className="signin__form-text--highlight">
          Log in
        </Link>
      </div>
      {showModal && (
        <InfoModal
          text={APIError.type === 'other' ? APIError.message : 'Sign up successful'}
          onClickOutside={handleCloseModalClick}
        />
      )}
    </div>
  );
}

export default SignUp;
