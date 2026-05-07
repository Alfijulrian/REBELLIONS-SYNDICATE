<template>
  <div class="activity-page">

    <!-- HERO -->
    <section class="hero">

      <div class="overlay"></div>

      <div class="hero-content">
        <h1>ACTIVITY</h1>
        <p>REBELLIONS SYNDICATE</p>
      </div>

    </section>

    <!-- INTRO -->
    <section class="intro">

      <h2>KEGIATAN KOMUNITAS</h2>

      <p>
        Rebellions Syndicate aktif dalam berbagai kegiatan komunitas,
        mulai dari touring, gathering, anniversary, hingga kegiatan sosial.
        Setiap aktivitas menjadi bagian dari perjalanan untuk memperkuat
        solidaritas, persaudaraan, dan loyalitas antar anggota.
      </p>

    </section>

    <!-- TOURING SECTION -->
    <section class="activity-section">

      <!-- FOTO -->
      <div class="activity-image">
        <img src="../assets/foto5.jpeg" alt="touring" />
      </div>

      <!-- TEXT -->
      <div class="activity-text">

        <h3>TOURING</h3>

        <p>
          Touring menjadi salah satu kegiatan utama dalam komunitas ini.
          Melalui perjalanan bersama, setiap anggota dapat merasakan
          kebersamaan, kekompakan, dan pengalaman yang tidak terlupakan.
        </p>

        <p>
          Setiap perjalanan bukan hanya tentang tujuan,
          tetapi tentang proses, cerita, dan solidaritas
          yang tumbuh di setiap kilometer perjalanan.
        </p>

      </div>

    </section>

    <!-- EVENT SECTION -->
    <section class="activity-section reverse">

      <!-- FOTO -->
      <div class="activity-image">
        <img src="../assets/foto6.jpeg" alt="event" />
      </div>

      <!-- TEXT -->
      <div class="activity-text">

        <h3>EVENT & GATHERING</h3>

        <p>
          Rebellions Syndicate juga aktif mengikuti berbagai event otomotif,
          gathering komunitas, dan kegiatan anniversary bersama komunitas lain.
        </p>

        <p>
          Kegiatan ini menjadi ajang mempererat hubungan,
          memperluas relasi, dan memperkenalkan identitas komunitas
          kepada masyarakat luas.
        </p>

      </div>

    </section>

    <!-- BANNER -->
    <section class="banner">

      <img src="../assets/foto10.jpeg" alt="banner activity" />

      <div class="banner-text">
        <h2>ONE ROAD • ONE FAMILY</h2>

        <p>
          Bersama di jalan, tumbuh dalam persaudaraan.
        </p>
      </div>

    </section>

    <!-- GALLERY -->
    <section class="gallery">

      <div class="gallery-item">
        <img src="../assets/foto9.jpeg" alt="gallery 1" />
        <p>Night Ride bersama seluruh member komunitas.</p>
      </div>

      <div class="gallery-item">
        <img src="../assets/foto6.jpeg" alt="gallery 2" />
        <p>Kegiatan kebersamaan dan solidaritas komunitas.</p>
      </div>

      <div class="gallery-item">
        <img src="../assets/foto8.jpeg" alt="gallery 3" />
        <p>Perjalanan touring menuju berbagai daerah.</p>
      </div>

    </section>

    <!-- CLOSING -->
    <section class="closing">

      <h2>BE HUMBLE STAY REBEL</h2>

      <p>
        Setiap aktivitas yang dilakukan bukan hanya sekadar kegiatan komunitas,
        tetapi juga menjadi simbol loyalitas, persaudaraan,
        dan perjalanan panjang Rebellions Syndicate.
      </p>

    </section>

  </div>
</template>

<style>
/* ===== PAGE ===== */
.activity-page {
  width: 100%;
  min-height: 100vh;

  background: #0f0f0f;
  color: white;

  overflow-x: hidden;
}

