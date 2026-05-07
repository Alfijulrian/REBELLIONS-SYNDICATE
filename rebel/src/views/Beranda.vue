<template>
  <div class="home">

    <!-- HERO SECTION -->
    <div class="hero">
      <div class="overlay"></div>

      <div class="content">
        <h1>REBELLIONS SYNDICATE</h1>
        <h2>be humble stay rebel</h2>
      </div>
    </div>

    <!-- HISTORY SECTION -->
    <div class="history">

      <div class="history-img">
        <img src="../assets/alfi.jpeg" />
      </div>

      <div class="history-text">
        <h2>WELCOME</h2>

        <p>
          Rebellions Syndicate adalah sebuah Motorcycle Community yang didirikan pada 22 November 2022 di Pekanbaru, Riau, Indonesia. Komunitas ini lahir dari semangat persaudaraan, kebersamaan, dan kecintaan terhadap dunia roda dua yang tidak hanya sekadar hobi, tetapi juga menjadi gaya hidup.

          Sejak awal terbentuk, Rebellions Syndicate berkomitmen untuk menjadi wadah bagi para pengendara motor yang memiliki visi yang sama, yaitu membangun solidaritas, menjaga kebersamaan, serta menciptakan lingkungan yang positif di antara sesama anggota.

          Dengan berlandaskan nilai loyalitas, kebebasan, dan rasa hormat, komunitas ini terus berkembang menjadi sebuah keluarga besar yang solid dan saling mendukung dalam setiap perjalanan maupun kegiatan yang dilakukan.
        </p>
      </div>

    </div>

    <!-- SYMBOL SECTION -->
    <div class="symbol">

      <div class="symbol-text">

        <h2>ARTI LAMBANG & FILOSOFI</h2>

        <p>
          <strong>REBELLIONS (Pemberontakan)</strong>
memiliki makna yang menunjukkan sikap menolak aturan atau norma yang dianggap tidak sesuai, dalam arti menekankan semangat kebebasan yang tak terikat, meskipun terkesan memberontak nama "Rebellions" menyiratkan filosofi kuat tentang persaudaraan serta loyalitas.        
        </p>

        <p>
          <strong>SYNDICATE (Kelompok)</strong>
kata ini menyiratkan sebuah kelompok terorganisir, persatuan yang kuat, atau aliansi yang memiliki tujuan bersama. Ini menekankan aspek persaudaraan (brotherhood), kesetiaan bahwa anggota kelompok ini bergerak dan bertindak sebagai satu kesatuan yang solid.
        </p>

        <p>
          <strong>SIMBOLISME SENTRAL:</strong>
Tengkorak Viking Berjanggut Memakai Helm Banteng memegang keris dan burung serindit        
        </p>

        <p>
          <strong>TENGKORAK (Skull)</strong>
          Dalam kultur biker, tengkorak adalah salah satu simbol paling umum dan kuat, Yang memiliki Makna Kematian dan Keberanian ,
