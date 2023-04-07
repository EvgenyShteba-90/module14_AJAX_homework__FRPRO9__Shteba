const btnSub = document.getElementById("btn-submit");
const text = document.getElementById("messege");

btnSub.onclick = function (e) {
    const heigth = document.getElementById("input-height").value;
    const width = document.getElementById("input-width").value;

    if (width < 100 || width > 300 || +width != +width) {
        text.textContent = "одно из чисел вне диапазона от 100 до 300";
        return;
    } else if (heigth < 100 || heigth > 300 || +heigth != +heigth) {
        text.textContent = "одно из чисел вне диапазона от 100 до 300";
        return;
    } else {
        text.textContent = "обработка запроса";
        fetch(`https://picsum.photos/${width}/${heigth}`)
            .then((response) => {
                text.textContent = "вывод изображения";
                let img = document.createElement("img");
                img.src = `${response.url}`;
                document.body.appendChild(img);
            });
    }
};