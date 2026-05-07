<template>
  <div class="contact-page">

    <!-- HERO -->
    <section class="hero">
      <div class="overlay"></div>

      <div class="hero-content">
        <h1>CONTACT US</h1>

        <p>
          REBELLIONS SYNDICATE • Brotherhood • Loyalty • Respect
        </p>
      </div>
    </section>

    <!-- CONTACT SECTION -->
    <section class="contact-container">

      <!-- LEFT -->
      <div class="contact-info">

        <h2>GET IN TOUCH</h2>

        <p>
          Jika ingin mengenal lebih dekat tentang Rebellions Syndicate,
          mengikuti kegiatan komunitas, ataupun bergabung bersama kami,
          silakan hubungi melalui sosial media dan kontak di bawah ini.
        </p>

        <!-- CARD -->
        <div class="contact-card">
          <div class="contact-icon">
            <i class="fas fa-location-dot"></i>
          </div>

          <div>
            <h3>Location</h3>
            <p>Pekanbaru, Riau, Indonesia</p>
          </div>
        </div>

        <!-- INSTAGRAM -->
        <a 
          href="https://www.instagram.com/rebellionssyndicate_/" 
          target="_blank"
          class="contact-card social-link"
        >
          <div class="contact-icon">
            <i class="fab fa-instagram"></i>
          </div>

          <div>
            <h3>Instagram</h3>
            <p>@rebellionssyndicate_</p>
          </div>
        </a>

        <!-- TIKTOK -->
        <a 
          href="https://www.tiktok.com/@rebellions.syndic?is_from_webapp=1&sender_device=pc/" 
          target="_blank"
          class="contact-card social-link"
        >
          <div class="contact-icon">
            <i class="fab fa-tiktok"></i>
          </div>

          <div>
            <h3>Tiktok</h3>
            <p>@rebellionssyndicate_</p>
          </div>
        </a>

        <!-- WHATSAPP -->
        <a 
          href="https://wa.me/6282385687535" 
          target="_blank"
          class="contact-card wa-card"
        >
          <div class="contact-icon">
            <i class="fab fa-whatsapp"></i>
          </div>

          <div>
            <h3>WhatsApp</h3>
            <p>+62 823-8568-7535</p>
          </div>
        </a>        

          <!-- EMAIL -->
          <a 
            href="mailto:rebellionssydicate5@gmail.com"
            class="contact-card social-link"
          >
            <div class="contact-icon">
              <i class="fas fa-envelope"></i>
            </div>

            <div>
              <h3>Email</h3>
              <p>rebellionssydicate5@gmail.com</p>
            </div>
          </a>
      </div>

      <!-- RIGHT -->
      <div class="contact-image">
        <img src="../assets/rebel1.jpg" alt="contact" />
      </div>

    </section>

    <!-- SOCIAL -->
    <section class="social-section">

      <h2>FOLLOW OUR SOCIAL MEDIA</h2>

      <div class="social-grid">

        <!-- INSTAGRAM -->
        <div class="social-card">
          <div class="social-icon instagram">
            <i class="fab fa-instagram"></i>
          </div>

          <h3>Instagram</h3>

          <p>
            Dokumentasi kegiatan, touring, gathering,
            dan aktivitas komunitas terbaru.
          </p>
        </div>

        <!-- TIKTOK -->
        <div class="social-card">
          <div class="social-icon tiktok">
            <i class="fab fa-tiktok"></i>
          </div>

          <h3>TikTok</h3>

          <p>
            Video riding, cinematic komunitas,
            dan berbagai konten menarik lainnya.
          </p>
        </div>

        <!-- WHATSAPP -->
        <div class="social-card">
          <div class="social-icon whatsapp">
            <i class="fab fa-whatsapp"></i>
          </div>

          <h3>WhatsApp</h3>

          <p>
            Hubungi admin komunitas untuk informasi,
            pendaftaran member, dan kegiatan terbaru.
          </p>
          <p>+62 823-8568-7535</p>
        </div>

      </div>

    </section>

    <!-- QUOTE -->
    <section class="quote-section">
      <h2>
        “ We Are Not Just A Community, <br>
        We Are Family On The Road ”
      </h2>
    </section>

  </div>