/* ===== HERO ===== */
.hero {
  height: 70vh;

  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url('../assets/rebel1.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

/* OVERLAY */
.overlay {
  position: absolute;
  inset: 0;

  background: linear-gradient(
    180deg,
    rgba(0,0,0,0.5),
    rgba(0,0,0,0.85)
  );
}

/* HERO CONTENT */
.hero-content {
  position: relative;
  text-align: center;

  animation: fadeIn 1.5s ease;
}

.hero-content h1 {
  font-size: 70px;
  font-weight: 900;

  letter-spacing: 6px;

  text-shadow: 0 0 25px rgba(226,215,151,0.5);
}

.hero-content p {
  margin-top: 10px;

  color: rgb(226,215,151);

  letter-spacing: 4px;
}

/* ===== INTRO ===== */
.intro {
  text-align: center;

  max-width: 900px;

  margin: auto;

  padding: 100px 20px 60px;
}

.intro h2 {
  color: rgb(226,215,151);

  font-size: 34px;

  margin-bottom: 20px;

  letter-spacing: 2px;
}

.intro p {
  color: #ddd;

  line-height: 1.9;
}

/* ===== ACTIVITY SECTION ===== */
.activity-section {
  display: flex;
  align-items: center;
  gap: 60px;

  padding: 80px;
}

/* REVERSE */
.activity-section.reverse {
  flex-direction: row-reverse;
}

/* IMAGE */
.activity-image img {
  width: 360px;
  height: 450px;

  object-fit: cover;

  border-radius: 14px;

  box-shadow: 0 0 30px rgba(0,0,0,0.6);

  transition: 0.4s ease;
}

.activity-image img:hover {
  transform: scale(1.03);
}

/* TEXT */
.activity-text {
  flex: 1;
}

.activity-text h3 {
  font-size: 30px;

  color: rgb(226,215,151);

  margin-bottom: 20px;

  letter-spacing: 2px;
}

.activity-text p {
  color: #ddd;

  line-height: 1.9;

  margin-bottom: 15px;
}

/* ===== BANNER ===== */
.banner {
  width: 100%;

  padding: 40px 0;

  text-align: center;
}

.banner img {
  width: 85%;
  max-width: 1100px;

  border-radius: 14px;

  box-shadow: 0 0 30px rgba(0,0,0,0.6);
}

.banner-text {
  margin-top: 20px;
}

.banner-text h2 {
  color: rgb(226,215,151);

  letter-spacing: 4px;

  margin-bottom: 10px;
}

.banner-text p {
  color: #ccc;
}

/* ===== GALLERY ===== */
.gallery {
  display: flex;
  justify-content: center;
  gap: 30px;

  flex-wrap: wrap;

  padding: 80px 40px;
}

/* ITEM */
.gallery-item {
  width: 320px;

  text-align: center;
}

.gallery-item img {
  width: 100%;
  height: 220px;

  object-fit: cover;

  border-radius: 12px;

  box-shadow: 0 0 25px rgba(0,0,0,0.5);

  transition: 0.3s ease;
}

.gallery-item img:hover {
  transform: translateY(-5px);
}

.gallery-item p {
  margin-top: 12px;

  color: #ddd;

  line-height: 1.7;
}

/* ===== CLOSING ===== */
.closing {
  text-align: center;

  padding: 80px 20px 120px;
}

.closing h2 {
  color: rgb(226,215,151);

  font-size: 34px;

  letter-spacing: 4px;

  margin-bottom: 20px;
}

.closing p {
  max-width: 700px;

  margin: auto;

  color: #ccc;

  line-height: 1.9;
}

/* ===== ANIMATION ===== */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ===== RESPONSIVE ===== */
@media (max-width: 768px) {

  .hero-content h1 {
    font-size: 40px;
  }

  .activity-section,
  .activity-section.reverse {
    flex-direction: column;

    text-align: center;

    padding: 60px 30px;
  }

  .activity-image img {
    width: 260px;
    height: 340px;
  }

  .banner img {
    width: 95%;
  }

  .gallery {
    padding: 60px 20px;
  }

  .closing h2 {
    font-size: 24px;
  }

}
</style>