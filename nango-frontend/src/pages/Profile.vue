<template>
  <div class="profile-page">
    <Header />

    <main class="profile-content">
      <section class="profile-card">
        <img src="/logo.png" alt="Avatar" class="profile-avatar" />
        <h2>Mi Perfil</h2>
        <p class="subtitle">Información básica del usuario</p>

        <div class="profile-info">
          <p><strong>Nombre:</strong> Juan Pérez</p>
          <p><strong>Correo:</strong> juan.perez@universidad.edu</p>
          <p><strong>Miembro desde:</strong> Enero 2025</p>
        </div>

        <button class="btn-edit">Editar perfil</button>
      </section>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Header from "../components/Header.vue"
import Footer from "../components/Footer.vue"
</script>

<style scoped>
.profile-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #f7f9fc;
  font-family: "Inter", sans-serif;
}

.profile-content {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 1rem;
}

.profile-card {
  background: white;
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  padding: 2.5rem;
  text-align: center;
  max-width: 400px;
  animation: fadeIn 0.7s ease-in-out;
}

.profile-avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 1rem;
}

.subtitle {
  color: #666;
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
}

.profile-info p {
  color: #444;
  font-size: 0.95rem;
  margin: 0.4rem 0;
}

.btn-edit {
  background: linear-gradient(90deg, #007bff, #0056d6);
  color: white;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 1.5rem;
  transition: background 0.3s, transform 0.2s;
}

.btn-edit:hover {
  background: linear-gradient(90deg, #ff6f00, #ff9100);
  transform: scale(1.05);
}

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
</style>
