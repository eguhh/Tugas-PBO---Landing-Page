'use strict';

/**
 * =========================================================
 *  BELITUNG ISLAND TOURISM — OOP JavaScript Architecture
 *  Fully mapped to real uploaded assets
 * =========================================================
 */

/* ── Utility Helper ──────────────────────────────────────── */
class Utils {
  static qs(selector, scope = document) { return scope.querySelector(selector); }
  static qsa(selector, scope = document) { return [...scope.querySelectorAll(selector)]; }
  static create(tag, attrs = {}) {
    const el = document.createElement(tag);
    Object.entries(attrs).forEach(([k, v]) => {
      if (k === 'class') el.className = v;
      else if (k === 'html') el.innerHTML = v;
      else el.setAttribute(k, v);
    });
    return el;
  }
  static delay(n) { return (n * 0.12) + 's'; }
}

/* ── Data Models ─────────────────────────────────────────── */
class Attraction {
  constructor({ id, name, location, description, image, badge, badgeColor, rating, duration, price, tags, icon }) {
    this.id = id;
    this.name = name;
    this.location = location;
    this.description = description;
    this.image = image;
    this.badge = badge;
    this.badgeColor = badgeColor;
    this.rating = rating;
    this.duration = duration;
    this.price = price;
    this.tags = tags || [];
    this.icon = icon || '🌴';
  }
}

class GalleryItem {
  constructor({ src, alt, caption, tall = false }) {
    this.src = src;
    this.alt = alt;
    this.caption = caption;
    this.tall = tall;
  }
}

class TravelTip {
  constructor({ icon, title, description }) {
    this.icon = icon;
    this.title = title;
    this.description = description;
  }
}

/* ── Database ────────────────────────────────────────────── */
class Database {

  static getBeaches() {
    return [
      new Attraction({
        id: 1,
        name: 'Pantai Tanjung Kelayang',
        location: 'Sijuk, Belitung Barat',
        description: 'Pantai legendaris dengan landmark tulisan warna-warni yang ikonik. Pusat aktivitas wisata bahari Belitung — titik start island hopping ke pulau-pulau eksotis sekitarnya.',
        image: 'images/tanjung_kelayang.jpg',
        badge: 'Paling Populer',
        badgeColor: 'badge-blue',
        rating: 4.9,
        duration: '2–5 jam',
        price: 'Rp 25.000',
        tags: ['Island Hopping', 'Snorkeling', 'Foto Ikonik'],
      }),
      new Attraction({
        id: 2,
        name: 'Pink Beach',
        location: 'Belitung Timur',
        description: 'Pantai langka dengan pasir berwarna merah muda alami, hasil campuran pecahan koral merah dengan pasir putih. Air lautnya bening toska dengan pemandangan tebing batu yang dramatis.',
        image: 'images/pink_beach.jpg',
        badge: 'Langka & Eksotis',
        badgeColor: 'badge-ocean',
        rating: 4.8,
        duration: '3–5 jam',
        price: 'Rp 30.000',
        tags: ['Pantai Unik', 'Fotografi', 'Snorkeling'],
      }),
      new Attraction({
        id: 3,
        name: 'Pulau Kepayang',
        location: 'Sijuk, Belitung',
        description: 'Pulau mungil yang dikelilingi air toska jernih dan bebatuan granit khas Belitung. Spot favorit island hopping dengan dermaga kayu tradisional dan terumbu karang yang masih alami.',
        image: 'images/kepayang_island.jpg',
        badge: 'Island Hopping',
        badgeColor: 'badge-teal',
        rating: 4.9,
        duration: 'Seharian',
        price: 'Rp 150.000',
        tags: ['Snorkeling', 'Diving', 'Drone Spot'],
      }),
    ];
  }

