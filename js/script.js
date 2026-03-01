document.addEventListener("DOMContentLoaded", () => {
  // Highlight active nav link
  const links = document.querySelectorAll("nav a");
  const current = window.location.pathname.split("/").pop();
  links.forEach(link => {
    if (link.getAttribute("href") === current) {
      link.classList.add("active");
    }
  });

  // Cry Buddy logic
  const cryCircle = document.getElementById("cry-circle");
  const chatBox = document.getElementById("chat-box");
  const sendBtn = document.getElementById("chat-send");
  const input = document.getElementById("chat-input");
  const messages = document.getElementById("chat-messages");

  const replies = [
    "Cry Buddy: I hear you ❤️",
    "Cry Buddy: You're not alone.",
    "Cry Buddy: It's okay to feel this way.",
    "Cry Buddy: Thank you for sharing with me.",
    "Cry Buddy: I'm here with you."
  ];

  if (cryCircle) {
    cryCircle.addEventListener("click", () => {
      chatBox.style.display = chatBox.style.display === "block" ? "none" : "block";
    });
  }

  if (sendBtn) {
    sendBtn.addEventListener("click", () => {
      const text = input.value.trim();
      if (text) {
        const userMsg = document.createElement("div");
        userMsg.textContent = "You: " + text;
        messages.appendChild(userMsg);

        const reply = document.createElement("div");
        reply.textContent = replies[Math.floor(Math.random() * replies.length)];
        messages.appendChild(reply);

        input.value = "";
        messages.scrollTop = messages.scrollHeight;
      }
    });
  }

  if (input) {
    input.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        sendBtn.click();
      }
    });
  }

  // Learn More circle click
  const learnCircle = document.getElementById("learn-circle");
  if (learnCircle) {
    learnCircle.addEventListener("click", () => {
      window.location.href = "about.html"; // redirect to About page
    });
  }
});
