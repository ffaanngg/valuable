import config from "../config.json";

function Login() {
  function signInWithDiscord() {
    window.location = config.oauth;
  }

  return (
    <div className="w-screen h-screen bg-black overflow-y-scroll">
      <div className="p-32 my-4 text-neutral-100">
        <div className="text-5xl font-bold font-heading">
          <h1 className="float-left text-slate-100">Valuab</h1>
          <h1 className="text-slate-300">le</h1>
        </div>

        <h3 className="text-2xl my-4 text-slate-300">How to play?</h3>
        <p className="text-lg">
          Are you lucky enough to form the most expensive word?
          <br />
          Play at the exact time when the crypto-prices are high and get the on
          leaderboard!
          <br />
          When you make a winning guess, the current crypto prices for the coins
          you used are fetched, summed up to see the value of your word.
        </p>

        <button
          className="border-white border-2 p-3 font-heading hover:border-black hover:text-black hover:bg-white rounded my-5"
          onClick={signInWithDiscord}
        >
          Sign in with Discord
        </button>
      </div>
    </div>
  );
}

export default Login;
