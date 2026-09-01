const icons = {
  instagram: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/></svg>',
  tiktok: '<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 1 1-2.59-2.59c.27 0 .53.04.78.12V9.77a5.76 5.76 0 0 0-.78-.05 5.66 5.66 0 1 0 5.66 5.66V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3a4.3 4.3 0 0 1-2.62-1.48Z"/></svg>',
  x: '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.58-6.64 7.58H.47l8.6-9.83L0 1.15h7.59l5.24 6.93 6.07-6.93Zm-1.29 19.5h2.04L6.49 3.24H4.3l13.31 17.41Z"/></svg>',
  discord: '<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M20.32 4.37a19.8 19.8 0 0 0-4.89-1.52.07.07 0 0 0-.08.04c-.21.38-.44.87-.6 1.25a18.3 18.3 0 0 0-5.5 0 12.6 12.6 0 0 0-.61-1.25.08.08 0 0 0-.08-.04 19.7 19.7 0 0 0-4.88 1.52.07.07 0 0 0-.04.03C.53 9.05-.32 13.58.1 18.06a.08.08 0 0 0 .03.05 19.9 19.9 0 0 0 6 3.03.08.08 0 0 0 .08-.03c.46-.63.87-1.3 1.22-2a.08.08 0 0 0-.04-.11 13 13 0 0 1-1.87-.9.08.08 0 0 1-.01-.13c.13-.1.25-.19.37-.29a.07.07 0 0 1 .08-.01c3.93 1.8 8.18 1.8 12.06 0a.07.07 0 0 1 .08.01c.12.1.24.2.37.29a.08.08 0 0 1-.01.13c-.6.35-1.22.64-1.87.9a.08.08 0 0 0-.04.1c.36.71.77 1.38 1.22 2a.08.08 0 0 0 .08.04 19.8 19.8 0 0 0 6.02-3.04.08.08 0 0 0 .03-.05c.5-5.18-.84-9.68-3.55-13.66a.06.06 0 0 0-.03-.03ZM8.02 15.33c-1.18 0-2.16-1.08-2.16-2.42 0-1.33.96-2.42 2.16-2.42 1.21 0 2.18 1.1 2.16 2.42 0 1.34-.96 2.42-2.16 2.42Zm7.97 0c-1.18 0-2.15-1.08-2.15-2.42 0-1.33.95-2.42 2.15-2.42 1.22 0 2.18 1.1 2.16 2.42 0 1.34-.94 2.42-2.16 2.42Z"/></svg>',
  pinterest: '<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M12 0a12 12 0 0 0-4.37 23.17c-.1-.94-.2-2.4.04-3.44l1.4-5.96s-.36-.72-.36-1.78c0-1.67.97-2.92 2.17-2.92 1.03 0 1.52.77 1.52 1.7 0 1.03-.66 2.58-1 4.01-.28 1.2.6 2.18 1.78 2.18 2.14 0 3.78-2.25 3.78-5.5 0-2.87-2.06-4.88-5.01-4.88-3.41 0-5.42 2.56-5.42 5.2 0 1.03.4 2.13.89 2.73a.36.36 0 0 1 .08.35l-.33 1.32c-.05.22-.18.26-.4.16-1.5-.7-2.44-2.89-2.44-4.65 0-3.78 2.75-7.25 7.92-7.25 4.16 0 7.39 2.96 7.39 6.93 0 4.13-2.6 7.45-6.22 7.45-1.21 0-2.36-.63-2.75-1.38l-.75 2.84c-.27 1.04-1 2.35-1.49 3.15A12 12 0 1 0 12 0Z"/></svg>',
  youtube: '<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19C0 8.07 0 12 0 12s0 3.93.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.81ZM9.55 15.57V8.43L15.82 12l-6.27 3.57Z"/></svg>',
  github: '<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M12 .3a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .3Z"/></svg>',
  telegram: '<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M11.94 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm5.87 8.17-1.96 9.26c-.15.66-.54.82-1.1.51l-3-2.21-1.45 1.4c-.16.16-.3.3-.6.3l.2-3.02 5.5-4.97c.24-.2-.05-.32-.37-.11l-6.8 4.28-2.93-.92c-.63-.2-.65-.63.14-.93l11.44-4.41c.53-.19 1 .13.83.82Z"/></svg>',
  whatsapp: '<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.44-.53.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.07 2.9 1.22 3.1.15.2 2.1 3.2 5.1 4.49.71.3 1.27.49 1.7.63.72.23 1.37.2 1.88.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35ZM12.05 21.8h-.01a9.84 9.84 0 0 1-5-1.37l-.36-.21-3.74.98 1-3.65-.24-.37a9.82 9.82 0 0 1-1.51-5.25c0-5.44 4.43-9.87 9.88-9.87a9.8 9.8 0 0 1 6.98 2.9 9.8 9.8 0 0 1 2.89 6.99c0 5.44-4.43 9.87-9.87 9.87ZM20.13 3.5A11.8 11.8 0 0 0 12.05 0C5.5 0 .16 5.33.16 11.9c0 2.1.55 4.14 1.59 5.94L.06 24l6.31-1.65a11.9 11.9 0 0 0 5.68 1.44h.01c6.55 0 11.89-5.33 11.89-11.9 0-3.18-1.24-6.16-3.49-8.4Z"/></svg>',
  globe: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z"/></svg>'
};

