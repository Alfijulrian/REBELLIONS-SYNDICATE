<script setup>
import { ref, provide, computed } from 'vue'
import { useRoute } from 'vue-router'
import Sidebar from './components/Sidebar.vue'

/* ===== STATE SIDEBAR ===== */
const isOpen = ref(true)
provide('isOpen', isOpen)

/* ===== ROUTE ===== */
const route = useRoute()
const pageTitle = computed(() => route.meta.title || 'Beranda')
</script>

<template>
  <div class="layout">

    <!-- SIDEBAR -->
    <Sidebar />

    <!-- MAIN -->
    <div :class="['main', { closed: !isOpen }]">

      <!-- HEADER (tetap normal di atas) -->
      <header class="header">
        <div>
          <h2>{{ pageTitle }}</h2>
          <p>REBELLIONS SYNDICATE</p>
        </div>
      </header>

      <!-- CONTENT -->
      <main class="content">
        <router-view />
      </main>

    </div>

  </div>
</template>

<style>
/* ===== GLOBAL LAYOUT ===== */
.layout {
  display: flex;
  min-height: 100vh;
  background: #0f0f0f;
  color: white;
}

/* ===== MAIN AREA ===== */
.main {
  margin-left: 240px;
  width: calc(100% - 240px);

  transition: 0.4s ease;

  display: flex;
  flex-direction: column;
}

/* SIDEBAR CLOSED */
.main.closed {
  margin-left: 75px;
  width: calc(100% - 75px);
}

/* ===== HEADER (TIDAK TERPENGARUH HOME) ===== */
.header {
  padding: 20px 100px;
  border-bottom: 1px solid rgba(255,255,255,0.05);
}

.header h2 {
  margin: 0;
  font-size: 18px;
  letter-spacing: 2px;
}

.header p {
  margin: 5px 0 0;
  color: rgb(226, 215, 151);
  font-size: 12px;
  letter-spacing: 2px;
}

/* ===== CONTENT ===== */
.content {
  flex: 1;
  padding: 20px 40px;
}

/* ===== RESPONSIVE ===== */
@media (max-width: 768px) {
  .main {
    margin-left: 200px;
    width: calc(100% - 200px);
  }

  .main.closed {
    margin-left: 70px;
    width: calc(100% - 70px);
  }
}
</style>