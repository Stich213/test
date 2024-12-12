const swiper = new Swiper('.swiper-reviews', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

emailjs.init('0XN2nzdTznVPwSVT9'); // Замінено вашим ідентифікатором з EmailJS

document.addEventListener('DOMContentLoaded', function () {
    // Отримуємо форму
    const form = document.querySelector('.wpcf7-form');

    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault(); // Зупиняємо стандартну поведінку форми

            // Збираємо дані з форми
            const name = form.querySelector('input[name="name"]').value;
            const phone = form.querySelector('input[name="phone"]').value;

            // Підготуємо об'єкт з даними для EmailJS
            const templateParams = {
                user_name: name,
                user_phone: phone
            };

            // Відправляємо дані через EmailJS
            emailjs.send('service_5w4xxcp', 'template_tr3x3te', templateParams)
                .then(function (response) {
                    console.log('SUCCESS!', response.status, response.text);
                    alert('Ваше повідомлення успішно відправлено!');
                    form.reset(); // Скидаємо форму після успішної відправки
                }, function (error) {
                    console.error('FAILED...', error);
                    alert('Сталася помилка при відправленні. Спробуйте ще раз.');
                });
        });
    }
});
