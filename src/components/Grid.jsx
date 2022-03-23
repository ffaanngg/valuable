import Tile from "./Tile";

export default function Grid(props) {
  return (
    <div className="flex flex-col items-center justify-center grow">
      <div className="grid gap-2 p-10 box-border grid-cols-7">
        {Array.from(Array(42))
          .map((_, i) => i)
          .map((q) => (
            <Tile colorCode={1} key={q} index={q + 1}></Tile>
          ))}
      </div>
    </div>
  );
}
