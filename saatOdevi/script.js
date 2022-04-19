let userName = prompt("Lütfen Adınızı Giriniz: ")
let myName = document.getElementById("myName")
//Alttaki kout satırı ilk harf küçük girilmişse dahi büyütüyor.
myName.innerHTML = `${userName.charAt(0).toUpperCase()}${userName.slice(1,userName.length)}`

function showTime() {
    let date = new Date();
    let days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
    let clock = document.getElementById('myClock')
    clock.innerHTML = `${('0' + date.getHours()).slice(-2)}:${('0' + date.getMinutes()).slice(-2)}:${('0' + date.getSeconds()).slice(-2)} ${days[date.getUTCDay()]}`
    setTimeout(showTime, 100);
}
showTime();