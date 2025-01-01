const numSnowflakes = 300; // Количество снежинок

    for (let i = 0; i < numSnowflakes; i++) {
      const snowflake = document.createElement('div');
      snowflake.classList.add('snowflake');
      snowflake.style.width = `${Math.random() * 10 + 5}px`; // случайный размер
      snowflake.style.height = snowflake.style.width;
      snowflake.style.left = `${Math.random() * 100}vw`; // случайная позиция по горизонтали
      snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`; // случайная продолжительность анимации
      snowflake.style.animationDelay = `${Math.random() * 5}s`; // случайная задержка

      document.body.appendChild(snowflake);

      // Для случайного движения снежинок
      snowflake.style.animationName = 'fall';
      snowflake.style.animationTimingFunction = 'linear';
    }


