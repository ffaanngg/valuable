export default function Tile(props) {
  // Color codes
  // Black - 0
  // Yellow - 1
  // Green - 2
  function getColor(char) {
    if (char === 1) {
      return "#fbbf24";
    } else if (char === 2) {
      return "#f59e0b";
    } else {
      return "#404040";
    }
  }

  return (
    <div
      className="my-2 rounded flex justify-center items-center xl:h-16 xl:w-16 h-8 w-8 uppercase text-3xl font-bold text-white"
      style={{ backgroundColor: getColor(props.colorCode) }}
    >
      {props.children}
    </div>
  );
}
