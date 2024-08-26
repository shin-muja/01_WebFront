// 문자열.toLowerCase() : 영어를 모두 소문자로 변경 (A -> a)
// 문자열.toUpperCase() : 영어를 모두 대문자로 변경 (a -> A)



const btnKey = document.querySelectorAll(".key");


// 문서(화면 전체)에서 키가 눌러지는걸 감지했을때
document.addEventListener("keydown", function(e) {
  // if(e.key.toLowerCase() == btnKey[0].innerText){
  //   btnKey[0].style.backgroundColor = "skyblue";
  // }
  // if(e.key.toLowerCase() == btnKey[1].innerText){
  //   btnKey[1].style.backgroundColor = "skyblue";
  // }
  // if(e.key.toLowerCase() == btnKey[2].innerText){
  //   btnKey[2].style.backgroundColor = "skyblue";
  // }
  // if(e.key.toLowerCase() == btnKey[3].innerText){
  //   btnKey[3].style.backgroundColor = "skyblue";
  // }


  // for(i = 0; i < 4 ; i++) {
  //   if(e.key.toUpperCase() === btnKey[i].innerText){
  //     btnKey[i].style.backgroundColor = "skyblue";
  //   }
  // }

  let idx; // 인덱스 값을 저장할 변수


  switch(e.key.toUpperCase()) {
    case btnKey[0].innerText : idx = 0; break;
    case btnKey[1].innerText : idx = 1; break;
    case btnKey[2].innerText : idx = 2; break;
    case btnKey[3].innerText : idx = 3; break;
    default : return;
  }

  // idx번호와 일치하는 keys 배열의 요소의 배경색을 변경
  btnKey[idx].style.backgroundColor = "skyblue";

});

// 문서(화면 전체)에서 키가 떼어지는걸 감지했을때
document.addEventListener("keyup", function(e){
  // if(e.key.toLowerCase() == btnKey[0].innerText){
  //   btnKey[0].style.backgroundColor = "white";
  // }
  // if(e.key.toLowerCase() == btnKey[1].innerText){
  //   btnKey[1].style.backgroundColor = "white";
  // }
  // if(e.key.toLowerCase() == btnKey[2].innerText){r
  //   btnKey[2].style.backgroundColor = "white";
  // }
  // if(e.key.toLowerCase() == btnKey[3].innerText){
  //   btnKey[3].style.backgroundColor = "white";
  // }

  // for(i = 0; i < 4 ; i++) {
  //   if(e.key.toUpperCase() === btnKey[i].innerText){
  //     btnKey[i].style.backgroundColor = "";
  //   }
  // }

  let idx; // 인덱스 값을 저장할 변수


  switch(e.key.toUpperCase()) {
    case btnKey[0].innerText : idx = 0; break;
    case btnKey[1].innerText : idx = 1; break;
    case btnKey[2].innerText : idx = 2; break;
    case btnKey[3].innerText : idx = 3; break;
    default : return;
  }

  // idx번호와 일치하는 keys 배열의 요소의 배경색을 변경
  btnKey[idx].style.backgroundColor = "";

});
