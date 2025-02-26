var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

const name_entry = document.getElementById("name");
const email_entry = document.getElementById("email");
const text_entry = document.getElementById("message");
const topic_entry = document.getElementById("topic");

ctx.fillStyle = "#3498db"; // Set the fill color to blue
ctx.fillRect(50, 50, 200, 100); // Draw a rectangle at (50,50) with width 200 and height 100

// Define the <hello-world> custom element
class HelloWorld extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    // Print "Hello World!" to the console
    console.log("Hello World!");
  }
}

// Register the custom element
customElements.define("hello-world", HelloWorld);

function formsubmit(event) {
  event.preventDefault();
  let name = name_entry.value;
  let email = email_entry.value;
  let message = text_entry.value;
  let topic = topic_entry.value;
  const fetchData = new URLSearchParams();
  fetchData.append("name", name);
  fetchData.append("email", email);
  fetchData.append("message", message);
  fetchData.append("topic", topic);

  fetch("https://httpbin.org/post", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: fetchData.toString(),
  })
    .then((response) => response.json()) // Convert response to JSON
    .then((data) => console.log("Server Response:", data))
    .then(alert("form submitted"))
    .catch((error) => console.error("Error:", error));

  name_entry.value = "";
  email_entry.value = "";
  text_entry.value = "";
}
