document.addEventListener('DOMContentLoaded', () => {
    // --- DATA & TRANSLATIONS ---
    // This data is now complete, built from your provided JSON files.
    const translations = {
        en: {
            "home": "Home", "menu": "Menu", "menu_cat_pizza": "PIZZA", "menu_cat_baguette": "BAGUETTE", "menu_cat_pide": "PIDE", "menu_cat_portion": "PORTION", "menu_cat_tosta": "TOAST", "menu_cat_burger": "BURGER", "menu_cat_lahmacun": "LAHMAJUN", "menu_cat_pizza_for_kids": "PIZZA FOR KIDS", "menu_cat_extras": "EXTRAS", "about": "About Us", "heroTitle": "Taste the Passion in Every Slice", "heroSubtitle": "Authentic recipes, fresh ingredients, and a love for great food. Welcome to Ragazzi.", "exploreMenu": "Explore Our Menu", "fanFavorites": "Our Fan Favorites", "fanPizzaTitle": "Pizza Ragazzi", "fanPizzaDesc": "Our signature pizza, loaded with a special mix of all your favorite toppings.", "fanBurgerTitle": "Classic Burger", "fanBurgerDesc": "A juicy beef patty with fresh lettuce, tomato, and our signature sauce.", "fanPideTitle": "Pide Me Mish Te Bluar", "fanPideDesc": "Flavorful flatbread with seasoned ground meat, onions, and tomatoes.", "ourStory": "Our Story", "ourStoryPreview": "Founded on a passion for authentic flavors and community, Ragazzi has been serving up delicious moments since day one. We believe in quality you can taste, from our hand-tossed dough to our locally sourced ingredients.", "learnMore": "Learn More About Us", "aboutTitle": "The Heart of Ragazzi: A Story of Passion", "aboutIntro": "Ragazzi Fastfood & Pizza was born from a simple yet powerful vision: to serve not just food, but an experience. At the center of this vision is our founder and head pizzaiolo, a young man whose love for pizza is matched only by his dedication to his craft. Every pizza that comes out of our oven is a piece of his story, a story that we are proud to share with you.", "meetPizzaiolo": "Meet the Pizzaiolo", "pizzaioloTitle": "Founder & Head Pizzaiolo", "pizzaioloBio": "Besar is a young and talented artist whose canvas is dough and whose paints are the freshest ingredients. His journey began in the vibrant culinary scene of Berlin, where he didn't just learn to make pizza—he learned to understand it. He forged his skills under the guidance of masters, discovering the secrets to the perfect crust and the most harmonious flavor combinations. For Besar, this was more than a job; it was the discovery of a lifelong passion. He brought that fire back home, and with it, a dream to create a place where every slice tells a story of dedication, quality, and the pure love of food.", "communityTitle": "More Than Pizza: A Commitment to Community", "communityDesc": "Besar believes that a restaurant should be a cornerstone of its community. His passion extends beyond the kitchen and into the hearts of those around him, especially the younger generation. He has a strong connection with kids and frequently shares his craft with local elementary schools. These events are more than just pizza parties; they are vibrant, hands-on lessons in the joy of creation. By teaching children how to make their own pizzas, Besar brings smiles and laughter, showing them that learning can be delicious and that school is a place for fun, friendship, and happy memories.", "modalTitle": "Call or Message Us", "modalSubtitle": "Please choose an option below:", "callUs": "Call Us", "chatOnWhatsApp": "Chat on WhatsApp", "openingHours": "We're open: 10:00 AM - 12:00 AM", "footerLocation": "Our Location", "viewOnMap": "View on Google Maps", "footerContact": "Contact Us", "footerOpen": "Open: 10:00 AM - 12:00 AM (Mon-Sun)", "footerFollow": "Follow Us", "orderNow": "Order Now", "menu_pizza": "Pick Your Pizza", "menu_baguette": "Choose Your Baguette", "menu_pide": "Pick Your Pide", "menu_portion": "Choose Your Portion", "menu_tosta": "Pick Your Toast", "menu_burger": "Build Your Burger", "menu_lahmacun": "Choose Your Lahmacun", "menu_pizza_for_kids": "For Our Little Guests", "menu_extras": "Add Something Extra", "pizza_margarita_desc": "Simple, classic, oh so neat. A cheesy, saucy, perfect treat.", "pizza_funghi_desc": "Earthy, savory, mushroom delight. A perfect bite, day or night.", "pizza_tuna_desc": "A taste of the ocean, fresh and true. Tuna and onion, just for you.", "pizza_suxhuk_desc": "Spicy suxhuk, a fiery bite. A flavor explosion, day and night.", "pizza_prosciutto_desc": "Salty prosciutto, a taste of bliss. A slice of Italy you can't miss.", "pizza_capricciosa_desc": "Sallam and mushrooms, a classic pair. A taste of tradition beyond compare.", "pizza_quattro_formaggi_desc": "Four cheeses melted, a dream come true. A cheesy river, just for you.", "pizza_calzone_desc": "Folded and baked, a hidden prize. A cheesy volcano, a tasty surprise.", "pizza_vegetarian_desc": "A garden of flavor, fresh and bright. Veggies and olives, a pure delight.", "pizza_durum_desc": "Double the sauce, double the fun. This loaded pizza is second to none.", "pizza_ragazzi_desc": "The boss of all pizzas, the Ragazzi special. Loaded with everything, truly celestial.", "pizza_margarita_ingredients": "Tomato Sauce,Kackavall,Sesame,Oregano", "pizza_funghi_ingredients": "Tomato Sauce,Kackavall,Mushrooms,Oregano,Sesame", "pizza_tuna_ingredients": "Tomato Sauce,Kackavall,Tuna,Onion,Sesame,Oregano", "pizza_suxhuk_ingredients": "Tomato Sauce,Kackavall,Suxhuk,Sesame,Oregano", "pizza_prosciutto_ingredients": "Tomato Sauce,Kackavall,Prosciutto,Sesame,Oregano", "pizza_capricciosa_ingredients": "Tomato Sauce,Kackavall,Sallam,Mushrooms,Sesame,Oregano", "pizza_quattro_formaggi_ingredients": "Tomato Sauce,Kackavall,4 Types of Cheese,Sesame,Oregano", "pizza_calzone_ingredients": "Tomato Sauce,Kackavall,Sallam,Mushrooms,Egg,Sesame,Oregano", "pizza_vegetarian_ingredients": "Tomato Sauce,Kackavall,Mixed Vegetables,Pepperoni,Olives,Sesame,Oregano", "pizza_durum_ingredients": "2 Types of Sauce,Kackavall,Prosciutto,Sallam,Mushrooms,Egg,Sesame,Oregano", "pizza_ragazzi_ingredients": "Tomato Sauce,Kackavall,Suxhuk,Prosciutto,Sallam,Mushrooms,Sesame,Oregano", "baguette_chicken_desc": "Freshly baked baguette with tender grilled chicken.", "baguette_chicken_ingredients": "Grilled Chicken,Lettuce,Tomato,Mayo", "baguette_adana_desc": "Spicy Adana kebab served in a warm baguette.", "baguette_adana_ingredients": "Adana Kebab,Onion,Parsley,Spices", "baguette_suxhuk_desc": "Hearty Turkish suxhuk sausage in a crispy baguette.", "baguette_suxhuk_ingredients": "Suxhuk,Kackavall,Peppers,Tomato", "baguette_pleskavic_desc": "A delicious Balkan pleskavica patty in a fresh baguette.", "baguette_pleskavic_ingredients": "Pleskavica,Onion,Kajmak", "pide_kackavall_desc": "A classic Turkish flatbread filled with melted, gooey cheese.", "pide_kackavall_ingredients": "Cheese,Butter,Sesame Seeds", "pide_suxhuk_desc": "A savory pide topped with spicy Turkish suxhuk sausage and cheese.", "pide_suxhuk_ingredients": "Suxhuk,Kackavall,Tomato,Pepper", "pide_mish_bluar_desc": "A flavorful flatbread with a rich topping of seasoned ground meat, onions, and tomatoes.", "pide_mish_bluar_ingredients": "Ground Meat,Onion,Tomato,Parsley", "pide_stek_veze_susam_desc": "A hearty pide with tender steak, a perfectly cooked egg, and a sprinkle of sesame seeds.", "pide_stek_veze_susam_ingredients": "Steak,Egg,Sesame Seeds,Cheese", "pide_tuna_desc": "A delicious twist on a classic, featuring tuna, cheese, and fresh vegetables.", "pide_tuna_ingredients": "Tuna,Cheese,Onion", "pide_proshute_desc": "An Italian inspired pide with savory prosciutto and melted cheese.", "pide_proshute_ingredients": "Prosciutto,Cheese,Tomato Sauce", "pide_ragazzi_desc": "Our signature pide, loaded with a special mix of all your favorite toppings.", "pide_ragazzi_ingredients": "Mixed Meats,Cheese,Vegetables,Ragazzi Special Sauce", "portion_chicken_fingers_desc": "Crispy, golden chicken fingers served with fries and your favorite dipping sauce.", "portion_chicken_fingers_ingredients": "Chicken Breast,Fries,Sauce", "portion_pleskavic_sharri_desc": "A large, juicy Sharri-style pleskavica patty served with traditional sides.", "portion_pleskavic_sharri_ingredients": "Pleskavica Patty,Fries,Onion,Bread", "portion_chicken_salad_desc": "A fresh and healthy salad with grilled chicken, crisp vegetables, and a light dressing.", "portion_chicken_salad_ingredients": "Grilled Chicken,Lettuce,Tomato,Cucumber,Dressing", "tost_sallam_desc": "A classic toasted sandwich filled with savory salami and melted cheese.", "tost_sallam_ingredients": "Salami,Cheese,Toast Bread,Tomato", "tost_suxhuk_desc": "A warm toasted sandwich with spicy Turkish suxhuk for a flavorful kick.", "tost_suxhuk_ingredients": "Suxhuk,Cheese,Toast Bread,Origano", "tost_proshute_qips_desc": "An elegant toasted sandwich with Italian prosciutto, served with a side of crispy chips.", "tost_proshute_qips_ingredients": "Prosciutto,Cheese,Toast Bread,Chips", "burger_classic_desc": "A classic beef burger with fresh lettuce, tomato, and our signature sauce.", "burger_classic_ingredients": "Beef Patty,Lettuce,Tomato,Onion,Fries", "burger_cheese_desc": "Our classic burger with a generous slice of melted cheese.", "burger_cheese_ingredients": "Beef Patty,Cheese,Lettuce,Tomato,Fries", "burger_chicken_desc": "A crispy and juicy chicken fillet in a soft bun with fresh toppings.", "burger_chicken_ingredients": "Chicken Fillet,Lettuce,Mayo,Buns", "burger_crispy_chicken_desc": "An extra crispy, deep fried chicken fillet with tangy pickles and sauce.", "burger_crispy_chicken_ingredients": "Crispy Chicken Patty,Pickles,Special Sauce,Buns", "burger_ragazzi_desc": "The ultimate burger, double cheese, and our secret Ragazzi sauce.", "burger_ragazzi_ingredients": "Fries,Double Cheese,Ragazzi Sauce,Bresaola", "lahmacun_classic_desc": "Thin, crispy Turkish flatbread topped with seasoned minced meat, vegetables, and herbs.", "lahmacun_classic_ingredients": "Minced Meat,Tomato,Pepper,Parsley", "lahmacun_kackavall_desc": "Our traditional lahmacun with an added layer of melted cheese.", "lahmacun_kackavall_ingredients": "Minced Meat,Cheese,Tomato,Pepper", "pizza_mickey_mouse_desc": "A fun and delicious pizza shaped like Mickey Mouse, perfect for kids!", "pizza_mickey_mouse_ingredients": "Tomato Sauce,Cheese,Olives", "pizza_me_zemer_desc": "A lovely heart shaped pizza made with love.", "pizza_me_zemer_ingredients": "Tomato Sauce,Cheese,Pepperoni Hearts", "extras_pomfrit_desc": "A side of crispy, golden french fries, lightly salted.", "extras_pomfrit_ingredients": "Potatoes,Salt", "extras_sos_hudhres_desc": "Our house made creamy garlic sauce, perfect for dipping.", "extras_sos_hudhres_ingredients": "Garlic,Yogurt,Herbs", "extras_kackavall_desc": "Add a portion of extra melted cheese to any dish.", "extras_kackavall_ingredients": "Cheese", "extras_suxhuk_desc": "Add a side of spicy, grilled Turkish suxhuk sausage.", "extras_suxhuk_ingredients": "Suxhuk", "extras_veze_desc": "Add a perfectly fried egg to your meal.", "extras_veze_ingredients": "Egg", "extras_pije_freskuese_desc": "Choose from a selection of cold soft drinks to complete your meal.", "extras_pije_freskuese_ingredients": "Coca Cola,Golden Eagle,Fanta, Ayran, Sprite", "pizza_margarita_name": "PIZZA MARGARITA", "pizza_funghi_name": "PIZZA FUNGHI", "pizza_tuna_name": "PIZZA TUNA", "pizza_suxhuk_name": "PIZZA SUXHUK", "pizza_prosciutto_name": "PIZZA PROSCIUTTO", "pizza_capricciosa_name": "PIZZA CAPRICCIOSA", "pizza_quattro_formaggi_name": "PIZZA QUATTRO FORMAGGI", "pizza_calzone_name": "PIZZA CALZONE", "pizza_vegetarian_name": "PIZZA VEGETARIAN", "pizza_durum_name": "PIZZA DURUM", "pizza_ragazzi_name": "PIZZA RAGAZZI", "baguette_chicken_name": "CHICKEN BAGUETTE", "baguette_adana_name": "ADANA BAGUETTE", "baguette_suxhuk_name": "SUXHUK BAGUETTE", "baguette_pleskavic_name": "PLESKAVIC BAGUETTE", "pide_kackavall_name": "PIDE WITH CHEESE", "pide_suxhuk_name": "PIDE WITH SUXHUK", "pide_mish_bluar_name": "PIDE WITH GROUND MEAT", "pide_stek_veze_susam_name": "PIDE WITH STEAK", "pide_tuna_name": "PIDE WITH TUNA", "pide_proshute_name": "PIDE WITH PROSCIUTTO", "pide_ragazzi_name": "PIDE RAGAZZI", "portion_chicken_fingers_name": "CHICKEN FINGERS", "portion_pleskavic_sharri_name": "SHARRI PLESKAVICA", "portion_chicken_salad_name": "CHICKEN SALAD", "tost_sallam_name": "SALAMI TOAST", "tost_suxhuk_name": "SUXHUK TOAST", "tost_proshute_qips_name": "PROSCIUTTO TOAST WITH CHIPS", "burger_classic_name": "CLASSIC BURGER", "burger_cheese_name": "CHEESE BURGER", "burger_chicken_name": "CHICKEN BURGER", "burger_crispy_chicken_name": "CRISPY CHICKEN BURGER", "burger_ragazzi_name": "RAGAZZI BURGER", "lahmacun_classic_name": "CLASSIC LAHMACUN", "lahmacun_kackavall_name": "LAHMACUN WITH KACKAVALL", "pizza_mickey_mouse_name": "MICKEY MOUSE PIZZA", "pizza_me_zemer_name": "HEART-SHAPED PIZZA", "extras_pomfrit_name": "FRENCH FRIES", "extras_sos_hudhres_name": "GARLIC SAUCE", "extras_kackavall_name": "EXTRA KACKAVALL", "extras_suxhuk_name": "EXTRA SUXHUK", "extras_veze_name": "EXTRA EGG", "extras_pije_freskuese_name": "REFRESHING DRINK"
        },
        sq: {
            "home": "Ballina", "menu": "Menyja", "menu_cat_pizza": "PICA", "menu_cat_baguette": "BAGETA", "menu_cat_pide": "PIDE", "menu_cat_portion": "PORCIONE", "menu_cat_tosta": "TOSTA", "menu_cat_burger": "BURGERA", "menu_cat_lahmacun": "LAHMAXHUN", "menu_cat_pizza_for_kids": "PICA PËR FËMIJË", "menu_cat_extras": "SHTESA", "about": "Rreth Nesh", "heroTitle": "Shijo pasionin në çdo kafshatë", "heroSubtitle": "Receta autentike, përbërës të freskët dhe dashuri për ushqimin e mirë. Mirë se vini në Ragazzi.", "exploreMenu": "Eksploro Menynë", "fanFavorites": "Të preferuarat e klientëve", "fanPizzaTitle": "Pizza Ragazzi", "fanPizzaDesc": "Pica jonë speciale, e mbushur me një përzierje të veçantë të të gjithë përbërësve tuaj të preferuar.", "fanBurgerTitle": "Burger klasik", "fanBurgerDesc": "Një qofte e shijshme viçi me marule të freskët, domate dhe salcën tonë speciale.", "fanPideTitle": "Pide me Mish të Bluar", "fanPideDesc": "Pide e shijshme me mish të bluar të stazhionuar, qepë dhe domate.", "ourStory": "Historia Jonë", "ourStoryPreview": "E themeluar me pasion për shijet autentike dhe komunitetin, Ragazzi ka shërbyer momente të shijshme që nga dita e parë. Ne besojmë në cilësinë që mund ta shijoni, nga brumi ynë i përgatitur me dorë deri te përbërësit tanë lokalë.", "learnMore": "Mëso më shumë rreth nesh", "aboutTitle": "Zemra e Ragazzi: Një Histori Pasioni", "aboutIntro": "Ragazzi Fastfood & Pizza lindi nga një vizion i thjeshtë por i fuqishëm, të shërbejë jo vetëm si ushqim, por një eksperienc e paharruar. Në qendër të këtij vizioni është themeluesi dhe pizzaiolo ynë, një i ri, dashuria e të cilit për picën krahasohet vetëm me përkushtimin e tij ndaj profesionit. Çdo picë që del nga furra jonë është një pjesë e historisë së tij, një histori që ne jemi krenarë ta ndajmë me ju.", "meetPizzaiolo": "Autori i Gjithkësaj", "pizzaioloTitle": "Themelues & Pizzaiolo", "pizzaioloBio": "Besari është një artist i ri dhe i talentuar, pasioni i të cilit është brumi dhe ngjyrat përbërësve më të freskët. Udhëtimi i tij filloi në skenën e gjallë të kuzhinës së Berlinit, ku ai jo vetëm që mësoi të bënte pica, ai mësoi ta kuptonte atë. Ai forcoi aftësitë e tij nën drejtimin e mjeshtërve, duke zbuluar sekretet e kores së përsosur dhe kombinimet më harmonike të shijeve. Për Besarin, kjo ishte më shumë se një punë; ishte zbulimi i një pasioni të përjetshëm. Ai e solli atë zjarr në shtëpi, dhe me të, një ëndërr për të krijuar një vend ku çdo kafshatë tregon një histori përkushtimi, cilësie dhe dashurie të pastër për ushqimin.", "communityTitle": "Më shumë se Pica: Një Përkushtim ndaj Komunitetit", "communityDesc": "Besari beson se një restorant duhet të jetë një gur themeli i komunitetit të tij. Pasioni i tij shtrihet përtej kuzhinës dhe në zemrat e atyre që e rrethojnë, veçanërisht të brezit të ri. Ai ka një lidhje të fortë me fëmijët dhe shpesh ndan zanatin e tij me shkollat fillore lokale. Këto ngjarje janë më shumë se thjesht festa pice; ato janë vibrant, mësime të gjalla dhe praktike për gëzimin e krijimit. Duke i mësuar fëmijët si të bëjnë picat e tyre, Besari sjell buzëqeshje dhe të qeshura, duke u treguar atyre se të mësuarit mund të jetë i shijshëm dhe se shkolla është një vend për argëtim, miqësi dhe kujtime të lumtura.", "modalTitle": "Na Telefononi ose Na Shkruani", "modalSubtitle": "Ju lutemi zgjidhni një opsion më poshtë:", "callUs": "Na Telefononi", "chatOnWhatsApp": "Bisedoni në WhatsApp", "openingHours": "Jemi të hapur: 10:00 - 24:00", "footerLocation": "Vendndodhja Jonë", "viewOnMap": "Shiko në Hartë", "footerContact": "Kontaktoni", "footerOpen": "Hapur: 10:00 - 24:00 (E Hënë-E Diel)", "footerFollow": "Na Ndiqni", "orderNow": "Porosit Tani", "menu_pizza": "Zgjedhe Picën", "menu_baguette": "Zgjedhe Bagetin", "menu_pide": "Zgjedhe Piden", "menu_portion": "Zgjedhe Porcionin", "menu_tosta": "Zgjedhe Tostin", "menu_burger": "Zgjedhe Burgerin", "menu_lahmacun": "Zgjedhe Lahmaxhunin", "menu_pizza_for_kids": "Për Mysafirët tanë të Vegjël", "menu_extras": "Ekstra", "pizza_margarita_name": "PIZZA MARGARITA", "pizza_funghi_name": "PIZZA FUNGHI", "pizza_tuna_name": "PIZZA TUNA", "pizza_suxhuk_name": "PIZZA SUXHUK", "pizza_prosciutto_name": "PIZZA PROSCIUTTO", "pizza_capricciosa_name": "PIZZA CAPRICCIOSA", "pizza_quattro_formaggi_name": "PIZZA QUATTRO FORMAGGI", "pizza_calzone_name": "PIZZA CALZONE", "pizza_vegetarian_name": "PIZZA VEGJETARIANE", "pizza_durum_name": "PIZZA DURUM", "pizza_ragazzi_name": "PIZZA RAGAZZI", "baguette_chicken_name": "BAGETË ME PULË", "baguette_adana_name": "BAGETË ADANA", "baguette_suxhuk_name": "BAGETË ME SUXHUK", "baguette_pleskavic_name": "BAGETË ME PLESKAVICË", "pide_kackavall_name": "PIDE ME KAÇKAVALL", "pide_suxhuk_name": "PIDE ME SUXHUK", "pide_mish_bluar_name": "PIDE ME MISH TË BLUAR", "pide_stek_veze_susam_name": "PIDE ME BIFTEK DHE VEZË", "pide_tuna_name": "PIDE ME TUNA", "pide_proshute_name": "PIDE ME PROSHUTË", "pide_ragazzi_name": "PIDE RAGAZZI", "portion_chicken_fingers_name": "GISHTA PULE", "portion_pleskavic_sharri_name": "PLESKAVICË SHARRI", "portion_chicken_salad_name": "SALLATË ME PULË", "tost_sallam_name": "TOST ME SALLAM", "tost_suxhuk_name": "TOST ME SUXHUK", "tost_proshute_qips_name": "TOST ME PROSHUTË DHE QIPS", "burger_classic_name": "BURGER KLASIK", "burger_cheese_name": "CHEESEBURGER", "burger_chicken_name": "BURGER ME PULË", "burger_crispy_chicken_name": "BURGER ME PULË KROKANTE", "burger_ragazzi_name": "RAGAZZİ BURGER", "lahmacun_classic_name": "KLASİK LAHMACUN", "lahmacun_kackavall_name": "LAHMACUN ME KAÇKAVALL", "pizza_mickey_mouse_name": "PIZZA MICKEY MOUSE", "pizza_me_zemer_name": "PIZZA ME ZEMËR", "extras_pomfrit_name": "POMFRIT", "extras_sos_hudhres_name": "SALCË HUDHRE", "extras_kackavall_name": "KAÇKAVALL", "extras_suxhuk_name": "SUXHUK", "extras_veze_name": "VEZË", "extras_pije_freskuese_name": "PIJE", "pizza_margarita_desc": "Veç domate e djathë n’pjatë, e han n’sabah e e han n’natë!", "pizza_funghi_desc": "Kërpudha n’petë, shije qet, s’ka me mbet, hahet vet!", "pizza_tuna_desc": "Tunë e qepë ama dije se ka me t'ardhë era kep", "pizza_suxhuk_desc": "Suxhuk djegs e djathë t'shkrim, kjo picë don me t'shti me ba krim!", "pizza_prosciutto_desc": "Proshutë e hollë, shije t’fortë, t'hyn n’zemër hala pa e prek me dorë!", "pizza_capricciosa_desc": "Ka gjithçka, po s’din çka s’ka, një copë me honger, ki me thon du hala!", "pizza_quattro_formaggi_desc": "Katër djathna n’pjatë t’nxehtë, t'shkrijn si bora kur del dielli nxehtë!", "pizza_calzone_desc": "E mshef’t si thesari n’det, Kur e çel, t’shtin me lëpi pet!", "pizza_vegetarian_desc": "Perime e ullinj, n’gojë ka me tu shkri!", "pizza_durum_desc": "S’është pizzë, po s’ka gabim, E kap me dorë, e gishtat i lëpin!", "pizza_ragazzi_desc": "Pizza kryevepër, Raggazi me emër, këtë copë itali veq te Ragazzi e ki!", "pizza_margarita_ingredients": "Salcë Domatesh,Kaçkavall,Susam,Origano", "pizza_funghi_ingredients": "Salcë Domatesh,Kaçkavall,Kërpudha,Origano,Susam", "pizza_tuna_ingredients": "Salcë Domatesh,Kaçkavall,Tuna,Qepë,Susam,Origano", "pizza_suxhuk_ingredients": "Salcë Domatesh,Kaçkavall,Suxhuk,Susam,Origano", "pizza_prosciutto_ingredients": "Salcë Domatesh,Kaçkavall,Proshutë,Susam,Origano", "pizza_capricciosa_ingredients": "Salcë Domatesh,Kaçkavall,Sallam,Kërpudha,Susam,Origano", "pizza_quattro_formaggi_ingredients": "Salcë Domatesh, 4 Lloje Djathërash,Susam,Origano", "pizza_calzone_ingredients": "Salcë Domatesh,Kaçkavall,Sallam,Kërpudha,Vezë,Susam,Origano", "pizza_vegetarian_ingredients": "Salcë Domatesh,Kaçkavall,Perime,Ullinj,Susam,Origano", "pizza_durum_ingredients": "Salca,Kaçkavall,Proshutë,Sallam,Kërpudha,Susam,Origano", "pizza_ragazzi_ingredients": "Salcë Domatesh,Kaçkavall,Suxhuk,Proshutë,Sallam,Kërpudha,Susam,Origano", "baguette_chicken_desc": "Bagetë e sapo pjekur me pulë të butë të pjekur në skarë.", "baguette_chicken_ingredients": "Pulë e Pjekur,Marule,Domate,Majonezë", "baguette_adana_desc": "Qebap pikant Adana i shërbyer në një bagetë të ngrohtë.", "baguette_adana_ingredients": "Qebap Adana,Qepë,Majdanoz,Erëza", "baguette_suxhuk_desc": "Suxhuk i shijshëm turk në një bagetë crispy.", "baguette_suxhuk_ingredients": "Suxhuk,Kaçkavall,Speca,Domate", "baguette_pleskavic_desc": "Një pleskavicë e shijshme ballkanike në një bagetë të freskët.", "baguette_pleskavic_ingredients": "Pleskavicë,Qepë,Salcë", "pide_kackavall_desc": "Një pide klasike turke e mbushur me kaçkavall të shkrirë.", "pide_kackavall_ingredients": "Djathë Kaçkavall,Gjalpë,Fara Susami", "pide_suxhuk_desc": "Një pide e shijshme e mbuluar me suxhuk djegs turk dhe djathë.", "pide_suxhuk_ingredients": "Suxhuk,Kaçkavall,Domate,Spec", "pide_mish_bluar_desc": "Një pide e shijshme e mbushur me mish të bluar, qepë dhe domate.", "pide_mish_bluar_ingredients": "Mish i Bluar,Qepë,Domate,Majdanoz", "pide_stek_veze_susam_desc": "Një pide me fileto pule dhe vezë të gatuar në mënyrë perfekte dhe një spërkatje me fara susami.", "pide_stek_veze_susam_ingredients": "File Pule,Vezë,Fara Susami,Kaçkavall", "pide_tuna_desc": "Pide me tuna, djathë dhe perime të freskëta.", "pide_tuna_ingredients": "Tuna,Kaçkavall,Qepë", "pide_proshute_desc": "Një pide e frymëzuar nga Italia me proshutë të shijshme dhe djathë të shkrirë.", "pide_proshute_ingredients": "Proshutë,Kaçkavall,Salcë Domatesh", "pide_ragazzi_desc": "Pide jonë speciale, e ngarkuar me një përzierje të veçantë të të gjithë përbërësve tuaj të preferuar.", "pide_ragazzi_ingredients": "Mishra të Përzier,Kaçkavall,Perime,Salcë Speciale Ragazzi", "portion_chicken_fingers_desc": "Gishta pule crispy, të shërbyer me patate të skuqura dhe salcën tuaj të preferuar.", "portion_chicken_fingers_ingredients": "Gjoks Pule,Patate të Skuqura,Salcë, Bukë", "portion_pleskavic_sharri_desc": "Një pleskavicë e mbushur me kaçkavall e stilit të Sharrit e shërbyer me garnitura tradicionale.", "portion_pleskavic_sharri_ingredients": "Pleskavicë,Patate të Skuqura,Qepë,Bukë", "portion_chicken_salad_desc": "Një sallatë pule e pjekur në skarë, me perime crispy dhe salcë.", "portion_chicken_salad_ingredients": "Pulë e Pjekur,Marullë,Domate,Kastravec,Salcë", "tost_sallam_desc": "Një sanduiç tost klasik i mbushur me sallam të shijshëm dhe djathë të shkrirë.", "tost_sallam_ingredients": "Sallam,Kaçkavall,Bukë Tosti,Domate", "tost_suxhuk_desc": "Një sanduiç tost i ngrohtë me suxhuk djegs për një shije të fortë.", "tost_suxhuk_ingredients": "Suxhuk,Kaçkavall,Bukë Tosti,Origano", "tost_proshute_qips_desc": "Një sanduiç tost elegant me proshutë italiane, i shërbyer me një anë me chips.", "tost_proshute_qips_ingredients": "Proshutë,Djathë,Bukë Tosti,Chips", "burger_classic_desc": "Një burger klasik viçi me marullë të freskët, domate dhe salcën tonë speciale.", "burger_classic_ingredients": "Qofte Viçi,Marullë,Domate,Qepë,Pomfrit", "burger_cheese_desc": "Burgeri ynë klasik me djathë të shkrirë.", "burger_cheese_ingredients": "Qofte Viçi,Djathë,Marullë,Domate,Pomfrit", "burger_chicken_desc": "Një fileto pule crispy me pomfrit dhe me një mbushje të freskët.", "burger_chicken_ingredients": "Fileto Pule,Marullë,Majonezë,Pomfrit", "burger_crispy_chicken_desc": "Një fileto pule ekstra crispy, e skuqur thellë me turshi dhe salcë.", "burger_crispy_chicken_ingredients": "Qofte Pule Crispy,Turshi,Salcë Speciale,Pomfrit", "burger_ragazzi_desc": "Burgeri ynë special, i mbushur me qofte viçi, djathë, proshutë dhe salcën tonë sekrete.", "burger_ragazzi_ingredients": "Qofte Viçi,Djathë,Proshutë,Salcë Ragazzi,Pomfrit", "lahmacun_classic_desc": "Një lahmaxhun tradicional me mish të bluar dhe perime të freskëta.", "lahmacun_classic_ingredients": "Mish i Bluar,Domate,Spec,Qepë,Majdanoz", "lahmacun_kackavall_desc": "Një lahmaxhun i shijshëm i mbuluar me një shtresë kaçkavall të shkrirë.", "lahmacun_kackavall_ingredients": "Mish i Bluar,Kaçkavall,Domate,Spec", "pizza_mickey_mouse_desc": "Një picë argëtuese në formë Mickey Mouse për fëmijët, me mbushjet e tyre të preferuara.", "pizza_mickey_mouse_ingredients": "Salcë Domatesh,Kaçkavall,Sallam,Ullinj", "pizza_me_zemer_desc": "Një picë në formë zemre e bërë me dashuri, e përsosur për të ndarë me dikë të veçantë.", "pizza_me_zemer_ingredients": "Salcë Domatesh,Kaçkavall,Proshutë,Kërpudha", "extras_pomfrit_desc": "Patate të skuqura crispy, të arta, të kripura në mënyrë perfekte.", "extras_pomfrit_ingredients": "Patate,Kripë,Vaj", "extras_sos_hudhres_desc": "Një salcë hudhre kremoze dhe e shijshme, e përsosur për t'u zhytur.", "extras_sos_hudhres_ingredients": "Hudhër,Majonezë,Erëza", "extras_kackavall_desc": "Një shtesë kaçkavall i shkrirë për ta bërë pjatën tuaj edhe më të shijshme.", "extras_kackavall_ingredients": "Djathë Kaçkavall", "extras_suxhuk_desc": "Shtoni një shije djegs në pjatën tuaj me  suxhukun tonë.", "extras_suxhuk_ingredients": "Suxhuk", "extras_veze_desc": "Një vezë e skuqur e gatuar në mënyrë perfekte për të shtuar pasuri në vaktin tuaj.", "extras_veze_ingredients": "Vezë", "extras_pije_freskuese_desc": "Shoqëro vaktin me një pije freskuese.", "extras_pije_freskuese_ingredients": "Coca Cola,Golden Eagle,Fanta, Ayran, Sprite"
        },
        mk: {
            "home": "Почетна", "menu": "Мени", "about": "За нас", "heroTitle": "Вкусете ја страста во секое парче", "heroSubtitle": "Автентични рецепти, свежи состојки и љубов кон одличната храна. Добредојдовте во Ragazzi.", "exploreMenu": "Истражете го менито", "fanFavorites": "Омилени на фановите", "fanPizzaTitle": "Пица Рагаци", "fanPizzaDesc": "Нашата специјална пица, полна со посебна мешавина од сите ваши омилени додатоци.", "fanBurgerTitle": "Класичен бургер", "fanBurgerDesc": "Сочна говедска плескавица со свежа марула, домат и нашиот специјален сос.", "fanPideTitle": "Пиде со мелено месо", "fanPideDesc": "Вкусно пиде со богат прелив од зачинето мелено месо, кромид и домати.", "ourStory": "Нашата приказна", "ourStoryPreview": "Основан на страста за автентични вкусови и заедница, Ragazzi служи вкусни моменти од првиот ден. Од нашето рачно месено тесто до нашите локално набавени состојки, веруваме во квалитет што можете да го вкусите.", "learnMore": "Дознајте повеќе за нас", "aboutTitle": "Срцето на Ragazzi: Приказна за страста", "aboutIntro": "Ragazzi Fastfood & Pizza е роден од едноставна, но моќна визија: да понуди не само храна, туку и искуство. Во срцето на оваа визија е нашиот основач и главен пица-мајстор, млад човек чија љубов кон пицата е изедначена само со неговата посветеност на својот занает. Секоја пица што излегува од нашата печка е дел од неговата приказна, приказна што со гордост ја споделуваме со вас.", "meetPizzaiolo": "Запознајте го пица-мајсторот", "pizzaioloTitle": "Основач и главен пица-мајстор", "pizzaioloBio": "Бесар е млад и талентиран уметник чие платно е тестото, а боите му се најсвежите состојки. Неговото патување започна во живата кулинарска сцена на Берлин, каде што не само што научи да прави пица, туку научи и да ја разбира. Воден од мајстори, тој ги усоврши своите вештини, откривајќи ги тајните на совршената кора и најхармоничните комбинации на вкусови. За Бесар, тоа беше повеќе од работа; тоа беше откривање на доживотна страст. Тој го донесе тој оган дома, а со него и сонот да создаде место каде секое парче раскажува приказна за посветеност, квалитет и чиста љубов кон храната.", "communityTitle": "Повеќе од пица: посветеност на заедницата", "communityDesc": "Бесар верува дека ресторанот треба да биде камен-темелник на својата заедница. Неговата страст се протега надвор од кујната и во срцата на оние околу него, особено на помладата генерација. Тој има силна врска со децата и често го споделува својот занает со локалните основни училишта. Овие настани се повеќе од само забави со пица; тие се живи, практични лекции за радоста на создавањето. Учејќи ги децата како да прават свои пици, Бесар носи насмевки и смеа, покажувајќи им дека учењето може да биде вкусно и дека училиштето е место за забава, пријателство и среќни спомени.", "modalTitle": "Јавете се или испратете ни порака", "modalSubtitle": "Ве молиме изберете опција подолу:", "callUs": "Јавете ни се", "chatOnWhatsApp": "Разговарајте на WhatsApp", "openingHours": "Отворени сме: 10:00 - 24:00", "footerLocation": "Нашата локација", "viewOnMap": "Погледнете на Google Maps", "footerOpen": "Отворено: 10:00 - 24:00 (Пон-Нед)", "footerFollow": "Следете нè", "orderNow": "Нарачај сега", "menu_pizza": "Изберете ја вашата пица", "menu_baguette": "Изберете го вашиот багет", "menu_pide": "Изберете го вашето пиде", "menu_portion": "Изберете ја вашата порција", "menu_tosta": "Изберете го вашиот тост", "menu_burger": "Направете си ваш бургер", "menu_lahmaxhun": "Изберете го вашиот лахмаџун", "menu_pizza_for_kids": "За нашите мали гости", "menu_extras": "Додајте нешто екстра", "pizza_margarita_name": "ПИЦА МАРГАРИТА", "pizza_funghi_name": "ПИЦА ФУНГИ", "pizza_tuna_name": "ПИЦА ТУНА", "pizza_suxhuk_name": "ПИЦА СУЏУК", "pizza_prosciutto_name": "ПИЦА ПРШУТА", "pizza_capricciosa_name": "ПИЦА КАПРИЧИОЗА", "pizza_quattro_formaggi_name": "ПИЦА КВАТРО ФОРМАЏИ", "pizza_calzone_name": "ПИЦА КАЛЦОНЕ", "pizza_vegetarian_name": "ПИЦА ВЕГЕТАРИЈАНА", "pizza_durum_name": "ПИЦА ДУРУМ", "pizza_ragazzi_name": "ПИЦА РАГАЦИ", "baguette_chicken_name": "БАГЕТ СО ПИЛЕШКО", "baguette_adana_name": "АДАНА БАГЕТ", "baguette_suxhuk_name": "БАГЕТ СО СУЏУК", "baguette_pleskavic_name": "БАГЕТ СО ПЛЕСКАВИЦА", "pide_kackavall_name": "ПИДЕ СО КАШКАВАЛ", "pide_suxhuk_name": "ПИДЕ СО СУЏУК", "pide_mish_bluar_name": "ПИДЕ СО МЕЛЕНО МЕСО", "pide_stek_veze_susam_name": "ПИДЕ СО СТЕК, ЈАЈЦЕ И СУСАМ", "pide_tuna_name": "ПИДЕ СО ТУНА", "pide_proshute_name": "ПИДЕ СО ПРШУТА", "pide_ragazzi_name": "ПИДЕ РАГАЦИ", "portion_chicken_fingers_name": "ПИЛЕШКИ ПРСТИ", "portion_pleskavic_sharri_name": "ШАРСКА ПЛЕСКАВИЦА", "portion_chicken_salad_name": "ПИЛЕШКА САЛАТА", "tost_sallam_name": "ТОСТ СО САЛАМА", "tost_suxhuk_name": "ТОСТ СО СУЏУК", "tost_proshute_qips_name": "ТОСТ СО ПРШУТА И ЧИПС", "burger_classic_name": "КЛАСИЧЕН БУРГЕР", "burger_cheese_name": "ЧИЗБУРГЕР", "burger_chicken_name": "БУРГЕР СО ПИЛЕШКО", "burger_crispy_chicken_name": "КРИСПИ ЧИКЕН БУРГЕР", "burger_ragazzi_name": "РАГАЦИ БУРГЕР", "lahmacun_classic_name": "КЛАСИЧЕН ЛАХМАЏУН", "lahmacun_kackavall_name": "ЛАХМАЏУН СО КАШКАВАЛ", "pizza_mickey_mouse_name": "ПИЦА МИКИ МАУС", "pizza_me_zemer_name": "ПИЦА ВО ФОРМА НА СРЦЕ", "extras_pomfrit_name": "ПОМФРИТ", "extras_sos_hudhres_name": "СОС ОД ЛУК", "extras_kackavall_name": "ДОДАТОК КАШКАВАЛ", "extras_suxhuk_name": "ДОДАТОК СУЏУК", "extras_veze_name": "ДОДАТОК ЈАЈЦЕ", "extras_pije_freskuese_name": "ОСВЕЖИТЕЛЕН ПИЈАЛОК", "pizza_margarita_desc": "Едноставна, класична, толку уредна. Сирење, сос, совршен деликатес.", "pizza_funghi_desc": "Земјен, солен, печуркино задоволство. Совршен залак, дење и ноќе.", "pizza_tuna_desc": "Вкус на океанот, свеж и вистински. Туна и кромид, само за вас.", "pizza_suxhuk_desc": "Зачинет суџук, огнен залак. Експлозија на вкус, дење и ноќе.", "pizza_prosciutto_desc": "Солена пршута, вкус на блаженство. Парче Италија што не можете да го пропуштите.", "pizza_capricciosa_desc": "Салама и печурки, класичен пар. Вкус на традиција без споредба.", "pizza_quattro_formaggi_desc": "Четири сирења стопени, сон што се остварува. Река од сирење, само за вас.", "pizza_calzone_desc": "Преклопена и печена, скриена награда. Вулкан од сирење, вкусно изненадување.", "pizza_vegetarian_desc": "Градина од вкус, свежа и светла. Зеленчук и маслинки, чисто задоволство.", "pizza_durum_desc": "Двоен сос, двојна забава. Оваа натоварена пица е без конкуренција.", "pizza_ragazzi_desc": "Пиците шампион, специјалот Рагаци. Натоварен со сè, навистина небесен.", "pizza_margarita_ingredients": "Доматен сос,кашар,сусам,оригано", "pizza_funghi_ingredients": "Доматен сос,кашар,печурки,оригано,сусам", "pizza_tuna_ingredients": "Доматен сос,кашар,туна,кромид,сусам,оригано", "pizza_suxhuk_ingredients": "Доматен сос,кашар,суџук,сусам,оригано", "pizza_prosciutto_ingredients": "Доматен сос,кашар,пршута,сусам,оригано", "pizza_capricciosa_ingredients": "Доматен сос,кашар,салама,печурки,оригано,сусам", "pizza_quattro_formaggi_ingredients": "Доматен сос,кашар,4 вида сирење,сусам,оригано", "pizza_calzone_ingredients": "Доматен сос,кашар,салама,печурки,јајце,сусам,оригано", "pizza_vegetarian_ingredients": "Доматен сос,кашар,мешан зеленчук,феферони,маслинки,сусам,оригано", "pizza_durum_ingredients": "2 вида сос,кашар,пршута,салама,печурки,јајце,сусам,оригано", "pizza_ragazzi_ingredients": "Доматен сос,кашар,суџук,пршута,салама,печурки,сусам,оригано", "baguette_chicken_desc": "Свежо печен багет со нежно пилешко на скара.", "baguette_chicken_ingredients": "Пилешко на скара,Марула,Домат,Мајонез", "baguette_adana_desc": "Зачинет Адана ќебап послужен во топол багет.", "baguette_adana_ingredients": "Адана ќебап,Кромид,Магдонос,Зачини", "baguette_suxhuk_desc": "Срдечен турски суџук во крцкав багет.", "baguette_suxhuk_ingredients": "Суџук,Кашар,Пиперки,Домат", "baguette_pleskavic_desc": "Вкусна балканска плескавица во свеж багет.", "baguette_pleskavic_ingredients": "Плескавица,Ајвар,Кромид,Кајмак", "pide_kackavall_desc": "Класично турско пиде полнето со стопен кашкавал.", "pide_kackavall_ingredients": "Кашкавал,Путер,Сусам", "pide_suxhuk_desc": "Вкусно пиде прелиено со зачинет турски суџук и кашкавал.", "pide_suxhuk_ingredients": "Суџук,Кашкавал,Домат,Пиперка", "pide_mish_bluar_desc": "Вкусно пиде со богат прелив од зачинето мелено месо, кромид и домати.", "pide_mish_bluar_ingredients": "Мелено месо,Кромид,Домат,Магдонос", "pide_stek_veze_susam_desc": "Срдечно пиде со нежен стек, совршено зготвено јајце и посипено со сусам.", "pide_stek_veze_susam_ingredients": "Стек,Јајце,Сусам,Кашкавал", "pide_tuna_desc": "Вкусен пресврт на класиката, со туна, кашкавал и свеж зеленчук.", "pide_tuna_ingredients": "Туна,Кашкавал,Кромид,Пченка", "pide_proshute_desc": "Пиде инспирирано од Италија со вкусна пршута и стопен кашкавал.", "pide_proshute_ingredients": "Пршута,Кашкавал,Доматен сос,Рукола", "pide_ragazzi_desc": "Нашето препознатливо пиде, полно со специјална мешавина од сите ваши омилени додатоци.", "pide_ragazzi_ingredients": "Мешано месо,Кашкавал,Зеленчук,Специјален сос Рагаци", "portion_chicken_fingers_desc": "Крцкави, златни пилешки прсти послужени со помфрит и вашиот омилен сос.", "portion_chicken_fingers_ingredients": "Пилешки гради,Презли,Помфрит,Сос", "portion_pleskavic_sharri_desc": "Голема, сочна плескавица во шарски стил послужена со традиционални прилози.", "portion_pleskavic_sharri_ingredients": "Плескавица,Помфрит,Кромид,Лепиња", "portion_chicken_salad_desc": "Свежа и здрава салата со пилешко на скара, крцкав зеленчук и лесен прелив.", "portion_chicken_salad_ingredients": "Пилешко на скара,Марула,Домат,Краставица,Прелив", "tost_sallam_desc": "Класичен тост сендвич полнет со вкусна салама и стопен кашкавал.", "tost_sallam_ingredients": "Салама,Кашкавал,Тост леб,Домат", "tost_suxhuk_desc": "Топол тост сендвич со зачинет турски суџук за вкусен удар.", "tost_suxhuk_ingredients": "Суџук,Кашкавал,Тост леб,Оригано", "tost_proshute_qips_desc": "Елегантен тост сендвич со италијанска пршута, послужен со крцкав чипс.", "tost_proshute_qips_ingredients": "Пршута,Кашкавал,Рукола,Тост леб,Чипс", "burger_classic_desc": "Класичен говедски бургер со свежа марула, домат и нашиот препознатлив сос.", "burger_classic_ingredients": "Говедско месо,Марула,Домат,Кромид,Лепиња", "burger_cheese_desc": "Нашиот класичен бургер со дарежливо парче стопен кашкавал.", "burger_cheese_ingredients": "Говедско месо,Кашкавал,Марула,Домат,Лепиња", "burger_chicken_desc": "Крцкаво и сочно пилешко филе во меко лепче со свежи додатоци.", "burger_chicken_ingredients": "Пилешко филе,Марула,Мајонез,Лепиња", "burger_crispy_chicken_desc": "Екстра крцкаво, пржено пилешко филе со кисели краставички и сос.", "burger_crispy_chicken_ingredients": "Крцкаво пилешко,Кисели краставички,Специјален сос,Лепиња", "burger_ragazzi_desc": "Врвниот бургер: дупло месо, дупло кашкавал и нашиот таен сос Рагаци.", "burger_ragazzi_ingredients": "Дупло месо,Дупло кашкавал,Сос Рагаци,Сланина", "lahmacun_classic_desc": "Тенка, крцкава турска пита прелиена со зачинето мелено месо, зеленчук и билки.", "lahmacun_classic_ingredients": "Мелено месо,Домат,Пиперка,Магдонос", "lahmacun_kackavall_desc": "Нашиот традиционален лахмаџун со додаден слој од стопен кашкавал.", "lahmacun_kackavall_ingredients": "Мелено месо,Кашкавал,Домат,Пиперка", "pizza_mickey_mouse_desc": "Забавна и вкусна пица во форма на Мики Маус, совршена за деца!", "pizza_mickey_mouse_ingredients": "Доматен сос,Кашкавал,Маслинки", "pizza_me_zemer_desc": "Прекрасна пица во форма на срце направена со љубов.", "pizza_me_zemer_ingredients": "Доматен сос,Кашкавал,Срца од пеперони", "extras_pomfrit_desc": "Порција крцкав, златен помфрит, лесно посолен.", "extras_pomfrit_ingredients": "Компири,Сол", "extras_sos_hudhres_desc": "Нашиот домашен кремаст сос од лук, совршен за потопување.", "extras_sos_hudhres_ingredients": "Лук,Јогурт,Билки", "extras_kackavall_desc": "Додадете порција екстра стопен кашкавал на кое било јадење.", "extras_kackavall_ingredients": "Кашкавал", "extras_suxhuk_desc": "Додадете порција зачинет, турски суџук на скара.", "extras_suxhuk_ingredients": "Суџук", "extras_veze_desc": "Додадете совршено пржено јајце на вашиот оброк.", "extras_veze_ingredients": "Јајце", "extras_pije_freskuese_desc": "Изберете од изборот на ладни безалкохолни пијалоци за да го комплетирате вашиот оброк.", "extras_pije_freskuese_ingredients": "Кола,Сок,Вода"
        },
        tr: {
            "home": "Anasayfa", "menu": "Menü", "menu_cat_pizza": "PİZZA", "menu_cat_baguette": "BAGET", "menu_cat_pide": "PİDE", "menu_cat_portion": "PORSİYON", "menu_cat_tosta": "TOST", "menu_cat_burger": "BURGER", "menu_cat_lahmacun": "LAHMACUN", "menu_cat_pizza_for_kids": "ÇOCUK PİZZASI", "menu_cat_extras": "EKSTRALAR", "about": "Hakkımızda", "heroTitle": "Her Dilimde Tutkuyu Tadın", "heroSubtitle": "Otantik tarifler, taze malzemeler ve harika yemeklere olan aşk. Ragazzi'ye hoş geldiniz.", "exploreMenu": "Menüyü Keşfet", "fanFavorites": "Hayranların Favorileri", "fanPizzaTitle": "Pizza Ragazzi", "fanPizzaDesc": "Tüm favori malzemelerinizin özel bir karışımıyla dolu imza pizzamız.", "fanBurgerTitle": "Klasik Burger", "fanBurgerDesc": "Taze marul, domates ve imza sosumuzla sulu bir dana köftesi.", "fanPideTitle": "Kıymalı Pide", "fanPideDesc": "Terbiyeli kıyma, soğan ve domates ile lezzetli pide.", "ourStory": "Bizim hikayemiz", "ourStoryPreview": "Otantik lezzetlere ve topluluğa olan tutkuyla kurulan Ragazzi, ilk günden beri lezzetli anlar sunuyor. El yapımı hamurumuzdan yerel kaynaklı malzemelerimize kadar tadabileceğiniz kaliteye inanıyoruz.", "learnMore": "Hakkımızda Daha Fazla Bilgi Edinin", "aboutTitle": "Ragazzi'nin Kalbi: Bir Tutku Hikayesi", "aboutIntro": "Ragazzi Fastfood & Pizza, sadece yemek değil, bir deneyim sunmak gibi basit ama güçlü bir vizyondan doğdu. Bu vizyonun merkezinde, pizzaya olan sevgisi sadece zanaatına olan bağlılığıyla eşleşen kurucumuz ve baş pizzacımız genç bir adam var. Fırınımızdan çıkan her pizza onun hikayesinin bir parçası, sizinle paylaşmaktan gurur duyduğumuz bir hikaye.", "meetPizzaiolo": "Pizzacıyla tanışın", "pizzaioloTitle": "Kurucu ve Baş Pizzacı", "pizzaioloBio": "Besar, tuvali hamur ve boyaları en taze malzemeler olan genç ve yetenekli bir sanatçıdır. Yolculuğu, sadece pizza yapmayı öğrenmediği, onu anlamayı öğrendiği Berlin'in canlı mutfak sahnesinde başladı. Ustaların rehberliğinde becerilerini geliştirdi, mükemmel kabuğun sırlarını ve en uyumlu lezzet kombinasyonlarını keşfetti. Besar için bu bir işten daha fazlasıydı; ömür boyu sürecek bir tutkunun keşfiydi. O ateşi eve geri getirdi ve onunla birlikte her dilimin adanmışlık, kalite ve saf yemek sevgisi hikayesi anlattığı bir yer yaratma hayalini kurdu.", "communityTitle": "Pizzadan Daha Fazlası: Topluluğa Bağlılık", "communityDesc": "Besar, bir restoranın topluluğunun temel taşı olması gerektiğine inanıyor. Tutkusu mutfağın ötesine ve etrafındakilerin, özellikle de genç neslin kalplerine uzanıyor. Çocuklarla güçlü bir bağı var ve zanaatını sık sık yerel ilkokullarla paylaşıyor. Bu etkinlikler sadece pizza partilerinden daha fazlası; yaratmanın sevincine dair canlı, uygulamalı derslerdir. Çocuklara kendi pizzalarını nasıl yapacaklarını öğreterek Besar, onlara öğrenmenin lezzetli olabileceğini ve okulun eğlence, arkadaşlık ve mutlu anılar için bir yer olduğunu göstererek gülümsemeler ve kahkahalar getiriyor.", "modalTitle": "Bizi Arayın veya Mesaj Gönderin", "modalSubtitle": "Lütfen aşağıdan bir seçenek seçin:", "callUs": "Bizi Arayın", "chatOnWhatsApp": "WhatsApp'ta sohbet et", "openingHours": "Açıkız: 10:00 - 24:00", "footerLocation": "Konumumuz", "viewOnMap": "Haritada Görüntüle", "footerContact": "Bize Ulaşın", "footerOpen": "Açık: 10:00 - 24:00 (Pzt-Paz)", "footerFollow": "Bizi takip et", "orderNow": "Şimdi Sipariş Ver", "pizza_margarita_name": "PİZZA MARGARİTA", "pizza_funghi_name": "PİZZA FUNGHİ", "pizza_tuna_name": "PİZZA TUNA", "pizza_suxhuk_name": "PİZZA SUCUK", "pizza_prosciutto_name": "PİZZA PROSCIUTTO", "pizza_capricciosa_name": "PİZZA CAPRİCCİOSA", "pizza_quattro_formaggi_name": "PİZZA QUATTRO FORMAGGİ", "pizza_calzone_name": "PİZZA CALZONE", "pizza_vegetarian_name": "PİZZA VEJETARYEN", "pizza_durum_name": "PİZZA DÜRÜM", "pizza_ragazzi_name": "PİZZA RAGAZZİ", "baguette_chicken_name": "TAVUKLU BAGET", "baguette_adana_name": "ADANA BAGET", "baguette_suxhuk_name": "SUCUKLU BAGET", "baguette_pleskavic_name": "PLESKAVİÇ BAGET", "pide_kackavall_name": "KAŞARLI PİDE", "pide_suxhuk_name": "SUCUKLU PİDE", "pide_mish_bluar_name": "KIYMALI PİDE", "pide_stek_veze_susam_name": "BİFTEKLİ, YUMURTALI & SUSAMLI PİDE", "pide_tuna_name": "TON BALIKLI PİDE", "pide_proshute_name": "PROSCIUTTO'LU PİDE", "pide_ragazzi_name": "PİDE RAGAZZİ", "portion_chicken_fingers_name": "TAVUK FİNGERS", "portion_pleskavic_sharri_name": "ŞAR PLESKAVİÇASI", "portion_chicken_salad_name": "TAVUK SALATASI", "tost_sallam_name": "SALAMLI TOST", "tost_suxhuk_name": "SUCUKLU TOST", "tost_proshute_qips_name": "PROSCIUTTO'LU CİPSLİ TOST", "burger_classic_name": "KLASİK BURGER", "burger_cheese_name": "CHEESEBURGER", "burger_chicken_name": "TAVUK BURGER", "burger_crispy_chicken_name": "ÇITIR TAVUK BURGER", "burger_ragazzi_name": "RAGAZZİ BURGER", "lahmacun_classic_name": "KLASİK LAHMACUN", "lahmacun_kackavall_name": "KAŞARLI LAHMACUN", "pizza_mickey_mouse_name": "MİCKEY MOUSE PİZZA", "pizza_me_zemer_name": "KALP PİZZA", "extras_pomfrit_name": "EKSTRA PATATES KIZARTMASI", "extras_sos_hudhres_name": "EKSTRA SARIMSAKLI SOS", "extras_kackavall_name": "EKSTRA KAŞAR", "extras_suxhuk_name": "EKSTRA SUCUK", "extras_veze_name": "EKSTRA YUMURTA", "extras_pije_freskuese_name": "SERİNLETİCİ İÇECEK", "menu_pizza": "Pizzanızı seçin", "menu_baguette": "Bagetinizi seçin", "menu_pide": "Pidenizi seçin", "menu_portion": "Porsiyonunuzu seçin", "menu_tosta": "Tostunuzu seçin", "menu_burger": "Burgerinizi oluşturun", "menu_lahmaxhun": "Lahmacununuzu seçin", "menu_pizza_for_kids": "Küçük misafirlerimiz için", "menu_extras": "Ekstra bir şeyler ekleyin", "pizza_margarita_desc": "Klasik ve sade, lezzeti şahane. Peynir ve sos, tam bir efsane.", "pizza_funghi_desc": "Mantar lezzeti, damakta bir şölen. Gece ve gündüz, tadına doyamazsın sen.", "pizza_tuna_desc": "Okyanus tadı, taze ve eşsiz. Ton balığı ve soğan, sadece senin için.", "pizza_suxhuk_desc": "Acı sucuk, ateşli bir tat. Lezzet patlaması, gece ve gündüz, kat kat.", "pizza_prosciutto_desc": "Tuzlu prosciutto, bir keyif anı. Kaçırılmayacak bir İtalya zamanı.", "pizza_capricciosa_desc": "Salam ve mantar, klasik bir ikili. Karşı konulmaz bir lezzet seli.", "pizza_quattro_formaggi_desc": "Dört peynir erimiş, rüya gibi bir tat. Peynir nehri, sadece sana özel, kat kat.", "pizza_calzone_desc": "Katlanmış lezzet, içinde bir hazine. Peynir volkanı, sürprizi şahane.", "pizza_vegetarian_desc": "Lezzet bahçesi, taze ve parlak. Sebzeler ve zeytinler, saf bir zevk.", "pizza_durum_desc": "Çifte sos, çifte eğlence. Bu dolu pizza, rakipsiz bence.", "pizza_ragazzi_desc": "Pizzaların patronu, Ragazzi spesiyal. Her şeyle dolu, gerçekten emsalsiz.", "pizza_margarita_ingredients": "domates sosu,kaşar peyniri,susam,kekik", "pizza_funghi_ingredients": "domates sosu,kaşar peyniri,mantar,kekik,susam", "pizza_tuna_ingredients": "domates sosu,kaşar peyniri,ton balığı,soğan,susam,kekik", "pizza_suxhuk_ingredients": "domates sosu,kaşar peyniri,sucuk,susam,kekik", "pizza_prosciutto_ingredients": "domates sosu,kaşar peyniri,jambon,susam,kekik", "pizza_capricciosa_ingredients": "domates sosu,kaşar peyniri,salam,mantar,kekik,susam", "pizza_quattro_formaggi_ingredients": "domates sosu,kaşar peyniri,4 çeşit peynir,susam,kekik", "pizza_calzone_ingredients": "kapalı pizza, kaşar, domates sosu, salam, mantar, yumurta (susam ve kekik)", "pizza_vegetarian_ingredients": "domates sosu, kaşar peyniri, sebzeler, biber, zeytin (susam ve kekik)", "pizza_durum_ingredients": "2 çeşit sos, kaşar peyniri, jambon, salam, mantar, yumurta (susam ve kekik)", "pizza_ragazzi_ingredients": "domates sosu, kaşar peyniri, sucuk, jambon, salam, mantar (susam ve kekik)", "baguette_chicken_desc": "Taze pişmiş baget içinde yumuşak ızgara tavuk.", "baguette_chicken_ingredients": "Izgara Tavuk,Marul,Domates,Mayonez", "baguette_adana_desc": "Sıcak bir baget içinde baharatlı Adana kebap.", "baguette_adana_ingredients": "Adana Kebap,Soğan,Maydanoz,Baharatlar", "baguette_suxhuk_desc": "Çıtır bir baget içinde doyurucu Türk sucuğu.", "baguette_suxhuk_ingredients": "Sucuk,Kaşar,Biber,Domates", "baguette_pleskavic_desc": "Taze bir baget içinde lezzetli bir Balkan pleskavica köftesi.", "baguette_pleskavic_ingredients": "Pleskavica,Ajvar,Soğan,Kaymak", "pide_kackavall_desc": "Eritilmiş, yapışkan kaşar peyniri ile doldurulmuş klasik bir Türk pidesi.", "pide_kackavall_ingredients": "Kaşar Peyniri,Tereyağı,Susam", "pide_suxhuk_desc": "Baharatlı Türk sucuğu ve peynir ile doldurulmuş lezzetli bir pide.", "pide_suxhuk_ingredients": "Sucuk,Kaşar,Domates,Biber", "pide_mish_bluar_desc": "Terbiyeli kıyma, soğan ve domates ile zengin bir dolguya sahip lezzetli bir pide.", "pide_mish_bluar_ingredients": "Kıyma,Soğan,Domates,Maydanoz", "pide_stek_veze_susam_desc": "Yumuşak biftek, mükemmel pişmiş bir yumurta ve bir tutam susam ile doyurucu bir pide.", "pide_stek_veze_susam_ingredients": "Biftek,Yumurta,Susam,Kaşar", "pide_tuna_desc": "Ton balığı, peynir ve taze sebzeler içeren klasik bir lezzetin lezzetli bir yorumu.", "pide_tuna_ingredients": "Ton Balığı,Kaşar,Soğan,Mısır", "pide_proshute_desc": "Lezzetli prosciutto ve eritilmiş peynir ile İtalyan esintili bir pide.", "pide_proshute_ingredients": "Prosciutto,Kaşar,Domates Sosu,Roka", "pide_ragazzi_desc": "Tüm favori malzemelerinizin özel bir karışımıyla dolu imza pidemiz.", "pide_ragazzi_ingredients": "Karışık Etler,Kaşar,Sebzeler,Ragazzi Özel Sosu", "portion_chicken_fingers_desc": "Çıtır, altın rengi tavuk parçaları, patates kızartması ve favori sosunuzla servis edilir.", "portion_chicken_fingers_ingredients": "Tavuk Göğsü,Galeta Unu,Patates Kızartması,Sos", "portion_pleskavic_sharri_desc": "Geleneksel garnitürlerle servis edilen büyük, sulu Şar usulü bir pleskavica köftesi.", "portion_pleskavic_sharri_ingredients": "Pleskavica Köftesi,Patates Kızartması,Soğan,Lepinja Ekmeği", "portion_chicken_salad_desc": "Izgara tavuk, taze sebzeler ve hafif bir sos ile taze ve sağlıklı bir salata.", "portion_chicken_salad_ingredients": "Izgara Tavuk,Marul,Domates,Salatalık,Sos", "tost_sallam_desc": "Lezzetli salam ve eritilmiş peynirle doldurulmuş klasik bir tost sandviç.", "tost_sallam_ingredients": "Salam,Kaşar,Tost Ekmeği,Domates", "tost_suxhuk_desc": "Lezzetli bir tat için baharatlı Türk sucuğu ile sıcak bir tost sandviç.", "tost_suxhuk_ingredients": "Sucuk,Kaşar,Tost Ekmeği,Kekik", "tost_proshute_qips_desc": "İtalyan prosciutto ile şık bir tost sandviç, yanında çıtır cips ile servis edilir.", "tost_proshute_qips_ingredients": "Prosciutto,Peynir,Roka,Tost Ekmeği,Cips", "burger_classic_desc": "Taze marul, domates ve özel sosumuzla klasik bir dana burger.", "burger_classic_ingredients": "Dana Köftesi,Marul,Domates,Soğan,Ekmek", "burger_cheese_desc": "Bol bir dilim eritilmiş peynir ile klasik burgerimiz.", "burger_cheese_ingredients": "Dana Köftesi,Peynir,Marul,Domates,Ekmek", "burger_chicken_desc": "Yumuşak bir ekmek içinde taze malzemelerle çıtır ve sulu bir tavuk fileto.", "burger_chicken_ingredients": "Tavuk Fileto,Marul,Mayonez,Ekmek", "burger_crispy_chicken_desc": "Ekstra çıtır, derin yağda kızartılmış tavuk fileto, turşu ve sos ile.", "burger_crispy_chicken_ingredients": "Çıtır Tavuk,Turşu,Özel Sos,Ekmek", "burger_ragazzi_desc": "En üstün burger: çift köfte, çift peynir ve gizli Ragazzi sosumuz.", "burger_ragazzi_ingredients": "Çift Köfte,Çift Peynir,Ragazzi Sosu,Pastırma", "lahmacun_classic_desc": "Baharatlı kıyma, sebzeler ve otlar ile kaplanmış ince, çıtır Türk pidesi.", "lahmacun_classic_ingredients": "Kıyma,Domates,Biber,Maydanoz", "lahmacun_kackavall_desc": "Geleneksel lahmacunumuz, üzerine eritilmiş kaşar peyniri eklenmiş.", "lahmacun_kackavall_ingredients": "Kıyma,Kaşar Peyniri,Domates,Biber", "pizza_mickey_mouse_desc": "Çocuklar için mükemmel, Mickey Mouse şeklinde eğlenceli ve lezzetli bir pizza!", "pizza_mickey_mouse_ingredients": "Domates Sosu,Peynir,Zeytin", "pizza_me_zemer_desc": "Sevgiyle yapılmış hoş bir kalp şeklinde pizza.", "pizza_me_zemer_ingredients": "Domates Sosu,Peynir,Pepperoni Kalpleri", "extras_pomfrit_desc": "Hafifçe tuzlanmış, çıtır çıtır, altın rengi patates kızartması.", "extras_pomfrit_ingredients": "Patates,Tuz", "extras_sos_hudhres_desc": "Ev yapımı kremalı sarımsak sosumuz, bandırmak için mükemmel.", "extras_sos_hudhres_ingredients": "Sarımsak,Yoğurt,Otlar", "extras_kackavall_desc": "Herhangi bir yemeğe ekstra eritilmiş kaşar peyniri ekleyin.", "extras_kackavall_ingredients": "Kaşar Peyniri", "extras_suxhuk_desc": "Bir porsiyon baharatlı, ızgara Türk sucuğu ekleyin.", "extras_suxhuk_ingredients": "Sucuk", "extras_veze_desc": "Yemeğinize mükemmel bir şekilde sahanda yumurta ekleyin.", "extras_veze_ingredients": "Yumurta", "extras_pije_freskuese_desc": "Yemeğinizi tamamlamak için çeşitli soğuk içecekler arasından seçim yapın.", "extras_pije_freskuese_ingredients": "Kola,Meyve Suyu,Su"
        }
    };
    
    const menuData = {
        "PIZZA": {
            title: "Pick Your Pizza",
            items: [
                { name: 'PIZZA MARGARITA', nameKey: 'pizza_margarita_name', descriptionKey: 'pizza_margarita_desc', ingredientsKey: 'pizza_margarita_ingredients', price: "€3.50" },
                { name: 'PIZZA FUNGHI', nameKey: 'pizza_funghi_name', descriptionKey: 'pizza_funghi_desc', ingredientsKey: 'pizza_funghi_ingredients', price: "€4.00" },
                { name: 'PIZZA TUNA', nameKey: 'pizza_tuna_name', descriptionKey: 'pizza_tuna_desc', ingredientsKey: 'pizza_tuna_ingredients', price: "€4.50" },
                { name: 'PIZZA SUXHUK', nameKey: 'pizza_suxhuk_name', descriptionKey: 'pizza_suxhuk_desc', ingredientsKey: 'pizza_suxhuk_ingredients', price: "€4.50" },
                { name: 'PIZZA PROSCIUTTO', nameKey: 'pizza_prosciutto_name', descriptionKey: 'pizza_prosciutto_desc', ingredientsKey: 'pizza_prosciutto_ingredients', price: "€5.00" },
                { name: 'PIZZA CAPRICCIOSA', nameKey: 'pizza_capricciosa_name', descriptionKey: 'pizza_capricciosa_desc', ingredientsKey: 'pizza_capricciosa_ingredients', price: "€5.00" },
                { name: 'PIZZA QUATTRO FORMAGGI', nameKey: 'pizza_quattro_formaggi_name', descriptionKey: 'pizza_quattro_formaggi_desc', ingredientsKey: 'pizza_quattro_formaggi_ingredients', price: "€5.00" },
                { name: 'PIZZA CALZONE', nameKey: 'pizza_calzone_name', descriptionKey: 'pizza_calzone_desc', ingredientsKey: 'pizza_calzone_ingredients', price: "€5.00" },
                { name: 'PIZZA VEGETARIAN', nameKey: 'pizza_vegetarian_name', descriptionKey: 'pizza_vegetarian_desc', ingredientsKey: 'pizza_vegetarian_ingredients', price: "€4.50" },
                { name: 'PIZZA DURUM', nameKey: 'pizza_durum_name', descriptionKey: 'pizza_durum_desc', ingredientsKey: 'pizza_durum_ingredients', price: "€5.50" },
                { name: 'PIZZA RAGAZZI', nameKey: 'pizza_ragazzi_name', descriptionKey: 'pizza_ragazzi_desc', ingredientsKey: 'pizza_ragazzi_ingredients', price: "€6.00" }
            ]
        },
        "BAGUETTE": {
            title: "Choose Your Baguette",
            items: [
                { name: 'CHICKEN BAGUETTE', nameKey: 'baguette_chicken_name', descriptionKey: 'baguette_chicken_desc', ingredientsKey: 'baguette_chicken_ingredients', price: "€3.00" },
                { name: 'ADANA BAGUETTE', nameKey: 'baguette_adana_name', descriptionKey: 'baguette_adana_desc', ingredientsKey: 'baguette_adana_ingredients', price: "€3.50" },
                { name: 'SUXHUK BAGUETTE', nameKey: 'baguette_suxhuk_name', descriptionKey: 'baguette_suxhuk_desc', ingredientsKey: 'baguette_suxhuk_ingredients', price: "€3.00" },
                { name: 'PLESKAVIC BAGUETTE', nameKey: 'baguette_pleskavic_name', descriptionKey: 'baguette_pleskavic_desc', ingredientsKey: 'baguette_pleskavic_ingredients', price: "€3.00" }
            ]
        },
        "PIDE": {
            title: "Pick Your Pide",
            items: [
                { name: 'PIDE ME KACKAVALL', nameKey: 'pide_kackavall_name', descriptionKey: 'pide_kackavall_desc', ingredientsKey: 'pide_kackavall_ingredients', price: "€3.00" },
                { name: 'PIDE ME SUXHUK', nameKey: 'pide_suxhuk_name', descriptionKey: 'pide_suxhuk_desc', ingredientsKey: 'pide_suxhuk_ingredients', price: "€3.50" },
                { name: 'PIDE ME MISH TE BLUAR', nameKey: 'pide_mish_bluar_name', descriptionKey: 'pide_mish_bluar_desc', ingredientsKey: 'pide_mish_bluar_ingredients', price: "€3.50" },
                { name: 'PIDE ME STEK, VEZE & SUSAM', nameKey: 'pide_stek_veze_susam_name', descriptionKey: 'pide_stek_veze_susam_desc', ingredientsKey: 'pide_stek_veze_susam_ingredients', price: "€4.50" },
                { name: 'PIDE ME TUNA', nameKey: 'pide_tuna_name', descriptionKey: 'pide_tuna_desc', ingredientsKey: 'pide_tuna_ingredients', price: "€4.00" },
                { name: 'PIDE ME PROSHUTE', nameKey: 'pide_proshute_name', descriptionKey: 'pide_proshute_desc', ingredientsKey: 'pide_proshute_ingredients', price: "€4.50" },
                { name: 'PIDE RAGAZZI', nameKey: 'pide_ragazzi_name', descriptionKey: 'pide_ragazzi_desc', ingredientsKey: 'pide_ragazzi_ingredients', price: "€5.00" }
            ]
        },
        "PORTION": {
            title: "Choose Your Portion",
            items: [
                { name: 'GISHTA PULE', nameKey: 'portion_chicken_fingers_name', descriptionKey: 'portion_chicken_fingers_desc', ingredientsKey: 'portion_chicken_fingers_ingredients', price: "€4.50" },
                { name: 'PLESKAVIC SHARRI', nameKey: 'portion_pleskavic_sharri_name', descriptionKey: 'portion_pleskavic_sharri_desc', ingredientsKey: 'portion_pleskavic_sharri_ingredients', price: "€5.00" },
                { name: 'SALLATE ME PULE', nameKey: 'portion_chicken_salad_name', descriptionKey: 'portion_chicken_salad_desc', ingredientsKey: 'portion_chicken_salad_ingredients', price: "€4.00" }
            ]
        },
        "TOSTA": {
            title: "Pick Your Toast",
            items: [
                { name: 'TOST ME SALLAM', nameKey: 'tost_sallam_name', descriptionKey: 'tost_sallam_desc', ingredientsKey: 'tost_sallam_ingredients', price: "€1.50" },
                { name: 'TOST ME SUXHUK', nameKey: 'tost_suxhuk_name', descriptionKey: 'tost_suxhuk_desc', ingredientsKey: 'tost_suxhuk_ingredients', price: "€1.50" },
                { name: 'TOST ME PROSHUTE & QIPS', nameKey: 'tost_proshute_qips_name', descriptionKey: 'tost_proshute_qips_desc', ingredientsKey: 'tost_proshute_qips_ingredients', price: "€2.00" }
            ]
        },
        "BURGER": {
            title: "Build Your Burger",
            items: [
                { name: 'BURGER CLASSIC', nameKey: 'burger_classic_name', descriptionKey: 'burger_classic_desc', ingredientsKey: 'burger_classic_ingredients', price: "€2.50" },
                { name: 'CHEESE BURGER', nameKey: 'burger_cheese_name', descriptionKey: 'burger_cheese_desc', ingredientsKey: 'burger_cheese_ingredients', price: "€3.00" },
                { name: 'CHICKEN BURGER', nameKey: 'burger_chicken_name', descriptionKey: 'burger_chicken_desc', ingredientsKey: 'burger_chicken_ingredients', price: "€3.00" },
                { name: 'CRISPY CHICKEN BURGER', nameKey: 'burger_crispy_chicken_name', descriptionKey: 'burger_crispy_chicken_desc', ingredientsKey: 'burger_crispy_chicken_ingredients', price: "€3.50" },
                { name: 'BURGER RAGAZZI', nameKey: 'burger_ragazzi_name', descriptionKey: 'burger_ragazzi_desc', ingredientsKey: 'burger_ragazzi_ingredients', price: "€4.50" }
            ]
        },
        "LAHMAXHUN": {
            title: "Choose Your Lahmacun",
            items: [
                { name: 'LAHMAXHUN', nameKey: 'lahmacun_classic_name', descriptionKey: 'lahmacun_classic_desc', ingredientsKey: 'lahmacun_classic_ingredients', price: "€2.50" },
                { name: 'LAHMAXHUN ME KACKAVALL', nameKey: 'lahmacun_kackavall_name', descriptionKey: 'lahmacun_kackavall_desc', ingredientsKey: 'lahmacun_kackavall_ingredients', price: "€3.00" }
            ]
        },
        "PIZZA FOR KIDS": {
            title: "For Our Little Guests",
            items: [
                { name: 'PIZZA MICKEY MOUSE', nameKey: 'pizza_mickey_mouse_name', descriptionKey: 'pizza_mickey_mouse_desc', ingredientsKey: 'pizza_mickey_mouse_ingredients', price: "€2.50" },
                { name: 'PIZZA ME ZEMER', nameKey: 'pizza_me_zemer_name', descriptionKey: 'pizza_me_zemer_desc', ingredientsKey: 'pizza_me_zemer_ingredients', price: "€2.50" }
            ]
        },
        "EXTRAS": {
            title: "Add Extra",
            items: [
                { name: 'POMFRIT', nameKey: 'extras_pomfrit_name', descriptionKey: 'extras_pomfrit_desc', ingredientsKey: 'extras_pomfrit_ingredients', price: "€1.50" },
                { name: 'SOS HUDHRES', nameKey: 'extras_sos_hudhres_name', descriptionKey: 'extras_sos_hudhres_desc', ingredientsKey: 'extras_sos_hudhres_ingredients', price: "€0.50" },
                { name: 'KACKAVALL', nameKey: 'extras_kackavall_name', descriptionKey: 'extras_kackavall_desc', ingredientsKey: 'extras_kackavall_ingredients', price: "€0.50" },
                { name: 'SUXHUK', nameKey: 'extras_suxhuk_name', descriptionKey: 'extras_suxhuk_desc', ingredientsKey: 'extras_suxhuk_ingredients', price: "€1.00" },
                { name: 'VEZE', nameKey: 'extras_veze_name', descriptionKey: 'extras_veze_desc', ingredientsKey: 'extras_veze_ingredients', price: "€0.30" },
                { name: 'PIJE FRESKUESE', nameKey: 'extras_pije_freskuese_name', descriptionKey: 'extras_pije_freskuese_desc', ingredientsKey: 'extras_pije_freskuese_ingredients', price: "€1.00" }
            ]
        }
    };
    
    const menuCardData = {
        "PIZZA":{title:"Pick Your Pizza",items:[{name:'PIZZA MARGARITA',image:'https://i.imgur.com/YSLS4Pp.png',theme:{bgGradient:'linear-gradient(135deg, #e74c3c, #c0392b)',bgElements:['🍅','🧀','🌿'],textColor:'#ffffff',accentColor:'#FFD700',isCalzone:!1}},{name:'PIZZA FUNGHI',image:'https://i.imgur.com/qeZbEEK.png',theme:{bgGradient:'linear-gradient(135deg, #8B4513, #A0522D)',bgElements:['🍄','🧀','🌿'],textColor:'#ffffff',accentColor:'#FFD700',isCalzone:!1}},{name:'PIZZA TUNA',image:'https://i.imgur.com/UYjPtl2.png',theme:{bgGradient:'linear-gradient(135deg, #3498db, #2980b9)',bgElements:['🐟','🧅','🌊'],textColor:'#ffffff',accentColor:'#FFD700',isCalzone:!1}},{name:'PIZZA SUXHUK',image:'https://i.imgur.com/LDk4NV4.png',theme:{bgGradient:'linear-gradient(135deg, #e67e22, #d35400)',bgElements:['🌭','🧀','🌶️'],textColor:'#ffffff',accentColor:'#FFD700',isCalzone:!1}},{name:'PIZZA PROSCIUTTO',image:'https://i.imgur.com/pAs9K3M.png',theme:{bgGradient:'linear-gradient(135deg, #9b59b6, #8e44ad)',bgElements:['🍖','🧀','🥬'],textColor:'#ffffff',accentColor:'#FFD700',isCalzone:!1}},{name:'PIZZA CAPRICCIOSA',image:'https://i.imgur.com/UiMfyNV.png',theme:{bgGradient:'linear-gradient(135deg, #7e57c2, #5e35b1)',bgElements:['🍖','🍄','🫒'],textColor:'#ffffff',accentColor:'#FFD700',isCalzone:!1}},{name:'PIZZA QUATTRO FORMAGGI',image:'https://i.imgur.com/1ojUNVW.png',theme:{bgGradient:'linear-gradient(135deg, #ffd54f, #ffc107)',bgElements:['🧀','🧀','🧀'],textColor:'#3e2723',accentColor:'#d35400',isCalzone:!1}},{name:'PIZZA CALZONE',image:'https://i.imgur.com/4glW04Z.png',theme:{bgGradient:'linear-gradient(135deg, #ff7043, #f4511e)',bgElements:['🥟','🍖','🍄'],textColor:'#3e2723',accentColor:'#FFD700',isCalzone:!0}},{name:'PIZZA VEGETARIAN',image:'https://i.imgur.com/7aNBE1u.png',theme:{bgGradient:'linear-gradient(135deg, #66bb6a, #43a047)',bgElements:['🥦','🍅','🫑'],textColor:'#1b5e20',accentColor:'#FFD700',isCalzone:!1}},{name:'PIZZA DURUM',image:'https://i.imgur.com/kgL4KnM.png',theme:{bgGradient:'linear-gradient(135deg, #8d6e63, #6d4c41)',bgElements:['🌯','🍖','🍄'],textColor:'#ffffff',accentColor:'#FFD700',isCalzone:!1}},{name:'PIZZA RAGAZZI',image:'https://i.imgur.com/6N3P5gn.png',theme:{bgGradient:'linear-gradient(135deg, #e53935, #c62828)',bgElements:['🍕','🍖','🌶️'],textColor:'#ffffff',accentColor:'#FFD700',isCalzone:!1}}]},
        "BAGUETTE": { title: "Choose Your Baguette", items: [{ name: 'CHICKEN BAGUETTE', image: 'https://i.imgur.com/YYcTLWB.png', theme: { bgGradient: 'linear-gradient(135deg, #f7b733, #fc4a1a)', bgElements: ['🥖', '🍗', '🥬'], textColor: '#ffffff', accentColor: '#FFD700' } }, { name: 'ADANA BAGUETTE', image: 'https://i.imgur.com/jAx7ozx.png', theme: { bgGradient: 'linear-gradient(135deg, #D31027, #EA384D)', bgElements: ['🥖', '🌶️', '🥩'], textColor: '#ffffff', accentColor: '#FFD700' } }, { name: 'SUXHUK BAGUETTE', image: 'https://i.imgur.com/luubq25.png', theme: { bgGradient: 'linear-gradient(135deg, #c0392b, #8e44ad)', bgElements: ['🥖', '🌭', '🧀'], textColor: '#ffffff', accentColor: '#FFD700' } }, { name: 'PLESKAVIC BAGUETTE', image: 'https://i.imgur.com/b3YKVLA.png', theme: { bgGradient: 'linear-gradient(135deg, #4b6cb7, #182848)', bgElements: ['🥖', '🍔', '🧅'], textColor: '#ffffff', accentColor: '#FFD700' } }] },
        "PIDE": { title: "Pick Your Pide", items: [{ name: 'PIDE ME KACKAVALL', image: 'https://i.imgur.com/2w3kloI.png', theme: { bgGradient: 'linear-gradient(135deg, #FFC837, #FF8008)', bgElements: ['🥖', '🧀'], textColor: '#ffffff', accentColor: '#FFD700' } }, { name: 'PIDE ME SUXHUK', image: 'https://i.imgur.com/bDSrUcH.png', theme: { bgGradient: 'linear-gradient(135deg, #e53935, #c62828)', bgElements: ['🥖', '🌭', '🌶️'], textColor: '#ffffff', accentColor: '#FFD700' } }, { name: 'PIDE ME MISH TE BLUAR', image: 'https://i.imgur.com/iV8bvsY.png', theme: { bgGradient: 'linear-gradient(135deg, #783a00, #c35a00)', bgElements: ['🥖', '🥩', '🧅'], textColor: '#ffffff', accentColor: '#FFD700' } }, { name: 'PIDE ME STEK, VEZE & SUSAM', image: 'https://i.imgur.com/0nt7iUm.png', theme: { bgGradient: 'linear-gradient(135deg, #434343, #000000)', bgElements: ['🥖', '🍳', '🥩'], textColor: '#ffffff', accentColor: '#FFD700' } }, { name: 'PIDE ME TUNA', image: 'https://i.imgur.com/yNzZ5t9.png', theme: { bgGradient: 'linear-gradient(135deg, #00c6ff, #0072ff)', bgElements: ['🥖', '�', '🌽'], textColor: '#ffffff', accentColor: '#FFD700' } }, { name: 'PIDE ME PROSHUTE', image: 'https://i.imgur.com/NTuwILL.png', theme: { bgGradient: 'linear-gradient(135deg, #ec77ab, #7873f5)', bgElements: ['🥖', '🍖', '🌿'], textColor: '#ffffff', accentColor: '#FFD700' } }, { name: 'PIDE RAGAZZI', image: 'https://i.imgur.com/NgbiDKs.png', theme: { bgGradient: 'linear-gradient(135deg, #ff00cc, #333399)', bgElements: ['🥖', '✨', '👨‍🍳'], textColor: '#ffffff', accentColor: '#FFD700' } }] },
        "PORTION": { title: "Choose Your Portion", items: [{ name: 'GISHTA PULE', image: 'https://i.imgur.com/oyKT9e6.png', theme: { bgGradient: 'linear-gradient(135deg, #FFD700, #FBB034)', bgElements: ['🍗', '🍟', '😋'], textColor: '#000000', accentColor: '#D32F2F' } }, { name: 'PLESKAVIC SHARRI', image: 'https://i.imgur.com/m4TNFiC.png', theme: { bgGradient: 'linear-gradient(135deg, #7f5a83, #0d324d)', bgElements: ['🍔', '🧅', '🔥'], textColor: '#ffffff', accentColor: '#FFD700' } }, { name: 'SALLATE ME PULE', image: 'https://i.imgur.com/xjd5FNE.png', theme: { bgGradient: 'linear-gradient(135deg, #56ab2f, #a8e063)', bgElements: ['🥗', '🍗', '🍅'], textColor: '#ffffff', accentColor: '#FFD700' } }] },
        "TOSTA": { title: "Pick Your Toast", items: [{ name: 'TOST ME SALLAM', image: 'https://i.imgur.com/cutD45v.png', theme: { bgGradient: 'linear-gradient(135deg, #e67e22, #d35400)', bgElements: ['🥪', '🧀'], textColor: '#ffffff', accentColor: '#FFD700' } }, { name: 'TOST ME SUXHUK', image: 'https://i.imgur.com/8WCgONz.png', theme: { bgGradient: 'linear-gradient(135deg, #C04848, #480048)', bgElements: ['🥪', '🌶️', '🌭'], textColor: '#ffffff', accentColor: '#FFD700' } }, { name: 'TOST ME PROSHUTE & QIPS', image: 'https://i.imgur.com/sOfP7k7.png', theme: { bgGradient: 'linear-gradient(135deg, #1c92d2, #f2fcfe)', bgElements: ['🥪', '🍖', '🇮🇹'], textColor: '#000000', accentColor: '#D32F2F' } }] },
        "BURGER": { title: "Build Your Burger", items: [{ name: 'BURGER CLASSIC', image: 'https://i.imgur.com/j4XFRfn.png', theme: { bgGradient: 'linear-gradient(135deg, #c21500, #ffc500)', bgElements: ['🍔', '🥩', '🥬'], textColor: '#ffffff', accentColor: '#FFD700' } }, { name: 'CHEESE BURGER', image: 'https://i.imgur.com/kQbvfDj.png', theme: { bgGradient: 'linear-gradient(135deg, #ffc500, #c21500)', bgElements: ['🍔', '🧀', '😋'], textColor: '#ffffff', accentColor: '#FFD700' } }, { name: 'CHICKEN BURGER', image: 'https://i.imgur.com/OVKD1yV.png', theme: { bgGradient: 'linear-gradient(135deg, #DAA520, #B8860B)', bgElements: ['🍔', '🍗', '🍟'], textColor: '#ffffff', accentColor: '#FFD700' } }, { name: 'CRISPY CHICKEN BURGER', image: 'https://i.imgur.com/qkYOjl2.png', theme: { bgGradient: 'linear-gradient(135deg, #FF8C00, #FFD700)', bgElements: ['🍔', '🍗', '💥'], textColor: '#000000', accentColor: '#B22222' } }, { name: 'BURGER RAGAZZI', image: 'https://i.imgur.com/Q9eycWS.png', theme: { bgGradient: 'linear-gradient(135deg, #2c3e50, #000000)', bgElements: ['🍔', '✨', '🔥'], textColor: '#ffffff', accentColor: '#DAA520' } }] },
        "LAHMAXHUN": { title: "Choose Your Lahmacun", items: [{ name: 'LAHMAXHUN', image: 'https://i.imgur.com/Fk88h8g.png', theme: { bgGradient: 'linear-gradient(135deg, #8B4513, #CD853F)', bgElements: ['🫓', '🥩', '🍋'], textColor: '#ffffff', accentColor: '#FFD700' } }, { name: 'LAHMAXHUN ME KACKAVALL', image: 'https://i.imgur.com/T4PTzz0.png', theme: { bgGradient: 'linear-gradient(135deg, #CD853F, #8B4513)', bgElements: ['🫓', '🧀', '🥩'], textColor: '#ffffff', accentColor: '#FFD700' } }] },
        "PIZZA FOR KIDS": { title: "For Our Little Guests", items: [{ name: 'PIZZA MICKEY MOUSE', image: 'https://i.imgur.com/or7yDbi.png', theme: { bgGradient: 'linear-gradient(135deg, #ff4e50, #f9d423)', bgElements: ['🍕', '🐭', '🎈'], textColor: '#ffffff', accentColor: '#FFD700' } }, { name: 'PIZZA ME ZEMER', image: 'https://i.imgur.com/tLhY1b0.png', theme: { bgGradient: 'linear-gradient(135deg, #e96443, #904e95)', bgElements: ['🍕', '❤️', '💕'], textColor: '#ffffff', accentColor: '#f9d423' } }] },
        "EXTRAS": { title: "Add Something Extra", items: [{ name: 'POMFRIT', image: 'https://i.imgur.com/uFLGVqz.png', theme: { bgGradient: 'linear-gradient(135deg, #f9d423, #ff4e50)', bgElements: ['🍟'], textColor: '#ffffff', accentColor: '#d32f2f' } }, { name: 'SOS HUDHRES', image: 'https://i.imgur.com/pauilZK.png', theme: { bgGradient: 'linear-gradient(135deg, #1A6331, #FFD700)', bgElements: ['🧄', '💧'], textColor: '#ffffff', accentColor: '#ffffff', ingredientTheme: 'light', navTheme: 'light' } }, { name: 'KACKAVALL', image: 'https://i.imgur.com/1WqtWn9.png', theme: { bgGradient: 'linear-gradient(135deg, #ffc500, #9b870c)', bgElements: ['🧀'], textColor: '#ffffff', accentColor: '#d35400' } }, { name: 'SUXHUK', image: 'https://i.imgur.com/OwXFEvQ.png', theme: { bgGradient: 'linear-gradient(135deg, #c21500, #800000)', bgElements: ['🌭', '🌶️'], textColor: '#ffffff', accentColor: '#f9d423' } }, { name: 'VEZE', image: 'https://i.imgur.com/FYthOoh.png', theme: { bgGradient: 'linear-gradient(135deg, #FFD700, #2EAD56)', bgElements: ['🍳'], textColor: '#ffffff', accentColor: '#ffc500' } }, { name: 'PIJE FRESKUESE', image: 'https://i.imgur.com/ZFaSPMN.png', theme: { bgGradient: 'linear-gradient(135deg, #00c6ff, #0072ff)', bgElements: ['🥤', '🧊', '💧'], textColor: '#ffffff', accentColor: '#f5f5f5' } }] },
    };
    
    // --- STATE VARIABLES ---
    let activeMenuKey = "PIZZA";
    let currentItemIndex = 0;
    let selectedSize = 'small';
    let animationInProgress = false;
    let currentLang = 'en';

    // --- DOM ELEMENT SELECTORS ---
    const mainNavLinks = document.querySelectorAll('.main-nav a[data-page], .page-switcher');
    const fanFavoriteLinks = document.querySelectorAll('.featured-items .item-card');
    const pages = document.querySelectorAll('.page');
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const mainNav = document.querySelector('.main-nav');
    const languageSwitcher = document.querySelector('.language-switcher');
    const selectedLangEl = document.querySelector('.selected-lang');
    const langDropdown = document.querySelector('.lang-dropdown');
    
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
    const closeModal = document.querySelector('.close-modal');
    const floatingElements = document.getElementById('floating-elements');
    const menuNavLinks = document.querySelectorAll('.menu-nav-links a, .category-chip');

    // --- CORE FUNCTIONS ---

    /**
     * @function setLanguage
     * @description Sets the application language and updates the URL hash.
     * @param {string} lang - The language code (e.g., 'en', 'sq').
     * @param {boolean} [updateHash=true] - Whether to update the URL hash.
     */
    function setLanguage(lang, updateHash = true) {
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
            if(selectedLangAnchor) {
                selectedLangEl.querySelector('img').src = selectedLangAnchor.querySelector('img').src;
                selectedLangEl.querySelector('span').textContent = selectedLangAnchor.textContent.trim();
            }
            
            document.body.classList.remove('lang-switching');

            if (updateHash) {
                const activePage = document.querySelector('.page.active');
                if (activePage) {
                    const pageKey = activePage.id.replace('-page', '');
                    window.location.hash = `#${lang}/${pageKey}`;
                }
            }
        }, 300);
    }

    /**
     * @function switchPage
     * @description Switches the visible page and updates the URL hash.
     * @param {string} pageId - The ID of the page to show (e.g., 'home-page').
     * @param {boolean} [updateHash=true] - Whether to update the URL hash.
     */
    function switchPage(pageId, updateHash = true) {
        pages.forEach(page => page.classList.remove('active'));
        const newPage = document.getElementById(pageId);
        if (newPage) {
            newPage.classList.add('active');
        }

        document.querySelectorAll('.main-nav a[data-page]').forEach(link => {
            link.classList.toggle('active', link.dataset.page === pageId);
        });
        window.scrollTo(0, 0);
        if(mainNav.classList.contains('mobile-open')) {
            mainNav.classList.remove('mobile-open');
            document.body.classList.remove('mobile-nav-open');
            mobileNavToggle.querySelector('i').className = 'fas fa-bars';
        }

        if (updateHash) {
            const pageKey = pageId.replace('-page', '');
            window.location.hash = `#${currentLang}/${pageKey}`;
        }
    }

    /**
     * @function handleUrlChange
     * @description Reads the URL hash to set the language and page.
     * This is the central function for routing.
     */
    function handleUrlChange() {
        const hash = window.location.hash.substring(1); // e.g., "sq/menu"
        const parts = hash.split('/');

        let lang = 'en'; // Default language
        let pageKey = 'home'; // Default page

        // Check if the first part is a valid language code
        if (parts.length > 0 && translations.hasOwnProperty(parts[0])) {
            lang = parts[0];
            pageKey = parts[1] || 'home';
        } else if (parts.length > 0 && document.getElementById(`${parts[0]}-page`)) {
            // Fallback for old URLs like #menu
            pageKey = parts[0];
        }
        
        // Set state without causing a loop
        setLanguage(lang, false); 
        switchPage(pageKey + '-page', false);
    }
    
    // --- UI & THEME FUNCTIONS ---

    function applyTheme(theme) {
        if (!theme || !menuPageContainer) return;
        menuPageContainer.style.background = theme.bgGradient;
        if (pizzaDisplay) {
            pizzaDisplay.style.setProperty('--accent-color', theme.accentColor);
        }
        if(itemNameEl) itemNameEl.style.color = theme.textColor;
        if(itemDescriptionEl) itemDescriptionEl.style.color = theme.textColor;
    }

    function createFloatingElements(elements) {
        if (!floatingElements || !elements) return;
        floatingElements.innerHTML = '';
        elements.forEach(emoji => {
            for (let i = 0; i < 5; i++) {
                const element = document.createElement('div');
                element.className = 'floating-emoji';
                element.textContent = emoji;
                element.style.left = `${Math.random() * 100}vw`;
                element.style.animationDelay = `${Math.random() * 15}s`;
                element.style.animationDuration = `${10 + Math.random() * 10}s`;
                element.style.fontSize = `${1.5 + Math.random()}rem`;
                floatingElements.appendChild(element);
            }
        });
    }

    function renderCurrentMenuItem() {
        const menu = menuData[activeMenuKey];
        if (!menu || !menu.items || menu.items.length === 0) {
            if(pizzaDisplay) pizzaDisplay.style.display = 'none';
            if(menuTitleEl) menuTitleEl.textContent = "Coming Soon!";
            if(floatingElements) floatingElements.innerHTML = '';
            return;
        }
        if(pizzaDisplay) pizzaDisplay.style.display = 'flex';

        const item = menu.items[currentItemIndex];
        const cardInfo = menuCardData[activeMenuKey]?.items.find(cardItem => cardItem.name === item.name);

        if(menuTitleEl) {
            const menuTitleKey = `menu_${activeMenuKey.toLowerCase().replace(/[\s_]+/g, '_')}`;
            menuTitleEl.textContent = translations[currentLang][menuTitleKey] || menu.title;
        }

        if(itemNameEl) {
            itemNameEl.textContent = translations[currentLang][item.nameKey] || item.name;
        }

        if(itemDescriptionEl) {
            itemDescriptionEl.textContent = translations[currentLang][item.descriptionKey] || "Description not available";
        }

        if(itemImageEl && cardInfo) {
            itemImageEl.src = cardInfo.image;
            itemImageEl.alt = translations[currentLang][item.nameKey] || item.name;
        }

        if(ingredientsListEl) {
            ingredientsListEl.innerHTML = '';
            const ingredientsKey = item.ingredientsKey;
            const ingredientsString = translations[currentLang][ingredientsKey];
            
            if (ingredientsString) {
                const ingredients = ingredientsString.split(',');
                ingredients.forEach(ingredient => {
                    const span = document.createElement('span');
                    span.textContent = ingredient.trim();
                    ingredientsListEl.appendChild(span);
                });
            }
        }

        if (sizeSelector) {
            sizeSelector.style.display = activeMenuKey === 'PIZZA' ? 'flex' : 'none';
        }

        updateOrderButtonText();
        if (cardInfo) {
            applyTheme(cardInfo.theme);
            createFloatingElements(cardInfo.theme ? cardInfo.theme.bgElements : []);
        }
    }

    async function navigateItems(direction) {
        if (animationInProgress) return;
        const menu = menuData[activeMenuKey];
        if (!menu || !menu.items || menu.items.length <= 1) return;

        animationInProgress = true;
        if(pizzaDisplay) pizzaDisplay.classList.add('is-navigating');

        await new Promise(resolve => setTimeout(resolve, 400));

        currentItemIndex = (currentItemIndex + direction + menu.items.length) % menu.items.length;
        renderCurrentMenuItem();

        await new Promise(resolve => setTimeout(resolve, 50));
        if(pizzaDisplay) pizzaDisplay.classList.remove('is-navigating');

        animationInProgress = false;
    }

    function switchMenuCategory(newMenuKey) {
        if (activeMenuKey === newMenuKey) return;
        activeMenuKey = newMenuKey;
        currentItemIndex = 0;
        
        menuNavLinks.forEach(link => {
            link.classList.toggle('active', link.dataset.menu === activeMenuKey);
        });

        if(pizzaDisplay) pizzaDisplay.classList.add('is-navigating');
        setTimeout(() => {
            renderCurrentMenuItem();
            if(pizzaDisplay) pizzaDisplay.classList.remove('is-navigating');
        }, 400);
    }

    function showPhoneModal() { if (phoneModal) phoneModal.classList.add('show'); }
    function hidePhoneModal() { if (phoneModal) phoneModal.classList.remove('show'); }

    function updateOrderButtonText() {
        if (orderNowBtn) {
            const orderNowKey = 'orderNow';
            const baseText = translations[currentLang][orderNowKey] || 'Order Now';
            const sizeMap = {
                small: 'S',
                medium: 'M',
                family: 'F'
            };
            const abbreviatedSize = sizeMap[selectedSize] || selectedSize;
            orderNowBtn.textContent = activeMenuKey === 'PIZZA' ? `${baseText} - ${abbreviatedSize}` : baseText;
        }
    }

    // --- EVENT LISTENERS ---
    function setupEventListeners() {
        if(mobileNavToggle) {
            mobileNavToggle.addEventListener('click', () => {
                const icon = mobileNavToggle.querySelector('i');
                const isNavOpen = mainNav.classList.toggle('mobile-open');
                document.body.classList.toggle('mobile-nav-open', isNavOpen);
                icon.className = isNavOpen ? 'fas fa-times' : 'fas fa-bars';
            });
        }
        
        mainNavLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const pageId = link.dataset.page;
                switchPage(pageId);
            });
        });

        fanFavoriteLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const menuTarget = link.dataset.menuTarget;
                const itemTargetName = link.dataset.itemTarget;
                
                if (menuTarget && itemTargetName) {
                    const menu = menuData[menuTarget];
                    if (!menu) return;

                    const itemIndex = menu.items.findIndex(item => item.name === itemTargetName);
                    
                    activeMenuKey = menuTarget;
                    currentItemIndex = (itemIndex !== -1) ? itemIndex : 0;
                    
                    menuNavLinks.forEach(navLink => {
                        navLink.classList.toggle('active', navLink.dataset.menu === activeMenuKey);
                    });
                    
                    switchPage('menu-page'); 
                    renderCurrentMenuItem();
                }
            });
        });

        if(selectedLangEl) {
            selectedLangEl.addEventListener('click', (e) => {
                e.stopPropagation();
                languageSwitcher.classList.toggle('open');
            });
        }

        document.addEventListener('click', (e) => {
            if (languageSwitcher && !languageSwitcher.contains(e.target)) {
                languageSwitcher.classList.remove('open');
            }
            if (e.target === phoneModal) hidePhoneModal();
            const sizeOption = e.target.closest('.size-option');
            if (sizeOption && activeMenuKey === 'PIZZA') {
                document.querySelectorAll('.size-option').forEach(opt => opt.classList.remove('active'));
                sizeOption.classList.add('active');
                selectedSize = sizeOption.dataset.size;
                updateOrderButtonText();
            }
        });

        if(langDropdown) {
            langDropdown.addEventListener('click', (e) => {
                e.preventDefault();
                const langLink = e.target.closest('a[data-lang-code]');
                if (langLink) {
                    setLanguage(langLink.dataset.langCode);
                    languageSwitcher.classList.remove('open');
                }
            });
        }

        if(prevBtn) prevBtn.addEventListener('click', () => navigateItems(-1));
        if(nextBtn) nextBtn.addEventListener('click', () => navigateItems(1));

        if(pizzaDisplay) {
            let touchStartX = 0;
            let touchEndX = 0;

            pizzaDisplay.addEventListener('touchstart', (e) => {
                touchStartX = e.changedTouches[0].screenX;
            }, { passive: true });

            pizzaDisplay.addEventListener('touchend', (e) => {
                touchEndX = e.changedTouches[0].screenX;
                handleSwipe();
            }, { passive: true });

            function handleSwipe() {
                const swipeThreshold = 50;
                if (touchEndX < touchStartX - swipeThreshold) {
                    navigateItems(1);
                } else if (touchEndX > touchStartX + swipeThreshold) {
                    navigateItems(-1);
                }
            }
        }
        if(orderNowBtn) orderNowBtn.addEventListener('click', showPhoneModal);
        if(closeModal) closeModal.addEventListener('click', hidePhoneModal);
        
        menuNavLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                switchMenuCategory(link.dataset.menu);
            });
        });

        document.addEventListener('keydown', (e) => {
            const menuPage = document.getElementById('menu-page');
            if (menuPage && menuPage.classList.contains('active')) {
                if (e.key === 'ArrowLeft') navigateItems(-1);
                if (e.key === 'ArrowRight') navigateItems(1);
            }
            if (e.key === 'Escape' && phoneModal && phoneModal.classList.contains('show')) {
                hidePhoneModal();
            }
        });

        window.addEventListener('scroll', function() {
            const header = document.querySelector('.header');
            if(header) {
                header.classList.toggle('scrolled', window.scrollY > 50);
            }
        });

        window.addEventListener('hashchange', handleUrlChange);
    }

    // --- INITIALIZATION ---
    function init() {
        setupEventListeners();
        handleUrlChange(); // Set initial state from URL on page load
    }

    init();
});
