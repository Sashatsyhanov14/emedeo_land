import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!

// Geo-targeting logic
const urlParams = new URLSearchParams(window.location.search);
const geo = urlParams.get('geo') || '';
const geoTitle = geo.charAt(0).toUpperCase() + geo.slice(1);

const heroTitle = geo 
  ? `${geoTitle} без VPN. Твой интернет теперь работает «как раньше».`
  : `eSIM без VPN. Твой интернет за границей теперь работает «как раньше».`;

app.innerHTML = `
  <header class="header container">
    <div style="display: flex; align-items: center; gap: 12px;">
      <img src="https://static.tildacdn.pro/tild3061-6465-4639-b733-316463616337/homelogo.svg" alt="eMEDEO" class="logo">
    </div>
    <div class="desktop-only">
      <a href="https://t.me/emedeo_bot" class="btn-primary" style="padding: 12px 24px; font-size: 0.9rem;">Запустить бота</a>
    </div>
  </header>

  <main>
    <!-- HERO SECTION -->
    <section class="hero container">
      <div class="hero-grid">
        <div class="hero-content reveal">
          <div class="location-tag">
            <span>📍</span> Работает в аэропортах (Шереметьево и др.)
          </div>
          <h1 class="hero-title">
            ${heroTitle}
          </h1>
          <p class="hero-subtitle">
            Прямой доступ к YouTube, Instagram и всем заблокированным сервисам. Без VPN, без потери скорости, без блокировок. Оплата картами РФ.
          </p>

          <div class="cta-group" style="display: flex; gap: 20px; align-items: center;">
            <a href="https://t.me/emedeo_bot" class="btn-primary">
              <svg style="width: 24px; height: 24px; margin-right: 12px;" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/></svg>
              Подключить eSIM
            </a>
            <div class="desktop-only qr-code-box">
              <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://t.me/emedeo_bot" alt="QR Code" style="width: 80px; height: 80px;">
            </div>
          </div>
          
          <div class="trust-badges" style="margin-top: 40px;">
            <div class="trust-badge">YouTube 4K</div>
            <div class="trust-badge">Instagram</div>
            <div class="trust-badge">ChatGPT</div>
            <div class="trust-badge">Netflix</div>
          </div>
        </div>
        <div class="hero-image-container reveal">
          <img src="/hero.png" alt="eSIM Technology" class="hero-main-img">
        </div>
      </div>
    </section>

    <!-- RF MARKET HIGHLIGHTS -->
    <section style="background: var(--bg-secondary);">
      <div class="container">
        <h2 class="section-title">Идеально для пользователей из РФ</h2>
        <div class="features-list">
          <div class="feature-item reveal">
            <h4>Без VPN</h4>
            <p>Забытые сервисы работают «из коробки». Не нужно ничего включать и платить за сторонние подписки.</p>
          </div>
          <div class="feature-item reveal" style="border-color: var(--accent-secondary);">
            <h4>Без блокировок</h4>
            <p>Ваши банковские приложения и госпорталы работают стабильно, так как вы используете чистый трафик.</p>
          </div>
          <div class="feature-item reveal">
            <h4>Полная скорость</h4>
            <p>Никаких ограничений и «прокладок». Прямое соединение с местными операторами по всему миру.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- TRAVELER FOCUS SECTION -->
    <section style="background: linear-gradient(90deg, var(--bg-color) 0%, var(--bg-secondary) 100%);">
      <div class="container b2b-grid" style="grid-template-columns: 1.2fr 0.8fr;">
        <div class="reveal">
          <span class="tag" style="color: var(--accent-secondary); margin-bottom: 16px; display: block;">#1 Приоритет</span>
          <h2 style="font-size: clamp(2.5rem, 5vw, 3.5rem); margin-bottom: 24px;">Идеально для путешественников</h2>
          <p style="font-size: 1.2rem; color: var(--text-secondary); margin-bottom: 32px;">
            Забудьте о поиске физических SIM-карт в аэропортах и языковом барьере. С eMEDEO вы на связи сразу по приземлении в Шереметьево, Стамбуле или любой другой точке мира.
          </p>
          <ul class="footer-links" style="margin-bottom: 32px; font-size: 1.1rem;">
            <li style="display: flex; gap: 12px; align-items: center; margin-bottom: 16px;">
              <span style="color: var(--accent-secondary);">✓</span> Экономия на роуминге до 10 раз
            </li>
            <li style="display: flex; gap: 12px; align-items: center; margin-bottom: 16px;">
              <span style="color: var(--accent-secondary);">✓</span> Активация за 60 секунд через Telegram
            </li>
            <li style="display: flex; gap: 12px; align-items: center;">
              <span style="color: var(--accent-secondary);">✓</span> Поддержка 24/7 на русском языке
            </li>
          </ul>
        </div>
        <div class="reveal">
          <img src="/traveler.png" alt="Traveler in Airport" class="b2b-image" style="border-radius: 40px;">
        </div>
      </div>
    </section>

    <!-- B2C AUDIENCE -->
    <section class="container">
      <h2 class="section-title">Для кого еще eMEDEO?</h2>
      <div class="audience-grid">
        <div class="audience-card glass reveal">
          <span class="tag">Самый горячий сегмент</span>
          <div class="card-icon">✈️</div>
          <h3>Путешественники</h3>
          <p>Экономьте на роуминге. Покупайте пакет интернета еще до вылета и будьте на связи сразу по приземлении.</p>
        </div>
        <div class="audience-card glass reveal">
          <span class="tag">Свобода</span>
          <div class="card-icon">💻</div>
          <h3>Цифровые кочевники</h3>
          <p>Сохраняйте домашний номер для банковских SMS, а интернет используйте с дешевого местного eSIM-профиля.</p>
        </div>
        <div class="audience-card glass reveal">
          <span class="tag">Бизнес</span>
          <div class="card-icon">💼</div>
          <h3>Предприниматели</h3>
          <p>Разделяйте личные и рабочие контакты на одном устройстве. Публикуйте рабочие номера без риска для личного.</p>
        </div>
        <div class="audience-card glass reveal">
          <span class="tag">Гаджеты</span>
          <div class="card-icon">⌚</div>
          <h3>Владельцы Smart-устройств</h3>
          <p>Подключайте Apple Watch, планшеты и ноутбуки к сети без физических SIM-карт. Автономная связь везде.</p>
        </div>
        <div class="audience-card glass reveal">
          <span class="tag">Инновации</span>
          <div class="card-icon">🚀</div>
          <h3>Техно-энтузиасты</h3>
          <p>Пользуйтесь передовыми технологиями. Для новых флагманов без слота SIM — это единственный стандарт.</p>
        </div>
        <div class="audience-card glass reveal">
          <span class="tag">Поездки</span>
          <div class="card-icon">👔</div>
          <h3>Командировочные</h3>
          <p>Надежная связь в деловых поездках. Бесперебойный доступ к корпоративным ресурсам без VPN.</p>
        </div>
      </div>
    </section>

    <!-- B2B / IoT SECTION -->
    <section class="b2b-section reveal">
      <div class="container b2b-grid">
        <div>
          <img src="/b2b.png" alt="B2B IoT" class="b2b-image">
        </div>
        <div>
          <h2 style="font-size: 3rem; margin-bottom: 24px;">B2B и Интернет вещей (IoT)</h2>
          <div style="display: flex; flex-direction: column; gap: 32px;">
            <div>
              <h4 style="color: var(--accent-color);">Логистические компании</h4>
              <p style="color: var(--text-secondary);">Отслеживание международного автопарка. GPS-трекеры с eSIM автоматически переключаются между странами без замены карт.</p>
            </div>
            <div>
              <h4 style="color: var(--accent-color);">IoT-решения</h4>
              <p style="color: var(--text-secondary);">Встраивайте связь в умные счетчики, вендинг и каршеринг. Удаленное управление профилями и защита от вандализма.</p>
            </div>
            <a href="https://t.me/emedeo_bot" class="btn-primary" style="align-self: flex-start;">Запросить решение</a>
          </div>
        </div>
      </div>
    </section>

    <!-- HOW IT WORKS -->
    <section class="container">
      <h2 class="section-title">Как это работает?</h2>
      <div class="features-list">
        <div class="feature-item reveal" style="border-color: #3b82f6;">
          <h4 style="font-size: 1.5rem;">01. Выбери тариф</h4>
          <p>В боте доступно более 190 стран и гибкие пакеты трафика.</p>
        </div>
        <div class="feature-item reveal" style="border-color: #10b981;">
          <h4 style="font-size: 1.5rem;">02. Оплати в рублях</h4>
          <p>Любой картой РФ или через СБП. Мгновенная обработка платежа.</p>
        </div>
        <div class="feature-item reveal" style="border-color: #3b82f6;">
          <h4 style="font-size: 1.5rem;">03. Активируй eSIM</h4>
          <p>Сканируй QR-код из Telegram и пользуйся интернетом сразу.</p>
        </div>
      </div>
    </section>

    <!-- FINAL CTA -->
    <section style="text-align: center; padding: 120px 0;">
      <div class="container reveal">
        <h2 style="font-size: clamp(2.5rem, 6vw, 4rem); margin-bottom: 32px;">Готов к свободе?</h2>
        <p class="hero-subtitle" style="margin-inline: auto;">Присоединяйся к тысячам пользователей, которые выбрали будущее без VPN.</p>
        <div style="margin-top: 48px;">
          <a href="https://t.me/emedeo_bot" class="btn-primary" style="padding: 24px 80px; font-size: 1.4rem;">
            Запустить бота в Telegram
          </a>
        </div>
      </div>
    </section>
  </main>

  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <img src="https://static.tildacdn.pro/tild3061-6465-4639-b733-316463616337/homelogo.svg" alt="eMEDEO" style="height: 40px; margin-bottom: 24px;">
          <p style="color: var(--text-secondary);">Премиальный сервис eSIM для тех, кто ценит скорость и свободу без VPN.</p>
        </div>
        <div>
          <h4 style="margin-bottom: 24px;">Навигация</h4>
          <ul class="footer-links">
            <li><a href="#">Главная</a></li>
            <li><a href="https://t.me/emedeo_bot">Тарифы</a></li>
            <li><a href="https://t.me/emedeo_bot">Поддержка</a></li>
          </ul>
        </div>
        <div>
          <h4 style="margin-bottom: 24px;">Контакты</h4>
          <ul class="footer-links">
            <li><a href="https://t.me/emedeo_bot">Telegram Бот</a></li>
            <li><a href="#">Email: support@emedeo.com</a></li>
          </ul>
        </div>
      </div>
      <div style="border-top: 1px solid var(--panel-border); padding-top: 40px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 20px;">
        <p style="color: var(--text-secondary); font-size: 0.9rem;">&copy; ${new Date().getFullYear()} eMEDEO. Все права защищены.</p>
        <div style="display: flex; gap: 24px;">
          <a href="#" style="color: var(--text-secondary); font-size: 0.9rem; text-decoration: none;">Privacy Policy</a>
          <a href="#" style="color: var(--text-secondary); font-size: 0.9rem; text-decoration: none;">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
`

// Intersection Observer for reveal animations
const observerOptions = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Telegram Deep Link Logic
document.querySelectorAll('a[href*="t.me"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    if (link instanceof HTMLAnchorElement && link.href.includes('t.me')) {
      e.preventDefault();
      const url = new URL(link.href);
      const botDomain = url.pathname.slice(1);
      const tgLink = `tg://resolve?domain=${botDomain}`;
      window.location.href = tgLink;
      setTimeout(() => {
        window.location.href = link.href;
      }, 1500);
    }
  });
});