  static getNatureTours() {
    return [
      new Attraction({
        id: 4,
        name: 'Mangrove Harapan',
        location: 'Tanjung Binga, Belitung',
        description: 'Susuri jembatan kayu sepanjang 500 meter yang meliuk di tengah hutan mangrove lebat. Ekosistem yang kaya akan burung endemik, kepiting bakau, dan udang laut.',
        image: 'images/mangrove_harapan.jpg',
        badge: 'Alam & Edukasi',
        badgeColor: 'badge-green',
        rating: 4.7,
        duration: '1–2 jam',
        price: 'Rp 20.000',
        tags: ['Trekking', 'Birdwatching', 'Edukatif'],
        icon: '🌿',
      }),
      new Attraction({
        id: 5,
        name: 'Danau Kaolin',
        location: 'Tanjung Pandan, Belitung',
        description: 'Danau bekas tambang kaolin yang kini menjelma jadi fenomena alam menakjubkan. Air berwarna biru turquoise terang di tengah hamparan tanah putih menciptakan kontras visual yang luar biasa.',
        image: 'images/kaolin_lake.jpg',
        badge: 'Spot Foto Viral',
        badgeColor: 'badge-ocean',
        rating: 4.8,
        duration: '1–2 jam',
        price: 'Gratis',
        tags: ['Fotografi', 'Geologi Unik', 'Instagramable'],
        icon: '💧',
      }),
      new Attraction({
        id: 6,
        name: 'Belitung Wildlife Park',
        location: 'Tanjung Pandan, Belitung',
        description: 'Taman satwa liar dengan pengalaman interaktif bersama gajah Sumatera, rusa, dan berbagai satwa endemik. Aktivitas favorit keluarga — anak-anak bisa memberi makan langsung.',
        image: 'images/wildlife_park.jpg',
        badge: 'Ramah Keluarga',
        badgeColor: 'badge-teal',
        rating: 4.6,
        duration: '2–4 jam',
        price: 'Rp 50.000',
        tags: ['Gajah', 'Satwa Liar', 'Keluarga'],
        icon: '🐘',
      }),
      new Attraction({
        id: 7,
        name: 'Konservasi Penyu',
        location: 'Pantai Burung Mandi, Belitung',
        description: 'Program diving dan snorkeling bersama penyu laut yang dilindungi. Temui penyu langsung di habitat aslinya sambil berkontribusi pada pelestarian spesies yang terancam punah.',
        image: 'images/turtle_conservation.jpg',
        badge: 'Diving & Konservasi',
        badgeColor: 'badge-blue',
        rating: 4.9,
        duration: '3–5 jam',
        price: 'Rp 200.000',
        tags: ['Diving', 'Konservasi', 'Penyu Laut'],
        icon: '🐢',
      }),
    ];
  }

  static getGalleryItems() {
    return [
      new GalleryItem({ src: 'images/hero_belitung.jpg',       alt: 'Resort pantai Belitung dari udara',   caption: 'Pesona Belitung dari Udara',      tall: false }),
      new GalleryItem({ src: 'images/burung_mandi.jpg',        alt: 'Pantai Batu Burung Mandi',             caption: 'Pantai Batu Burung Mandi',        tall: true  }),
      new GalleryItem({ src: 'images/tanjung_kelayang.jpg',    alt: 'Pantai Tanjung Kelayang',              caption: 'Tanjung Kelayang',                tall: false }),
      new GalleryItem({ src: 'images/kepayang_island.jpg',     alt: 'Pulau Kepayang dari atas',             caption: 'Pulau Kepayang',                  tall: true  }),
      new GalleryItem({ src: 'images/pink_beach.jpg',          alt: 'Pink Beach pasir merah muda',          caption: 'Pink Beach Eksotis',              tall: false }),
      new GalleryItem({ src: 'images/mangrove_harapan.jpg',    alt: 'Jembatan mangrove Harapan',            caption: 'Mangrove Harapan',                tall: false }),
      new GalleryItem({ src: 'images/kaolin_lake.jpg',         alt: 'Danau kaolin biru turquoise',          caption: 'Danau Kaolin',                    tall: true  }),
      new GalleryItem({ src: 'images/wildlife_park.jpg',       alt: 'Interaksi gajah di wildlife park',     caption: 'Belitung Wildlife Park',          tall: false }),
      new GalleryItem({ src: 'images/turtle_conservation.jpg', alt: 'Menyelam bersama penyu laut',          caption: 'Konservasi Penyu',                tall: false }),
    ];
  }

  static getTravelTips() {
    return [
      new TravelTip({ icon: '✈️', title: 'Cara ke Belitung',   description: 'Penerbangan langsung dari Jakarta (CGK/HLP) ke Bandara H.A.S. Hanandjoeddin (TJQ) tersedia setiap hari, durasi ±1 jam.' }),
      new TravelTip({ icon: '🌤️', title: 'Musim Terbaik',      description: 'April–Oktober adalah waktu terbaik. Langit biru, laut tenang. Hindari November–Februari karena musim hujan lebat.' }),
      new TravelTip({ icon: '🏨', title: 'Akomodasi',           description: 'Dari homestay Rp 200rb hingga resort bintang 5. Pesan jauh hari di peak season Juli–Agustus agar tidak kehabisan.' }),
      new TravelTip({ icon: '🍜', title: 'Kuliner Wajib',       description: 'Coba Mie Belitung, Gangan Ikan Ketarap, dan Lempah Kuning. Kunjungi Warung Makan Atep untuk pengalaman kuliner lokal terbaik.' }),
      new TravelTip({ icon: '🚗', title: 'Transportasi Lokal', description: 'Sewa motor Rp 80–100rb/hari atau mobil+sopir Rp 350–500rb/hari. Tidak ada angkutan umum ke pantai, jadi sewa kendaraan wajib.' }),
      new TravelTip({ icon: '💡', title: 'Tips Hemat',          description: 'Gabung group tour island hopping agar lebih murah. Harga kapal private Rp 500rb–1jt bisa dibagi 6–10 orang.' }),
    ];
  }
}

