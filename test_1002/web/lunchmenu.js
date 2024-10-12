function changeBg(menu) {
    var result = document.querySelector('#result');
    var menuInfo = document.querySelector('#menuinfo');

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
