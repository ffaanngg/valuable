export default function Button(props) {
  return (
    <button
      className="border-neutral-200 text-neutral-200 border-2 p-3 font-heading hover:border-black hover:text-black hover:bg-neutral-200 rounded my-5"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