/* ── Card Renderer ───────────────────────────────────────── */
class CardRenderer {

  renderBeachCard(attraction, index) {
    const card = Utils.create('div', { class: 'attraction-card' });
    card.style.animationDelay = Utils.delay(index);
    const tagsHtml = attraction.tags.map(t => `<span class="nature-tag">${t}</span>`).join('');
    card.innerHTML = `
      <div class="card-image">
        <img src="${attraction.image}" alt="${attraction.name}" loading="lazy" />
        <span class="card-badge ${attraction.badgeColor}">${attraction.badge}</span>
        <span class="card-rating">⭐ ${attraction.rating}</span>
      </div>
      <div class="card-body">
        <p class="card-location">📍 ${attraction.location}</p>
        <h3>${attraction.name}</h3>
        <p>${attraction.description}</p>
        <div class="nature-tag-list" style="margin-bottom:20px;">${tagsHtml}</div>
        <div class="card-footer">
          <div class="card-price">${attraction.price}<span>/orang</span></div>
          <div class="card-meta-row">
            <span class="meta-item">⏱ ${attraction.duration}</span>
            <a href="#kontak" class="card-btn">Pesan →</a>
          </div>
        </div>
      </div>`;
    return card;
  }

  renderNatureCard(attraction, index) {
    const card = Utils.create('div', { class: 'nature-card' });
    card.style.animationDelay = Utils.delay(index);
    const tagsHtml = attraction.tags.map(t => `<span class="nature-tag">${t}</span>`).join('');
    card.innerHTML = `
      <div class="nature-card-img">
        <img src="${attraction.image}" alt="${attraction.name}" loading="lazy" />
        <span class="card-badge ${attraction.badgeColor}" style="position:absolute;top:12px;left:12px;">${attraction.badge}</span>
      </div>
      <div class="nature-card-body">
        <div class="nature-icon-row">
          <span class="nature-icon-sm">${attraction.icon}</span>
          <span class="card-rating" style="background:rgba(255,255,255,0.12);color:#fff;">⭐ ${attraction.rating}</span>
        </div>
        <h3>${attraction.name}</h3>
        <p class="card-location" style="color:rgba(255,255,255,0.5);font-size:0.78rem;margin-bottom:8px;">📍 ${attraction.location}</p>
        <p>${attraction.description}</p>
        <div class="card-meta" style="margin:12px 0;">
          <span class="meta-item">⏱ ${attraction.duration}</span>
          <span class="meta-item">💰 ${attraction.price}</span>
        </div>
        <div class="nature-tag-list">${tagsHtml}</div>
      </div>`;
    return card;
  }

  renderGalleryItem(item, index) {
    const el = Utils.create('div', { class: `gallery-item${item.tall ? ' gallery-tall' : ''}` });
    el.style.animationDelay = Utils.delay(index);
    el.dataset.src = item.src;
    el.innerHTML = `
      <img src="${item.src}" alt="${item.alt}" loading="lazy" />
      <div class="gallery-item-overlay"><span>${item.caption}</span></div>`;
    return el;
  }

  renderTipCard(tip, index) {
    const card = Utils.create('div', { class: 'tip-card' });
    card.style.animationDelay = Utils.delay(index);
    card.innerHTML = `
      <div class="tip-icon">${tip.icon}</div>
      <h4>${tip.title}</h4>
      <p>${tip.description}</p>`;
    return card;
  }
}

/* ── Navigation Manager ──────────────────────────────────── */
class NavigationManager {
  constructor() {
    this.navbar    = Utils.qs('#navbar');
    this.hamburger = Utils.qs('#hamburger');
    this.navLinks  = Utils.qs('#navLinks');
    this.menuOpen  = false;
    this._bindEvents();
  }
  _bindEvents() {
    window.addEventListener('scroll', () => this._handleScroll(), { passive: true });
    this.hamburger?.addEventListener('click', () => this._toggleMenu());
    this.navLinks?.addEventListener('click', e => { if (e.target.tagName === 'A') this._closeMenu(); });
  }
  _handleScroll() {
    this.navbar.classList.toggle('scrolled', window.scrollY > 60);
  }
  _toggleMenu() {
    this.menuOpen = !this.menuOpen;
    this.navLinks.classList.toggle('open', this.menuOpen);
    document.body.style.overflow = this.menuOpen ? 'hidden' : '';
  }
  _closeMenu() {
    this.menuOpen = false;
    this.navLinks.classList.remove('open');
    document.body.style.overflow = '';
  }
}

