<footer class="footer">
    <div class="footer-inner">
        <div class="footer-brand">
            <div class="footer-skull">☠</div>
            <h3>STRAW HAT PIRATES</h3>
            <p>Sailing for the One Piece since the East Blue.<br>Luffy's Crew — feared and loved across all seas.</p>
        </div>
        <div class="footer-links-col">
            <h4>Navigation</h4>
            <ul>
                <li><a href="#hero">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#crew">Crew</a></li>
                <li><a href="#gallery-section">Gallery</a></li>
                <li><a href="#join">Join Us</a></li>
            </ul>
        </div>
        <div class="footer-links-col">
            <h4>The Crew</h4>
            <ul>
                <li>Monkey D. Luffy</li>
                <li>Roronoa Zoro</li>
                <li>Nami</li>
                <li>Usopp</li>
                <li>Sanji</li>
                <li>Tony Tony Chopper</li>
                <li>Nico Robin</li>
                <li>Franky</li>
                <li>Brook</li>
                <li>Jinbei</li>
            </ul>
        </div>
        <div class="footer-links-col">
            <h4>Our Ship</h4>
            <p>⚓ Thousand Sunny</p>
            <p>🌊 Grand Line & New World</p>
            <p>☠ Jolly Roger: Straw Hat Skull</p>
            <div class="footer-social">
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-youtube"></i></a>
            </div>
        </div>
    </div>
    <div class="footer-bottom">
        <p>© 2026 Straw Hat Pirates · One Piece · All Rights Reserved | Built with ❤ for Nakama</p>
    </div>
</footer>

<script>
/* ===== NAVBAR SCROLL ===== */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
});

/* ===== MOBILE NAV TOGGLE ===== */
document.getElementById('navToggle').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('open');
});

/* ===== PARTICLES (hero) ===== */
const particleContainer = document.getElementById('particles');
if (particleContainer) {
    for (let i = 0; i < 40; i++) {
        const p = document.createElement('div');
        p.classList.add('particle');
        p.style.cssText = `
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            width: ${Math.random() * 4 + 2}px;
            height: ${Math.random() * 4 + 2}px;
            animation-delay: ${Math.random() * 6}s;
            animation-duration: ${Math.random() * 4 + 4}s;
        `;
        particleContainer.appendChild(p);
    }
}

/* ===== SCROLL REVEAL ===== */
const revealEls = document.querySelectorAll('.crew-card, .about-card, .gallery-item');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, 60 * (Array.from(revealEls).indexOf(entry.target) % 6));
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });
revealEls.forEach(el => observer.observe(el));

/* ===== CREW MODAL ===== */
function openModal(index) {
    const m = CREW_DATA[index];
    const modal = document.getElementById('crewModal');

    document.getElementById('modalMainImg').src = 'assets/images/' + m.gambar;
    document.getElementById('modalRole').textContent = m.peran;
    document.getElementById('modalName').textContent = m.nama;
    document.getElementById('modalBio').textContent = m.bio;

    // thumbnails
    const thumbContainer = document.getElementById('modalGalleryThumbs');
    thumbContainer.innerHTML = '';
    // main image thumb
    const mainThumb = document.createElement('img');
    mainThumb.src = 'assets/images/' + m.gambar;
    mainThumb.classList.add('thumb', 'active-thumb');
    mainThumb.onclick = () => switchMainImg('assets/images/' + m.gambar, mainThumb);
    thumbContainer.appendChild(mainThumb);
    // gallery thumbs
    m.galeri.forEach(g => {
        const img = document.createElement('img');
        img.src = 'assets/images/' + g;
        img.classList.add('thumb');
        img.onclick = () => switchMainImg('assets/images/' + g, img);
        thumbContainer.appendChild(img);
    });

    // stats
    const stats = document.getElementById('modalStats');
    stats.innerHTML = `
        <div class="stat"><span class="stat-label">Asal</span><span class="stat-value">${m.asal}</span></div>
        <div class="stat"><span class="stat-label">Bounty</span><span class="stat-value gold-text">${m.bounty}</span></div>
        <div class="stat"><span class="stat-label">Buah Iblis</span><span class="stat-value">${m.buah}</span></div>
        <div class="stat"><span class="stat-label">Mimpi</span><span class="stat-value">${m.mimpi}</span></div>
    `;

    document.getElementById('modalBox').style.setProperty('--accent', m.warna);
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function switchMainImg(src, thumb) {
    document.getElementById('modalMainImg').src = src;
    document.querySelectorAll('.thumb').forEach(t => t.classList.remove('active-thumb'));
    thumb.classList.add('active-thumb');
}

function closeModalBtn() {
    document.getElementById('crewModal').classList.remove('active');
    document.body.style.overflow = '';
}

function closeModal(e) {
    if (e.target.id === 'crewModal') closeModalBtn();
}

/* ===== GALLERY FILTER ===== */
const filterBtns = document.querySelectorAll('.filter-btn');
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;
        document.querySelectorAll('.gallery-item').forEach(item => {
            if (filter === 'all' || item.dataset.member === filter) {
                item.style.display = 'block';
                item.classList.remove('visible');
                setTimeout(() => item.classList.add('visible'), 50);
            } else {
                item.style.display = 'none';
            }
        });
    });
});

/* ===== GALLERY LIGHTBOX ===== */
function openGalleryModal(src, name) {
    document.getElementById('lightboxImg').src = src;
    document.getElementById('lightboxCaption').textContent = name;
    document.getElementById('lightbox').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightboxBtn() {
    document.getElementById('lightbox').classList.remove('active');
    document.body.style.overflow = '';
}

function closeLightbox(e) {
    if (e.target.id === 'lightbox') closeLightboxBtn();
}

/* ===== JOIN FORM ===== */
function handleJoin(e) {
    e.preventDefault();
    const toast = document.getElementById('toast');
    toast.classList.add('show');
    e.target.reset();
    setTimeout(() => toast.classList.remove('show'), 3500);
}

/* ===== KEYBOARD ESC ===== */
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModalBtn();
        closeLightboxBtn();
    }
});
</script>
</body>
</html>
