//숫자 여려개 필요한 공통 변수 2, 3, 4, 7, 8
let num1 = 2;
let num2 = 5;
let num3 = 10;

// 문제9번용 배열
let numList = [num1, num2, num3];


//문제 1
function printName(name) {
  console.log(`Hello, ${name}!`);
}

printName("홍길동");


//문제 2
function sumFn(a, b) {
  return a + b;
}

console.log(sumFn(num1, num2));

// 문제 3

let crossFn = (a, b) => a * b;

console.log(crossFn(num1, num2));

// 문제 4

function comFn(a, b) {

  if( a > b) console.log(`첫 번째 숫자가 더 큽니다`);
  else console.log(`두 번쨰 숫자가 더 크거나 같습니다`);

};

comFn(num1, num2);
comFn(num2, num1);

// 문제 5

function strLength(str) {
  console.log(str.length);
}

strLength("테스트용 문자 길이");

// 문제 6
function strCycle(str, num) {
  let result =""
  for(let i = 1; i <= num ; i++) result += str;

  console.log(result);
}

strCycle("Hello", 3);

// 문제7

function numOddEven(num) {
  if(num % 2 == 0) return true;
  //반환 할게 없으면 false이기 때문에 else는 생략해도됨
  else return false;
}

console.log(numOddEven(num1));
console.log(numOddEven(num2));

// 문제8

function bestNumber(num1, num2, num3){
  let x = num1;
  if ( x < num2 ) x = num2;
  if ( x < num3 ) x = num3;

  return x;

  // 내장 함수 Math.max() : 전달 받은 값 중 가장 큰 수 반환 위와 같음
  // return Math.max(num1, num2, num3);
}

console.log(bestNumber(num1, num2, num3));

// 문제 9

const firstNumber = (arr) => arr[0];

console.log(firstNumber(numList));

// 문제 10

function arrChangeObject(arr) {
  let total = 0;
  let aver = 0;

  for(i = 0; i < arr.length ; i++) total += arr[i];
  aver = total / arr.length;

  return {"합계" : total, "평균" : Number(aver.toFixed(1))};
}


console.log(arrChangeObject(numList));

// 문제 11

function calcFn(num1, num2, otherFn) {
  return otherFn(num1, num2);
  
}

console.log(calcFn(2, 4, sumFn));
console.log(calcFn(6, 4, crossFn));

// 문제 12

function sayFn(name, otherSayFn) {
  otherSayFn(name);
}

function sayHelloFn (name) {
  console.log(`안녕, ${name}`);
}

function sayByeFn (name) {
  console.log(`잘가, ${name}`);
}

sayFn('길동', sayHelloFn);
sayFn('블라', sayByeFn);