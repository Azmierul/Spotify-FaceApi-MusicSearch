import React from "react";
import { Alert } from "react-bootstrap";
import { connect } from "react-redux";
import Header from "./Header";
import { Redirect } from "react-router-dom";

const Home = (props) => {
  const 
    REACT_APP_CLIENT_ID = "2d2417f9b70843029c568bc0339028d9",
    REACT_APP_AUTHORIZE_URL = 'https://accounts.spotify.com/authorize',
    REACT_APP_REDIRECT_URL = 'http://localhost:3000/redirect';

  const handleLogin = () => {
    window.location = `${REACT_APP_AUTHORIZE_URL}?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URL}&response_type=token&show_dialog=true`;
  };

  const { isValidSession, location } = props;
  const { state } = location;
  const sessionExpired = state && state.session_expired;

  return (
    <React.Fragment>
      {isValidSession() ? (
        <Redirect to="/dashboard" />
      ) : (
        <div className="login">
          <Header/>
          {sessionExpired && (
            <Alert variant="info">Session expired. Please login again.</Alert>
          )}
          <button type="submit" onClick={handleLogin}>
            Login to spotify
          </button>
        </div>
      )}
    </React.Fragment>
  );
};

export default connect()(Home);
