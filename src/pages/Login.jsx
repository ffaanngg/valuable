import config from "../config.json";

function Login() {
  function signInWithDiscord() {
    window.location = config.oauth;
  }

  return (
    <div className="w-screen h-screen bg-black bg-main bg-opacity-100 overflow-y-scroll">
      <div className="p-32 my-4 text-neutral-400">
        <div className="text-5xl font-bold font-heading">
          <h1 className="float-left text-slate-100 hover:text-green-400">Valuab</h1>
          <h1 className="text-neutral-400 hover:text-yellow-400">le</h1>
        </div>

        <p className="text-xl ml-2">
          Patience is key!

        </p>
        <h3 className="text-2xl mt-5 mb-3 text-neutral-300">How to play?</h3>
        <p className="text-lg w-2/3">
          The structure of the game is similar to the original WORDLE except everytime you get the correct word, your letters are 
          changed to a cryptocurrency based on the cryptocurrency's first letter and the value is summed up.
          <br/>
          <br/>
          The goal? Play the perfect time when all the prices are peaking to get the highest value of the day.
          <br/>
          <br/>
          Made by <strong><a className="text-blue-400 hover:underline-offset-2 hover:underline" href="https://ffaanngg.github.io">Shiv</a></strong> for <a className="text-blue-400 hover:underline-offset-2 hover:underline" href="https://discord.gg/builders">BuilderContests</a>
        </p>

        <button
          className="border-white text-white border-2 p-3 font-heading hover:border-black hover:text-black hover:bg-white rounded my-5"
          onClick={signInWithDiscord}
        >
          Sign in with Discord
        </button>
      </div>
    </div>
  );
}

export default Login;
