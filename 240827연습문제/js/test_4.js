document.getElementById("btn").addEventListener("click", () => {

  setTimeout(com, 3000);
});

function com() {
  const num = Number(document.getElementById("numberInput").value);

  let str = "";

  if ( num % 2 == 0 ) {
    str = `${num}은/는 짝수입니다.`;
  } else {
    str = `${num}은/는 홀수입니다.`;
  }

  alert(str);
}