<template>
  <div class="requirements-page">

    <!-- HERO -->
    <section class="hero">
      <div class="overlay"></div>

      <div class="hero-content">
        <h1>JOINING REQUIREMENTS</h1>
        <p>
          Syarat dan ketentuan untuk menjadi bagian dari
          REBELLIONS SYNDICATE
        </p>
      </div>
    </section>

    <!-- CONTENT -->
    <section class="requirements-container">

      <!-- IMAGE -->
      <div class="requirements-image">
        <img src="../assets/rebell.png" alt="joining" />
      </div>

      <!-- TEXT -->
      <div class="requirements-content">

        <h2>SYARAT BERGABUNG</h2>

        <p>
          Rebellions Syndicate membuka kesempatan bagi siapa saja yang memiliki
          semangat brotherhood, loyalitas, solidaritas, dan kecintaan terhadap
          dunia roda dua untuk menjadi bagian dari keluarga besar ini.
        </p>

        <!-- LIST -->
        <div class="requirement-list">

          <div class="requirement-card">
            <span>01</span>
            <div>
              <h3>Memiliki Motor</h3>
              <p>
                Calon member wajib memiliki kendaraan roda dua dan aktif dalam
                kegiatan riding maupun touring komunitas.
              </p>
            </div>
          </div>

          <div class="requirement-card">
            <span>02</span>
            <div>
              <h3>Menjaga Solidaritas</h3>
              <p>
                Setiap anggota harus menjunjung tinggi rasa persaudaraan,
                kekompakan, dan saling menghormati antar member.
              </p>
            </div>
          </div>

          <div class="requirement-card">
            <span>03</span>
            <div>
              <h3>Aktif Dalam Kegiatan</h3>
              <p>
                Anggota diharapkan aktif mengikuti gathering, touring, event,
                maupun kegiatan sosial komunitas.
              </p>
            </div>
          </div>

          <div class="requirement-card">
            <span>04</span>
            <div>
              <h3>Menjaga Nama Baik Komunitas</h3>
              <p>
                Semua member wajib menjaga sikap dan perilaku demi menjaga
                kehormatan serta nama baik Rebellions Syndicate.
              </p>
            </div>
          </div>

          <div class="requirement-card">
            <span>05</span>
            <div>
              <h3>Loyalitas & Respect</h3>
              <p>
                Loyalitas, rasa hormat, dan komitmen adalah fondasi utama dalam
                membangun komunitas yang solid dan kuat.
              </p>
            </div>
          </div>

        </div>

      </div>

    </section>

    <!-- QUOTE -->
    <section class="quote-section">
      <h2>
        “ Brotherhood Is Not About The Patch, <br>
        It’s About Loyalty, Respect, And Family ”
      </h2>
    </section>

  </div>
</template>

<style scoped>

/* ===== PAGE ===== */
.requirements-page {
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
  background-repeat: no-repeat;

  overflow: hidden;
}

/* OVERLAY */
.overlay {
  position: absolute;
  inset: 0;

  background: linear-gradient(
    180deg,
    rgba(0,0,0,0.55),
    rgba(0,0,0,0.9)
  );
}

/* HERO CONTENT */
.hero-content {
  position: relative;
  text-align: center;
  z-index: 2;

  animation: fadeUp 1.2s ease;
}

.hero-content h1 {
  font-size: 58px;
  font-weight: 900;

  letter-spacing: 6px;
  margin-bottom: 15px;

  color: white;

  text-shadow: 0 0 20px rgba(226,215,151,0.4);
}

.hero-content p {
  font-size: 17px;
  color: rgb(226, 215, 151);

  letter-spacing: 3px;
}

/* ===== MAIN SECTION ===== */
.requirements-container {
  display: flex;
  align-items: flex-start;
  gap: 60px;

  padding: 90px 70px;
}

/* ===== IMAGE ===== */
.requirements-image img {
  width: 360px;
  height: 500px;

  object-fit: cover;

  border-radius: 18px;

  box-shadow: 0 0 35px rgba(0,0,0,0.7);

  transition: 0.4s ease;
}

.requirements-image img:hover {
  transform: scale(1.03);
}

/* ===== CONTENT ===== */
.requirements-content {
  flex: 1;
}

.requirements-content h2 {
  font-size: 34px;
  color: rgb(226, 215, 151);

  margin-bottom: 25px;

  letter-spacing: 3px;
}

.requirements-content p {
  color: #d7d7d7;
  line-height: 1.9;
  margin-bottom: 25px;
}

/* ===== REQUIREMENT LIST ===== */
.requirement-list {
  display: flex;
  flex-direction: column;
  gap: 22px;
}

/* CARD */
.requirement-card {
  display: flex;
  gap: 20px;

  background: rgba(255,255,255,0.03);

  border: 1px solid rgba(255,255,255,0.06);

  padding: 22px;

  border-radius: 16px;

  transition: 0.35s ease;
}

.requirement-card:hover {
  transform: translateY(-5px);

  background: rgba(226,215,151,0.08);

  border-color: rgba(226,215,151,0.2);
}

/* NUMBER */
.requirement-card span {
  min-width: 60px;
  height: 60px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;

  background: rgb(226, 215, 151);
  color: black;

  font-size: 22px;
  font-weight: bold;
}

/* TITLE */
.requirement-card h3 {
  margin-bottom: 8px;

  color: rgb(226, 215, 151);

  letter-spacing: 1px;
}

.requirement-card p {
  margin: 0;
  color: #d0d0d0;
}

/* ===== QUOTE ===== */
.quote-section {
  padding: 90px 40px 120px;
  text-align: center;
}

.quote-section h2 {
  font-size: 34px;
  line-height: 1.8;

  color: rgb(226, 215, 151);

  font-style: italic;

  text-shadow: 0 0 18px rgba(226,215,151,0.2);
}

/* ===== ANIMATION ===== */
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(35px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ===== RESPONSIVE ===== */
@media (max-width: 900px) {

  .requirements-container {
    flex-direction: column;
    align-items: center;

    padding: 70px 25px;
  }

  .requirements-image img {
    width: 100%;
    max-width: 340px;
    height: auto;
  }

  .requirements-content {
    text-align: center;
  }

  .requirement-card {
    text-align: left;
  }

  .hero-content h1 {
    font-size: 34px;
    letter-spacing: 3px;
  }

  .hero-content p {
    font-size: 13px;
  }

  .quote-section h2 {
    font-size: 24px;
  }
}

</style>