Tengkorak melambangkan mortalitas (kefanaan) dan pengingat akan dekatnya kematian. Dengan mengenakan simbol ini, kelompok ini menunjukkan (bahwa mereka telah menerima risiko hidup (terutama di jalanan) dan tidak takut mati.
        </p>

        <p>
          <strong>VIKING</strong>
Kekuatan dan Keperkasaan
 Viking dikenal sebagai prajurit yang tangguh, penjelajah yang berani, dan penakluk. Menggunakan simbol Viking menyiratkan kekuatan, keberanian, ketangguhan, dan semangat petualangan tanpa batas.
        </p>

        <p>
          <strong>HELM BANTENG</strong>
 Melambangkankan Pemberontak yang memberontak,Sesuai dengan nama REBELLIONS 
Banteng merupakan hewan yang senang berkumpul dan hidup bersama, 
Simbol kepala banteng melambangkan masyrakat indonesia yang selalu bermusywarah dalam menyelesaikan masalah.
Sifat nya yang berkelompok dan berkumpul membuat banteng dijuluki sebagai hewan sosial
        </p>

         <p>
          <strong>JENGGOT</strong>
memiliki makna yang menunjukkan sikap menolak aturan atau norma yang dianggap tidak sesuai, dalam arti menekankan semangat kebebasan yang tak terikat, meskipun terkesan memberontak nama "Rebellions" menyiratkan filosofi kuat tentang persaudaraan serta loyalitas.    
        </p>

    Jenggot lebat seringkali melambangkan kebijaksanaan, kematangan, dan pengalaman yang telah teruji waktu, serta maskulinitas yang kuat dan tak terawat.       
        <p>
          <strong>KERIS</strong>
Keris menjadi ikon logo Riau kerena melambangkan keberanian, kekuatan, dan kehormatan masyarakat Melaya Riau.
Keris juga menjadi simbol kesetiaan dalam mempertahankan kelompok dan komunitas.
          </p>

          <p>
          <strong>BURUNG SERINDIT</strong>
 Burung serindit (nama ilmiahnya, Loriculus galgulus)Burung Serindit Riau meliputi lambang kearifan, kebijaksanaan, kesetiaan, keberanian, dan kerendahan hati. Burung ini adalah maskot dan fauna identitas Riau yang melambangkan nilai-nilai luhur masyarakat Melayu.
          </p>

          <p>
          <strong>•Filosofi Inti</strong>
Kelompok ini terdiri dari anggota yang kuat, berani, berpengalaman,kesetian dan kerendahan hati, dan tidak takut menghadapi bahaya di jalanan, layaknya prajurit Viking di era modern.
          </p>
              

      </div>

      <div class="symbol-img">
        <img src="../assets/rebell.png" />
      </div>

    </div>

    <!-- FOTO BAWAH CENTER -->
    <div class="symbol-bottom-image">
      <img src="../assets/fotorame.jpg" />
    </div>

  </div>
</template>

<style>
/* ===== PAGE ===== */
.home {
  width: 100%;
  min-height: 100vh;
  background: #0f0f0f;
  color: white;
}

/* ===== HERO ===== */
.hero {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  background-image: url('../assets/rebel1.jpg');
  background-size: cover;
  background-position: center;
}

.overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0,0,0,0.6), rgba(0,0,0,0.85));
}

.content {
  position: relative;
  text-align: center;
}

.content h1 {
  font-size: 60px;
  font-weight: 900;
  letter-spacing: 6px;
  text-transform: uppercase;
  text-shadow: 0 0 25px rgba(226, 215, 151, 0.5);
}

.content h2 {
  font-size: 18px;
  color: rgb(226, 215, 151);
  letter-spacing: 4px;
}

/* ===== HISTORY ===== */
.history {
  display: flex;
  align-items: flex-start;
  justify-content: center;

  gap: 50px;

  padding: 80px 60px;
}

.history-img img {
  width: 320px;
  height: 400px;
  object-fit: cover;
  border-radius: 12px;
}

.history-text {
  flex: 1;
}

.history-text h2 {
  color: rgb(226, 215, 151);
  font-size: 30px;
  margin-bottom: 15px;
}

.history-text p {
  line-height: 1.9;
  color: #ddd;
}

/* ===== SYMBOL ===== */
.symbol {
  display: flex;
  align-items: flex-start;
  justify-content: center;

  gap: 60px;

  padding: 80px 60px;
}

.symbol-text {
  flex: 2;
  text-align: left;
}

.symbol-text h2 {
  color: rgb(226, 215, 151);
  font-size: 28px;
  margin-bottom: 20px;
}

.symbol-text p {
  margin-bottom: 15px;
  line-height: 1.8;
  color: #ddd;
}

.symbol-text strong {
  color: rgb(226, 215, 151);
}

.symbol-img {
  flex: 1;
}

.symbol-img img {
  width: 320px;
  height: 420px;
  object-fit: cover;
  border-radius: 12px;
}

/* ===== BOTTOM IMAGE CENTER ===== */
.symbol-bottom-image {
  width: 100%;
  display: flex;
  justify-content: center;

  padding: 60px 0 100px;
}

.symbol-bottom-image img {
  width: 70%;
  max-width: 850px;
  border-radius: 12px;
  object-fit: cover;
}

/* ===== ANIMATION ===== */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(25px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ===== RESPONSIVE ===== */
@media (max-width: 768px) {
  .content h1 {
    font-size: 34px;
  }

  .history,
  .symbol {
    flex-direction: column;
    text-align: center;
  }

  .symbol-text {
    text-align: center;
  }

  .symbol-bottom-image img {
    width: 90%;
  }
}
</style>