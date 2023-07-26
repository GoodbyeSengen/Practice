const button = document.querySelector("#bttn");

function countT() {
  const word = document.querySelector("#word").value;
  const result = document.querySelector("#result");

  let count = word.length;

  result.innerText = `${count}`;
}
button.addEventListener("click", countT);