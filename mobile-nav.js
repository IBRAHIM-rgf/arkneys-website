/* Arkneys — correctifs mobile (menu burger + grilles qui s'empilent) */
(function () {
  // 1) Styles du menu mobile
  var css = ''
    + '.ark-burger{display:none;background:none;border:none;color:var(--ark-text,#e7eef7);'
    + 'font-size:24px;line-height:1;cursor:pointer;padding:6px 10px;margin-right:2px}'
    + '@media (max-width:980px){'
    + '  .ark-burger{display:inline-flex;align-items:center;justify-content:center}'
    + '  .ark-nav-links{display:none}'
    + '  .ark-nav.ark-open .ark-nav-links{display:flex!important;flex-direction:column;gap:0;'
    + '    position:fixed;top:58px;left:0;right:0;background:rgba(8,12,20,0.98);'
    + '    -webkit-backdrop-filter:blur(14px);backdrop-filter:blur(14px);'
    + '    border-bottom:1px solid rgba(125,211,252,0.18);padding:6px 20px 16px;'
    + '    z-index:59;box-shadow:0 18px 44px rgba(0,0,0,0.5)}'
    + '  .ark-nav.ark-open .ark-nav-links .ark-nav-link{padding:16px 2px;'
    + '    border-bottom:1px solid rgba(125,211,252,0.12);font-size:14px;width:100%;'
    + '    text-transform:uppercase;letter-spacing:0.06em}'
    + '  .ark-nav.ark-open .ark-nav-links .ark-nav-link:last-child{border-bottom:none}'
    + '}';
  var st = document.createElement('style');
  st.textContent = css;
  document.head.appendChild(st);

  function init() {
    var nav = document.querySelector('.ark-nav');
    if (nav && !nav.querySelector('.ark-burger')) {
      var host = nav.querySelector('.ark-nav-right') || nav;
      var btn = document.createElement('button');
      btn.className = 'ark-burger';
      btn.setAttribute('aria-label', 'Menu');
      btn.innerHTML = '☰'; /* ☰ */
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        var open = nav.classList.toggle('ark-open');
        btn.innerHTML = open ? '✕' : '☰'; /* ✕ / ☰ */
      });
      host.insertBefore(btn, host.firstChild);

      // Fermer le menu quand on clique un lien
      nav.querySelectorAll('.ark-nav-links .ark-nav-link').forEach(function (l) {
        l.addEventListener('click', function () {
          nav.classList.remove('ark-open');
          btn.innerHTML = '☰';
        });
      });

      // "Agents IA" est un menu déroulant au survol : sur mobile, on le rend cliquable
      var ag = nav.querySelector('.ark-nav-link[data-megamenu="agents"]');
      if (ag) {
        ag.style.cursor = 'pointer';
        ag.addEventListener('click', function () {
          if (window.innerWidth <= 980) { window.location.href = 'agents.html'; }
        });
      }
    }
    fixGrids();
  }

  // 2) Empiler les grilles multi-colonnes sur petit écran
  function fixGrids() {
    var mobile = window.innerWidth <= 760;
    var grids = document.querySelectorAll('main div[style*="grid-template-columns"]');
    grids.forEach(function (d) {
      var cols = d.style.gridTemplateColumns || '';
      var multi = /repeat\(\s*[2-9]/.test(cols) || cols.trim().split(/\s+/).length >= 2;
      if (!multi) return;
      if (mobile) {
        if (!d.dataset.ogCols) { d.dataset.ogCols = cols; }
        d.style.gridTemplateColumns = '1fr';
      } else if (d.dataset.ogCols) {
        d.style.gridTemplateColumns = d.dataset.ogCols;
      }
    });
  }

  var t;
  window.addEventListener('resize', function () { clearTimeout(t); t = setTimeout(fixGrids, 150); });

  if (document.readyState !== 'loading') { init(); }
  else { document.addEventListener('DOMContentLoaded', init); }
})();
