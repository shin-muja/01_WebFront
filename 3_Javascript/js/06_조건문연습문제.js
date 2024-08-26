//문제1

const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const result1 = document.getElementById("result1");

function check1() {
  let a1 = Number(number1.value);
  let b1 = Number(number2.value);

  let result;

  if ( a1 > b1 ) {
    result = 'a가 b보다 크다';
  } else if ( a1 == b1 ) {
    result = 'a랑 b가 같다';
  } else {
    result = 'a가 b보다 작다';
  }

  
  result1.innerText = result;
}

//문제2

const number3 = document.getElementById("number3");

function check2() {
  let num3 = Number(number3.value);
  let result;

  if (num3 % 2 == 0 ){
    result = "짝수 입니다."
  } else {
    
    result = "홀수 입니다."
  }

  alert(result);
}

//문제3

let x = 15;
let y = 22;
let z = 9;

const result3 = document.getElementById("result3");

function check3() {
  let max = x; //x값을 일단 가장 큰값으로 저장해둠
  // max == 15

  if ( y > max ) { // 현재 max(x)와 y값을 비교
    // y가 더 크면 max에 y값 덮어쓰기
    max = y;
  } if ( z > max ) {
    max = z;
  }

  //최종적으로 가장 큰 값이 max에 저장이 되어서 옴


  result3.innerText = max;
}

//문제4

const string4 = document.getElementById("string4");

function check4 () {
  let str = String(string4.value);
  let result;

  switch(str) {
    case 'apple' : result = "apple이 맞습니다";break;
    
    case 'banana' : result = "banana가 맞습니다."; break;

    default : result = "apple, banana가 아닙니다"; break;
  }

  alert(result);

}

// 문제5

const number5 = document.getElementById("number5");
const result5 = document.getElementById("result5");

function check5() {
  let num5 = Number(number5.value);
  let result;

  if ( num5 < 0 || num5 > 100 ) {
    result = "성적을 잘못 입력하셨습니다";

  } else if ( num5 > 90 ) {
    result = "A학점";

  } else if ( num5 > 80 ) {
    result = "B학점";

  } else if ( num5 > 70 ) {
    result = "C학점";

  } else if ( num5 > 60 ) {
    result = "D학점";

  } else {
    result = "F학점";
  }

  result5.innerText = result;
}

//문제6

const userAge = document.getElementById("userAge");
const userHeight = document.getElementById("userHeight");

function check6() {
  let age = Number(userAge.value);
  let heit = Number(userHeight.value);
  let result;

  if ( age < 0 || age > 100 || age % 1 != 0 || heit < 0) {
    result = "잘못 입력 하셨습니다.";
  } else if (age < 12 ) {
    result = "적정 연령이 아닙니다.";
  } else if (heit < 140 ) {
    result = "적정 키가 아닙니다.";
  } else {
    result = "탑승 가능"
  }

  alert(result);
}


const month7 = document.getElementById("month7");
const temper7 = document.getElementById("temper7");
const result7 = document.getElementById("result7");

//문제7

function check7() {
  // let mon = Number(month7.value);
  // let tem = Number(temper7.value);
  // let result;

  // // console.log(tem.length);

  // if ( temper7.value.length == 0 ) {
  //   alert("온도도 입력해주세요.");
  //   result = ""
  // } else if( mon < 1 || mon >12 ){
  //   alert("1~12월을 입력해주세요.");
  //   result = ""
  // } else if ( mon >= 3 && mon < 6 ) {
  //   result = "봄";

  // } else if ( mon >= 6 && mon < 9 ) {
  //   result = "여름";
  //   if ( tem >= 30) {result += ", 폭염";}    

  // } else if ( mon >= 9 && mon < 12 ) {
  //   result = "가을";
    
  // } else {
  //   result = "겨울";
  //   if (tem <= 0) {result += ", 한파";} 
  const month = Number(month7.value);

  let season;
  let temperature;

  if(month >= 3 && month <= 5) {
    season = "봄";
  } else if (month >= 6 && month <= 8) {
    season = "여름";
    temperature = Number(temper7.value);

    if(temperature >= 30) {
      season = `${season} [온도 : ${temperature}도, 폭염!!!]`;
    }
  } else if (month >= 9 && month <= 11) {
    season = "가을";
  } else if (month == 12 || month == 1 || month == 2) {
    season = "겨울";
    temperature = Number(temper7.value);

    if(temperature <= 0) {
      season = `${season} [온도 : ${temperature}도, 한파!!!]`;
    }
  } else {
    season = "잘못된 달을 입력하셨어요";
  }

  result7.innerText = season;

}

