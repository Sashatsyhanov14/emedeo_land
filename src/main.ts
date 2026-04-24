import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!

// Geo-targeting logic
const urlParams = new URLSearchParams(window.location.search);
const geo = urlParams.get('geo') || '';
const geoTitle = geo.charAt(0).toUpperCase() + geo.slice(1);

const heroTitle = geo 
  ? `${geoTitle} без VPN. Твой интернет теперь работает «как раньше».`
  : `Забудь про VPN. Твой интернет за границей теперь работает «как раньше».`;

app.innerHTML = `
  <header class="header container">
    <div style="display: flex; align-items: center; gap: 12px;">
      <img src="https://static.tildacdn.pro/tild3061-6465-4639-b733-316463616337/homelogo.svg" alt="eMEDEO" class="logo logo-animate">
    </div>
  </header>

  <main>
    <!-- HERO SECTION -->
    <section class="hero container reveal">
      <div class="hero-content">
        <h1 class="hero-title">
          ${heroTitle}
        </h1>
        <p class="hero-subtitle">
          eSIM с прямым доступом к YouTube, Instagram и всем заблокированным сервисам. Настрой один раз и летай на 4G/5G.
        </p>

        <div class="trust-icons">
          <div class="trust-badge glass">
            <span class="icon-yt">✓</span> YouTube
          </div>
          <div class="trust-badge glass">
            <span class="icon-ig">✓</span> Instagram
          </div>
          <div class="trust-badge glass">
            <span class="icon-nf">✓</span> Netflix
          </div>
          <div class="trust-badge glass">
            <span style="color: #00f2ea;">✓</span> TikTok
          </div>
        </div>

        <div class="cta-group">
          <a href="https://t.me/emedeo_bot" class="btn-primary">
            <svg style="width: 24px; height: 24px; margin-right: 12px;" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/></svg>
            Запустить в Telegram
          </a>
          
          <div class="desktop-only qr-badge">
            <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://t.me/emedeo_bot" alt="QR Code" style="width: 58px; height: 58px; border-radius: 4px;">
            <span style="font-size: 0.65rem; color: var(--text-secondary); font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Наведи камеру</span>
          </div>
        </div>
        <p class="hero-footer-text">Бот подберет тариф под твой бюджет за 15 секунд.</p>
      </div>
    </section>

    <!-- FEATURES SECTION -->
    <section style="background: var(--panel-bg);">
      <div class="container">
        <h2 class="section-title">Как работает</h2>
        <div class="features-grid">
          <div class="feature-card glass reveal">
            <div class="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path></svg>
            </div>
            <h3>Свобода без костылей</h3>
            <p>Все приложения открываются сразу. Не нужно включать/выключать VPN и платить за него отдельно.</p>
          </div>
          <div class="feature-card glass reveal">
            <div class="feature-icon" style="color: #00B050;">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            </div>
            <h3>Доступ к банкам</h3>
            <p>Твои банковские приложения и госпорталы работают без ошибок. Никаких блокировок из-за подозрительного VPN-трафика.</p>
          </div>
          <div class="feature-card glass reveal">
            <div class="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
            </div>
            <h3>Честная скорость</h3>
            <p>Получай максимум от местных сетей. Прямой канал без "прокладок" и тормозов.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- STEPS SECTION -->
    <section class="container">
      <h2 class="section-title">Инструкция</h2>
      <div class="steps-container">
        <div class="step-item reveal">
          <div class="step-number">1</div>
          <div>
            <h3>Выбери страну</h3>
            <p>У нас покрытие в 190+ странах мира.</p>
          </div>
        </div>
        <div class="step-item reveal">
          <div class="step-number" style="background: #00B050; box-shadow: 0 8px 16px rgba(0, 176, 80, 0.2);">2</div>
          <div>
            <h3>Оплати в рублях</h3>
            <p>Любой российской картой или СБП. Никаких зарубежных счетов не нужно.</p>
          </div>
        </div>
        <div class="step-item reveal">
          <div class="step-number">3</div>
          <div>
            <h3>Получи eSIM</h3>
            <p>QR-код придет в Telegram мгновенно. Активируй и пользуйся.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FINAL CTA -->
    <section class="final-cta">
      <div class="container reveal">
        <h2 class="hero-title" style="margin-bottom: 24px;">Готов лететь?</h2>
        <p class="hero-subtitle">Присоединяйся к тысячам путешественников, которые уже забыли про VPN.</p>
        <a href="https://t.me/emedeo_bot" class="btn-primary" style="padding: 20px 64px; font-size: 1.2rem;">
          Запустить в Telegram
        </a>
      </div>
    </section>
  </main>

  <footer class="footer">
    <div class="container footer-content">
      <div style="opacity: 0.6;">
        <img src="https://static.tildacdn.pro/tild3061-6465-4639-b733-316463616337/homelogo.svg" alt="eMEDEO" style="height: 32px;">
      </div>
      <p style="color: var(--text-secondary); text-align: center; max-width: 400px; font-size: 0.9rem;">
        Надежная eSIM для путешествий по всему миру. Прямой доступ к интернету без VPN.
      </p>
      <div style="margin-top: 16px; font-size: 0.9rem; color: var(--text-secondary);">
        &copy; ${new Date().getFullYear()} eMEDEO. Все права защищены.
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

// VK Bridge Logic (Telegram Deep Link Anti-block)
document.querySelectorAll('a.btn-primary').forEach((link) => {
  link.addEventListener('click', (e) => {
    if (link instanceof HTMLAnchorElement && link.href.includes('t.me')) {
      e.preventDefault();
      
      // Extract bot domain
      const url = new URL(link.href);
      const botDomain = url.pathname.slice(1);
      
      // Construct native tg:// link
      const tgLink = `tg://resolve?domain=${botDomain}`;
      
      // 1. Try launching the native app
      window.location.href = tgLink;
      
      // 2. Fallback to the web link if the app didn't launch
      setTimeout(() => {
        window.location.href = link.href;
      }, 1500);
    }
  });
});
