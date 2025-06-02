document.addEventListener('DOMContentLoaded', () => {
    const langNlButton = document.getElementById('lang-nl');
    const langEnButton = document.getElementById('lang-en');
    const iframeNl = document.getElementById('brevo-iframe-nl');
    const iframeEn = document.getElementById('brevo-iframe-en');

    const currentYearSpan = document.getElementById('currentYear');
    const logoImg = document.getElementById('logo-img'); // Logo image element

    // Placeholder voor logo URL, zodat de gebruiker deze makkelijk kan vinden om aan te passen
    const jouwLogoUrl = "https://placehold.co/150x50/14591D/EEF0F2?text=GroupStay&font=inter"; // Vervang dit als je het logo direct in JS wilt zetten, anders via HTML
    if (logoImg && logoImg.src.includes('placehold.co')) { // Alleen als het nog de placeholder is
        // logoImg.src = jouwLogoUrl; // Optioneel: als je de src via JS wilt instellen
    }


    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    const translations = {
        nl: {
            heroTitle: "Ontdek GroupStay - Jouw sleutel tot groepsruimtes",
            heroSubtitle: "Hét platform waar verenigingen gebouwen verhuren én vinden voor kampen, evenementen en meer. Binnenkort live!",
            newsletterTitleHero: "Blijf als eerste op de hoogte!",
            newsletterPlaceholder: "Jouw e-mailadres",
            newsletterButton: "Aanmelden",
            newsletterSuccess: "Bedankt voor je aanmelding! Je hoort binnenkort van ons.",
            newsletterError: "Voer een geldig e-mailadres in.",
            aboutTitle: "Wat is GroupStay?",
            aboutForLandlordsTitle: "Voor verenigingen met een eigen gebouw (verhuurders)",
            aboutForLandlordsText: "Heeft jouw vereniging een gebouw dat je wilt delen met anderen? GroupStay biedt je de mogelijkheid om je accommodatie eenvoudig te presenteren aan een breed netwerk van geïnteresseerde groepen en organisaties. Beheer je aanvragen, geef beschikbaarheid aan en maximaliseer de bezetting van je ruimte.",
            aboutForRentersTitle: "Voor zoekende verenigingen en organisaties (huurders)",
            aboutForRentersText: "Ben je op zoek naar de ideale locatie voor je volgende kamp, vergadering, training of evenement? Met GroupStay vind je via een slim filtersysteem snel en efficiënt geschikte gebouwen. Filter op locatie, capaciteit, voorzieningen en meer. Leg direct contact met de beheerder voor een naadloze ervaring.",
            aboutFuture: "Ons platform is momenteel in ontwikkeling. We werken hard aan een intuïtieve en gebruiksvriendelijke ervaring voor zowel verhuurders als huurders.",
            footerRights: "Alle rechten voorbehouden."
        },
        en: {
            heroTitle: "Discover GroupStay - Your key to group spaces",
            heroSubtitle: "The platform where associations rent out and find buildings for camps, events, and more. Coming soon!",
            newsletterTitleHero: "Be the first to know!",
            newsletterPlaceholder: "Your email address",
            newsletterButton: "Sign Up",
            newsletterSuccess: "Thank you for signing up! You'll hear from us soon.",
            newsletterError: "Please enter a valid email address.",
            aboutTitle: "What is GroupStay?",
            aboutForLandlordsTitle: "For associations with a building (landlords)",
            aboutForLandlordsText: "Does your association have a building you want to share with others? GroupStay offers you the opportunity to easily present your accommodation to a wide network of interested groups and organizations. Manage your requests, indicate availability, and maximize your space's occupancy.",
            aboutForRentersTitle: "For searching associations and organizations (renters)",
            aboutForRentersText: "Are you looking for the ideal location for your next camp, meeting, training, or event? With GroupStay, you can quickly and efficiently find suitable buildings via a smart filter system. Filter by location, capacity, amenities, and more. Directly contact the building manager for a seamless experience.",
            aboutFuture: "Our platform is currently under development. We are working hard to create an intuitive and user-friendly experience for both landlords and renters.",
            footerRights: "All rights reserved."
        }
    };

    function setLanguage(lang) {
        document.documentElement.lang = lang;
        const elements = document.querySelectorAll('[data-lang-key]');
        elements.forEach(el => {
            const key = el.getAttribute('data-lang-key');
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });

        if (lang === 'nl') {
            langNlButton.classList.add('active');
            langEnButton.classList.remove('active');
            if (iframeNl) iframeNl.style.display = 'block';
            if (iframeEn) iframeEn.style.display = 'none';

        } else { // lang === 'en'
            langEnButton.classList.add('active');
            langNlButton.classList.remove('active');
            if (iframeNl) iframeNl.style.display = 'none';
            if (iframeEn) iframeEn.style.display = 'block';
        }
        localStorage.setItem('preferredLanguage', lang);
    }

    langNlButton.addEventListener('click', () => setLanguage('nl'));
    langEnButton.addEventListener('click', () => setLanguage('en'));

    const preferredLanguage = localStorage.getItem('preferredLanguage');
    setLanguage(preferredLanguage || 'nl'); // Default naar NL of opgeslagen voorkeur
});