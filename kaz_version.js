const languageButton = document.querySelector('.language-switch');

const russianContent = new Map();
const kazakhContent = {
  '.header .brand': 'ҒЫЛЫМИ<br><span>БАҒЫТ</span>',
  '.nav': '<a href="#services">Қызметтер</a><a href="#prices">Бағалар</a><a href="#about">Біз туралы</a><a href="#order">Байланыс</a>',
  '.hero-copy': '<p class="eyebrow">Ғылыми және әдістемелік материалдар</p><h1>Маңызды жұмысты <em>лайықты</em> қорғауға көмек</h1><p class="lead">Ғылыми зерттеулер, авторлық бағдарламалар, мақалалар, презентациялар және қорғауға арналған материалдар — тақырыпқа, талаптарға және мерзімге мұқият көңіл бөлумен.</p><div class="hero-actions"><a class="button" href="https://wa.me/87058037275?text=Сәлеметсіз%20бе!%20Тапсырыс%20бергім%20келеді." target="_blank" rel="noopener">WhatsApp арқылы тапсырыс беру <span>↗</span></a><a class="text-link" href="#prices">Бағаларды көру <span>↓</span></a></div>',
  '.paper-label': 'ЗЕРТТЕУ',
  '.services .section-heading': '<p class="eyebrow">Жұмыс бағыттары</p><h2>Оқу, жариялау<br>және қорғау қызметтері</h2>',
  '.service-card:nth-child(1)': '<div class="service-top"><span class="service-icon">✦</span><span class="service-number">01</span></div><h3>Ғылыми зерттеулер мен жобалар</h3><p>Зерттеу және жоба мәтіндерін түсінікті құрылыммен әрі рәсімдеумен дайындау.</p><a href="https://wa.me/87058037275?text=Сәлеметсіз%20бе!%20Ғылыми%20зерттеу%20немесе%20жобаға%20тапсырыс%20бергім%20келеді." target="_blank" rel="noopener">Тапсырысты талқылау <b>↗</b></a>',
  '.service-card:nth-child(2)': '<div class="service-top"><span class="service-icon">▣</span><span class="service-number">02</span></div><h3>Презентациялар және қорғау сөзі</h3><p>Слайдтардың мазмұны, дизайны және қорғауға арналған сенімді сөйлеу мәтіні.</p><a href="https://wa.me/87058037275?text=Сәлеметсіз%20бе!%20Презентацияға%20немесе%20қорғау%20сөзіне%20тапсырыс%20бергім%20келеді." target="_blank" rel="noopener">Тапсырысты талқылау <b>↗</b></a>',
  '.service-card:nth-child(3)': '<div class="service-top"><span class="service-icon">✎</span><span class="service-number">03</span></div><h3>Ғылыми-әдістемелік мақалалар</h3><p>Мұғалімдердің жарияланымға арналған материалдары басылым талаптарына сай дайындалады.</p><a href="https://wa.me/87058037275?text=Сәлеметсіз%20бе!%20Ғылыми-әдістемелік%20мақалаға%20тапсырыс%20бергім%20келеді." target="_blank" rel="noopener">Тапсырысты талқылау <b>↗</b></a>',
  '.service-card:nth-child(4)': '<div class="service-top"><span class="service-icon">◌</span><span class="service-number">04</span></div><h3>Әдістемелік әзірлемелер мен бағдарламалар</h3><p>Мұғалімдер мен балабақша тәрбиешілеріне арналған материалдар.</p><a href="https://wa.me/87058037275?text=Сәлеметсіз%20бе!%20Әдістемелік%20әзірлемеге%20немесе%20авторлық%20бағдарламаға%20тапсырыс%20бергім%20келеді." target="_blank" rel="noopener">Тапсырысты талқылау <b>↗</b></a>',
  '.service-card:nth-child(5)': '<div class="service-top"><span class="service-icon">⌁</span><span class="service-number">05</span></div><h3>Курстық және дипломдық жұмыстар</h3><p>Келісілген тақырып бойынша материалдарды дайындау және рәсімдеу.</p><a href="https://wa.me/87058037275?text=Сәлеметсіз%20бе!%20Курстық%20немесе%20дипломдық%20жұмыстың%20бағасын%20білгім%20келеді." target="_blank" rel="noopener">Тапсырысты талқылау <b>↗</b></a>',
  '.service-card:nth-child(6)': '<div class="service-top"><span class="service-icon">✓</span><span class="service-number">06</span></div><h3>Антиплагиатқа тексеру</h3><p>Мәтінді келісілген сервис арқылы тексеру және нәтижесі бойынша есеп.</p><a href="https://wa.me/87058037275?text=Сәлеметсіз%20бе!%20Жұмысты%20антиплагиатқа%20тексергім%20келеді." target="_blank" rel="noopener">Тапсырысты талқылау <b>↗</b></a>',
  '.package-heading': '<p class="eyebrow">Қызметтердің толық пакеті</p><h2>Ғылыми жоба:<br>идеядан қорғауға дейін</h2><p>Сенімді дайындық пен таныстыруға қажеттінің барлығы — бір жинақта.</p>',
  '.package-card': '<div class="package-price"><small>Ғылыми зерттеу /<br>жобаға арналған жинақ</small><strong>30 000 <span>₸</span> бастап</strong></div><div class="included"><h3>Жинаққа не кіреді</h3><ul><li>Ғылыми зерттеу немесе жоба мәтіні</li><li>Қорғауға арналған презентация</li><li>Қорғау сөзінің мәтіні</li><li>Зерттеу күнделігі</li><li>Ғылыми жетекшінің пікірі</li><li>Сарапшыға арналған рецензия мәтіні</li></ul></div><a class="button button-light" href="https://wa.me/87058037275?text=Сәлеметсіз%20бе!%20Ғылыми%20зерттеу%2Fжобаға%20арналған%20жинаққа%20тапсырыс%20бергім%20келеді." target="_blank" rel="noopener">Жинаққа тапсырыс беру <span>↗</span></a>',
  '.price-list .section-heading': '<p class="eyebrow">Қызметтер құны</p><h2>Қажетті бағытты<br>таңдаңыз</h2>',
  '.prices-table': '<div class="price-row"><p>Мұғалімдерге арналған жарияланымдық ғылыми-әдістемелік мақалалар</p><strong>15 000 ₸ бастап</strong><a href="https://wa.me/87058037275?text=Сәлеметсіз%20бе!%20Ғылыми-әдістемелік%20мақалаға%20тапсырыс%20бергім%20келеді." target="_blank" rel="noopener">↗</a></div><div class="price-row"><p>Мұғалімдер мен балабақша тәрбиешілеріне арналған ғылыми-әдістемелік әзірлемелер және авторлық бағдарламалар</p><strong>100 000 ₸ бастап</strong><a href="https://wa.me/87058037275?text=Сәлеметсіз%20бе!%20Әдістемелік%20әзірлемеге%20немесе%20авторлық%20бағдарламаға%20тапсырыс%20бергім%20келеді." target="_blank" rel="noopener">↗</a></div><div class="price-row"><p>Курстық және дипломдық жұмыстар</p><strong>100 000 ₸ бастап</strong><a href="https://wa.me/87058037275?text=Сәлеметсіз%20бе!%20Курстық%20немесе%20дипломдық%20жұмыс%20бойынша%20баға%20білгім%20келеді." target="_blank" rel="noopener">↗</a></div><div class="price-row"><p>Антиплагиатқа тексеру</p><strong>сұраныс бойынша</strong><a href="https://wa.me/87058037275?text=Сәлеметсіз%20бе!%20Жұмысты%20антиплагиатқа%20тексергім%20келеді." target="_blank" rel="noopener">↗</a></div>',
  '.price-note': 'Қорытынды құны тақырыпқа, көлемге, талаптарға және жеделдікке байланысты. Нақты есептеу үшін WhatsApp-қа жазыңыз.',
  '.about > div:first-child': '<p class="eyebrow">Тәсіл туралы</p><h2>Мазмұнға назар.<br>Әр бөлшектегі айқындық.</h2>',
  '.about-text': '<p>Материалдар тақырып, мақсат және талаптарды ескере отырып дайындалады. Қажет болған жағдайда негізгі жұмысқа презентация, сөйлеу мәтіні және қорғауға арналған құжаттар қосылады.</p><div class="benefits"><span>Жеке<br>тәсіл</span><span>Мерзімдерді<br>келісу</span><span>Тапсырыстың<br>құпиялылығы</span></div>',
  '.process': '<p class="eyebrow">Тапсырысты қалай рәсімдеуге болады</p><div class="process-grid"><div><b>01</b><h3>Жазыңыз</h3><p>WhatsApp арқылы хабарласыңыз.</p></div><div><b>02</b><h3>Тапсырманы сипаттаңыз</h3><p>Тақырыпты, талаптарды және мерзімді жіберіңіз.</p></div><div><b>03</b><h3>Бөлшектерді келісіңіз</h3><p>Бағасы мен жұмыс форматын нақтылаңыз.</p></div><div><b>04</b><h3>Материалды алыңыз</h3><p>Дайын нәтиже келісілген мерзімде.</p></div></div>',
  '.order > div': '<p class="eyebrow">Сұрақтарыңыз қалды ма?</p><h2>Тапсырмаңызды<br>WhatsApp-та талқылайық</h2><p>Қандай қызмет керек екенін жазыңыз, тақырып пен мерзімді көрсетіп, талаптар болса тіркеңіз.</p>',
  '.order > a': 'WhatsApp-қа жазу <span>↗</span>',
  'footer .brand': 'ҒЫЛЫМИ<br><span>БАҒЫТ</span>',
  'footer p': 'Ғылыми және әдістемелік материалдар'
};

Object.keys(kazakhContent).forEach(selector => {
  const element = document.querySelector(selector);
  if (element) russianContent.set(selector, element.innerHTML);
});

function setLanguage(language) {
  const isKazakh = language === 'kk';
  document.documentElement.lang = isKazakh ? 'kk' : 'ru';
  document.title = isKazakh ? 'Ғылыми және әдістемелік материалдар' : 'Научные и методические материалы';
  Object.keys(kazakhContent).forEach(selector => {
    const element = document.querySelector(selector);
    if (element) element.innerHTML = isKazakh ? kazakhContent[selector] : russianContent.get(selector);
  });
  languageButton.textContent = isKazakh ? 'Русский' : 'Қазақша';
  languageButton.setAttribute('aria-label', isKazakh ? 'Открыть русскую версию' : 'Қазақша нұсқасын ашу');
  languageButton.setAttribute('aria-pressed', String(isKazakh));
}

languageButton?.addEventListener('click', () => {
  setLanguage(document.documentElement.lang === 'kk' ? 'ru' : 'kk');
});