function render() {
  document.title = config.pageTitle || "Profile";

  /* avatar */
  const wrap = document.getElementById('pfpWrap');
  if (config.avatar.image) {
    wrap.innerHTML = `<img src="${config.avatar.image}" alt="Profile picture" class="pfp" id="pfp">`;
  } else {
    wrap.innerHTML = `<div class="pfp" id="pfp">${config.avatar.emoji}</div>`;
  }

  document.getElementById('username').textContent = config.username;
  document.getElementById('bio').textContent = config.bio;

  /* sosyal butonlar */
  document.getElementById('socials').innerHTML = (config.socials || []).map(s => {
    const icon = icons[s.icon] || icons.globe;
    return `<a href="${s.url}" target="_blank" rel="noopener" class="social-btn" title="${s.name}">
      ${icon}<span>${s.name}</span></a>`;
  }).join('');

  /* sözler */
  const mottoEl = document.getElementById('motto');
  const mottos = config.mottos || [];
  if (mottos.length) {
    mottoEl.textContent = mottos[0];
    if (mottos.length > 1) {
      mottoEl.style.cursor = 'pointer';
      mottoEl.title = 'Click to change';
      mottoEl.addEventListener('click', () => {
        let next;
        do { next = Math.floor(Math.random() * mottos.length); }
        while (mottos[next] === mottoEl.textContent);
        mottoEl.style.transition = 'opacity .25s';
        mottoEl.style.opacity = 0;
        setTimeout(() => {
          mottoEl.textContent = mottos[next];
          mottoEl.style.opacity = 1;
        }, 250);
      });
    }
  } else {
    mottoEl.closest('.motto-box').style.display = 'none';
  }

  /* alt bilgi */
  const parts = [];
  if (config.email) parts.push(`<a href="mailto:${config.email}" class="footer-link">&#9993; ${config.email}</a>`);
  if (config.location) parts.push(`<span class="footer-link">${config.location}</span>`);
  if (config.year) parts.push(`<span class="footer-link">&copy; ${config.year}</span>`);
  document.getElementById('footer').innerHTML =
    parts.join('<span class="footer-sep">&bull;</span>');
}

render();

/* ---------- tema ---------- */
const root = document.documentElement;
const themeBtn = document.getElementById('themeBtn');
const mqDark = window.matchMedia('(prefers-color-scheme: dark)');

function currentTheme() {
  return localStorage.getItem('theme') || (mqDark.matches ? 'dark' : 'light');
}

function applyTheme() {
  const t = currentTheme();
  root.setAttribute('data-theme', t);
  themeBtn.textContent = t === 'dark' ? '☀' : '☾';
}

themeBtn.addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', next);
  applyTheme();
});

mqDark.addEventListener('change', () => {
  if (!localStorage.getItem('theme')) applyTheme();
});

applyTheme();

