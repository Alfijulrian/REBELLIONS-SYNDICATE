<template>
  <div class="about-page">

    <!-- HERO -->
    <section class="hero">

      <div class="overlay"></div>

      <div class="hero-content">
        <h1>ABOUT US</h1>
        <p>REBELLIONS SYNDICATE</p>
      </div>

    </section>

    <!-- ABOUT SECTION -->
    <section class="about-section">

      <!-- FOTO -->
      <div class="about-image">
        <img src="../assets/rebell.png" alt="Rebellions Syndicate" />
      </div>

      <!-- TEXT -->
      <div class="about-text">

        <h2>TENTANG KOMUNITAS KAMI</h2>

        <p>
          1.Persaudaraan dan Solidaritas (Brotherhood)
            Sesuai dengan semangat "dua roda", komunitas ini bertujuan membangun ikatan kekeluargaan yang kuat. Hal ini diwujudkan melalui:
            Touring dan Riding: Menikmati perjalanan bersama untuk mempererat hubungan.
            Aksi Sosial: Mengadakan bakti sosial atau donasi untuk masyarakat yang membutuhkan.
            Saling Bantu di Jalan: Memastikan tidak ada anggota yang tertinggal atau mengalami kesulitan saat berkendara
        </p>

        <p>
          2.Wadah Ekspresi dan Kreativitas
          Memberikan ruang bagi para anggotanya untuk mengekspresikan jati diri melalui kendaraan. Motor custom retro dan clasik adalah karya seni berjalan; melalui komunitas, para pemilik dapat memamerkan ide-ide orisinal mereka, mulai dari aliran cafe racer, bobber,chopper,tracker ,srambler,dan lain lain        </p>

        <p>
          3. Pertukaran Ilmu dan Edukasi Teknis
          Membangun motor custom membutuhkan pemahaman teknis yang mendalam. Komunitas berfungsi sebagai tempat untuk:
          Berbagi tips modifikasi: Mengenai mesin, kelistrikan, modifan hingga fabrikasi rangka.
          Rekomendasi bengkel: Mencari pengrajin atau spesialis (seperti tukang cat, jok, atau bubut) yang berkualitas.
          Problem solving: Membantu anggota yang mengalami kendala teknis pada motornya.        
        </p>

        <p>
          4. Membangun Jaringan (Networking)
            Komunitas menjadi jembatan antara pemilik motor, builder (pembangun motor), dan penyedia spare part. Ini menciptakan ekosistem ekonomi kreatif yang saling menguntungkan, di mana ide-ide baru bisa berkembang menjadi proyek kolaborasi yang lebih besar.
            Setiap komunitas mungkin memiliki fokus yang berbeda, namun benang merahnya tetap sama: menghargai keunikan di atas standardisasi pabrikan.
        </p>

      </div>

    </section>

    <!-- VISI MISI -->
    <section class="vision-mission">

      <!-- VISI -->
      <div class="card">

        <h3>VISI</h3>

        <p>
      1.Membangun kultur berkendara yang positif: Menghapus stigma negatif tentang klub motor dengan menunjukkan perilaku berkendara yang santun dan karya yang bernilai seni.
        </p>
        <p>
      2.Melestarikan budaya Custom Retro clasic Culture: Menjaga eksistensi motor-motor klasik dan gaya modifikasi ikonik agar tetap relevan di zaman modern.
        </p>
        <p>
      3.Menjadi barometer modifikasi: Menjadi pusat referensi dan inspirasi bagi pecinta motor custom, baik secara lokal maupun nasional.
        </p>
        <p>
      4.Mewadahi kreativitas tanpa batas: Menciptakan standar baru dalam dunia modifikasi yang mengedepankan orisinalitas dan kualitas karya.
        </p>
      </div>

      <!-- MISI -->
      <div class="card">

        <h3>MISI</h3>

        <ul>
          <li>1.Solidaritas Tanpa Sekat: Mempererat hubungan antar anggota melalui kegiatan riding bareng (sunmori/touring) tanpa membeda-bedakan jenis mesin atau latar belakang sosial.</li>
          <li>2.Standar Keselamatan (Safety): Mengedukasi anggota bahwa motor custom tidak hanya harus bagus dilihat, tetapi juga harus layak jalan (street legal) dan aman dikendarai.</li>
          <li>3.Edukasi dan Kolaborasi: Menyelenggarakan pertemuan rutin atau workshop untuk saling berbagi teknik fabrikasi, mesin, dan desain antar anggota maupun dengan builder profesional.</li>
          <li>4.Apresiasi Karya: Mengadakan atau mengikuti ajang pameran dan kontes modifikasi untuk memperkenalkan hasil karya anggota kepada publik.</li>
          <li>5.Kontribusi Sosial: Melakukan kegiatan yang bermanfaat bagi masyarakat luas, seperti bakti sosial, untuk menunjukkan bahwa komunitas motor adalah bagian positif dari lingkungan.</li>
          <li>6.Pengembangan Ekosistem Lokal: Mendukung bengkel-bengkel kustom lokal dan pengrajin part handmade untuk memajukan ekonomi kreatif di bidang otomotif.</li>
        </ul>

      </div>

    </section>

    <!-- QUOTE -->
    <section class="quote-section">

      <h2>
        “ Brotherhood • Loyalty • Respect ”
      </h2>

      <p>
        Rebellions Syndicate bukan hanya komunitas,
        tetapi keluarga besar yang tumbuh bersama dalam setiap perjalanan.
      </p>

    </section>

  </div>
