<template>
  <div class="ur-history">

    <!-- TITLE -->

    <!-- FOTO LOGO LAMA & BARU -->
    <div class="logo-section">

      <div class="logo-box">
        <img src="../assets/syndicate no bg.png" alt="logo lama" />
        <p>2022-2025</p>
      </div>

      <div class="logo-box">
        <img src="../assets/rebell.png" alt="logo baru" />
        <p>2025-dan seterusnya</p>
      </div>

    </div>

    <!-- TEKS 1 -->
    <div class="text-section">
      <p>
        Perubahan logo Rebellions Syndicate merupakan simbol dari perjalanan panjang komunitas ini.
        Logo lama merepresentasikan awal terbentuknya identitas sederhana, sedangkan logo baru
        menggambarkan perkembangan, kekuatan, dan karakter yang semakin matang.
      </p>
    </div>

    <!-- FOTO 16:9 -->
    <div class="banner-image">
      <img src="../assets/fotoawal.jpeg" alt="banner" />
    </div>

    <!-- TEKS 2 -->
    <div class="text-section">
      <p>
        Seiring berjalannya waktu, Rebellions Syndicate terus berkembang menjadi komunitas yang solid,
        kuat, dan memiliki identitas yang jelas. Setiap perubahan adalah bagian dari perjalanan panjang
        menuju persaudaraan yang lebih besar dan lebih kuat.
      </p>
    </div>

    <!-- ===== ZIG ZAG SECTION ===== -->
    <div class="zigzag">

      <!-- ITEM 1 → FOTO DI KANAN -->
      <div class="zigzag-item right">

        <div class="zigzag-text">
          <h3>PERJALANAN AWAL</h3>
          <p>
            Awal terbentuknya Rebellions Syndicate adalah dari semangat kebersamaan para pengendara motor
            yang memiliki visi yang sama dalam membangun komunitas yang solid dan penuh persaudaraan.
          </p>
        </div>

        <img src="../assets/foto_1.jpeg" alt="foto 1" />

      </div>

      <!-- ITEM 2 → FOTO DI KIRI -->
      <div class="zigzag-item left">

        <img src="../assets/foto_2.jpeg" alt="foto 2" />

        <div class="zigzag-text">
          <h3>PERTUMBUHAN KOMUNITAS</h3>
          <p>
            Seiring waktu, komunitas ini berkembang menjadi keluarga besar yang kuat,
            menjunjung tinggi loyalitas, persaudaraan, dan kebersamaan di setiap perjalanan.
          </p>
        </div>

      </div>

    </div>
<!-- FOTO 16:9 TAMBAHAN -->
<div class="banner-image extra">
  <img src="../assets/foto4.jpg" alt="banner 2" />
</div>

<!-- TEKS DI BAWAH FOTO -->
<div class="text-section">
  <p>
    Setiap perjalanan Rebellions Syndicate tidak hanya tentang kebersamaan di jalan,
    tetapi juga tentang proses tumbuh menjadi lebih kuat, lebih solid, dan lebih dewasa
    sebagai sebuah keluarga besar.
    Setiap momen yang tercipta menjadi bagian dari sejarah yang terus hidup dan berkembang
    dalam setiap anggota komunitas.
  </p>
</div>

<!-- ===== GALERI 16:9 TAMBAHAN ===== -->
<div class="extra-gallery">

  <!-- FOTO 1 -->
  <div class="extra-item">
    <img src="../assets/foto_3.jpg" alt="foto 3" />
    <p>
      Perjalanan komunitas ini terus berkembang melalui berbagai kegiatan,
      touring, dan kebersamaan yang mempererat tali persaudaraan antar anggota.
    </p>
  </div>

  <!-- FOTO 2 -->
  <div class="extra-item">
    <img src="../assets/foto_4.jpg" alt="foto 4" />
    <p>
      Setiap perjalanan bukan hanya sekadar berkendara, tetapi juga menjadi
      simbol solidaritas, kebebasan, dan kekuatan sebuah keluarga besar Rebellions Syndicate.
    </p>
  </div>

</div>
  </div>
</template>

<style>
/* ===== PAGE ===== */
.ur-history {
  width: 100%;
  min-height: 100vh;
  background: #0f0f0f;
  color: white;
  padding: 60px 40px;
}

/* ===== LOGO SECTION ===== */
.logo-section {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 80px;
  margin-bottom: 40px;
}

.logo-box {
  text-align: center;
}

.logo-box img {
  width: 300px;   /* 🔥 DIPERBESAR */
  height: 300px;
  object-fit: contain;
  border-radius: 12px;
  box-shadow: 0 0 20px rgba(0,0,0,0.6);
}

.logo-box p {
  margin-top: 10px;
  color: rgb(226, 215, 151);
  font-weight: bold;
}

/* ===== TEXT ===== */
.text-section {
  max-width: 900px;
  margin: 0 auto 40px;
  text-align: center;
  line-height: 1.8;
  color: #ddd;
}

/* ===== BANNER ===== */
.banner-image {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
}

.banner-image img {
  width: 80%;
  max-width: 1000px;
  border-radius: 12px;
  object-fit: cover;
  box-shadow: 0 0 25px rgba(0,0,0,0.6);
}

/* ===== ZIGZAG ===== */
.zigzag {
  display: flex;
  flex-direction: column;
  gap: 70px;
  margin-top: 60px;
}

/* ITEM BASE */
.zigzag-item {
  display: flex;
  align-items: center;
  gap: 40px;
}

/* FOTO */
.zigzag-item img {
  width: 320px;
  height: 420px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 0 25px rgba(0,0,0,0.6);
}

/* TEKS */
.zigzag-text {
  flex: 1;
}

.zigzag-text h3 {
  color: rgb(226, 215, 151);
  margin-bottom: 10px;
}

/* 🔥 FOTO KANAN */
.zigzag-item.right {
  flex-direction: row;
}

/* 🔥 FOTO KIRI */
.zigzag-item.left {
  flex-direction: row;
}
/* FOTO TAMBAHAN BIAR ADA JARAK & FOCUS */
.banner-image.extra {
  margin-top: 60px;
}
/* ===== GALERI TAMBAHAN 16:9 ===== */
.extra-gallery {
  display: flex;
  flex-direction: column;
  gap: 60px;

  margin-top: 80px;
}

/* ITEM */
.extra-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

/* FOTO 16:9 */
.extra-item img {
  width: 80%;
  max-width: 1000px;
  border-radius: 12px;

  object-fit: cover;

  box-shadow: 0 0 25px rgba(0,0,0,0.6);

  transition: 0.3s ease;
}

/* HOVER EFFECT */
.extra-item img:hover {
  transform: scale(1.02);
}

/* TEKS */
.extra-item p {
  margin-top: 15px;
  max-width: 800px;

  color: #ddd;
  line-height: 1.8;
}


/* RESPONSIVE */
@media (max-width: 768px) {
  .zigzag-item {
    flex-direction: column !important;
    text-align: center;
  }

  .logo-box img {
    width: 220px;
    height: 220px;
  }
}
</style>