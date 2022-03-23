export default function Tile(props) {
  return (
    <div
      className="rounded flex justify-center items-center xl:h-16 xl:w-16 h-8 w-8 uppercase text-2xl xl:text-4xl font-bold text-white"
      style={{ backgroundColor: "#404040" }}
      id={props.index}
    >
      {props.children}
    </div>
  );
}
