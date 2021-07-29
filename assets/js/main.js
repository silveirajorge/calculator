const result = document.querySelector("#result");

function insertNum(num) {
  result.innerHTML += num;
}

function clearNum() {
  result.innerHTML = "";
}

function backNum() {
  result.innerHTML = result.innerHTML.substring(0, result.innerHTML.length - 1);
}

function calcResult() {
  if (result.innerHTML) {
    result.innerHTML = eval(result.innerHTML);
  } else {
    result.innerHTML = "Nada...";
  }
}
