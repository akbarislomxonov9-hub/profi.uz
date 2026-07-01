// 1. LIGHT & DARK MODE MANTIQLARI
const themeToggleBtn = document.getElementById('themeToggleBtn');
const htmlTag = document.documentElement;
const themeIcon = document.getElementById('themeIcon');
const themeText = document.getElementById('themeText');

themeToggleBtn.addEventListener('click', () => {
    // Hozirgi holatni tekshiramiz
    const currentTheme = htmlTag.getAttribute('data-theme');
    
    if (currentTheme === 'light') {
        htmlTag.setAttribute('data-theme', 'dark');
        themeIcon.textContent = '☀️';
        themeText.textContent = 'Light Mode';
    } else {
        htmlTag.setAttribute('data-theme', 'light');
        themeIcon.textContent = '🌙';
        themeText.textContent = 'Dark Mode';
    }
});


// 2. KATEGORIYALAR BO'YICHA FILTRLASH
function filterCategory(category, clickedButton) {
    // Faol tugmaning klassini (active) yangilash
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => btn.classList.remove('active'));
    clickedButton.classList.add('active');

    // Barcha kartochkalarni olamiz
    const cards = document.querySelectorAll('.expert-card');
    
    cards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        
        // Agar 'all' (barchasi) bo'lsa yoki kategoriya mos kelsa - ko'rsatadi, aks holda yashiradi
        if (category === 'all' || cardCategory === category) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}


// 3. ALOQA MODAL OYNASINI BOSHQARISH
const contactModal = document.getElementById('contactModal');
const modalName = document.getElementById('modalName');
const modalPhone = document.getElementById('modalPhone');
const modalAddress = document.getElementById('modalAddress');

// Oynani ochish va ma'lumotlarni dinamik yozish
function showContact(name, phone, address) {
    modalName.textContent = name;
    modalPhone.textContent = phone;
    modalPhone.setAttribute('href', 'tel:' + phone.replace(/[^0-9+]/g, '')); // Telefon havolasini to'g'irlash
    modalAddress.textContent = address;
    
    contactModal.classList.add('active');
}

// Oynani yopish
function closeContact() {
    contactModal.classList.remove('active');
}

// Oynadan tashqariga bosilganda ham yopilishi uchun
contactModal.addEventListener('click', (event) => {
    if (event.target === contactModal) {
        closeContact();
    }
});