function one() {

    let mes = new Array("Января", "Февраля", "марта", "апреля", "мая", "июня", "сентября", "октября", "ноября", "декабря");
    let arr = new Array("Понедельник" , "Вторник" , "среда" , "Четверг" , "Пятница" , "Суббота" , "Воскресенье");
    

    let a = new Date();
    let b = a.getMinutes();
    let d = a.getHours();

    if(b <= 9){
        b = "0" + b;
    }

    if(d <= 9){
        d = "0" + d;
    }
    document.getElementById('time').innerText =
    "Сегодня - "+ arr[(a.getDay()-1)]+ " "+ a.getDate()+ "-ое " + mes[(a.getDate())-1] + 
    " " +a.getFullYear()+ "-го года "
    + d + ":" + b ;


}