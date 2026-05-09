<?php $crew = $crew ?? []; ?>

<!-- ====== HERO ====== -->
<section class="hero" id="hero">
    <div class="hero-overlay"></div>
    <div class="hero-particles" id="particles"></div>
    <div class="hero-content">
        <div class="hero-badge">Est. 1997 · East Blue</div>
        <h1 class="hero-title">
            <span class="line1">STRAW HAT</span>
            <span class="line2">PIRATES</span>
        </h1>
        <div class="hero-divider">
            <span class="divider-line"></span>
            <span class="skull-icon">☠</span>
            <span class="divider-line"></span>
        </div>
        <p class="hero-tagline">"I'm gonna be King of the Pirates!"<br><em>— Monkey D. Luffy</em></p>
        <div class="hero-btns">
            <a href="#crew" class="btn btn-gold">Meet the Crew</a>
            <a href="#gallery-section" class="btn btn-outline">Gallery</a>
        </div>
    </div>
    <div class="hero-scroll-indicator">
        <span>SCROLL</span>
        <div class="scroll-line"></div>
    </div>
</section>

<!-- ====== ABOUT ====== -->
<section class="about" id="about">
    <div class="about-bg-text">NAKAMA</div>
    <div class="about-container">
        <div class="section-label">About Us</div>
        <h2 class="section-title">The Straw Hat <span class="gold">Crew</span></h2>
        <div class="about-grid">
            <div class="about-card">
                <div class="about-icon"><i class="fas fa-skull-crossbones"></i></div>
                <h3>Our Flag</h3>
                <p>The Straw Hat Jolly Roger — a skull wearing a straw hat. Feared across all four seas and the Grand Line.</p>
            </div>
            <div class="about-card">
                <div class="about-icon"><i class="fas fa-ship"></i></div>
                <h3>Thousand Sunny</h3>
                <p>Our beloved ship, built by Franky using Adam Wood. She has sailed every sea and survived every storm.</p>
            </div>
            <div class="about-card">
                <div class="about-icon"><i class="fas fa-star"></i></div>
                <h3>Our Dream</h3>
                <p>To find the One Piece. To sail to the end of the Grand Line. To make every nakama's dream come true.</p>
            </div>
            <div class="about-card">
                <div class="about-icon"><i class="fas fa-users"></i></div>
                <h3>10 Nakama</h3>
                <p>From East Blue to the New World — 10 pirates, 10 dreams, one unbreakable bond of friendship.</p>
            </div>
        </div>
    </div>
</section>

<!-- ====== CREW SECTION ====== -->
<section class="crew-section" id="crew">
    <div class="crew-bg"></div>
    <div class="section-label" style="text-align:center; color: var(--gold);">The Nakama</div>
    <h2 class="section-title" style="text-align:center;">Meet Our <span class="gold">Pirates</span></h2>
    <p class="section-subtitle">Click on a crew member to view their full profile & gallery</p>

    <div class="crew-grid">
        <?php foreach ($crew as $index => $member): ?>
        <div class="crew-card" onclick="openModal(<?= $index ?>)" style="--accent: <?= $member['warna'] ?>">
            <div class="crew-card-img">
                <img src="assets/images/<?= $member['gambar'] ?>" alt="<?= $member['nama'] ?>" loading="lazy">
                <div class="crew-card-overlay">
                    <span class="view-label"><i class="fas fa-eye"></i> View Profile</span>
                </div>
            </div>
            <div class="crew-card-body">
                <div class="crew-role"><?= $member['peran'] ?></div>
                <h3 class="crew-name"><?= $member['nama'] ?></h3>
                <div class="crew-bounty"><i class="fas fa-coins"></i> <?= $member['bounty'] ?></div>
            </div>
            <div class="crew-card-glow"></div>
        </div>
        <?php endforeach; ?>
    </div>
</section>

