export default function LeaderboardCard(props) {
  return (
    <div className="rounded-lg bg-neutral-800 mx-6 my-2 p-2 items-center drop-shadow-md">
      <div className="text-neutral-400 text-xl font-heading ml-4 flex justify-between">
        <h1 className="whitespace-nowrap overflow-hidden text-ellipsis">
          {props.data.playerName}
        </h1>
        <h1>${Math.round(props.data.price)}</h1>
      </div>
    </div>
  );
}
