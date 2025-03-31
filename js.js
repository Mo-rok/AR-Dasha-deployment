//вот это вот все должно срашивать разрешение включить камеру(getUserMedia()) 
// Получаем элемент видео
const video = document.getElementById('video');

// Проверяем, поддерживается ли getUserMedia
if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    // Запрашиваем доступ к камере
    navigator.mediaDevices.getUserMedia({ video: true }) //метод запрашивает доступ к видеопотоку, если разрешили поток переадется в элемент video
        .then(function (stream) {
            // Привязываем поток к элементу видео
            video.srcObject = stream;
        })
        .catch(function (error) { //на случай запрета все в консоль
            console.error("Ошибка доступа к камере: ", error);
        });
} else {
    console.log("getUserMedia не поддерживается данным браузером.");
}