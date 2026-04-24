import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!

// Geo-targeting logic
const urlParams = new URLSearchParams(window.location.search);
const geo = urlParams.get('geo') || '';
const geoTitle = geo.charAt(0).toUpperCase() + geo.slice(1);

const heroTitle = geo 
  ? `${geoTitle} без VPN. Твой интернет теперь работает «как раньше».`
  : `eSIM без VPN. Твой интернет за границей теперь работает «как раньше».`;

const botLink = 'https://t.me/emedeoworld_bot?start=795056847';

app.innerHTML = `
  <header class="header container">
    <div style="display: flex; align-items: center; gap: 12px;">
      <img src="https://static.tildacdn.pro/tild3061-6465-4639-b733-316463616337/homelogo.svg" alt="eMEDEO" class="logo">
    </div>
    <div class="desktop-only">
      <a href="${botLink}" class="btn-header">
        <svg style="width: 18px; height: 18px; margin-right: 8px;" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/></svg>
        Открыть Telegram
      </a>
    </div>
  </header>

  <main>
    <!-- HERO SECTION -->
    <section class="hero container">
      <div class="hero-grid reveal">
        <div class="location-tag">
          <svg style="width: 18px; height: 18px; color: var(--accent-color);" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
          Доступно в аэропортах (Шереметьево)
        </div>
        <h1 class="hero-title">
          ${heroTitle}
        </h1>
        <p class="hero-subtitle">
          Прямой доступ к YouTube, Instagram и всем заблокированным сервисам. Без VPN, без потери скорости, без блокировок. Оплата картами РФ.
        </p>

        <div style="display: flex; gap: 16px; align-items: center; justify-content: center; flex-wrap: wrap; margin-bottom: 32px;">
          <a href="${botLink}" class="btn-primary" style="min-width: 280px;">
            <svg style="width: 24px; height: 24px; margin-right: 12px;" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/></svg>
            Подключить eSIM
          </a>
          <div class="desktop-only glass" style="padding: 10px; border-radius: 16px; background: white;">
            <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(botLink)}" alt="QR Code" style="width: 60px; height: 60px; display: block;">
          </div>
        </div>
        
        <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
          <div class="trust-badge">YouTube 4K</div>
          <div class="trust-badge">Instagram</div>
          <div class="trust-badge">ChatGPT</div>
        </div>
      </div>
    </section>

    <!-- RF MARKET HIGHLIGHTS -->
    <section style="background: var(--panel-bg); border-top: 1px solid var(--panel-border); border-bottom: 1px solid var(--panel-border);">
      <div class="container">
        <h2 class="section-title">Идеально для РФ</h2>
        <div class="audience-grid">
          <div class="feature-item reveal">
            <div style="margin-bottom: 16px; color: var(--accent-color);">
              <svg style="width: 32px; height: 32px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
            </div>
            <h4 style="margin-bottom: 12px;">Без VPN</h4>
            <p>Забытые сервисы работают «из коробки». Не нужно ничего включать и платить за сторонние подписки.</p>
          </div>
          <div class="feature-item reveal">
            <div style="margin-bottom: 16px; color: #00B050;">
              <svg style="width: 32px; height: 32px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            <h4 style="margin-bottom: 12px;">Без блокировок</h4>
            <p>Банковские приложения и госпорталы работают стабильно через прямой и чистый интернет-канал.</p>
          </div>
          <div class="feature-item reveal">
            <div style="margin-bottom: 16px; color: var(--accent-color);">
              <svg style="width: 32px; height: 32px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>
            </div>
            <h4 style="margin-bottom: 12px;">Полная скорость</h4>
            <p>Прямое соединение с местными операторами по всему миру без "прокладок" и тормозов.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- TRAVELER FOCUS SECTION -->
    <section class="container">
      <div class="hero-grid reveal">
        <h2 class="section-title" style="margin-bottom: 24px;">Забудьте про роуминг</h2>
        <p style="font-size: 1.2rem; color: var(--text-secondary); margin-bottom: 40px; max-width: 700px; margin-inline: auto;">
          Никаких очередей за SIM-картами и языковых барьеров. Будьте на связи сразу по приземлении. Экономия до 10 раз по сравнению с обычными тарифами.
        </p>
        <div style="display: flex; flex-direction: column; gap: 20px; align-items: center;">
          <div style="display: flex; gap: 12px; align-items: center; padding: 12px 24px; background: var(--panel-bg); border-radius: 12px; width: 100%; max-width: 400px;">
            <svg style="width: 24px; height: 24px; color: #00B050;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <span style="font-weight: 500;">Активация за 1 минуту через Telegram</span>
          </div>
          <div style="display: flex; gap: 12px; align-items: center; padding: 12px 24px; background: var(--panel-bg); border-radius: 12px; width: 100%; max-width: 400px;">
            <svg style="width: 24px; height: 24px; color: #00B050;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
            <span style="font-weight: 500;">Поддержка 24/7 на русском языке</span>
          </div>
        </div>
      </div>
    </section>

    <!-- B2C AUDIENCE -->
    <section style="background: var(--panel-bg);">
      <div class="container">
        <h2 class="section-title">Для кого eMEDEO?</h2>
        <div class="audience-grid">
          <div class="audience-card glass reveal">
            <div style="margin-bottom: 20px; color: var(--accent-color);">
              <svg style="width: 40px; height: 40px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 2L11 13"></path><path d="M22 2L15 22L11 13L2 9L22 2Z"></path></svg>
            </div>
            <h3>Путешественники</h3>
            <p>Покупайте пакет интернета еще до вылета и будьте на связи сразу по приземлении.</p>
          </div>
          <div class="audience-card glass reveal">
            <div style="margin-bottom: 20px; color: var(--accent-color);">
              <svg style="width: 40px; height: 40px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
            </div>
            <h3>Digital Nomads</h3>
            <p>Сохраняйте домашний номер для банковских SMS, а интернет используйте с eSIM.</p>
          </div>
          <div class="audience-card glass reveal">
            <div style="margin-bottom: 20px; color: var(--accent-color);">
              <svg style="width: 40px; height: 40px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline></svg>
            </div>
            <h3>Предприниматели</h3>
            <p>Разделяйте личные и рабочие контакты на одном смартфоне без лишних SIM-слотов.</p>
          </div>
          <div class="audience-card glass reveal">
            <div style="margin-bottom: 20px; color: var(--accent-color);">
              <svg style="width: 40px; height: 40px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="7"></circle><polyline points="12 9 12 12 13.5 13.5"></polyline><path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.84a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83a2 2 0 0 1 2-1.82h4.32a2 2 0 0 1 2 1.82l.35 3.83"></path></svg>
            </div>
            <h3>Smart-устройства</h3>
            <p>Подключайте Apple Watch, планшеты и ноутбуки к сети без физических SIM-карт.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- B2B / IoT SECTION -->
    <section class="container">
      <h2 class="section-title">B2B и IoT решения</h2>
      <div class="audience-grid">
        <div class="feature-item reveal">
          <div style="margin-bottom: 16px; color: var(--accent-color);">
            <svg style="width: 32px; height: 32px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
          </div>
          <h4 style="color: var(--accent-color); margin-bottom: 12px;">Логистика</h4>
          <p>Отслеживание международного автопарка без замены SIM-карт на каждой границе.</p>
        </div>
        <div class="feature-item reveal">
          <div style="margin-bottom: 16px; color: var(--accent-color);">
            <svg style="width: 32px; height: 32px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>
          </div>
          <h4 style="color: var(--accent-color); margin-bottom: 12px;">Умные устройства</h4>
          <p>Встраивание связи в счетчики, вендинг и системы безопасности по всему миру.</p>
        </div>
      </div>
    </section>

    <!-- HOW IT WORKS -->
    <section style="background: var(--panel-bg); border-top: 1px solid var(--panel-border);">
      <div class="container">
        <h2 class="section-title">Как это работает?</h2>
        <div class="audience-grid">
          <div class="feature-item reveal" style="text-align: center;">
            <div style="font-size: 2rem; font-weight: 800; color: var(--accent-color); margin-bottom: 16px;">01</div>
            <h4>Выбери страну</h4>
            <p>В боте доступно более 190 стран и гибкие пакеты трафика.</p>
          </div>
          <div class="feature-item reveal" style="text-align: center;">
            <div style="font-size: 2rem; font-weight: 800; color: #00B050; margin-bottom: 16px;">02</div>
            <h4>Оплати в рублях</h4>
            <p>Любой картой РФ или через СБП. Мгновенная выдача eSIM.</p>
          </div>
          <div class="feature-item reveal" style="text-align: center;">
            <div style="font-size: 2rem; font-weight: 800; color: var(--accent-color); margin-bottom: 16px;">03</div>
            <h4>Активируй QR</h4>
            <p>Сканируй код из Telegram и пользуйся интернетом сразу.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FINAL CTA -->
    <section style="text-align: center; padding: 100px 0;">
      <div class="container reveal">
        <h2 style="font-size: clamp(2.2rem, 6vw, 3.5rem); margin-bottom: 32px;">Готов к свободе?</h2>
        <p class="hero-subtitle">Присоединяйся к тысячам пользователей, которые выбрали будущее без VPN.</p>
        <div style="margin-top: 40px; display: flex; justify-content: center; flex-wrap: wrap; gap: 20px;">
          <a href="${botLink}" class="btn-primary" style="padding: 20px 60px; font-size: 1.2rem; width: 100%; max-width: 400px;">
            <svg style="width: 24px; height: 24px; margin-right: 12px;" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/></svg>
            Запустить @emedeoworld_bot
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
            <li><a href="${botLink}">Тарифы</a></li>
            <li><a href="${botLink}">Поддержка</a></li>
          </ul>
        </div>
        <div>
          <h4 style="margin-bottom: 24px;">Контакты</h4>
          <ul class="footer-links">
            <li><a href="${botLink}">Telegram Бот</a></li>
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

// Telegram Deep Link Logic (Optimized for VK and mobile browsers)
document.querySelectorAll('a[href*="t.me"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    if (link instanceof HTMLAnchorElement && link.href.includes('t.me')) {
      const isVK = /VKWebview|VK_APP/i.test(navigator.userAgent);
      
      // On VK, we prefer direct t.me link as tg:// is often blocked
      if (isVK) {
        // Just let it follow the link normally, but ensure it opens in a way that can trigger the app
        return; 
      }

      e.preventDefault();
      const url = new URL(link.href);
      const botDomain = url.pathname.slice(1);
      const botParams = url.search;
      
      // Construct native tg:// link
      // For links with parameters (like ?start=...), tg://resolve?domain=...&start=... is used
      const tgLink = `tg://resolve?domain=${botDomain}${botParams.replace('?', '&')}`;
      
      // Attempt to launch the app
      window.location.href = tgLink;
      
      // Fallback to web link after a short delay if the app didn't open
      setTimeout(() => {
        window.location.href = link.href;
      }, 1000);
    }
  });
});
