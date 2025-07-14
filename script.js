document.addEventListener('DOMContentLoaded', () => {
    // --- TRANSLATIONS (Assume loaded from external JSON files) ---
    let translations = {};
    let menuData = {};
    let menuCardData = {};
    let currentLang = 'en';

    async function loadTranslations() {
        try {
            const [en, sq, mk, tr] = await Promise.all([
                fetch('en.json').then(res => res.json()),
                fetch('sq.json').then(res => res.json()),
                fetch('mk.json').then(res => res.json()),
                fetch('tr.json').then(res => res.json())
            ]);
            translations = { en, sq, mk, tr };
        } catch (error) {
            console.error("Could not load translation files:", error);
        }
    }
    
    // --- DATA INITIALIZATION (Assume this is filled as before) ---
    function initializeData() {
        menuData = { /* Omitted for brevity, use your existing data */ };
        menuCardData = { /* Omitted for brevity, use your existing data */ };
    }

    // --- STATE MANAGEMENT ---
    let activeMenuKey = "PIZZA";
    let currentItemIndex = 0;
    let selectedSize = 'S';
    let animationInProgress = false;

    // --- DOM ELEMENTS ---
    const mainNavLinks = document.querySelectorAll('.main-nav a[data-page], .page-switcher');
    const fanFavoriteLinks = document.querySelectorAll('.featured-items .item-card');
    const pages = document.querySelectorAll('.page');
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const mainNav = document.querySelector('.main-nav');
    const languageSwitcher = document.querySelector('.language-switcher');
    const selectedLangEl = document.querySelector('.selected-lang');
    const langDropdown = document.querySelector('.lang-dropdown');
    
    // Menu page elements
    const menuPageContainer = document.getElementById('menu-page-container');
    const menuTitleEl = document.getElementById('menu-title');
    const pizzaDisplay = document.querySelector('.pizza-display');
    const itemNameEl = document.getElementById('pizza-name');
    const itemDescriptionEl = document.getElementById('pizza-description');
    const itemImageEl = document.getElementById('pizza-image');
    const sizeSelector = document.querySelector('.size-selector-vertical');
    const ingredientsListEl = document.getElementById('ingredients-list');
    const prevBtn = document.getElementById('prev-pizza');
    const nextBtn = document.getElementById('next-pizza');
    const orderNowBtn = document.getElementById('order-now-btn');
    const phoneModal = document.getElementById('phone-modal');
    const closeModalBtn = document.querySelector('.close-modal');
    const floatingElements = document.getElementById('floating-elements');
    const desktopMenuNavLinks = document.querySelectorAll('.menu-nav-links.desktop-nav a');
    const categoryChips = document.querySelectorAll('.category-chip');


    // --- LANGUAGE & TRANSLATION ---
    function setLanguage(lang) {
        if (!translations[lang]) return;
        currentLang = lang;
        document.body.classList.add('lang-switching');
        setTimeout(() => {
            document.querySelectorAll('[data-lang]').forEach(el => {
                const key = el.dataset.lang;
                if (translations[lang] && translations[lang][key]) {
                    el.textContent = translations[lang][key];
                }
            });
            document.documentElement.lang = lang;
            renderCurrentMenuItem();
            const selectedLangAnchor = langDropdown.querySelector(`[data-lang-code="${lang}"]`);
            if (selectedLangAnchor) {
                selectedLangEl.querySelector('img').src = selectedLangAnchor.querySelector('img').src;
                selectedLangEl.querySelector('span').textContent = selectedLangAnchor.textContent.trim();
            }
            document.body.classList.remove('lang-switching');
        }, 300);
    }

    // --- PAGE NAVIGATION ---
    function switchPage(pageId, isInitialLoad = false) {
        pages.forEach(page => page.classList.remove('active'));
        const newPage = document.getElementById(pageId);
        if (newPage) newPage.classList.add('active');

        document.querySelectorAll('.main-nav a[data-page]').forEach(link => {
            link.classList.toggle('active', link.dataset.page === pageId);
        });

        if (!isInitialLoad) {
            history.pushState({page: pageId}, null, `#${pageId.replace('-page', '')}`);
        }
        
        window.scrollTo(0, 0);
        // Close mobile nav when switching pages
        if (document.body.classList.contains('mobile-nav-open')) {
            mainNav.classList.remove('mobile-open');
            document.body.classList.remove('mobile-nav-open');
            mobileNavToggle.querySelector('i').className = 'fas fa-bars';
        }
    }
    
    // --- MENU PAGE LOGIC ---
    function applyTheme(theme) {
        const defaultTheme = {
            bgGradient: 'linear-gradient(135deg, #444, #222)',
            textColor: '#ffffff',
            accentColor: '#FFD700',
            bgElements: ['🍕']
        };
        const activeTheme = { ...defaultTheme, ...theme };
        menuPageContainer.style.background = activeTheme.bgGradient;
        pizzaDisplay.style.color = activeTheme.textColor;
        pizzaDisplay.style.setProperty('--accent-color', activeTheme.accentColor);
        createFloatingElements(activeTheme.bgElements);
    }

    function createFloatingElements(elements) {
        floatingElements.innerHTML = '';
        if (!elements || elements.length === 0) return;
        const elementCount = window.innerWidth < 768 ? 5 : 10;
        elements.forEach(emoji => {
            for (let i = 0; i < elementCount; i++) {
                const el = document.createElement('div');
                el.className = 'floating-emoji';
                el.textContent = emoji;
                el.style.left = `${Math.random() * 100}vw`;
                el.style.animationDelay = `${Math.random() * 15}s`;
                el.style.animationDuration = `${10 + Math.random() * 10}s`;
                el.style.fontSize = `${1.5 + Math.random()}rem`;
                floatingElements.appendChild(el);
            }
        });
    }

    function renderCurrentMenuItem() {
        // This function remains largely the same, ensure it's populated from your original script
        // For brevity, the full implementation is omitted here.
        // Important parts:
        const menu = menuData[activeMenuKey];
        if (!menu || !menu.items || menu.items.length === 0) { /* handle empty menu */ return; }
        const item = menu.items[currentItemIndex];
        const cardInfo = menuCardData[activeMenuKey]?.items[currentItemIndex];
        const t = translations[currentLang];
        
        menuTitleEl.textContent = t[menu.titleKey] || activeMenuKey;
        itemNameEl.textContent = t[item.nameKey];
        itemDescriptionEl.textContent = t[item.descriptionKey];
        
        if (cardInfo) {
            itemImageEl.src = cardInfo.image;
            itemImageEl.alt = t[item.nameKey];
            applyTheme(cardInfo.theme);
        }

        const ingredientsString = t[item.ingredientsKey] || '';
        ingredientsListEl.innerHTML = ingredientsString.split(',').map(ing => `<span>${ing.trim()}</span>`).join('');
        ingredientsListEl.style.display = ingredientsString ? 'flex' : 'none';

        sizeSelector.style.display = activeMenuKey === 'PIZZA' ? 'flex' : 'none';
        updateOrderButtonText();
    }
    
    async function navigateItems(direction) {
        if (animationInProgress) return;
        const menu = menuData[activeMenuKey];
        if (!menu || menu.items.length <= 1) return;

        animationInProgress = true;
        pizzaDisplay.classList.add('is-navigating');
        
        await new Promise(resolve => setTimeout(resolve, 250));
        
        currentItemIndex = (currentItemIndex + direction + menu.items.length) % menu.items.length;
        renderCurrentMenuItem();
        
        await new Promise(resolve => setTimeout(resolve, 50));
        pizzaDisplay.classList.remove('is-navigating');
        animationInProgress = false;
    }

    function switchMenuCategory(newMenuKey) {
        if (activeMenuKey === newMenuKey) return;
        
        activeMenuKey = newMenuKey;
        currentItemIndex = 0;
        
        desktopMenuNavLinks.forEach(link => link.classList.toggle('active', link.dataset.menu === activeMenuKey));
        categoryChips.forEach(chip => chip.classList.toggle('active', chip.dataset.menu === newMenuKey));
        
        pizzaDisplay.classList.add('is-navigating');
        setTimeout(() => {
            renderCurrentMenuItem();
            pizzaDisplay.classList.remove('is-navigating');
        }, 250);
    }
    
    function updateOrderButtonText() {
        const baseText = translations[currentLang]?.['orderNow'] || 'Order Now';
        orderNowBtn.textContent = activeMenuKey === 'PIZZA' ? `${baseText} (${selectedSize})` : baseText;
    }

    function showPhoneModal() { phoneModal.classList.add('show'); }
    function hidePhoneModal() { phoneModal.classList.remove('show'); }

    // --- EVENT LISTENERS ---
    function setupEventListeners() {
        // ** UPDATED Mobile Nav Toggle **
        mobileNavToggle.addEventListener('click', () => {
            const icon = mobileNavToggle.querySelector('i');
            const isNavOpen = mainNav.classList.toggle('mobile-open');
            document.body.classList.toggle('mobile-nav-open', isNavOpen);
            icon.className = isNavOpen ? 'fas fa-times' : 'fas fa-bars';
        });

        // Other event listeners (page switching, language, menu navigation, etc.)
        // These can remain the same as in your original script.
        // For brevity, they are omitted here. A few key ones are included.

        mainNavLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                switchPage(link.dataset.page);
            });
        });

        selectedLangEl.addEventListener('click', (e) => {
            e.stopPropagation();
            languageSwitcher.classList.toggle('open');
        });

        document.addEventListener('click', () => languageSwitcher.classList.remove('open'));
        
        langDropdown.addEventListener('click', (e) => {
            const langLink = e.target.closest('a[data-lang-code]');
            if (langLink) {
                e.preventDefault();
                setLanguage(langLink.dataset.langCode);
                languageSwitcher.classList.remove('open');
            }
        });

        prevBtn.addEventListener('click', () => navigateItems(-1));
        nextBtn.addEventListener('click', () => navigateItems(1));
        orderNowBtn.addEventListener('click', showPhoneModal);
        closeModalBtn.addEventListener('click', hidePhoneModal);

        // ... rest of your event listeners
    }

    // --- INITIALIZATION ---
    async function init() {
        initializeData(); // Make sure this is populated with your data
        await loadTranslations();
        setupEventListeners();

        const initialHash = window.location.hash.substring(1);
        const initialPageId = initialHash ? `${initialHash}-page` : 'home-page';
        switchPage(initialPageId, true);
        setLanguage(currentLang);
    }

    init();
});
