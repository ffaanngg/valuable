// Reference : https://discordjs.guide/oauth2/#implicit-grant-flow
import { useParams } from 'react-router-dom';

function Auth() {

  const params = useParams();
  const accessToken = params['access_token'];

  if (!accessToken) {
    // Someone tried to access the route on its own
    window.location = "/";
  }

  // Access token has been stored so we redirect to / so that we can load Play.jsx
  localStorage.setItem("accessToken", accessToken);

  window.location = "/";
  
  return null;
}

export default Auth;
