//windows.setTimeout()
document.querySelector("#btn1").addEventListener("click", () => {
  // setTimeout( 함수, 지연시간(ms))
  // 함수자리에 간단한 명령어라도
  // 익명, 화살표 형식이라도 취하지 않을시
  // 지연시간 뒤에 작동하지 않고 바로 작동한다.
  setTimeout( function() {
    alert("3초 후 출력");
  }, 3000);
});


// window.setInterval()

let interval;// setInterval을 저장하기 위한 전역 변수

// 현재 시간 문자열로 반환 함수
function currentTime() {

  const now = new Date();
  // console.log(now);

  let hour = now.getHours(); // 시
  let min = now.getMinutes(); // 분
  let sec = now.getSeconds(); // 초
  // console.log(hour, min, sec);

  // 1의 자리일때 앞에 "0" 붙이기

  if(hour < 10) hour += "0" + hour;
  if(min < 10) min += "0" + min;
  if(sec < 10) sec += "0" + sec;

  // console.log(hour, min, sec);

  return hour + " : " + min + " : " + sec
}

function clockFn() {
  
  const clock = document.querySelector("#clock");

  clock.innerText = currentTime();

  interval = setInterval(function() {
    clock.innerText = currentTime();
  }, 1000);

}

clockFn();

document.getElementById("stop").addEventListener("click", () => {
  clearInterval(interval);
})

// currentTime();