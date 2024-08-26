const amount = document.getElementById("amount");
let balance = 10000;
const password ='1234';
const output = document.getElementById("output");

output.innerText = balance;

// 입금
function deposit() {
  //1. 입금 버튼 클릭 해당 함수 수행
  //2. input에 (금액을 작성한 input == amount) 입력된 금액 구하기
  //3. 구함 금액을 잔액(balance)에 수행하기
  // (번외) : input 에 금액을 작성 안하고 입금 버튼을 누른 경우
  // -> 금액을 입력하세요 와 같은 메세지 띄우기 처리....
  let money = Number(amount.value);

  if (amount.value.length == 0) {
    alert("금액을 입력해주세요")
  } else if ( money < 0 || money % 1 != 0) {
    alert("제대로된 금액을 입력해주세요")
  } else {
    balance += money;
    output.innerText = balance;
    //input에 기존에 작성된 값 제거하기
    amount.value = '';
  }
}

// 출금
function withdrawal() {
  // 1. 출금 버튼 클릭 해당 함수 수행
  //(번외) : input에 금액을 작성 안 하고 출금버튼을 누른경우
  // -> 금액을 입력하세요 와 같은 메세지 띄우기 처리...
  // 2. 비밀번호를 입력 받기
  // 2-1.취소버튼 눌렀을때 처리
  // 2-2. 확인 버튼 눌렀을 떄 처리
  // -> 비밀번호가 일치하는지 안 하는지 따지기
  // -> 일치한다면?
  // -> 출금금액 잔액 비교후 출금
  // -> 잔액 balance에서 내가 작성한 금액 차감
  let money = Number(amount.value);
  let pwCheck = prompt("비밀번호를 입력해주세요",'');



  switch (pwCheck) {
    // 비밀번호 맞을시
    case password :
      if ( money > balance ) {
        alert("출금 금액이 잔액보다 클 수 없습니다.");
      } else if (amount.value.length == 0) {
        alert("금액을 입력해주세요")
      } else if ( money < 0 || money % 1 != 0) {
        alert("제대로된 금액을 입력해주세요")
      } else {
        balance -= money;
        output.innerText = balance;
        amount.value = '';
        alert(`${money}원이 출금 되었습니다. 남은 잔액 : ${balance}원`);
      }
      break;

    // 취소 시 창 내리기
    case null : break;
    // 비밀번호 불일치
    default : alert("비밀번호가 일치하지 않습니다."); break;
  }
}