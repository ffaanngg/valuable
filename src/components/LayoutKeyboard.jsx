import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import "../styles/keyboard.css";

export default function LayoutKeyboard(props) {
  const layout = [
    "q w e r t y u i o p {bksp}",
    "a s d f g h j k l",
    "z x c v b n m {enter}",
  ];

  return (
    <Keyboard
      theme={"hg-theme-default myTheme1"}
      display={{
        "{bksp}": "⌫",
        "{enter}": "✔",
      }}
      layout={{ default: layout }}
      onKeyPress={(k) => props.onKeyPress(k)}
    />
  );
}
