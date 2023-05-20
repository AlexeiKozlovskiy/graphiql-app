import { useEffect, useState } from 'react';
import { auth, logInWithEmailAndPassword, signInWithGoogle } from '../../auth/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import InfoModal from '../InfoModal';
import { IStore } from '../../@types/store';
import AuthSignInInput from './authSignInInput';
import { FormattedMessage } from 'react-intl';
import { AuthMsg } from '../../languages/authMsg';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, loading] = useAuthState(auth);
  const [showModal, setShowModal] = useState(false);
  const [APIError, setAPIError] = useState({
    type: '',
    message: '',
  });
  const userName = useSelector((store: IStore) => store.auth.authInfo.displayName);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCloseModalClick = () => {
    setShowModal(!showModal);
  };

  async function logIn(email: string, password: string) {
    const msg = await logInWithEmailAndPassword(email, password);
    setAPIError(msg);
    if (msg.type === 'other') setShowModal(true);
  }

  useEffect(() => {
    if (loading) {
      console.log('loading...');
    }
    if (user) {
      if (!userName) {
        setShowModal(true);
        dispatch({ type: 'login/loggedIn', payload: true });
        setTimeout(() => {
          navigate('/graphiql');
        }, 1000);
      } else {
        navigate('/graphiql');
      }
    }
  }, [user, loading, navigate, dispatch, userName]);

  return (
    <div className="signin__form">
      <div className="signin__form-bigtext">
        <FormattedMessage id={AuthMsg.signInMainHeader} />
      </div>
      <p className="signin__form-subtext">
        <FormattedMessage id={AuthMsg.signInSubHeader} />
      </p>
      <button className="signin__form-btn-google btn-google btn" onClick={signInWithGoogle}>
        <FormattedMessage id={AuthMsg.signInGoogleBtn} />
      </button>
      <p className="signin__form-hr">
        <FormattedMessage id={AuthMsg.signInOrHr} />
      </p>
      <AuthSignInInput
        type="email"
        placeholder="Your email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        errorType={APIError.type}
        errorMessage={APIError.message}
      />
      <AuthSignInInput
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        errorType={APIError.type}
        errorMessage={APIError.message}
      />
      <Link to="/reset" className="signin__form-text--highlight signin__form-text--right">
        <FormattedMessage id={AuthMsg.signInForgotPwd} />
      </Link>
      <button
        className="signin__form-btn-login btn-login btn"
        onClick={() => logIn(email, password)}
      >
        <FormattedMessage id={AuthMsg.signInLogInBtn} />
      </button>
      <div className="signin__form-text--under-container">
        <FormattedMessage id={AuthMsg.signInNoAccount} />{' '}
        <Link to="/signup" className="signin__form-text--highlight">
          <FormattedMessage id={AuthMsg.signInSignUp} />
        </Link>
      </div>
      {showModal && (
        <InfoModal
          formatId={AuthMsg.signInSuccess}
          text={APIError.message || 'Successfully logged in'}
          onClickOutside={handleCloseModalClick}
        />
      )}
    </div>
  );
}

export default SignIn;
