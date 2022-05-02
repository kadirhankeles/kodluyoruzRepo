const gorevInput = document.querySelector("#task"); //input alanı
const ul = document.getElementById("list");
const header = document.querySelector(".header")
document.addEventListener("DOMContentLoaded",ekranaYazStorage);
document.addEventListener("click",gorevSil);


function gorevSil(e){
    if(e.target.className === "fa fa-remove"){// silme butonuna basıldığında ebeveyni olan li'yi silmemiz gerekli o yüzden 2 kere parentını alacağız
        e.target.parentElement.parentElement.remove();
        StoragedenSil(e.target.parentElement.parentElement.textContent)
        uyariGoster("success","Todo Başarıyla Silindi.");
    }
}

function StoragedenSil(deletetodo){
    let todos = veriyiStoragedenAl();
    todos.forEach(function(todo,index){
        if(todo === deletetodo){
            todos.splice(index,1); //Arrayden değeri siler.
        }
    })
    localStorage.setItem("yapilacak",JSON.stringify(todos));
}

function elemanEkle(){
    listeyeEkle();
}

function listeyeEkle(e){
    const newTodo = gorevInput.value.trim(); //input'a girilen değeri başka bir değere atama -- trim(): String başında ve sonunda gereksiz boşlukları siler
    if(newTodo === ""){
        
        uyariGoster("danger","Lütfen bir görev giriniz");
        
    }else {
    listedeGoster(newTodo); //Direkt ekrana yazmak yerine metoda yolladık. Bu gelecekteki projelerde işlerini kolaylaştıracak.
    ekleStorage(newTodo);
    uyariGoster("success","Görev başarıyla eklendi.")
    
    }
}

function listedeGoster(newTodo){
    const listItem = document.createElement("li");
    // listItem.appendChild(document.createTextNode(newTodo));
    // ul.appendChild(listItem);

    const link = document.createElement("a");
link.href = "#";
link.className = "delete-item";
link.innerHTML = "<i class = 'fa fa-remove'></i>"

listItem.className = "list-group-item d-flex justify-content-between";
//Text Node Ekleme
listItem.appendChild(document.createTextNode(newTodo));
listItem.appendChild(link);
//Todo List'e List item ekleme (ul için ekledik)
ul.appendChild(listItem);
gorevInput.value = "";
}

function uyariGoster(type,message){
    const alert = document.createElement("div");
    alert.className = `alert alert-${type}`;
    alert.textContent = message;
    header.appendChild(alert); //Alerti card body'nin sonuna ekledik. Card Body bizim üst gövdeyi temsil ediyor (input button form vs.)
    // setTimeout - belli bir süre ekranda gözükmesini sağlarız.
    setTimeout(function(){
       alert.remove(); 
    },10000);
}

function ekleStorage(newTodo){ // inputa girilen veriyi storage atma
    let gorev = veriyiStoragedenAl();
    gorev.push(newTodo);
    localStorage.setItem("yapilacak",JSON.stringify(gorev)); //yeni veriyi array olarak ekleme

}

function veriyiStoragedenAl(){ // Storageden todoları alma işlemi
    let gorev;
    if(localStorage.getItem("yapilacak") === null){
        gorev = [];
    }else {
        gorev = JSON.parse(localStorage.getItem("yapilacak"));
    }
    return gorev;
}

function ekranaYazStorage(){ //Local stroage'de olan verileri ekrana yazdırmak.
    let gorevler = veriyiStoragedenAl();
    gorevler.forEach(function(gorev){
        listedeGoster(gorev);
    });
}

