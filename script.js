// Toggle Chatbot
function toggleChat() {
  const chat = document.getElementById("chatWindow");
  chat.style.display = chat.style.display === "block" ? "none" : "block";
}

// Send message
function sendMessage() {
  const input = document.getElementById("userInput");
  const msg = input.value.trim();
  if (!msg) return;

  const chatMessages = document.getElementById("chatMessages");

  // Add user message
  const userMsg = document.createElement("p");
  userMsg.textContent = "You: " + msg;
  userMsg.style.color = "#4b2e83";
  chatMessages.appendChild(userMsg);

  // Bot response
  const botMsg = document.createElement("p");
  botMsg.classList.add("bot");

  // Basic replies
  const messageLower = msg.toLowerCase();
  if (messageLower.includes("hi") || messageLower.includes("hello")) {
    botMsg.textContent = "🤖 Hello! Nice to see you! 🌸";
  } else if (messageLower.includes("your name")) {
    botMsg.textContent = "I’m your AI buddy 🤖, here to help you know Pravalika!";
  } else if (messageLower.includes("tech") || messageLower.includes("stack")) {
    botMsg.textContent = "She is skilled in HTML, CSS, JS, NodeJS, and API calling 💻✨";
  } else if (messageLower.includes("college")) {
    botMsg.textContent = "Pravalika studies at Sir M. Vishweshwaraih College of Engineering 🏫";
  } else {
    botMsg.textContent = "🤔 I’m not sure about that, but you can ask me about Pravalika’s tech stack or college!";
  }

  chatMessages.appendChild(botMsg);

  // Scroll to bottom
  chatMessages.scrollTop = chatMessages.scrollHeight;
  input.value = "";
}

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  const statusDiv = document.getElementById('formStatus');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const formData = new FormData(form);

      fetch("https://formsubmit.co/ajax/pravalikak15036@gmail.com", {
        method: "POST",
        body: formData,
        headers: {
          "Accept": "application/json"
        }
      })
        .then(response => response.json())
        .then(data => {
          if (data.success === "true") {
            statusDiv.textContent = "✅ Thank you! Your message has been sent.";
            form.reset();
          } else {
            statusDiv.textContent = "⚠️ Oops! Something went wrong. Please try again.";
          }
        })
        .catch(error => {
          statusDiv.textContent = "❌ Error sending message. Please try again later.";
        });
    });
  }
});
