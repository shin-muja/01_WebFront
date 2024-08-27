const add = document.querySelector("#add");
const calc = document.querySelector("#calc");
const container = document.querySelector(".container");

// 추가 버튼 클릭시 입력창 추가
add.addEventListener("click", () => {
  const box = document.createElement("div"); // <div></div>
  box.classList.add("row"); // <div class="row"></div> 


  // 숫자 입력창 추가
  const input = document.createElement("input");
  input.type = "number";
  // == input.setAttribute("type", "number"); <input type="number">
  input.classList.add("input-number");
  // <input type="number" class="number">

  // x표시 추가
  const textX = document.createElement("span");
  textX.classList.add("remove-row");
  textX.innerHTML = "&times;";

  // 조립하기
  box.append(input);
  box.append(textX);

  //contaienr에 만들어진 div를 추가
  container.append(box);


  
  // 클릭된 x 버튼의 부모 요소 (div.box)를 제거
  textX.addEventListener("click", (e) => {
    
    // 현재 이벤트가 발생한 요소(클릭된 x 버튼)의
    // 부모 요소를 선택
    const parent = e.target.parentElement; // == div.box

    // 부모 요소를 제거하기
    parent.remove();
  })
});


// 계산 버튼 클릭 시
calc.addEventListener("click", () => {

  const numberList = document.querySelectorAll(".input-number");
  let sum = 0;

  for(let i = 0; i < numberList.length ; i++) {
    sum += Number(numberList[i].value);
  }

  alert(`합계 : ${sum}`);
});