</template>

<style>
/* ===== PAGE ===== */
.about-page {
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

  color: white;

  text-shadow: 0 0 25px rgba(226,215,151,0.5);
}

.hero-content p {
  margin-top: 10px;

  color: rgb(226, 215, 151);

  letter-spacing: 4px;

  text-transform: uppercase;
}

/* ===== ABOUT SECTION ===== */
.about-section {
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 60px;

  padding: 100px 80px;
}

/* IMAGE */
.about-image img {
  width: 350px;
  height: 450px;

  object-fit: contain;

  border-radius: 14px;

  background: rgba(255,255,255,0.02);

  padding: 20px;

  box-shadow: 0 0 30px rgba(0,0,0,0.6);

  transition: 0.4s ease;
}

.about-image img:hover {
  transform: scale(1.03);
}

/* TEXT */
.about-text {
  flex: 1;
  max-width: 700px;
}

.about-text h2 {
  font-size: 34px;

  color: rgb(226, 215, 151);

  margin-bottom: 20px;

  letter-spacing: 2px;
}

.about-text p {
  color: #ddd;

  line-height: 1.9;

  margin-bottom: 18px;
}

/* ===== VISI MISI ===== */
.vision-mission {
  display: flex;
  justify-content: center;

  gap: 40px;

  padding: 40px 80px 100px;
}

/* CARD */
.card {
  flex: 1;
  max-width: 500px;

  background: rgba(255,255,255,0.03);

  border: 1px solid rgba(255,255,255,0.05);

  border-radius: 14px;

  padding: 35px;

  backdrop-filter: blur(5px);

  transition: 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);

  border-color: rgba(226,215,151,0.3);
}

/* CARD TITLE */
.card h3 {
  color: rgb(226, 215, 151);

  margin-bottom: 20px;

  font-size: 24px;

  letter-spacing: 2px;
}

/* TEXT */
.card p,
.card li {
  color: #ddd;
  line-height: 1.8;
}

.card ul {
  padding-left: 20px;
}

/* ===== QUOTE ===== */
.quote-section {
  text-align: center;

  padding: 80px 20px 120px;
}

.quote-section h2 {
  color: rgb(226, 215, 151);

  font-size: 34px;

  margin-bottom: 20px;

  letter-spacing: 4px;
}

.quote-section p {
  color: #ccc;

  max-width: 700px;

  margin: auto;

  line-height: 1.8;
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

  .about-section {
    flex-direction: column;
    text-align: center;

    padding: 70px 30px;
  }

  .about-image img {
    width: 260px;
    height: 340px;
  }

  .vision-mission {
    flex-direction: column;
    align-items: center;

    padding: 20px 30px 80px;
  }

  .quote-section h2 {
    font-size: 24px;
  }

}
</style>