</template>

<style scoped>

/* ===== PAGE ===== */
.contact-page {
  width: 100%;
  min-height: 100vh;
  background: #0f0f0f;
  color: white;
}

/* ===== HERO ===== */
.hero {
  position: relative;
  width: 100%;
  height: 65vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url('../assets/rebel1.jpg');
  background-size: cover;
  background-position: center;
}

.overlay {
  position: absolute;
  inset: 0;

  background: linear-gradient(
    180deg,
    rgba(0,0,0,0.5),
    rgba(0,0,0,0.9)
  );
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
}

.hero-content h1 {
  font-size: 58px;
  font-weight: 900;
  letter-spacing: 6px;
  margin-bottom: 15px;

  text-shadow: 0 0 20px rgba(226,215,151,0.3);
}

.hero-content p {
  color: rgb(226, 215, 151);
  letter-spacing: 4px;
}

/* ===== CONTACT ===== */
.contact-container {
  display: flex;
  align-items: center;
  gap: 60px;

  padding: 90px 70px;
}

/* LEFT */
.contact-info {
  flex: 1;
}

.contact-info h2 {
  font-size: 38px;
  color: rgb(226,215,151);
  margin-bottom: 25px;
  letter-spacing: 3px;
}

.contact-info p {
  color: #d7d7d7;
  line-height: 1.9;
}

/* CARD */
.contact-card {
  display: flex;
  align-items: center;
  gap: 20px;

  margin-top: 20px;

  padding: 20px;

  border-radius: 16px;

  background: rgba(255,255,255,0.03);

  border: 1px solid rgba(255,255,255,0.05);

  transition: 0.4s ease;
}
.social-link {
  text-decoration: none;
  color: white;
}

.contact-card:hover {
  transform: translateX(8px);

  background: rgba(226,215,151,0.05);

  border-color: rgba(226,215,151,0.15);
}

/* ICON */
.contact-icon {
  min-width: 65px;
  height: 65px;

  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  background: rgb(226,215,151);

  color: black;

  font-size: 28px;
}

/* RIGHT IMAGE */
.contact-image img {
  width: 420px;
  height: 540px;

  object-fit: cover;

  border-radius: 20px;

  box-shadow: 0 0 35px rgba(0,0,0,0.7);

  transition: 0.4s ease;
}

.contact-image img:hover {
  transform: scale(1.03);
}

/* ===== SOCIAL ===== */
.social-section {
  padding: 20px 70px 90px;
}

.social-section h2 {
  text-align: center;
  font-size: 36px;
  color: rgb(226,215,151);

  margin-bottom: 50px;
}

/* GRID */
.social-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px,1fr));

  gap: 30px;
}

/* CARD */
.social-card {
  padding: 35px;

  border-radius: 20px;

  text-align: center;

  background: rgba(255,255,255,0.03);

  border: 1px solid rgba(255,255,255,0.05);

  transition: 0.4s ease;
}

.social-card:hover {
  transform: translateY(-10px);
}

/* ICON */
.social-icon {
  width: 90px;
  height: 90px;

  margin: 0 auto 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;

  background: rgb(226,215,151);

  color: black;

  font-size: 40px;

  transition: 0.4s ease;
}

.social-card:hover .social-icon {
  transform: rotate(10deg) scale(1.1);
}

/* TEXT */
.social-card h3 {
  color: rgb(226,215,151);
  margin-bottom: 10px;
}

.social-card p {
  color: #d0d0d0;
  line-height: 1.8;
}

/* ===== QUOTE ===== */
.quote-section {
  text-align: center;
  padding: 20px 20px 100px;
}

.quote-section h2 {
  color: rgb(226,215,151);

  font-size: 34px;

  line-height: 1.8;

  font-style: italic;
}

/* ===== RESPONSIVE ===== */
@media (max-width: 900px) {

  .contact-container {
    flex-direction: column;
    padding: 70px 25px;
  }

  .contact-image img {
    width: 100%;
    height: auto;
  }

  .hero-content h1 {
    font-size: 36px;
  }

  .social-section {
    padding: 20px;
  }
}

</style>