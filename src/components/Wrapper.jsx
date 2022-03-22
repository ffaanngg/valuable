export default function Wrapper(props) {
  return (
    <div className="w-screen h-screen bg-black bg-main overflow-auto">
      {props.children}
    </div>
  );
}
