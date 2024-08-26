// 배경색 적용할 각 div 배열
const box = document.querySelectorAll(".box");

// 배경색 입력할 각 input 배열
const colorInput = document.querySelectorAll(".color-input");

function changeBackColor(order) {
  
  box[order].style.backgroundColor = colorInput[order].value;

}

// #changeButton 요소를 클릭했을 때
document.getElementById("changeButton").addEventListener("click", function() {
  // colorInput에 작성된 각 내용을 boxList에 있는 각 div에 대입
  for(let i = 0; i < box.length ; i++) {
      changeBackColor(i);
  }
});