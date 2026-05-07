<template>
  <div class="structure-page">

    <!-- HERO -->
    <section class="hero">

      <div class="overlay"></div>

      <div class="hero-content">
        <h1>UR STRUCTURE</h1>
        <p>REBELLIONS SYNDICATE</p>
      </div>

    </section>

    <!-- INTRO -->
    <section class="intro">

      <h2>STRUKTUR KOMUNITAS</h2>

      <p>
        Struktur organisasi Rebellions Syndicate dibentuk untuk menjaga
        solidaritas, loyalitas, serta koordinasi antar anggota komunitas.
        Setiap posisi memiliki tanggung jawab penting dalam menjaga nama baik,
        kehormatan, dan perjalanan komunitas agar tetap solid dan berkembang.
      </p>

    </section>

    <!-- PRESIDENT -->
    <section class="leader-section">

      <div class="leader-card">

        <img src="../assets/bgtri.png" alt="president" />

        <h3>PRESIDENT</h3>

        <p>
          Pemimpin tertinggi yang bertanggung jawab atas seluruh kebijakan,
          keputusan, dan arah perkembangan Rebellions Syndicate.
        </p>

      </div>

    </section>

    <!-- CORE STRUCTURE -->
    <section class="core-structure">

      <!-- VICE PRESIDENT -->
      <div class="structure-card">

        <img src="../assets/riski.png" alt="vice president" />

        <h3>VICE PRESIDENT</h3>

        <p>
          Pendamping President yang membantu menjalankan komunitas dan
          menggantikan posisi ketika President berhalangan hadir.
        </p>

      </div>

      <!-- SECRETARY -->
      <div class="structure-card">

        <img src="../assets/ojik.png" alt="secretary" />

        <h3>SECRETARY</h3>

        <p>
          Bertanggung jawab mengelola administrasi, data anggota,
          dokumentasi, dan surat-menyurat komunitas.
        </p>

      </div>

      <!-- TREASURER -->
      <div class="structure-card">

        <img src="../assets/remon.png" alt="treasurer" />

        <h3>TREASURER</h3>

        <p>
          Mengatur arus keuangan komunitas, iuran anggota,
          dan kebutuhan dana kegiatan maupun event.
        </p>

      </div>

    </section>

    <!-- MEMBERSHIP -->
    <section class="road-section">

      <!-- FOTO -->
      <div class="road-image">
        <img src="../assets/alfi.jpeg" alt="membership" />
      </div>

      <!-- TEXT -->
      <div class="road-text">

        <h2>KEANGGOTAAN</h2>

        <p>
          Divisi keanggotaan bertanggung jawab terhadap seluruh member
          dan prospect di dalam komunitas. Posisi ini menjaga hubungan,
          solidaritas, serta perkembangan anggota agar tetap aktif dan solid.
        </p>

        <p>
          Keanggotaan juga berperan dalam proses pengenalan anggota baru,
          pembinaan prospect, serta menjaga komunikasi antar member
          di dalam komunitas.
        </p>

      </div>

    </section>

    <!-- ROAD CAPTAIN -->
    <section class="road-section reverse">

      <!-- FOTO -->
      <div class="road-image">
        <img src="../assets/ucup.png" alt="road captain" />
      </div>

      <!-- TEXT -->
      <div class="road-text">

        <h2>ROAD CAPTAIN (RC)</h2>

        <p>
          Road Captain merupakan pemimpin rombongan saat touring atau
          riding bersama. Posisi ini bertanggung jawab menentukan rute,
          menjaga keamanan perjalanan, dan mengatur formasi rombongan.
        </p>

        <p>
          Dalam komunitas motor, Road Captain menjadi simbol disiplin,
          tanggung jawab, dan kepemimpinan di jalan.
        </p>

      </div>

    </section>

    <!-- LEVEL SECTION -->
    <section class="level-section">

      <h2>TINGKATAN KEANGGOTAAN</h2>

      <div class="level-grid">

        <!-- FOUNDER -->
        <div class="level-card">
          <h3>FOUNDER</h3>

          <p>
            Pendiri komunitas yang membangun dan membentuk identitas
            Rebellions Syndicate sejak awal berdiri.
          </p>
        </div>

        <!-- ELDER -->
        <div class="level-card">
          <h3>ELDER</h3>

          <p>
            Senior yang telah menjadi member selama lebih dari 2 tahun
            dan memiliki pengalaman serta loyalitas tinggi.
          </p>
        </div>

        <!-- MEMBER -->
        <div class="level-card">
          <h3>MEMBER</h3>

          <p>
            Anggota tetap yang telah diakui loyalitas dan dedikasinya
            terhadap komunitas.
          </p>
        </div>

        <!-- VIRGIN -->
        <div class="level-card">
          <h3>VIRGIN</h3>

          <p>
            Tahap setelah seseorang melewati masa Prospect dan telah
            memiliki kendaraan motor custom atau retro classic.
          </p>
        </div>

        <!-- PROSPECT -->
        <div class="level-card">
          <h3>PROSPECT / CANDIDATE</h3>

          <p>
            Calon anggota yang sedang menjalani masa percobaan untuk
            melihat komitmen sebelum resmi dilantik.
          </p>
        </div>

        <!-- CAPROS -->
        <div class="level-card">
          <h3>CAPROS</h3>

          <p>
            Tahap pengenalan awal dan pengujian oleh anggota senior
            sebelum menjadi Prospect resmi.
          </p>
        </div>

      </div>

    </section>

    <!-- MEMBER -->
    <section class="member-section">

      <h2>REBELLIONS SYNDICATE FAMILY</h2>

      <p>
        Seluruh anggota Rebellions Syndicate adalah bagian penting dari
        keluarga besar komunitas. Loyalitas, solidaritas, dan brotherhood
        menjadi pondasi utama dalam menjaga persaudaraan.
      </p>

      <div class="member-banner">
        <img src="../assets/fotorame2.jpg" alt="member banner" />
      </div>

    </section>

    <!-- QUOTE -->
    <section class="quote">

      <h2>
        “ ONE FAMILY • ONE SOLIDARITY ”
      </h2>

      <p>
        Struktur bukan tentang jabatan, tetapi tentang tanggung jawab,
        loyalitas, dan menjaga kehormatan komunitas.
      </p>

    </section>

  </div>
