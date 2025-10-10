<template>
  <header class="header">
    <div class="logo-section" @click="goHome">
      <img src="/logo.png" alt="ÑanGo Logo" class="logo" />
      <h2>ÑanGo</h2>
    </div>

    <nav class="nav-links" v-if="!isAuthPage">
      <router-link to="/home" class="nav-item" active-class="active">Inicio</router-link>
      <router-link to="/profile" class="nav-item" active-class="active">Mi Perfil</router-link>
      <router-link to="#" class="nav-item">Rutas</router-link>
      <router-link to="/support" class="nav-item" active-class="active">Soporte</router-link>
      <button class="btn-logout" @click="logout">Salir</button>
    </nav>
  </header>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router"

const router = useRouter()
const route = useRoute()

// Oculta el menú si estás en Login o Register
const isAuthPage = route.path === "/" || route.path === "/register"

const goHome = () => {
  router.push("/home")
}

const logout = () => {
  // Simulación de cierre de sesión
  localStorage.removeItem("token")
  alert("Sesión cerrada correctamente 👋")
  router.push("/")
}
</script>

<style scoped>
.header {
  background: linear-gradient(90deg, #007bff, #0056d6);
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.8rem 2rem;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

/* Logo */
.logo-section {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: transform 0.2s;
}
.logo-section:hover {
  transform: scale(1.05);
}
.logo {
  width: 40px;
}
h2 {
  margin: 0;
  font-weight: 600;
  font-size: 1.4rem;
}

/* Navegación */
.nav-links {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}
.nav-item {
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
}
.nav-item:hover,
.active {
  color: #ffcc80;
}

.btn-logout {
  background: #ff6f00;
  border: none;
  color: white;
  padding: 8px 14px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.3s, transform 0.2s;
}
.btn-logout:hover {
  background: #ff9100;
  transform: scale(1.05);
}

/* Responsive */
@media (max-width: 768px) {
  .nav-links {
    display: none;
  }
}
</style>
