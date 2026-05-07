<script setup>
import { inject } from 'vue'
import logo from '../assets/rebell.png'

const isOpen = inject('isOpen')

const toggleSidebar = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div :class="['sidebar', { closed: !isOpen }]">

    <!-- TOP -->
    <div class="top">
      <button class="toggle-btn" @click="toggleSidebar">☰</button>
      <img :src="logo" class="logo" />
    </div>

    <!-- CLOSED -->
    <div v-if="!isOpen" class="closed-mode">
      <div class="vertical-text">
        <span>R</span>
        <span>E</span>
        <span>B</span>
        <span>E</span>
        <span>L</span>
      </div>
    </div>

    <!-- OPEN -->
    <div v-else class="menu-area">

      <h1>
        REBELLIONS <br />
        SYNDICATE <br />
        WEBSITE
      </h1>

      <ul>
        <li><router-link to="/">Beranda</router-link></li>
        <li><router-link to="/ur-history">UR History</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/activity">Activity</router-link></li>
        <li><router-link to="/structure">UR Structure</router-link></li>
        <li><router-link to="/requirements">Joining Requirements</router-link></li>
        <li><router-link to="/business">Business</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>

    </div>

  </div>
</template>

<style>
/* ===== SIDEBAR LAYER DEPTH ===== */
.sidebar {
  transition: all 0.55s cubic-bezier(0.4, 0, 0.2, 1);
  width: 240px;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;

  z-index: 1000; /* 🔥 INI YANG BUAT MENIMPA */

  background: linear-gradient(180deg, #0a0a0a, #000);

  padding: 14px;

  display: flex;
  flex-direction: column;

  transition: 0.4s ease;

  box-shadow: 10px 0 30px rgba(0,0,0,0.8);

  overflow: hidden;
}

/* CLOSED */
.sidebar.closed {
  width: 75px;
  align-items: center;
}
.sidebar.closed .vertical-text {
  font-size: 44px; /* 🔥 BESAR */
  font-weight: 900;

  gap: 12px;

  color: rgb(226, 215, 151);

  text-shadow:
    0 0 10px rgba(226, 215, 151, 0.8),
    0 0 25px rgba(226, 215, 151, 0.5),
    0 0 40px rgba(226, 215, 151, 0.2);

  animation: rebelPulse 1.8s infinite ease-in-out;

  transform: scale(1.1);
}
/* TOP */
.top {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
}

.toggle-btn {
  background: none;
  border: none;
  color: white;
  font-size: 22px;
  cursor: pointer;
  margin-bottom: 10px;
}

.toggle-btn:hover {
  color: rgb(226, 215, 151);
}

.logo {
  width: 45px;
}

/* CLOSED MODE */
.closed-mode {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.vertical-text {
  display: flex;
  flex-direction: column;
  gap: 6px;

  font-size: 18px;
  font-weight: bold;

  color: rgb(226, 215, 151);
}

/* MENU */
.menu-area {
  flex-grow: 1;
  overflow-y: auto;
}

h1 {
  font-size: 14px;
  color: white;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin: 8px 0;
}

a {
  display: block;
  color: white;
  text-decoration: none;
  padding: 8px;
  border-radius: 6px;
}

a:hover {
  background: rgba(226, 215, 151, 0.15);
  color: rgb(226, 215, 151);
}

a.router-link-active {
  background: rgb(226, 215, 151);
  color: black;
}
</style>