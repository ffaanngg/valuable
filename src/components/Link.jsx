export default function Link(props) {
  return (
    <a
      className="text-blue-400 hover:underline-offset-2 hover:underline"
      href={props.href}
    >
      {props.children}
    </a>
  );
}
