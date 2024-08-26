
//배열 선언 및 기초 사용법
function check1() {

  //배열 선언 방법 확인
  const arr1 = new Array();
  const arr2 = new Array(3);
  const arr3 = [];
  const arr4 = ["사과", "바나나", "딸기"];
  console.log(arr1);
  console.log(arr2);
  console.log(arr3);
  console.log(arr3);

  //배열명.length : 배열의 길이(배열의 있는 칸수 또는 저정된 )

  console.log(arr1.length);
  console.log(arr2.length);
  console.log(arr3.length);
  console.log(arr4.length);

  // 배열의 index
  /*
   * - 배열의 각 칸을 구분하는 번호
   * - 0 부터 시작!
   * - 중간에 번호를 생략할 수 없음(항상 연속적)
   * - 마지막 index == 배열길이 -1 
   */
  // 배열명 [index] -> 배열의 해당 index에 존재하는 데어터 반환
  // arr4 = ["사과", "바나나", "딸기"];
  console.log(arr4[0]);
  console.log(arr4[1]);
  console.log(arr4[2]);

  // 배열명[index] = 값; -> 해당 index에 지정된 값 대임
  arr2[0] = 100;
  arr2[1] = "배고파";
  arr2[2] = true;

  console.log(`arr2 : ${arr2}`);
  // JS 배열의 특징 : index별로 자료형을 다르게 넣을수 있다.

  arr1[0] = "가";
  arr1[1] = "나";
  arr1[2] = "다";

  console.log(`arr1 : ${arr1}`);
}

//배열과 for문
function check2() {

  // for문을 이용해서 배열 요소 초기화 하기
  // 초기화 : 변수 / 배열 요소에 처음으로 값을 대입하는 것

  // for 이용 X
  const arr1 = [];

  arr1[0] = 0;
  arr1[1] = 10;
  arr1[2] = 20;
  arr1[3] = 30;

  console.log(`arr1 : ${arr1}`);

  //for 이용 O
  const arr2 = [];

  for(let i = 0 ; i <= 3 ; i++ ) {
    arr2[i] = i * 10;
  }

  console.log(`arr2 : ${arr2}`);
}

// 배열과 for문2
function check3() {
  // 배열에 저장된 값 하나씩 순서대로 출력하기
  // -> for문을 이요해서 배열의 모든 요소 접근하기
  
  const arr = [10, 20, 50, 100, 500, 1000];

  for( let i = 0 ; i < arr.length ; i++) {
    console.log(`arr[${i}] == ${arr[i]}`);
  }

}

//배열과 for문3
function check4() {
  
  // for문을 이요해서 배열을 순서대로 초기화 한 후
  // 다른 for문을 이요해서 배열 요소를 하나씩 모두 출력

  const arr = new Array(5);
  let sum = 0;

  // 1. 배열을 순서대로 초기화
  for( let i = 0; i < arr.length ; i++) {
    arr[i] = Number(prompt(`${i}번째 숫자 입력`));
  }

  // 2. 배열 요소를 하나씩 모두 출력 + sum
  for( let i = 0; i < arr.length ; i++) {
    sum += arr[i];
    console.log(`arr[${i}] : ${arr[i]}`);
  }

  console.log(`arr[]배열의 모든 합 : ${sum}`);
}


// 메뉴 뽑기
function selectMenu() {
  // 결과 출력 span
  const menuResult = document.getElementById("menuResult");

  // 점심 메뉴로 초기화된 배열 생성
  const menu = ["돈까스" , "순대국", "라면",
                "우동", "삼겹살", "햄버거",
                "스파게티", "빵", "밥",
                "면", "국"];

  // menu 배열 index범위 내에서 난수생성
  let random = Math.floor(Math.random() * menu.length );

  // 난수 번째 index 요소값을 화면에 출력
  menuResult.innerText = menu[random];
}

//-------------------------------------------

// 2차원 배열

function check5() {
  const arr = [ [ 1, 2, 3, 4],
                [5, 6, 7, 8],
                [9, 10, 11, 12]];

  // 배열명 [행][열]
  console.log( arr[1][3] );
  console.log( arr[2][2] );

  const arr1 = [100, 200, 300, 400];
  const arr2 = [900, 800, 700, 600];

  arr[3] = arr1;
  arr[4] = arr2;

  console.log(arr);

  // 600

  console.log(arr[4][3]);
}

// 2부터 2씩 증가하는 수를
// 5행 5열 배열의 모든 요소에 차례대로 대입하고 출력하기
function check6() {

  let count = 2;

  const arr = [];

  for(let row = 0; row < 5; row++){
    arr[row] = [];
    for(let col = 0; col < 5; col++){
      arr[row][col] = count; // row행 col열에 count를 대임
      count += 2; // count를 2증가
    }
  }

  console.log(arr);
  console.log(count);

}

console.log("배열");