/* ── Reveal Animation Manager ────────────────────────────── */
class RevealManager {
  constructor() {
    this.elements = Utils.qsa('.reveal');
    this._init();
  }
  _init() {
    if (!('IntersectionObserver' in window)) {
      this.elements.forEach(el => el.classList.add('visible'));
      return;
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    this.elements.forEach(el => observer.observe(el));
  }
}

/* ── Lightbox Manager ────────────────────────────────────── */
class LightboxManager {
  constructor() {
    this.lightbox = this._createLightbox();
    document.body.appendChild(this.lightbox);
    this._bindClose();
  }
  _createLightbox() {
    const lb = Utils.create('div', { class: 'lightbox', id: 'lightbox' });
    lb.innerHTML = `
      <button class="lightbox-close" id="lightboxClose">✕</button>
      <img src="" alt="" id="lightboxImg" />`;
    return lb;
  }
  _bindClose() {
    Utils.qs('#lightboxClose', this.lightbox).addEventListener('click', () => this.close());
    this.lightbox.addEventListener('click', e => { if (e.target === this.lightbox) this.close(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') this.close(); });
  }
  open(src, alt = '') {
    const img = Utils.qs('#lightboxImg', this.lightbox);
    img.src = src;
    img.alt = alt;
    this.lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  close() {
    this.lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }
  bindGalleryItems(items) {
    items.forEach(item => {
      item.addEventListener('click', () => {
        this.open(item.dataset.src, item.querySelector('img')?.alt || '');
      });
    });
  }
}

/* ── Form Manager ────────────────────────────────────────── */
class FormManager {
  constructor(formSelector) {
    this.form = Utils.qs(formSelector);
    if (this.form) this._bindEvents();
  }
  _bindEvents() {
    this.form.addEventListener('submit', e => { e.preventDefault(); this._handleSubmit(); });
  }
  _handleSubmit() {
    const btn = this.form.querySelector('button[type="submit"]');
    const orig = btn.textContent;
    btn.textContent = '✓ Pesan Terkirim!';
    btn.style.background = '#10b981';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = orig;
      btn.style.background = '';
      btn.disabled = false;
      this.form.reset();
    }, 3500);
  }
}

/* ── Smooth Scroll Manager ───────────────────────────────── */
class SmoothScrollManager {
  constructor() { this._bindLinks(); }
  _bindLinks() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', e => {
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
          e.preventDefault();
          window.scrollTo({ top: target.getBoundingClientRect().top + window.pageYOffset - 80, behavior: 'smooth' });
        }
      });
    });
  }
}

/* ── Main Application ────────────────────────────────────── */
class BelitungApp {
  constructor() {
    this.renderer = new CardRenderer();
    this._initManagers();
    this._renderAllSections();
    this._initLightbox();
  }
  _initManagers() {
    this.navManager    = new NavigationManager();
    this.revealManager = new RevealManager();
    this.formManager   = new FormManager('#contactForm');
    this.scrollManager = new SmoothScrollManager();
  }
  _renderAllSections() {
    this._render('beachCards',  Database.getBeaches(),       (a, i) => this.renderer.renderBeachCard(a, i));
    this._render('natureCards', Database.getNatureTours(),   (a, i) => this.renderer.renderNatureCard(a, i));
    this._render('galleryGrid', Database.getGalleryItems(),  (a, i) => this.renderer.renderGalleryItem(a, i));
    this._render('tipsGrid',    Database.getTravelTips(),    (a, i) => this.renderer.renderTipCard(a, i));
  }
  _render(containerId, items, renderFn) {
    const container = Utils.qs(`#${containerId}`);
    if (!container) return;
    const fragment = document.createDocumentFragment();
    items.forEach((item, i) => fragment.appendChild(renderFn(item, i)));
    container.appendChild(fragment);
  }
  _initLightbox() {
    this.lightboxManager = new LightboxManager();
    requestAnimationFrame(() => {
      this.lightboxManager.bindGalleryItems(Utils.qsa('.gallery-item'));
    });
  }
}

/* ── Boot ────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => { new BelitungApp(); });
