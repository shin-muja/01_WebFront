let numbers = [1, 2, 3, 4, 5];
let num = 0;

const ul = document.querySelector("#ulTag");

for( let i = 0; i < numbers.length; i++ ) {
  let li = document.createElement("li");

  num = numbers[i] * 2;
  li.innerText = num;

  ul.append(li);
}