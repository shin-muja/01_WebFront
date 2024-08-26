// 유사배열이란?
// 배열처럼 index, length를가지고 있나
// 배열 전용 기능(method)를 지공하지 않음
// pop(), push(), map(), filter()...

// class 접근 테스트
function classTest() {
  // cls-test 요소 모두 얻어오기
  const divs = document.getElementsByClassName("cls-test");

  // -> HTMLCollection( == 유사배열 ), 동적으로만 움직임
  console.log(divs);

  // divs 0, 1, 2 째 요소에 배경색 변경
  divs[0].style.backgroundColor = "rgb(0, 203,0)";
  divs[1].style.backgroundColor = "rgb(0, 00,200)";
  divs[2].style.backgroundColor = "rgb(230, 0,0)";
}

// tag명으로 요소 접근하기
function tagNameTest() {
  // HTML 문서에 존재하는 모든 LI 태그 요소를 얻어와
  // 배열로 묶어서 반환

  const taglist = document.getElementsByTagName("li");

  console.log(taglist);

  for( let i = 0 ; i < taglist.length ; i++ ) {

    // taglist[i].innerText : 작성된 내용을 얻어오기
    // tahlist[i].innerText = "abc" : 내용으로 "abc" 대입하기 
    // console.log(taglist[i].innerText);

    taglist[i].style.backgroundColor = taglist[i].innerText;   
  }
}

// name 으로 요소 접근하기
function nameTest() {
  // name 속성 값이 "hobby" 인 요소를 모두 얻어와 변수에 저장
  const hobbyList = document.getElementsByName("hobby");

  // NodeList : 유사배열, 정적, 동적으로 움직임, forEach()사용가능
  console.log(hobbyList);

  let str = ""; // 체크된 값 누적
  let count = 0; // 체크된 수 카운트

  for(let i = 0; i < hobbyList.length ; i++){ 

    // checkbox, radio 전용 속성 (.checked)
    // input요소.checked -> 요소가 체크되엉 있으면 true, 아니면false 반환
    // input요소.checked = true; -> 대입하여 체크 가능
    // input요소.checked = false; -> 대입하여 체크 해제 가능

    if(hobbyList[i].checked) {
      str += hobbyList[i].value + " ";
      count++;
    }
  }

  // #name-div 요소에 내용으로 결과 출력
  document.getElementById("name-div").innerHTML
    = `${str} <br><br> 선택된 취미 개수 : ${count}`;

}

function cssTest() {

  // [요소 1개]
  // 1) document.querySelector("css 선택자");
  //            -> 선택자가 선택한 요소 중 첫번째 요소를 반환
  
  // [요소 n개 -> 배열]
  // 2) document.querySelectorAll("css 선택자");
  //            -> 선택한 요소 모두를 배열(유사 배열)형태로 반환

  // target-div 속성 값이 "css-div" 요소에 접근
  const caontainer = document.querySelector(`[target-div = "css-div"]`);

  // 요소의 테두리를 변경
  caontainer.style.border = "10px solid red";

  // 첫번째 자식 div 접근해서
  // 내용을 "CSS 선택자로 선택해서 값 변경됨" 넣기
  const div1 = document.querySelector('[target-div = "css-div"] > div');
  div1.innerText = "CSS 선택자로 선택해서 값 변경됨";
  
  // 두번째 자식 div
  const div2 = document.querySelector('[target-div = "css-div"] > div:last-child');
  div2.innerText = "첫 번쨰 요소가 아니면 querySelector() 특징 활용 못함";

  // 모든 자식 div 한 번에 선택(배열)
  const divList = document.querySelectorAll('[target-div = "css-div"] > div');

  // index를 이요해서 요소 하나씩 접근해보기
  divList[0].style.fontFamily = "궁서";
  divList[1].style.fontSize = "10px";

  for(let i=0 ; i < divList.length ; i++){
    divList[i].onclick = function() {alert(`${i} 번째 요소 입니다.`);};
  }
}

// 카카오톡 채팅 화면 만들기

function readValue() {
  //채팅이 출력되는 배경 요소 얻어오기
  const bg = document.querySelector("#chatting-bg");

  //채팅 내용 입력 input 요소 얻어오기
  const input = document.querySelector("#user-input");

  // 입력된 값이 없을경우
  // 1) 진짜 아무 값도 안 적은 경우
  // 2) 공백만 적은 경우

  // 문자열.trim(); : 문자열 좌우 공백 제거
  if( input.value.trim(). length == 0 ){
    alert("채팅 내용을 입력해주세요");

    input.value = ""; // 이전 input에 작성된 값 삭제하기
    input.focus(); // input에 커서 활성화
    
    return; // 현재 수행중인 함수 종료 + 호출한 곳으로 돌아감
  }

  // 채팅 출력
  bg.innerHTML += `<p><span>${input.value}</span></p>`;
  bg.scrollTop = bg.scrollHeight;
  // bg.scrollTop : 현재 스크롤의 위치
  //                (스크롤이 현재 얼마만큼 내려와 있는지를 나타냄)
  // bg.scrollHeight : bg의 스크롤 전체 높이
  //                (스크롤바를 이용해 스크롤 할 수 있는 전체 높이)
  // bg.scrollTop = 값 : 스크롤 윗부분을 값의 위치로 이동

  
  input.value = ""; input.focus();
}


// 아이디가 user-input인 input요소에서
// 키가 올라오는 동작이 발생했을 때(감지되었을 때)
// 올라온 키가 "Enter" 키라면 readValue() 함수 호출

// keyup : 눌러지던 키가 떼어졌을 때 발생(1회만 인식)
// keydown : 키가 눌러졌을때 ( + 꾹 누르고 있으면 계속 인식됨)

document.querySelector("#user-input")
.addEventListener("keyup", function(e) {

  // e : 이벤트 객체(발생한 이벤트 정보를 담고 있는 객체)
  console.log(e);

  if ( e.key == "Enter" ) { // 엔터가 눌러졌을 때
    readValue();
  }
});