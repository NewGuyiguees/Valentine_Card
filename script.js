const question = document.getElementById("Question");
const yesBtn = document.getElementById("Yes");
const noBtn = document.getElementById("No");

const messages = [
  "WDYM NO.",
  "WHAT ARE YOU DOING.",
  "OKAY IM MAD.",
  "..",
  "...",
  "GO AHEAD, I DARE YOU. PRESS IT AGAIN.",
  "PLEASE 😭💘"
];

let clickCount = 0;
let noScale = 1;
let yesScale = 1;
let typingInterval; // for safe typing

noBtn.style.transition = "transform 0.3s ease";
yesBtn.style.transition = "transform 0.3s ease";

// Typing effect
function typeText(element, text, speed = 50) {
  if (typingInterval) clearInterval(typingInterval);

  element.innerText = "";
  let i = 0;

  typingInterval = setInterval(() => {
    element.innerText += text[i];
    i++;
    if (i >= text.length) clearInterval(typingInterval);
  }, speed);
}

noBtn.addEventListener("click", () => {
  const msg = messages[Math.min(clickCount, messages.length - 1)];
  clickCount++;

  typeText(question, msg, 40);


  noScale -= 0.15;
  if (noScale < 0) noScale = 0;
  noBtn.style.transform = `scale(${noScale})`;


  yesScale += 0.1;
  yesBtn.style.transform = `scale(${yesScale})`;

  if (noScale <= 0.2) {
    noBtn.style.display = "none";
    typeText(question, "HAHAHAH I GUESS YOU DONT HAVE AN OPTION NOW", 40);
  }
});

yesBtn.addEventListener("click", () => {
  typeText(question, "YAYYYYY!! I LOVE YOU SOSOOS MUCHHH HUNN", 40);
  noBtn.style.display = "none";

  yesBtn.style.transform = "scale(1.3)";
  setTimeout(() => {
    yesBtn.style.transform = "scale(1)";
  }, 300);
});
