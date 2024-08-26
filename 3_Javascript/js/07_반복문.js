// for문 연습

// for(let num = 1 ; num <= 5 ; num++ ) {
//   // 조건식이 true인 경우 반복 수행할 코드;
//   console.log(`${num} 통과!`);
// }

function check1() {
  let result = "";

  for (let num = 1; num <= 5 ; num++ ) {
    result += num;
  }
  console.log(result);
}

function check2() {
  for (let num = 1 ; num <= 10 ; num++ ){
    console.log(num);
  }
}

function check3() {
  for (let num = 1 ; num <= 20 ; num++ ){
    console.log(num);
  }
}

function check4() {
  for (let num = 5 ; num <= 15 ; num++ ){
    console.log(num);
  }
}

function check5() {
  for (let num = 1 ; num <= 30 ; num += 2 ){
    console.log(num);
  }
}


function check6() {
  let sumTotal = 0;

  for (let num = 1 ; num <= 10 ; num++ ){
    sumTotal += num;
  }

  console.log(sumTotal);
}

// 입력받은 범위 내 모든 정수의 합 구하기

function sumFn() {
  //input에 작성된 값을 얻어와 저장
  const start = Number(document.getElementById("inputNumber1-1").value);
  const end = Number(document.getElementById("inputNumber1-2").value);

  // 결과를 출력하기 위한 요소 얻어와 저장
  const result = document.getElementById("result1");

  let sumTotal = 0;

  for ( let num = start ; num <= end ; num++ ) {
    sumTotal += num;
  }

  console.log("누적값 : " + sumTotal);  
}


//입력 받은 범위 내에서 증감식 만큼 증가하며 모든 정수 출력하기

function executeFn2() {
  const start = Number(document.getElementById("inputNumber2-1").value);
  const end = Number(document.getElementById("inputNumber2-2").value);
  const val = Number(document.getElementById("inputNumber2-3").value);

  // 결과 출력할 ul요소
  const ul = document.getElementById("result2");//ul태그
  
  ul.innerText = "";
  for ( let num = start ; num <= end ; num += val ) {
    ul.innerText += `<li>${num}</li>`;
  }
}

// 요소.innerTEXT += `<li>${sum}</li>`;
// -> 요소의 내용을 문자열을 누적 대입
// (HTML 태그를 해석하지 않고 문자열 그대로 보여줌)


// 요소.innerHTML += `<li>${sum}</li>`;
// -> HTML 태그를 해석해서 화면에 태그의 본기능대로 출력

function executeFn3() {
  // 입력된 값 (단)
  const input = Number(document.getElementById("input3").value);

  let result = 0;

  const ul = document.getElementById("result3");
  ul.innerHTML = "";

  // 입력 받은 단이 2~9사이가 아닐경우
  // "2~9 사이만 입력하세요" 알림창 띄우기

  if ( input < 2 || input > 9) {
    alert("2~9사이만 입력해주세요");
    return console.log("에러"); // 함수를 종료하고 호출한 곳으로 돌아감
  }
  for ( let num = 1 ; num <= 9 ; num++ ) {
    result = input * num;
    ul.innerHTML += `<li>${input} X ${num} = ${result}</li>`
  }

  //중첩 for문 진행과정 체크해보기

  
}

// for( let y = 1 ; y <= 3 ; y++){
//   console.log(`바깥쪽 for문 - 반복 ${y}`);
  
//   for ( let x = 1; x <=2 ; x++) {
//     console.log(`안쪽 for문 - 반복 ${x}`);
//   }
// }

function check8() {

  // 4바퀴 반복하는 for문
  for (let y = 1 ; y <= 4 ; y++) {
    let str = "";

    for( let x = 1 ; x <= 5 ; x++ ) {
      str += x;
    } 

    console.log(str);
  }
}


function check9() {
  const result = document.getElementById("result9");
  result.innerHTML = "";

for (let y = 1; y <= 5 ; y++) {
  let str = "";
  for(let x = 1; x <= y ; x++) {
    str += x;
  }
  result.innerHTML += `<li>${str}</li>`;
  // console.log(str);
}
}

// while문 확인하기

function check16() {
  
  // 변수를 선언만 해두기
  let val; // undefined

  // !=, == 느슨한 비교
  // !==, === 엄격한 비교

  while ( val !== null ) {

    // != 비교 연산자 : 값을 비교

    // 동일 비교 연산자
    // !== -> 값, 자료형이 모두 다른 경우 true
    // === -> 값, 자료형이 모두 같은 경우 true

    val = prompt("입력 후 확인" ); // 변수에 prompt 값 대입
    // 확인 -> 입력한 값
    // 취소 -> null
    
  }
}

// 

function check17() {
  // 메뉴 가격 변수
  const gimbob = 3000;
  const ramen = 3500;
  const dongkkasue = 5000;

  // 주문 개수 카운트 변수
  let gCount = 0; // 김밥 개수
  let rCount = 0; // 라면 개수
  let dCount = 0; // 돈가스 개수

  // prompt로 입력한 값을 저장할 변수 선언
  let input; // undefined

  // 확인 -> 입력한 값
  // 취소 -> null

  while ( input !== null) { // 취소 누르기 전까지 무한 반복

    input = prompt("메뉴 번호를 입력하세요!");

    switch ( input ) {
      case '1' :  gCount++; break;
      case '2' :  rCount++; break;
      case '3' :  dCount++; break;
      case null : alert("주문 완료!");  break;

      default : alert("메뉴의 작성된 번호만 입력해주세요"); break;
    }
  }
  alert(`김밥 : ${gCount}, 라면 : ${rCount}, 돈가스 : ${dCount}`);

  // 합계
  let sum = (gCount * gimbob ) + (rCount * ramen) + (dCount * dongkkasue);

  alert(`총 가격 : ${sum}원`);

}

// while()문을 for()문처럼 사용하기

function check18() {

  // 1부터 10까지 1씩 증가하며 출력
  let num = 1;

  while ( num <= 10 ) {
    console.log(num);

    num++;
  }
  
  console.log("-------------------------");
  // 10부터 1까지 1씩 감소하며 출력
  num = 10;

  while ( num >= 1 ) {
    console.log(num);
    num--;
  }
}

