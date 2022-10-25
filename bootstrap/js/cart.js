var gia = document.querySelectorAll(".gia");
var soLuong = document.querySelector("#salary span");
var total = document.querySelector("#money");
var totalMoney = document.querySelector("#total_money");
var formInput = document.querySelectorAll(".form1");
var tmp = [0,0,0,0,0];

for (let i = 0; i < formInput.length; i++) {
  formInput[i].oninput = (e) => {
    tmp[i] = +e.target.value;
    var sumSoLuong = 0;
    var sumMoney = 0;
    for (let j = 0; j < tmp.length; j++) {
      sumSoLuong += tmp[j];
      sumMoney += tmp[j] * +gia[j].textContent;
    }

soLuong.textContent = sumSoLuong;
    total = sumMoney.toLocaleString("vi", { style: "currency", currency: "VND" });
    totalMoney.textContent = sumMoney.toLocaleString("vi", { style: "currency", currency: "VND" });
  };
}