<!-- ====== GALLERY SECTION ====== -->
<section class="gallery-section" id="gallery-section">
    <div class="gallery-bg"></div>
    <div class="section-label" style="text-align:center; color: var(--red);">Gallery</div>
    <h2 class="section-title" style="text-align:center;">Straw Hat <span class="gold">Gallery</span></h2>
    <p class="section-subtitle">A collection of our greatest adventures across the seas</p>
    <div class="gallery-filter">
        <button class="filter-btn active" data-filter="all">All Crew</button>
        <?php foreach ($crew as $index => $m): ?>
        <button class="filter-btn" data-filter="<?= $index ?>"><?= explode(' ', $m['nama'])[count(explode(' ', $m['nama']))-1] ?></button>
        <?php endforeach; ?>
    </div>
    <div class="gallery-grid" id="galleryGrid">
        <?php foreach ($crew as $index => $member): ?>
            <?php foreach ($member['galeri'] as $gImg): ?>
            <div class="gallery-item" data-member="<?= $index ?>" onclick="openGalleryModal('assets/images/<?= $gImg ?>', '<?= htmlspecialchars($member['nama']) ?>')">
                <img src="assets/images/<?= $gImg ?>" alt="<?= $member['nama'] ?>" loading="lazy">
                <div class="gallery-item-overlay">
                    <span><?= $member['nama'] ?></span>
                    <i class="fas fa-expand"></i>
                </div>
            </div>
            <?php endforeach; ?>
        <?php endforeach; ?>
    </div>
</section>

<!-- ====== JOIN SECTION ====== -->
<section class="join-section" id="join">
    <div class="join-overlay"></div>
    <div class="join-container">
        <div class="section-label" style="color: var(--gold);">Join the Crew</div>
        <h2 class="join-title">Ready to Set Sail?</h2>
        <p class="join-subtitle">Leave your mark on the Grand Line. Sign up and become part of the Straw Hat legend.</p>
        <form class="join-form" onsubmit="handleJoin(event)">
            <div class="form-row">
                <input type="text" placeholder="Your Name" required>
                <input type="email" placeholder="Your Email" required>
            </div>
            <div class="form-row">
                <select required>
                    <option value="" disabled selected>Choose Your Role</option>
                    <option>Kapten</option>
                    <option>Ahli Pedang</option>
                    <option>Navigator</option>
                    <option>Penembak Jitu</option>
                    <option>Koki</option>
                    <option>Dokter</option>
                    <option>Arkeolog</option>
                    <option>Shipwright</option>
                    <option>Musisi</option>
                    <option>Helmsman</option>
                </select>
                <input type="text" placeholder="Your Hometown">
            </div>
            <textarea placeholder="Why do you want to join the Straw Hat Pirates?"></textarea>
            <button type="submit" class="btn btn-gold btn-full">
                <i class="fas fa-anchor"></i> Join the Crew
            </button>
        </form>
    </div>
</section>

<!-- ====== CREW MODAL ====== -->
<div class="modal-overlay" id="crewModal" onclick="closeModal(event)">
    <div class="modal-box" id="modalBox">
        <button class="modal-close" onclick="closeModalBtn()"><i class="fas fa-times"></i></button>
        <div class="modal-left" id="modalLeft">
            <div class="modal-img-main">
                <img id="modalMainImg" src="" alt="">
            </div>
            <div class="modal-img-gallery" id="modalGalleryThumbs"></div>
        </div>
        <div class="modal-right" id="modalRight">
            <div class="modal-role" id="modalRole"></div>
            <h2 class="modal-name" id="modalName"></h2>
            <div class="modal-divider"></div>
            <p class="modal-bio" id="modalBio"></p>
            <div class="modal-stats" id="modalStats"></div>
        </div>
    </div>
</div>

<!-- ====== GALLERY LIGHTBOX ====== -->
<div class="lightbox" id="lightbox" onclick="closeLightbox(event)">
    <button class="lightbox-close" onclick="closeLightboxBtn()"><i class="fas fa-times"></i></button>
    <div class="lightbox-content">
        <img id="lightboxImg" src="" alt="">
        <div class="lightbox-caption" id="lightboxCaption"></div>
    </div>
</div>

<!-- ====== SUCCESS TOAST ====== -->
<div class="toast" id="toast">
    <i class="fas fa-anchor"></i>
    <span>Welcome to the crew, nakama! ⚓</span>
</div>

<?php
// Pass crew data to JS
$crewJson = json_encode($crew, JSON_UNESCAPED_UNICODE);
?>
<script>
const CREW_DATA = <?= $crewJson ?>;
</script>
