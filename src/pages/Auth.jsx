// Reference : https://discordjs.guide/oauth2/#implicit-grant-flow

function Auth(){

    const fragment = new URLSearchParams(window.location.hash.slice(1));
    const [accessToken, _] = [fragment.get('access_token'), fragment.get('token_type')];
    if(!accessToken){
        // Someone tried to access the route on its own
        window.location = '/'
    }

    localStorage.setItem('accessToken',accessToken)

    window.location = '/'
    return (null);
}

export default Auth;