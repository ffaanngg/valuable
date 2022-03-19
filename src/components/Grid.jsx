import Tile from "./Tile";

export default function Grid(props) {
  return (
    <div className="flex flex-col items-center justify-center grow">
      <div className="grid gap-2 p-10 box-border grid-cols-6">
        {Array.from(Array(6)).map(() => (
          <div>
            {Array.from(Array(6)).map(() => (
              <Tile colorCode={1}>a</Tile>
            ))}
          </div>
        ))}
      </div>
      <div className="border-2 border-rose-400 p-24 mb-5"></div>
    </div>
  );
}
