// break 확인
function check1() {

  // 1부터 10까지 1씩 증가하는 반복문 5가 되면 멈춤

  for ( let i = 1 ; i <= 10 ; i++) {

    console.log("i : " + i);
    if ( i == 5) break;
  }

}

// 무한 반복하는 while 문 멈추기
function check2() {

  let i = 1;

  // i가 10 초과시 멈춤
  while( true ) {
    console.log(i++);

    if ( i > 10 ) break;
  }
}

// continue 확인
function check3() {
  
  // 1부터 20까지 1씩 증가하며 출력
  // 단, 3의 배수는 건너뛰기
  // 1 2 4 5 7 8 10

  for ( let i = 1 ; i <= 20 ; i++ ) {
    // 3의 배수인 경우
    if ( i % 3 == 0) continue;

    // 3의 배수인 경우 아래 코드를 수행하지 않음
    console.log("i : ", i);    
  }
}

function check4() {
  // 1부터 30까지 1씩 증가하며 출력
  // 단, 홀수 또는 10의 배수는 건너뛰어라

  for ( let i = 1 ; i <=30 ; i++ ){

    if( i % 2 != 0 || i % 10 == 0 ) continue;

    console.log("i : ", i);
  }

}

// break, continue 둘다 조성해보기
// 0~9까지 5번 반복하여 출력
// 단,  
// - 각 줄에서 4의 배수는 건너뛰기
// - 3번째 줄 출력 후 멈추기


// 최종적으로 아래처럼 출력되어야 함

// 01235679
// 01235679
// 01235679

function check5() {

  // let sum = "";

  // for ( let i = 1 ; i <= 5 ; i++) {
  //   // sum 초기화
  //   sum = "";

  //   for (let j = 0 ; j < 10 ; j++ ){
  //     // 4의 배수를 건너띠기 위한 조건식
  //     //0도 나머지가 0이기에 0은 포함하지 않게 식을 짜야함
  //     if( j != 0 && j % 4 == 0) continue;
  //     //숫자 이어붙이기
  //     sum += j;
  //   }
    
  //   console.log(sum);

  //   // 3번째 줄 이후 멈춤
  //   if( i >= 3 ) break;
  // }

  let test = Number(prompt());
  console.log(`${test}, type : ${typeof test}`);

}

function startGame() {
  // 랜덤 숫자 구하기
  let ranNum = Math.floor(Math.random() * 200) + 1;
  // 시행횟수
  let count = 0;
  // prompt 함수 값 받아와줄 변수
  const str = ` 1~200 사이의 수를 맞춰보세요.\n취소를 누를시 게임은 종료됩니다.`;


  while (true) {

    let qStr = prompt(str);

    //취소 시 종료 
    if ( qStr === null ) {
      alert("게임을 종료합니다."); break;
    }
    ancer = Number(qStr);
  
    //isNaN = Not a Number
    if ( isNaN( ancer ) ) {
      // 문자나 글자 입력 시 다시 입력
      str = `문자나 글자가 아닌 숫자를 입력해주세요`;
      continue;
    } else if ( ancer < 1 || ancer > 200 ){
      // 1~200 사이 수가 아닐시 시도횟수 스킵 다시입력
      str = `범위 밖의 수입니다. 1 ~ 200 입력해주세요`;
      continue;
    } else if (ancer % 1 != 0) {
      // 소수점일시 시도횟수 스킵 다시 입력
      str = `소수점은 입력하지 말아주세요`;
      continue;
    }

    //시도 횟수
    ++count;

    // 정답 및 UP & DOWN 힌트
    if ( ranNum === ancer) {
      alert(`정답! 도전횟수 : ${count}`);
      break;
    } else if ( ranNum < ancer ) { // DOWN
      str = `${ancer} [DOWN!], 도전횟수 : ${count}회`;
    } else if ( ranNum > ancer) { // UP
      str = `${ancer} [UP!], 도전횟수 : ${count}회`;
    }
  }
  
}