function generateWelcomeMessage() {
  const name = document.getElementById("name");
  const resultDiv = document.getElementById("welcomeMessage");

  let str = "님, 반가워요";

  resultDiv.innerText = name.value + str;
}