const translations = {
    ua: {
        title: "Будинки для оренди",
        house1Title: "Будинок у Відні",
        house1Description: "Адреса: Вулиця Приклад, Відень, Австрія. Чудове розташування в центрі міста.",
        house2Title: "Будинок у Зальцбурзі",
        house2Description: "Адреса: Вулиця Приклад, Зальцбург, Австрія. Тихий район з видом на гори.",
        contactButton: "Контакти",
        nameLabel: "Ваше ім'я",
        phoneLabel: "Ваш телефон",
        submitButton: "Надіслати",
        aboutTitle: "Про компанію",
        aboutText1: "Наша компанія займається орендою будинків в Австрії вже понад 10 років.",
        aboutText2: "Завдяки нашому великому вибору нерухомості та індивідуальному підходу кожен клієнт знайде свій ідеальний будинок.",
        contactInfo: "Контактна інформація: +43 123456789, Telegram, Viber, WhatsApp – Ім'я консультанта"
    },
    en: {
        title: "Houses for Rent",
        house1Title: "House in Vienna",
        house1Description: "Address: Example Street, Vienna, Austria. Excellent location in the city center.",
        contactButton: "Contact",
        nameLabel: "Your Name",
        phoneLabel: "Your Phone",
        submitButton: "Submit",
        aboutTitle: "About Us",
        aboutText1: "Our company has been renting houses in Austria for over 10 years.",
        aboutText2: "With our large selection of properties and personalized approach, every customer will find their perfect home."
    },
    de: {
        title: "Häuser zur Miete",
        house1Title: "Haus in Wien",
        house1Description: "Adresse: Beispielstraße, Wien, Österreich. Hervorragende Lage im Stadtzentrum.",
        contactButton: "Kontaktdaten",
        nameLabel: "Ihr Name",
        phoneLabel: "Ihre Telefonnummer",
        submitButton: "Absenden",
        aboutTitle: "Über unsere Firma",
        aboutText1: "Unser Unternehmen vermietet seit über 10 Jahren Häuser in Österreich.",
        aboutText2: "Dank unserer großen Auswahl an Immobilien und unserem persönlichen Ansatz findet jeder Kunde sein perfektes Zuhause."
    }
};
document.querySelectorAll('.lang-btn').forEach(button => {
    button.addEventListener('click', function() {
        const selectedLang = this.id;
        changeLanguage(selectedLang);
    });
});

function changeLanguage(lang) {
    document.querySelector('h1').textContent = translations[lang].title;
    document.querySelector('.house h2').textContent = translations[lang].house1Title;
    document.querySelector('.house p').textContent = translations[lang].house1Description;
    document.querySelector('.contact-btn').textContent = translations[lang].contactButton;
    document.querySelector('input[name="name"]').placeholder = translations[lang].nameLabel;
    document.querySelector('input[name="phone"]').placeholder = translations[lang].phoneLabel;
    document.querySelector('#feedback-form button').textContent = translations[lang].submitButton;

    if (document.querySelector('main').classList.contains('about')) {
        document.querySelector('h1').textContent = translations[lang].aboutTitle;
        document.querySelectorAll('p')[0].textContent = translations[lang].aboutText1;
        document.querySelectorAll('p')[1].textContent = translations[lang].aboutText2;
    }
}
document.querySelectorAll('.contact-btn').forEach(button => {
    button.addEventListener('click', function() {
        const contactForm = this.nextElementSibling;
        contactForm.style.display = contactForm.style.display === 'none' ? 'block' : 'none';
    });
});

document.querySelectorAll('#feedback-form').forEach(form => {
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = this.name.value;
        const phone = this.phone.value;

        const message = `Новый запрос: Имя: ${name}, Телефон: ${phone}`;
        const telegramBotToken = 'YOUR_TELEGRAM_BOT_TOKEN';
        const chatId = 'YOUR_TELEGRAM_CHAT_ID';

        fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: message
            })
        })
        .then(response => response.json())
        .then(data => {
            alert('Запрос успешно отправлен!');
        })
        .catch(error => {
            console.error('Ошибка:', error);
        });
    });
});
