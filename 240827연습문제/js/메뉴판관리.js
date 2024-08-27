








// #resName focus 중 사라지게하기
document.getElementById("resName").addEventListener("click", (e) => {
  const resNameInput = document.querySelector("#resNameInput");

  // 숨기기
  e.target.style.display = "none";

  // 식당명 input 꺼내기, 커서 대기
  resNameInput.style.display = "block";
  resNameInput.focus();

});

// #resNameInput focus 해제시
document.querySelector("#resNameInput").addEventListener("blur", (e) => {
  const resName = document.querySelector("#resName");  

  // 숨기기
  e.target.style.display = "none";

  // 식당명 변경하면서 드러내기
  resName.style.display = "block";
  resName.innerText = e.target.value;
});




// 수정버튼 누를 시 없어지고 추가, 삭제, 종료 올리기
document.querySelector("#updateBtn").addEventListener("click", (e) => {
  const hiddenBtn = document.querySelector(".b-hidden");
  
  e.target.parentElement.style.display = "none";
  hiddenBtn.style.display = "block";
});

// 종료 버튼 누를 시 전환
document.querySelector("#exitBtn").addEventListener("click", (e) => {
  const normalBtn = document.querySelector(".normal-container");
  
  e.target.parentElement.style.display = "none";
  normalBtn.style.display = "block";
});


document.querySelector("#addMenu").addEventListener("click", () => {
  const ul = document.querySelector(".menu-container");

  const li = document.createElement("li");
  li.classList.toggle("menu");

  const inputName = document.createElement("input");
  const inputPrice = document.createElement("input");

  inputName.setAttribute("type", "text");
  inputName.setAttribute("class", "menu-name-input");
  inputPrice.setAttribute("type", "number");
  inputPrice.setAttribute("class", "menu-price-input");

  ul.append(li);

  li.append(inputName);
  li.append(inputPrice);

  inputName.addEventListener("blur",  changeName(li, e));
  
});

document.querySelector("#deleteMenu").addEventListener("click", () => {
  let menuList = document.querySelectorAll(".menu");
  let menu = menuList[menuList.length - 1];

  menu.remove();
});

function changeName(li, input) {
  const span = document.createElement("span");
  span.classList.add("menu-nume");

  let str = "";
  str = input.target.value;
  
  span.innerText = str;
  li.append(apan);
}