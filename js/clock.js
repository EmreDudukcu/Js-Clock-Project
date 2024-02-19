let temp = prompt("Ad Soyad bilgisi giriniz.");
let nameSurname = document.querySelector("#myName");
nameSurname.innerHTML = temp;

function showTime() {
  const date = new Date();

  const second =
    date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();

  const minute =
    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();

  const hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
  const day = date.getDate();
  const month = date.getMonth() + 1; // Ay indeksi 0'dan başlar, bu yüzden 1 ekliyoruz.
  const year = date.getFullYear();

  const dateOnScreen =
    day + "." + month + "." + year + " " + hour + "." + minute + "." + second;

  document.getElementById("myClock").innerText = dateOnScreen;

  setTimeout(showTime, 1000);
}

showTime();
