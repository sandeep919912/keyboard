const textInput = document.getElementById("text-input");
const keys = document.querySelectorAll(".key");

let capsLock = false;
let shift = false;
let ctrl = false;
let alt = false;

// Handle key clicks
keys.forEach(key => {
  key.addEventListener("click", () => {
    const keyValue = key.getAttribute("data-key");
    handleKeyPress(keyValue);
  });
});

// Handle physical keyboard input
document.addEventListener("keydown", (e) => {
  const keyValue = e.key === " " ? " " : e.key;
  handleKeyPress(keyValue);
});

// Handle key press logic using switch statement
function handleKeyPress(key) {
  switch (key) {
    case "Backspace":
      textInput.value = textInput.value.slice(0, -1);
      break;

    case "Enter":
      textInput.value += "\n";
      break;

    case "Tab":
      textInput.value += "\t";
      break;

    case "CapsLock":
      capsLock = !capsLock;
      toggleCapsLock();
      break;

    case "Shift":
      shift = true;
      break;

    case "Control":
      ctrl = true;
      break;

    case "Alt":
      alt = true;
      break;

    case "ArrowUp":
    case "ArrowDown":
    case "ArrowLeft":
    case "ArrowRight":
    case "Home":
    case "End":
    case "PageUp":
    case "PageDown":
    case "Insert":
    case "Delete":
    case "PrintScreen":
    case "ScrollLock":
    case "Pause":
    //   console.log(${key} pressed);
      break;

    default:
      if (key.startsWith("F")) {
        // console.log(${key} pressed);
      } else {
        let char = key;
        if (shift || capsLock) {
          char = char.toUpperCase();
        }
        textInput.value += char;
        shift = false; // Reset shift after one use
      }
      break;
  }
}

// Toggle Caps Lock
function toggleCapsLock() {
  keys.forEach(key => {
    if (key.textContent.length === 1 && key.textContent.match(/[a-z]/i)) {
      key.textContent = capsLock ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
    }
  });
}