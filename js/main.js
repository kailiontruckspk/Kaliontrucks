// ---- header on scroll ----
function initHeader(){
  const header = document.getElementById('siteHeader');
  if(!header) return;
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 30);
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();
}

// ---- mobile nav ----
function initMobileNav(){
  const burger = document.getElementById('burgerBtn');
  const nav = document.getElementById('mobileNav');
  const closeBtn = document.getElementById('mobileNavClose');
  if(!burger || !nav) return;
  const openNav = () => { nav.classList.add('open'); document.body.classList.add('nav-open'); };
  const closeNav = () => { nav.classList.remove('open'); document.body.classList.remove('nav-open'); };
  burger.addEventListener('click', openNav);
  burger.addEventListener('touchend', function(e){ e.preventDefault(); openNav(); });
  if(closeBtn){
    closeBtn.addEventListener('click', closeNav);
    closeBtn.addEventListener('touchend', function(e){ e.preventDefault(); closeNav(); });
  }
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeNav));
}

// ---- scroll reveal ----
function initReveal(){
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
  }, {threshold:0.15});
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
}

// ---- render truck grid (services.html) ----
function renderTruckGrid(containerId, filterCategory){
  const el = document.getElementById(containerId);
  if(!el || typeof TRUCKS === 'undefined') return;
  const list = filterCategory && filterCategory !== 'All'
    ? TRUCKS.filter(t => t.category === filterCategory)
    : TRUCKS;
  el.innerHTML = list.map((t,i) => `
    <a class="truck-card reveal ${i%3===1?'rd1':i%3===2?'rd2':''}" href="truck.html?id=${encodeURIComponent(t.id)}">
      <div class="thumb">
        <span class="cat">${t.category}</span>
        <img src="${t.thumb || t.image}" alt="${t.name}" loading="lazy">
      </div>
      <div class="body">
        <h4>${t.name}</h4>
        <div class="cn">${t.nameCn || ''}</div>
        ${t.specs && t.specs.length ? '<span class="specbadge">Full specs available →</span>' : '<span class="tag">Spec sheet coming soon</span>'}
      </div>
    </a>
  `).join('');
  initReveal();
}

// ---- filter tabs (services.html) ----
function initFilters(containerId, gridId){
  const wrap = document.getElementById(containerId);
  if(!wrap) return;
  wrap.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      wrap.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderTruckGrid(gridId, btn.dataset.cat);
    });
  });
}

// ---- truck detail page ----
function renderTruckDetail(){
  const el = document.getElementById('truckDetail');
  if(!el || typeof TRUCKS === 'undefined') return;
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const truck = TRUCKS.find(t => t.id === id) || TRUCKS[0];
  document.title = truck.name + ' — Kailion Trucks';

  const specsHtml = (truck.specs && truck.specs.length)
    ? `<table class="spec-table">${truck.specs.map(s => `<tr><td>${s[0]}</td><td>${s[1]}</td></tr>`).join('')}</table>`
    : `<p class="sec-p" style="margin-top:20px;">Full spec sheet for this unit hasn't been added yet — <a href="contact.html" style="color:var(--blue); font-weight:600;">contact us</a> for detailed parameters.</p>`;

  const featuresHtml = (truck.features && truck.features.length)
    ? `<ul class="feature-list">${truck.features.map(f => `<li>${f}</li>`).join('')}</ul>` : '';

  const priceHtml = truck.price
    ? `<div class="price-tag">${truck.price}</div>${truck.priceNote ? `<div class="price-note">${truck.priceNote}</div>` : ''}`
    : `<div class="pill">Contact for pricing</div>`;

  el.innerHTML = `
    <div class="wrap">
      <div class="detail-crumb"><a href="index.html">Home</a> / <a href="services.html">Fleet</a> / ${truck.name}</div>
      <div class="detail-grid">
        <div class="detail-photo reveal in"><img src="${truck.image}" alt="${truck.name}"></div>
        <div class="reveal in">
          <div class="kicker">${truck.category}</div>
          <h1 style="font-size:clamp(26px,4vw,42px); font-weight:800; line-height:1.1; letter-spacing:-0.5px;">${truck.name}</h1>
          <div style="color:var(--muted); font-size:15px; margin-top:6px;">${truck.nameCn || ''}</div>
          <p class="sec-p" style="margin-top:18px;">${truck.summary || ''}</p>
          ${priceHtml}
          ${featuresHtml}
          ${specsHtml}
        </div>
      </div>
    </div>
  `;

  // related trucks (same category)
  const relEl = document.getElementById('relatedTrucks');
  if(relEl){
    const rel = TRUCKS.filter(t => t.category === truck.category && t.id !== truck.id).slice(0,4);
    relEl.innerHTML = rel.map(t => `
      <a class="truck-card reveal" href="truck.html?id=${encodeURIComponent(t.id)}">
        <div class="thumb"><span class="cat">${t.category}</span><img src="${t.thumb || t.image}" alt="${t.name}" loading="lazy"></div>
        <div class="body"><h4>${t.name}</h4><div class="cn">${t.nameCn || ''}</div></div>
      </a>
    `).join('');
  }
  initReveal();
}

// ---- hero image slider (index.html) ----
function initHeroSlider(){
  const root = document.getElementById('heroSlider');
  if(!root) return;
  const slides = root.querySelectorAll('.slide');
  const dots = root.querySelectorAll('.dot-ind');
  if(slides.length < 2) return;
  let i = 0;
  function go(n){
    slides[i].classList.remove('active');
    if(dots[i]) dots[i].classList.remove('active');
    i = (n + slides.length) % slides.length;
    slides[i].classList.add('active');
    if(dots[i]) dots[i].classList.add('active');
  }
  let timer = setInterval(() => go(i+1), 4500);
  dots.forEach((d, idx) => d.addEventListener('click', () => { go(idx); clearInterval(timer); timer = setInterval(() => go(i+1), 4500); }));
}

document.addEventListener('DOMContentLoaded', () => {
  try{ initHeader(); }catch(e){ console.error('header init failed', e); }
  try{ initMobileNav(); }catch(e){ console.error('mobile nav init failed', e); }
  try{ initReveal(); }catch(e){ console.error('reveal init failed', e); }
  try{ initHeroSlider(); }catch(e){ console.error('hero slider init failed', e); }
});
