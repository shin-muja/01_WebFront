const result = document.getElementById("result");

document.querySelector("#btn").addEventListener("click", () => {
  result.innerText = ""

  const tagName = document.getElementById("tagName");
  const text = document.getElementById("tagInnerText");
  const textColor = document.getElementById("colorName");

  let tag = document.createElement(tagName.value);

  tag.innerText = text.value;
  tag.style.color = textColor.value;

  result.append(tag);
});