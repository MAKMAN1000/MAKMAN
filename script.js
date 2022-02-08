window.onload = () => {
  const myInput = document.getElementById("dummyKeyboard");
  myInput.onpaste = (e) => e.preventDefault();
};
const COMMANDS = {
  help: 'Supported commands: <span class="code">about</span>, <span class="code">experience</span>, <span class="code">education</span>, <span class="code">skills</span>, <span class="code">achievement</span>, <span class="code">contact</span>, <span class="code">resume</span>',
  about:
    "Hello 👋<br>I'm Muhammed Azeem Koombayil.<br> An 20 years old Seafarer from India.",
  skills:
    '<span class="code">Skill:</span> Content creation,ethical hacking, bug hunting, aqua-exotic pets<br>',
  education:
    "Completed diploma in nautical science leading to bsc nautical science from international Maritime academy,chennai, india <br> Completed marine technology from grft vhss azheekal",
  //resume: "<a href='./resume.pdf' class='success link'>resume.pdf</a>",
  experience: "Sailed as deck cadet for 6 months In bulk a carrier having DWT-22625 t",
  achievement:
    "State participation, district champion 2018 men wrestling <br> District second school wise 2018 men wrestling",
  contact:
    "You can contact me on any of following links:<br><a href='https://t.me/MAKMAN1000' class='success link'>Telegram</a>, <a href='https://instagram.com/m_azeemak/' class='success link'>Instagram</a>, <a href='https://twitter.com/M_AZEEMAK' class='success link'>Twitter</a>, <a href='https://twitter.com/M_AZEEMAK' class='success link'>WhatsApp</a>",
};

const userInput = document.getElementById("userInput");
const terminalOutput = document.getElementById("terminalOutput");
const inputfield = document.getElementById("dummyKeyboard");

inputfield.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    let input = e.target.value;
    input = input.toLowerCase();
    if (input.length === 0) {
      return;
    }
    let output;
    output = `<div class="terminal-line"><span class="success">➜</span> <span class="directory">~</span> ${input}</div>`;
    if (!COMMANDS.hasOwnProperty(input)) {
      output += `<div class="terminal-line">no such command: ${input}</div>`;
      console.log("Oops! no such command");
    } else {
      output += COMMANDS[input];
    }
    terminalOutput.innerHTML = `${terminalOutput.innerHTML}<div class="terminal-line">${output}</div>`;
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
    e.target.value = "";
  }
});
