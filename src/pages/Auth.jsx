// Reference : https://discordjs.guide/oauth2/#implicit-grant-flow

function Auth() {

  const fragment = new URLSearchParams(window.location.hash.slice(1));

  const accessToken = fragment.get("access_token")
    

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
