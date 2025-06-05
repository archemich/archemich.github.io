// emailjs.init({publicKey: ""});

// Фиксация хедера при скролле
window.addEventListener('scroll', function () {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Плавный скролл для якорных ссылок
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (!targetElement) return;

        const headerHeight = document.getElementById('header').offsetHeight;
        const extraOffset = 20; // Дополнительный отступ (по желанию)
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = targetPosition - headerHeight - extraOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
        history.pushState(null, null, targetId);
    });
});

function showToast(message, type = 'default', duration = 3000) {
  const toast = document.getElementById('toast');
  const toastContent = toast.querySelector('.toast-content');
  
  toastContent.textContent = message;
  toast.className = 'toast show';
  if (type !== 'default') toast.classList.add(type);
  
  setTimeout(() => {
    toast.className = 'toast';
  }, duration);
}

// Пример использования:
// showToast('Форма отправлена!', 'success');
// showToast('Ошибка отправки', 'error');

// document.getElementById("feedback-form").addEventListener('submit', function(event) {
//     event.preventDefault();
//     emailjs.sendForm('service_gfc2esh', "template_b5n82cq", this)
//         .then(function() {
//             showToast('Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.', 'success');
//         }, function(error) {
//             console.error('Cannot send message: ' + error);
//             showToast('Произошла ошибка во время отправки формы. Свяжитесь с нами через почту.', 'error');
//         });
    
// });


// [...document.getElementsByClassName('get-in-touch')].forEach(element => {
//     element.addEventListener('click', (e) => {
//         showToast("E-Mail: archemich@gmail.com Tel: +7 (928) 628-92-88");
//     });
// }); 
