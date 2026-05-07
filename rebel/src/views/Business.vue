<template>
  <div class="business-page">

    <!-- HERO -->
    <section class="hero">
      <div class="overlay"></div>

      <div class="hero-content">
        <h1>REBELLIONS BUSINESS</h1>
        <p>
          Produk • Merchandise • Apparel • Creative Movement
        </p>
      </div>
    </section>

    <!-- ABOUT BUSINESS -->
    <section class="business-about">

      <!-- IMAGE -->
      <div class="about-image">
        <img src="../assets/rebel1.jpg" alt="business" />
      </div>

      <!-- TEXT -->
      <div class="about-text">
        <h2>ABOUT OUR BUSINESS</h2>

        <p>
          Rebellions Syndicate bukan hanya sekadar komunitas motor,
          tetapi juga berkembang menjadi sebuah movement yang memiliki
          semangat kreativitas, loyalitas, dan solidaritas.
        </p>

        <p>
          Melalui bidang usaha dan merchandise komunitas, kami menghadirkan
          berbagai produk yang merepresentasikan identitas serta karakter
          dari Rebellions Syndicate.
        </p>

        <p>
          Mulai dari apparel, sticker, jersey, hingga berbagai kebutuhan
          riding lainnya dibuat dengan konsep yang mencerminkan brotherhood,
          freedom, dan street culture.
        </p>
      </div>

    </section>

    <!-- PRODUCT SECTION -->
    <section class="product-section">

      <h2>OUR PRODUCTS</h2>

      <div class="product-grid">

        <!-- ITEM -->
        <div class="product-card">
          <img src="../assets/rebell.png" alt="shirt" />

          <div class="product-content">
            <h3>T-Shirt Community</h3>
            <p>
              Kaos official Rebellions Syndicate dengan desain eksklusif
              dan karakter street culture.
            </p>
          </div>
        </div>

        <!-- ITEM -->
        <div class="product-card">
          <img src="../assets/rebell.png" alt="hoodie" />

          <div class="product-content">
            <h3>Hoodie & Jacket</h3>
            <p>
              Hoodie dan jaket komunitas dengan kualitas premium
              untuk riding maupun daily outfit.
            </p>
          </div>
        </div>

        <!-- ITEM -->
        <div class="product-card">
          <img src="../assets/rebell.png" alt="sticker" />

          <div class="product-content">
            <h3>Sticker & Accessories</h3>
            <p>
              Sticker, gantungan kunci, dan aksesoris komunitas
              dengan desain khas Rebellions Syndicate.
            </p>
          </div>
        </div>

        <!-- ITEM -->
        <div class="product-card">
          <img src="../assets/rebell.png" alt="jersey" />

          <div class="product-content">
            <h3>Custom Jersey</h3>
            <p>
              Jersey riding custom dengan desain modern
              dan identitas komunitas yang kuat.
            </p>
          </div>
        </div>

      </div>

    </section>

    <!-- QUOTE -->
    <section class="quote-section">
      <h2>
        “ More Than Community, <br>
        We Build Brotherhood & Creativity ”
      </h2>
    </section>

  </div>
</template>

<style scoped>

/* ===== PAGE ===== */
.business-page {
  width: 100%;
  min-height: 100vh;
  background: #0f0f0f;
  color: white;
}

/* ===== HERO ===== */
.hero {
  position: relative;

  width: 100%;
  height: 70vh;

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
  font-size: 60px;
  font-weight: 900;

  letter-spacing: 6px;

  margin-bottom: 15px;

  text-shadow: 0 0 20px rgba(226,215,151,0.3);
}

.hero-content p {
  font-size: 16px;
  color: rgb(226, 215, 151);

  letter-spacing: 4px;
}

/* ===== ABOUT ===== */
.business-about {
  display: flex;
  align-items: center;
  gap: 60px;

  padding: 90px 70px;
}

/* IMAGE */
.about-image img {
  width: 360px;
  height: 480px;

  object-fit: cover;

  border-radius: 20px;

  box-shadow: 0 0 35px rgba(0,0,0,0.7);

  transition: 0.4s ease;
}

.about-image img:hover {
  transform: scale(1.03);
}

/* TEXT */
.about-text {
  flex: 1;
}

.about-text h2 {
  font-size: 34px;

  color: rgb(226, 215, 151);

  margin-bottom: 25px;

  letter-spacing: 3px;
}

.about-text p {
  color: #d7d7d7;
  line-height: 1.9;

  margin-bottom: 18px;
}

/* ===== PRODUCT SECTION ===== */
.product-section {
  padding: 40px 70px 100px;
}

.product-section h2 {
  text-align: center;

  font-size: 36px;

  color: rgb(226, 215, 151);

  margin-bottom: 50px;

  letter-spacing: 4px;
}

/* GRID */
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));

  gap: 30px;
}

/* CARD */
.product-card {
  background: rgba(255,255,255,0.03);

  border: 1px solid rgba(255,255,255,0.06);

  border-radius: 20px;

  overflow: hidden;

  transition: 0.4s ease;
}

.product-card:hover {
  transform: translateY(-8px);

  background: rgba(226,215,151,0.06);

  border-color: rgba(226,215,151,0.15);
}

/* IMAGE */
.product-card img {
  width: 100%;
  height: 260px;

  object-fit: cover;
}

/* CONTENT */
.product-content {
  padding: 25px;
}

.product-content h3 {
  color: rgb(226, 215, 151);

  margin-bottom: 12px;

  letter-spacing: 1px;
}

.product-content p {
  color: #d0d0d0;
  line-height: 1.7;
}

/* ===== QUOTE ===== */
.quote-section {
  padding: 40px 20px 120px;

  text-align: center;
}

.quote-section h2 {
  font-size: 34px;

  color: rgb(226, 215, 151);

  line-height: 1.8;

  font-style: italic;

  text-shadow: 0 0 20px rgba(226,215,151,0.2);
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

  .business-about {
    flex-direction: column;

    padding: 70px 25px;
  }

  .about-image img {
    width: 100%;
    max-width: 340px;
    height: auto;
  }

  .about-text {
    text-align: center;
  }

  .hero-content h1 {
    font-size: 34px;
    letter-spacing: 3px;
  }

  .hero-content p {
    font-size: 13px;
  }

  .product-section {
    padding: 30px 20px 80px;
  }

  .product-section h2 {
    font-size: 28px;
  }

  .quote-section h2 {
    font-size: 24px;
  }
}

</style>