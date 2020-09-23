import React from "react";

import auth0 from "auth0-js";

const Auth = () => {
  const auth = new auth0.WebAuth({
    domain: process.env.REACT_APP_AUTH0_DOMAIN,
    clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
    redirectUri: process.env.REACT_APP_AUTH0_REDIRECT_URL,
    responseType: "token id_token",
    scope: "openid profile email",
  });
  return <div></div>;
};

export default Auth;
