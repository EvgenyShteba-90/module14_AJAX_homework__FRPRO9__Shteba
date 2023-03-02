
// ! ЗАДАНИЕ 3     class="modul__14-2xhr"

let button = document.getElementById("btn-homework3");
var text = document.getElementById("messege");
const requestBase = "https://picsum.photos/v2/list?limit=";
var imageList = [];

button.onclick = function (e) {
  e.preventDefault();
  let input = document.getElementById("input-homework3").value;

  if (input < 1 || input > 10 || +input != +input) {
    text.textContent = "число вне диапазона от 1 до 10";
    return;
  }
  let request = requestBase + input;
  text.textContent = "";
  let images = document.querySelectorAll("img");
  images.forEach((n) => document.body.removeChild(n));
  useRequest(request, resultReq);
};

function resultReq(x) {
  for (let elem of x) {
    let img = document.createElement("img");
    img.src = elem.download_url;
    img.width = elem.width;
    img.height = elem.height;
    document.body.appendChild(img);
  }
}

function useRequest(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);

  xhr.onload = function () {
    if (xhr.status != 200) {
      console.log("Статус ответа: ", xhr.status);
    } else {
      const result = JSON.parse(xhr.response);
      if (callback) {
        callback(result);
      }
    }
  };

  xhr.onerror = function () {
    console.log("Ошибка! Статус ответа: ", xhr.status);
  };

  xhr.send();
}