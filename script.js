document.querySelectorAll('.video').forEach(video => {
    video.addEventListener('click', function() {
        // Создаём элемент для видео на весь экран
        let fullscreenContainer = document.createElement('div');
        fullscreenContainer.classList.add('video-fullscreen');
        
        // Создаём копию видео для полноэкранного режима
        let fullscreenVideo = document.createElement('video');
        fullscreenVideo.src = video.src;
        fullscreenVideo.controls = true;
        fullscreenVideo.autoplay = true;
        
        fullscreenContainer.appendChild(fullscreenVideo);
        
        // Добавляем контейнер на страницу
        document.body.appendChild(fullscreenContainer);

        // Закрытие полноэкранного видео при клике
        fullscreenContainer.addEventListener('click', function() {
            document.body.removeChild(fullscreenContainer);
        });
    });
});
