document.addEventListener('DOMContentLoaded', () => {
    // --- TRANSLATIONS (Loaded from external JSON files) ---
    let translations = {};
    let menuData = {};
    let menuCardData = {};
    let currentLang = 'en'; // Default language

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
    
    // --- DATA ---
    function initializeData() {
        menuData = {
            "PIZZA": { titleKey: 'menu_pizza', items: [ { nameKey: 'pizza_margarita_name', descriptionKey: 'pizza_margarita_desc', ingredientsKey: 'pizza_margarita_ingredients' }, { nameKey: 'pizza_funghi_name', descriptionKey: 'pizza_funghi_desc', ingredientsKey: 'pizza_funghi_ingredients' }, { nameKey: 'pizza_tuna_name', descriptionKey: 'pizza_tuna_desc', ingredientsKey: 'pizza_tuna_ingredients' }, { nameKey: 'pizza_suxhuk_name', descriptionKey: 'pizza_suxhuk_desc', ingredientsKey: 'pizza_suxhuk_ingredients' }, { nameKey: 'pizza_prosciutto_name', descriptionKey: 'pizza_prosciutto_desc', ingredientsKey: 'pizza_prosciutto_ingredients' }, { nameKey: 'pizza_capricciosa_name', descriptionKey: 'pizza_capricciosa_desc', ingredientsKey: 'pizza_capricciosa_ingredients' }, { nameKey: 'pizza_quattro_formaggi_name', descriptionKey: 'pizza_quattro_formaggi_desc', ingredientsKey: 'pizza_quattro_formaggi_ingredients' }, { nameKey: 'pizza_calzone_name', descriptionKey: 'pizza_calzone_desc', ingredientsKey: 'pizza_calzone_ingredients' }, { nameKey: 'pizza_vegetarian_name', descriptionKey: 'pizza_vegetarian_desc', ingredientsKey: 'pizza_vegetarian_ingredients' }, { nameKey: 'pizza_durum_name', descriptionKey: 'pizza_durum_desc', ingredientsKey: 'pizza_durum_ingredients' }, { nameKey: 'pizza_ragazzi_name', descriptionKey: 'pizza_ragazzi_desc', ingredientsKey: 'pizza_ragazzi_ingredients' } ] },
            "BAGUETTE": { titleKey: 'menu_baguette', items: [ { nameKey: 'baguette_chicken_name', descriptionKey: 'baguette_chicken_desc', ingredientsKey: 'baguette_chicken_ingredients' }, { nameKey: 'baguette_adana_name', descriptionKey: 'baguette_adana_desc', ingredientsKey: 'baguette_adana_ingredients' }, { nameKey: 'baguette_suxhuk_name', descriptionKey: 'baguette_suxhuk_desc', ingredientsKey: 'baguette_suxhuk_ingredients' }, { nameKey: 'baguette_pleskavic_name', descriptionKey: 'baguette_pleskavic_desc', ingredientsKey: 'baguette_pleskavic_ingredients' } ] },
            "PIDE": { titleKey: 'menu_pide', items: [ { nameKey: 'pide_kackavall_name', descriptionKey: 'pide_kackavall_desc', ingredientsKey: 'pide_kackavall_ingredients' }, { nameKey: 'pide_suxhuk_name', descriptionKey: 'pide_suxhuk_desc', ingredientsKey: 'pide_suxhuk_ingredients' }, { nameKey: 'pide_mish_bluar_name', descriptionKey: 'pide_mish_bluar_desc', ingredientsKey: 'pide_mish_bluar_ingredients' }, { nameKey: 'pide_stek_veze_susam_name', descriptionKey: 'pide_stek_veze_susam_desc', ingredientsKey: 'pide_stek_veze_susam_ingredients' }, { nameKey: 'pide_tuna_name', descriptionKey: 'pide_tuna_desc', ingredientsKey: 'pide_tuna_ingredients' }, { nameKey: 'pide_proshute_name', descriptionKey: 'pide_proshute_desc', ingredientsKey: 'pide_proshute_ingredients' }, { nameKey: 'pide_ragazzi_name', descriptionKey: 'pide_ragazzi_desc', ingredientsKey: 'pide_ragazzi_ingredients' } ] },
            "PORTION": { titleKey: 'menu_portion', items: [ { nameKey: 'portion_chicken_fingers_name', descriptionKey: 'portion_chicken_fingers_desc', ingredientsKey: 'portion_chicken_fingers_ingredients' }, { nameKey: 'portion_pleskavic_sharri_name', descriptionKey: 'portion_pleskavic_sharri_desc', ingredientsKey: 'portion_pleskavic_sharri_ingredients' }, { nameKey: 'portion_chicken_salad_name', descriptionKey: 'portion_chicken_salad_desc', ingredientsKey: 'portion_chicken_salad_ingredients' } ] },
            "TOSTA": { titleKey: 'menu_tosta', items: [ { nameKey: 'tost_sallam_name', descriptionKey: 'tost_sallam_desc', ingredientsKey: 'tost_sallam_ingredients' }, { nameKey: 'tost_suxhuk_name', descriptionKey: 'tost_suxhuk_desc', ingredientsKey: 'tost_suxhuk_ingredients' }, { nameKey: 'tost_proshute_qips_name', descriptionKey: 'tost_proshute_qips_desc', ingredientsKey: 'tost_proshute_qips_ingredients' } ] },
            "BURGER": { titleKey: 'menu_burger', items: [ { nameKey: 'burger_classic_name', descriptionKey: 'burger_classic_desc', ingredientsKey: 'burger_classic_ingredients' }, { nameKey: 'burger_cheese_name', descriptionKey: 'burger_cheese_desc', ingredientsKey: 'burger_cheese_ingredients' }, { nameKey: 'burger_chicken_name', descriptionKey: 'burger_chicken_desc', ingredientsKey: 'burger_chicken_ingredients' }, { nameKey: 'burger_crispy_chicken_name', descriptionKey: 'burger_crispy_chicken_desc', ingredientsKey: 'burger_crispy_chicken_ingredients' }, { nameKey: 'burger_ragazzi_name', descriptionKey: 'burger_ragazzi_desc', ingredientsKey: 'burger_ragazzi_ingredients' } ] },
            "LAHMAXHUN": { titleKey: 'menu_lahmaxhun', items: [ { nameKey: 'lahmacun_classic_name', descriptionKey: 'lahmacun_classic_desc', ingredientsKey: 'lahmacun_classic_ingredients' }, { nameKey: 'lahmacun_kackavall_name', descriptionKey: 'lahmacun_kackavall_desc', ingredientsKey: 'lahmacun_kackavall_ingredients' } ] },
            "PIZZA FOR KIDS": { titleKey: 'menu_pizza_for_kids', items: [ { nameKey: 'pizza_mickey_mouse_name', descriptionKey: 'pizza_mickey_mouse_desc', ingredientsKey: 'pizza_mickey_mouse_ingredients' }, { nameKey: 'pizza_me_zemer_name', descriptionKey: 'pizza_me_zemer_desc', ingredientsKey: 'pizza_me_zemer_ingredients' } ] },
            "EXTRAS": { titleKey: 'menu_extras', items: [ { nameKey: 'extras_pomfrit_name', descriptionKey: 'extras_pomfrit_desc', ingredientsKey: 'extras_pomfrit_ingredients' }, { nameKey: 'extras_sos_hudhres_name', descriptionKey: 'extras_sos_hudhres_desc', ingredientsKey: 'extras_sos_hudhres_ingredients' }, { nameKey: 'extras_kackavall_name', descriptionKey: 'extras_kackavall_desc', ingredientsKey: 'extras_kackavall_ingredients' }, { nameKey: 'extras_suxhuk_name', descriptionKey: 'extras_suxhuk_desc', ingredientsKey: 'extras_suxhuk_ingredients' }, { nameKey: 'extras_veze_name', descriptionKey: 'extras_veze_desc', ingredientsKey: 'extras_veze_ingredients' }, { nameKey: 'extras_pije_freskuese_name', descriptionKey: 'extras_pije_freskuese_desc', ingredientsKey: 'extras_pije_freskuese_ingredients' } ] }
        };

        menuCardData = {
            "PIZZA":{items:[{nameKey:'pizza_margarita_name',image:'https://i.imgur.com/YSLS4Pp.png',theme:{bgGradient:'linear-gradient(135deg, #e74c3c, #c0392b)',bgElements:['🍅','🧀','🌿']}},{nameKey:'pizza_funghi_name',image:'https://i.imgur.com/qeZbEEK.png',theme:{bgGradient:'linear-gradient(135deg, #8B4513, #A0522D)',bgElements:['🍄','🧀','🌿']}},{nameKey:'pizza_tuna_name',image:'https://i.imgur.com/UYjPtl2.png',theme:{bgGradient:'linear-gradient(135deg, #3498db, #2980b9)',bgElements:['🐟','🧅','🌊']}},{nameKey:'pizza_suxhuk_name',image:'https://i.imgur.com/LDk4NV4.png',theme:{bgGradient:'linear-gradient(135deg, #e67e22, #d35400)',bgElements:['🌭','🧀','🌶️']}},{nameKey:'pizza_prosciutto_name',image:'https://i.imgur.com/pAs9K3M.png',theme:{bgGradient:'linear-gradient(135deg, #9b59b6, #8e44ad)',bgElements:['🍖','🧀','🥬']}},{nameKey:'pizza_capricciosa_name',image:'https://i.imgur.com/UiMfyNV.png',theme:{bgGradient:'linear-gradient(135deg, #7e57c2, #5e35b1)',bgElements:['🍖','🍄','🫒']}},{nameKey:'pizza_quattro_formaggi_name',image:'https://i.imgur.com/1ojUNVW.png',theme:{bgGradient:'linear-gradient(135deg, #ffd54f, #ffc107)',bgElements:['🧀','🧀','🧀'],textColor:'#3e2723'}},{nameKey:'pizza_calzone_name',image:'https://i.imgur.com/4glW04Z.png',theme:{bgGradient:'linear-gradient(135deg, #ff7043, #f4511e)',bgElements:['🥟','🍖','🍄']}},{nameKey:'pizza_vegetarian_name',image:'https://i.imgur.com/7aNBE1u.png',theme:{bgGradient:'linear-gradient(135deg, #66bb6a, #43a047)',bgElements:['🥦','🍅','🫑']}},{nameKey:'pizza_durum_name',image:'https://i.imgur.com/kgL4KnM.png',theme:{bgGradient:'linear-gradient(135deg, #8d6e63, #6d4c41)',bgElements:['🌯','🍖','🍄']}},{nameKey:'pizza_ragazzi_name',image:'https://i.imgur.com/6N3P5gn.png',theme:{bgGradient:'linear-gradient(135deg, #e53935, #c62828)',bgElements:['🍕','🍖','🌶️']}}]},
            "BAGUETTE": {items: [{ nameKey: 'baguette_chicken_name', image: 'https://i.imgur.com/YYcTLWB.png', theme: { bgGradient: 'linear-gradient(135deg, #f7b733, #fc4a1a)', bgElements: ['🥖', '🍗', '🥬'] } }, { nameKey: 'baguette_adana_name', image: 'https://i.imgur.com/jAx7ozx.png', theme: { bgGradient: 'linear-gradient(135deg, #D31027, #EA384D)', bgElements: ['🥖', '🌶️', '🥩'] } }, { nameKey: 'baguette_suxhuk_name', image: 'https://i.imgur.com/luubq25.png', theme: { bgGradient: 'linear-gradient(135deg, #c0392b, #8e44ad)', bgElements: ['🥖', '🌭', '🧀'] } }, { nameKey: 'baguette_pleskavic_name', image: 'https://i.imgur.com/b3YKVLA.png', theme: { bgGradient: 'linear-gradient(135deg, #4b6cb7, #182848)', bgElements: ['🥖', '🍔', '🧅'] } }] },
            "PIDE": { items: [{ nameKey: 'pide_kackavall_name', image: 'https://i.imgur.com/2w3kloI.png', theme: { bgGradient: 'linear-gradient(135deg, #FFC837, #FF8008)', bgElements: ['🥖', '🧀'] } }, { nameKey: 'pide_suxhuk_name', image: 'https://i.imgur.com/bDSrUcH.png', theme: { bgGradient: 'linear-gradient(135deg, #e53935, #c62828)', bgElements: ['🥖', '🌭', '🌶️'] } }, { nameKey: 'pide_mish_bluar_name', image: 'https://i.imgur.com/iV8bvsY.png', theme: { bgGradient: 'linear-gradient(135deg, #783a00, #c35a00)', bgElements: ['🥖', '🥩', '🧅'] } }, { nameKey: 'pide_stek_veze_susam_name', image: 'https://i.imgur.com/0nt7iUm.png', theme: { bgGradient: 'linear-gradient(135deg, #434343, #000000)', bgElements: ['🥖', '🍳', '🥩'] } }, { nameKey: 'pide_tuna_name', image: 'https://i.imgur.com/yNzZ5t9.png', theme: { bgGradient: 'linear-gradient(135deg, #00c6ff, #0072ff)', bgElements: ['🥖', '🐟', '🌽'] } }, { nameKey: 'pide_proshute_name', image: 'https://i.imgur.com/NTuwILL.png', theme: { bgGradient: 'linear-gradient(135deg, #ec77ab, #7873f5)', bgElements: ['🥖', '🍖', '🌿'] } }, { nameKey: 'pide_ragazzi_name', image: 'https://i.imgur.com/NgbiDKs.png', theme: { bgGradient: 'linear-gradient(135deg, #ff00cc, #333399)', bgElements: ['🥖', '✨', '👨‍🍳'] } }] },
            "PORTION": { items: [{ nameKey: 'portion_chicken_fingers_name', image: 'https://i.imgur.com/oyKT9e6.png', theme: { bgGradient: 'linear-gradient(135deg, #FFD700, #FBB034)', bgElements: ['🍗', '🍟', '😋'], textColor: '#000000' } }, { nameKey: 'portion_pleskavic_sharri_name', image: 'https://i.imgur.com/m4TNFiC.png', theme: { bgGradient: 'linear-gradient(135deg, #7f5a83, #0d324d)', bgElements: ['🍔', '🧅', '🔥'] } }, { nameKey: 'portion_chicken_salad_name', image: 'https://i.imgur.com/xjd5FNE.png', theme: { bgGradient: 'linear-gradient(135deg, #56ab2f, #a8e063)', bgElements: ['🥗', '🍗', '🍅'] } }] },
            "TOSTA": { items: [{ nameKey: 'tost_sallam_name', image: 'https://i.imgur.com/cutD45v.png', theme: { bgGradient: 'linear-gradient(135deg, #e67e22, #d35400)', bgElements: ['🥪', '🧀'] } }, { nameKey: 'tost_suxhuk_name', image: 'https://i.imgur.com/8WCgONz.png', theme: { bgGradient: 'linear-gradient(135deg, #C04848, #480048)', bgElements: ['🥪', '🌶️', '🌭'] } }, { nameKey: 'tost_proshute_qips_name', image: 'https://i.imgur.com/sOfP7k7.png', theme: { bgGradient: 'linear-gradient(135deg, #1c92d2, #f2fcfe)', bgElements: ['🥪', '🍖', '🇮🇹'], textColor: '#000000' } }] },
            "BURGER": { items: [{ nameKey: 'burger_classic_name', image: 'https://i.imgur.com/j4XFRfn.png', theme: { bgGradient: 'linear-gradient(135deg, #c21500, #ffc500)', bgElements: ['🍔', '🥩', '🥬'] } }, { nameKey: 'burger_cheese_name', image: 'https://i.imgur.com/kQbvfDj.png', theme: { bgGradient: 'linear-gradient(135deg, #ffc500, #c21500)', bgElements: ['🍔', '🧀', '😋'] } }, { nameKey: 'burger_chicken_name', image: 'https://i.imgur.com/OVKD1yV.png', theme: { bgGradient: 'linear-gradient(135deg, #DAA520, #B8860B)', bgElements: ['🍔', '🍗', '🍟'] } }, { nameKey: 'burger_crispy_chicken_name', image: 'https://i.imgur.com/qkYOjl2.png', theme: { bgGradient: 'linear-gradient(135deg, #FF8C00, #FFD700)', bgElements: ['🍔', '🍗', '💥'], textColor: '#000000' } }, { nameKey: 'burger_ragazzi_name', image: 'https://i.imgur.com/Q9eycWS.png', theme: { bgGradient: 'linear-gradient(135deg, #2c3e50, #000000)', bgElements: ['🍔', '✨', '🔥'] } }] },
            "LAHMAXHUN": { items: [{ nameKey: 'lahmacun_classic_name', image: 'https://i.imgur.com/Fk88h8g.png', theme: { bgGradient: 'linear-gradient(135deg, #8B4513, #CD853F)', bgElements: ['🫓', '🥩', '🍋'] } }, { nameKey: 'lahmacun_kackavall_name', image: 'https://i.imgur.com/T4PTzz0.png', theme: { bgGradient: 'linear-gradient(135deg, #CD853F, #8B4513)', bgElements: ['🫓', '🧀', '🥩'] } }] },
            "PIZZA FOR KIDS": { items: [{ nameKey: 'pizza_mickey_mouse_name', image: 'https://i.imgur.com/or7yDbi.png', theme: { bgGradient: 'linear-gradient(135deg, #ff4e50, #f9d423)', bgElements: ['🍕', '🐭', '🎈'] } }, { nameKey: 'pizza_me_zemer_name', image: 'https://i.imgur.com/tLhY1b0.png', theme: { bgGradient: 'linear-gradient(135deg, #e96443, #904e95)', bgElements: ['🍕', '❤️', '💕'] } }] },
            "EXTRAS": { items: [{ nameKey: 'extras_pomfrit_name', image: 'https://i.imgur.com/uFLGVqz.png', theme: { bgGradient: 'linear-gradient(135deg, #f9d423, #ff4e50)', bgElements: ['🍟'], textColor: '#ffffff' } }, { nameKey: 'extras_sos_hudhres_name', image: 'https://i.imgur.com/pauilZK.png', theme: { bgGradient: 'linear-gradient(135deg, #f0fff0, #d3d3d3)', bgElements: ['🧄', '💧'], textColor: '#000000'} }, { nameKey: 'extras_kackavall_name', image: 'https://i.imgur.com/1WqtWn9.png', theme: { bgGradient: 'linear-gradient(135deg, #ffc500, #9b870c)', bgElements: ['🧀'] } }, { nameKey: 'extras_suxhuk_name', image: 'https://i.imgur.com/OwXFEvQ.png', theme: { bgGradient: 'linear-gradient(135deg, #c21500, #800000)', bgElements: ['🌭', '🌶️'] } }, { nameKey: 'extras_veze_name', image: 'https://i.imgur.com/FYthOoh.png', theme: { bgGradient: 'linear-gradient(135deg, #FFD700, #2EAD56)', bgElements: ['🍳'] } }, { nameKey: 'extras_pije_freskuese_name', image: 'https://i.imgur.com/ZFaSPMN.png', theme: { bgGradient: 'linear-gradient(135deg, #00c6ff, #0072ff)', bgElements: ['🥤', '🧊', '💧'] } }] }
        };
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
    
    // New Mobile Scroller Elements
    const categoryChips = document.querySelectorAll('.category-chip');


    // --- LANGUAGE & TRANSLATION ---
    function setLanguage(lang) {
        if (!translations[lang]) {
            console.error(`Language "${lang}" not found.`);
            return;
        }
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
        // If mobile nav is open, close it when switching pages
        if (document.body.classList.contains('mobile-nav-open')) {
            mainNav.classList.remove('mobile-active');
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
        
        const elementCount = window.innerWidth < 768 ? 3 : 5; // Fewer elements on mobile
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
        const menu = menuData[activeMenuKey];
        if (!menu || !menu.items || menu.items.length === 0) {
            pizzaDisplay.style.display = 'none';
            menuTitleEl.textContent = "Coming Soon!";
            floatingElements.innerHTML = '';
            return;
        }
        pizzaDisplay.style.display = 'flex';

        const item = menu.items[currentItemIndex];
        const cardInfo = menuCardData[activeMenuKey]?.items[currentItemIndex];
        const t = translations[currentLang];
        
        menuTitleEl.textContent = t[menu.titleKey] || activeMenuKey;
        itemNameEl.textContent = t[item.nameKey] || `Item ${currentItemIndex + 1}`;
        itemDescriptionEl.textContent = t[item.descriptionKey] || "Description not available.";
        
        if (cardInfo) {
            itemImageEl.src = cardInfo.image;
            itemImageEl.alt = t[item.nameKey] || activeMenuKey;
            applyTheme(cardInfo.theme);
        }

        ingredientsListEl.innerHTML = '';
        const ingredientsString = t[item.ingredientsKey] || '';
        const ingredients = ingredientsString.split(',');

        if (ingredients.length > 0 && ingredients[0] !== '') {
            ingredients.forEach(ingredient => {
                const span = document.createElement('span');
                span.textContent = ingredient.trim();
                ingredientsListEl.appendChild(span);
            });
            ingredientsListEl.style.display = 'flex';
        } else {
            ingredientsListEl.style.display = 'none';
        }

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
        
        // Update both desktop and mobile navs
        desktopMenuNavLinks.forEach(link => link.classList.toggle('active', link.dataset.menu === activeMenuKey));
        categoryChips.forEach(chip => chip.classList.toggle('active', chip.dataset.menu === newMenuKey));
        
        pizzaDisplay.classList.add('is-navigating');
        setTimeout(() => {
            renderCurrentMenuItem();
            pizzaDisplay.classList.remove('is-navigating');
        }, 250);
    }
    
    function updateOrderButtonText() {
        const orderNowKey = 'orderNow';
        const baseText = translations[currentLang]?.[orderNowKey] || 'Order Now';
        
        orderNowBtn.textContent = activeMenuKey === 'PIZZA' ? `${baseText} (${selectedSize})` : baseText;
    }

    function showPhoneModal() {
        phoneModal.classList.add('show');
    }

    function hidePhoneModal() {
        phoneModal.classList.remove('show');
    }

    // --- EVENT LISTENERS ---
    function setupEventListeners() {
        // REVISED Mobile Nav Toggle
        mobileNavToggle.addEventListener('click', () => {
            const icon = mobileNavToggle.querySelector('i');
            const isNavOpen = mainNav.classList.toggle('mobile-active');
            document.body.classList.toggle('mobile-nav-open', isNavOpen);
            // Swap icon class
            if (isNavOpen) {
                icon.className = 'fas fa-times';
            } else {
                icon.className = 'fas fa-bars';
            }
        });

        mainNavLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                switchPage(link.dataset.page);
            });
        });

        fanFavoriteLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const menuTarget = link.dataset.menuTarget;
                const itemTargetName = link.dataset.itemTarget;
                
                if (menuTarget && itemTargetName) {
                    const targetMenu = menuData[menuTarget];
                    const itemTargetNameKey = Object.keys(translations.en).find(key => translations.en[key] === itemTargetName);
                    
                    const itemIndex = targetMenu.items.findIndex(item => item.nameKey === itemTargetNameKey);

                    if (itemIndex !== -1) {
                        switchPage('menu-page');
                        activeMenuKey = menuTarget;
                        currentItemIndex = itemIndex;
                        setTimeout(() => switchMenuCategory(menuTarget), 50);
                    }
                }
            });
        });

        selectedLangEl.addEventListener('click', (e) => {
            e.stopPropagation();
            languageSwitcher.classList.toggle('open');
        });

        document.addEventListener('click', () => languageSwitcher.classList.remove('open'));

        langDropdown.addEventListener('click', (e) => {
            e.preventDefault();
            const langLink = e.target.closest('a[data-lang-code]');
            if (langLink) {
                setLanguage(langLink.dataset.langCode);
                languageSwitcher.classList.remove('open');
            }
        });

        prevBtn.addEventListener('click', () => navigateItems(-1));
        nextBtn.addEventListener('click', () => navigateItems(1));
        
        orderNowBtn.addEventListener('click', showPhoneModal);
        closeModalBtn.addEventListener('click', hidePhoneModal);
        phoneModal.addEventListener('click', (event) => {
            if (event.target === phoneModal) hidePhoneModal();
        });

        document.addEventListener('keydown', (e) => {
            if (pages.item(1).classList.contains('active')) { // If menu page is active
                if (e.key === 'ArrowLeft') navigateItems(-1);
                if (e.key === 'ArrowRight') navigateItems(1);
            }
            if (e.key === 'Escape' && phoneModal.classList.contains('show')) {
                hidePhoneModal();
            }
        });

        // Listener for desktop nav
        desktopMenuNavLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                switchMenuCategory(link.dataset.menu);
            });
        });
        
        // Listener for mobile category scroller chips
        categoryChips.forEach(chip => {
            chip.addEventListener('click', (e) => {
                e.preventDefault();
                switchMenuCategory(chip.dataset.menu);
                // Optional: scroll the active chip into view
                chip.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            });
        });

        sizeSelector.addEventListener('click', (e) => {
            const target = e.target.closest('.size-option');
            if (!target) return;
            sizeSelector.querySelector('.active').classList.remove('active');
            target.classList.add('active');
            selectedSize = target.dataset.size.charAt(0).toUpperCase();
            updateOrderButtonText();
        });

        window.addEventListener('scroll', () => {
            document.querySelector('.header').classList.toggle('scrolled', window.scrollY > 50);
        });

        window.addEventListener('popstate', (event) => {
            const pageId = event.state?.page || 'home-page';
            switchPage(pageId, true);
        });
    }

    // --- INITIALIZATION ---
    async function init() {
        initializeData();
        await loadTranslations();
        setupEventListeners();

        const initialHash = window.location.hash.substring(1);
        const initialPageId = initialHash ? `${initialHash}-page` : 'home-page';
        history.replaceState({page: initialPageId}, '', window.location.href);
        
        switchPage(initialPageId, true);
        setLanguage(currentLang);
    }

    init();
});
