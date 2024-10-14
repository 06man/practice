function changeBg(menu) {
    var result = document.querySelector('#result');
    var menuInfo = document.querySelector('#menuinfo');
    if (!menu) {
        var menuOptions = ["japan", "chinese", "korea"];
        var randomIndex = Math.floor(Math.random() * menuOptions.length);
        menu = menuOptions[randomIndex];
    }
    if (menu === 'japan') {
        result.style.backgroundImage = "url('tendong.jpg')"; // 일식 이미지
        menuInfo.innerHTML = '"텐동 ₩11000"'; // 일식 정보
    } else if (menu === 'chinese') {
        result.style.backgroundImage = "url('chinese.jpg')"; // 중식 이미지
        menuInfo.innerHTML = '"짬뽕 ₩11000"'; // 중식 정보
    } else if (menu === 'korea') {
        result.style.backgroundImage = "url('korean.jpg')"; // 한식 이미지
        menuInfo.innerHTML = '"비빔밥 ₩10000"'; // 한식 정보
    }
    
}
function newRegister() {
    var newItem = document.createElement("li");
    var subject = document.querySelector("#subject");
    var newText = document.createTextNode(subject.value);
    newItem.appendChild(newText);
    newItem.classList.add("lunchPick");

    var itemList = document.querySelector("#itemList");
    itemList.insertBefore(newItem, itemList.childNodes[0]);

    subject.value="";

    var items = document.querySelectorAll(".lunchPick");
    for(i=0; i<items.length; i++) {
        items[i].addEventListener("click", function(){
            if(this.parentNode)
                this.parentNode.removeChild(this);
        });
    }
} 
