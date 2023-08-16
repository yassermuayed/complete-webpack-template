import "./index.css";
import CoreAI from "./lib/core-ai";
const sendButton = document.getElementById("send-button");
const prompt = document.getElementById("prompt");
const page = document.querySelector(".page");

const coreAI = new CoreAI();

const messages = [];
let FSMS;
update("NEWCHAT");

function update(received) {
  FSMS = received;
  switch (FSMS) {
    case "NEWCHAT":
      prompt.removeAttribute("disabled");
      sendButton.removeAttribute("disabled");
      prompt.focus();
      break;
    case "SEND":
      sendButton.setAttribute("disabled", "");

      prompt.setAttribute("disabled", "");
      update("RESPONSE");
      break;
    case "RESPONSE":
      page.append(createNewParagraph("wait a second"));
      coreAI.provideResponse(prompt.value).then((response) => {
        page.lastChild.remove();
        page.append(createNewParagraph(response));
        update("NEWCHAT");
      });
      prompt.value = "";
      break;
  }
}

sendButton.addEventListener("click", () => {
  console.log(prompt.value);
  if (prompt.value === "") {
    return;
  }
  messages.push({ text: prompt.value, sender: "User" });
  page.append(createNewParagraph(prompt.value, "User"));
  console.log(messages);
  update("SEND");
});

// create html div with text node
function createNewParagraph(text, sender = "Bot") {
  const div = document.createElement("div");
  const text_node = document.createTextNode(text);
  if (sender === "User") {
    div.classList.add(["user-paragraph"]);
  }
  div.classList.add(["paragraph"]);
  div.appendChild(text_node);
  return div;
}