</template>

<style scoped>

/* ===== PAGE ===== */
.structure-page {
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
  max-width: 900px;

  margin: auto;

  text-align: center;

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

/* ===== LEADER ===== */
.leader-section {
  display: flex;
  justify-content: center;

  padding: 40px 20px 80px;
}

.leader-card {
  width: 350px;

  text-align: center;

  background: rgba(255,255,255,0.03);

  border: 1px solid rgba(255,255,255,0.05);

  padding: 30px;

  border-radius: 16px;

  transition: 0.3s ease;
}

.leader-card:hover {
  transform: translateY(-5px);
}

.leader-card img {
  width: 100%;
  height: 420px;

  object-fit: cover;

  border-radius: 12px;

  margin-bottom: 20px;
}

.leader-card h3 {
  color: rgb(226,215,151);

  margin-bottom: 10px;

  letter-spacing: 2px;
}

.leader-card p {
  color: #ddd;

  line-height: 1.8;
}

/* ===== CORE STRUCTURE ===== */
.core-structure {
  display: flex;
  justify-content: center;

  gap: 30px;

  flex-wrap: wrap;

  padding: 20px 40px 100px;
}

/* CARD */
.structure-card {
  width: 300px;

  background: rgba(255,255,255,0.03);

  border-radius: 16px;

  padding: 20px;

  text-align: center;

  transition: 0.3s ease;
}

.structure-card:hover {
  transform: translateY(-5px);
}

.structure-card img {
  width: 100%;
  height: 350px;

  object-fit: cover;

  border-radius: 12px;

  margin-bottom: 15px;
}

.structure-card h3 {
  color: rgb(226,215,151);

  margin-bottom: 10px;
}

.structure-card p {
  color: #ddd;

  line-height: 1.7;
}

/* ===== ROAD SECTION ===== */
.road-section {
  display: flex;
  align-items: center;

  gap: 60px;

  padding: 80px;
}

/* REVERSE */
.reverse {
  flex-direction: row-reverse;
}

/* IMAGE */
.road-image img {
  width: 350px;
  height: 450px;

  object-fit: cover;

  border-radius: 14px;

  box-shadow: 0 0 25px rgba(0,0,0,0.6);
}

/* TEXT */
.road-text {
  flex: 1;
}

.road-text h2 {
  color: rgb(226,215,151);

  font-size: 34px;

  margin-bottom: 20px;

  letter-spacing: 2px;
}

.road-text p {
  color: #ddd;

  line-height: 1.9;

  margin-bottom: 15px;
}

/* ===== LEVEL SECTION ===== */
.level-section {
  padding: 100px 40px;
}

.level-section h2 {
  text-align: center;

  color: rgb(226,215,151);

  font-size: 36px;

  margin-bottom: 50px;

  letter-spacing: 3px;
}

/* GRID */
.level-grid {
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));

  gap: 30px;
}

/* CARD */
.level-card {
  background: rgba(255,255,255,0.03);

  border: 1px solid rgba(255,255,255,0.05);

  padding: 30px;

  border-radius: 18px;

  transition: 0.3s ease;
}

.level-card:hover {
  transform: translateY(-5px);

  border-color: rgba(226,215,151,0.2);
}

.level-card h3 {
  color: rgb(226,215,151);

  margin-bottom: 15px;

  letter-spacing: 2px;
}

.level-card p {
  color: #ddd;

  line-height: 1.8;
}

/* ===== MEMBER ===== */
.member-section {
  text-align: center;

  padding: 100px 20px;
}

.member-section h2 {
  color: rgb(226,215,151);

  font-size: 34px;

  margin-bottom: 20px;

  letter-spacing: 2px;
}

.member-section p {
  max-width: 800px;

  margin: auto auto 40px;

  color: #ddd;

  line-height: 1.9;
}

/* BANNER */
.member-banner img {
  width: 85%;
  max-width: 1100px;

  border-radius: 14px;

  box-shadow: 0 0 30px rgba(0,0,0,0.6);
}

/* ===== QUOTE ===== */
.quote {
  text-align: center;

  padding: 40px 20px 120px;
}

.quote h2 {
  color: rgb(226,215,151);

  font-size: 34px;

  letter-spacing: 4px;

  margin-bottom: 20px;
}

.quote p {
  color: #ccc;

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
    font-size: 42px;
  }

  .road-section,
  .reverse {
    flex-direction: column;

    text-align: center;

    padding: 60px 30px;
  }

  .road-image img {
    width: 260px;
    height: 340px;
  }

  .member-banner img {
    width: 95%;
  }

  .quote h2 {
    font-size: 24px;
  }

  .level-section {
    padding: 80px 20px;
  }

}
</style>