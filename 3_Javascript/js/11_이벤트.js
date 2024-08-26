// 인라인 이벤트 모델 확인

function check1(btn) {

  // 매게 변수 btn == 클릭한 버튼(this)
  console.log(btn);

  // 버튼의 배경색을 어어와 저장
  const bgColor = btn.style.backgroundColor;

  console.log(bgColor);

  // 버튼이 클릭될 때마다 pink <-> yellow 변경
  if (bgColor == "yellow") {
    btn.style.backgroundColor = "pink";
  } else {
    btn.style.backgroundColor = "yellow";
  }
}

// -------------------------------------
// 고전 이벤트 모델 확인


// 아이디가 test1-1인 요소를 얻어와 test1a변수에 저장
const test1a = document.querySelector("#test1-1");

// 고전 이벤트 모델 작성법
// 요소. 이벤트리스너 = 이벤트핸들러

test1a.onclick = function() {
  alert(`고전 이벤트 모델 확인버튼 클릭됨`);
};

// 고전 이벤트 모델 제거

// #test1-2 버튼 클릭시
// #test1-1 onclick 이벤트 리스너의 이벤트 핸들러 제거
document.querySelector("#test1-2").onclick = function() {
  // test1-1 기존 onckilck이벤트 핸들러를
  // null로 덮어 씌움(이벤트 제거)
  test1a.onclick = null;
  alert(`이벤트 제거됨`);
};

// 고전 이벤트 모델 단점

// #test 1-3 요소를 얻어와 test1c 변수에 저장
const test1c = document.querySelector("#test1-3");

// test1c 요소가 클릭되었을 때 배경색을 red로 변경

test1c.onclick = function () {
  test1c.style.backgroundColor = "yellow";
}

test1c.onclick = function() {
  test1c.style.color = "white";
}

// -> onclick에 저장된 값이 덮어씌어지면서
// 이전 코드가 사라지는 문제발생

//---------------------------------------------------------------

// 표준 이벤트모델 확인
const test2 = document.querySelector("#test2");

// 표준 이벤트 모델 작성법
// 요소.addEventListener("이벤트종류", 이벤트함수)

test2.addEventListener("click", function() {

  // 투명도 1(불투명) -> 0(투명) -> 0.1씩 감소

  // 현재 test2의 투명도 확인
  let curr = test2.style.opacity;

  // 맨처음에는 투명도 '' -> 1대입
  console.log(curr);

  if ( curr == '') {
    test2.style.opacity = 1;
    curr = 1;
  } 

  // 투명도 0.1 감소
  test2.style.opacity = curr - 0.1;

  if(test2.style.opacity == 0) { // 완전히 투명해졌다면
    test2.style.opacity = 1;
  }


});

//test2 요소를 클릭하면 클릭 횟수 카운트

let count = 0;

test2.addEventListener("click", function() {
  count++; // 카우튼 1 증가

  // 표준 이벤트 모델의 이벤트 핸들러(함수)안에서
  // this == 이벤트가 발생한 요소
  this.innerText = count;
});

const box3 = document.querySelector("#box3");
const input3 = document.getElementById("input3");

box3.addEventListener("click", function(e){
  // bgColor = box3.style.backgroundColor;
  // e.target : 이벤트가 발생한 대상 요소
  alert(`배경색 : ${e.target.style.backgroundColor}!!!`);
});


input3.addEventListener("keyup", function(e) {

  // e : 이벤트 객체(발생한 이벤트에대한 정보를 담은 객체)
  // console.log(e);
  if (e.key == "Enter"){
    // bgColor = input3.value;
    // let bgColor = this.value;
    // box3.style.backgroundColor = bgColor;
    box3.style.backgroundColor = input3.value;
    input3.value = "";
  }
});
