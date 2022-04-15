export default function LeaderboardCard(props) {
  return (
    <div className="rounded-lg bg-neutral-800 mx-6 my-4 p-2 items-center drop-shadow-md">
      <div className="text-neutral-400 text-2xl font-heading flex justify-center">
        <h1 className="whitespace-nowrap overflow-hidden text-ellipsis">
          {props.data.playerName}
        </h1>
        <h1>${Math.round(props.data.price * 100)/100}</h1>
      </div>
    </div>
  );
}
