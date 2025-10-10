<template>
  <div class="support-page">
    <Header />

    <main class="support-content">
      <section class="support-section">
        <h1>Soporte y Ayuda 🙌</h1>
        <p class="description">
          ¿Tienes dudas o problemas con ÑanGo? Estamos aquí para ayudarte.
        </p>

        <div class="support-options">
          <div class="support-card">
            <h3>📩 Contacto directo</h3>
            <p>Envíanos un correo a <strong>soporte@tinkuytech.com</strong></p>
          </div>

          <div class="support-card">
            <h3>❓ Preguntas frecuentes</h3>
            <p>Pronto podrás acceder a nuestras guías y soluciones rápidas.</p>
          </div>

          <div class="support-card">
            <h3>💬 Chat de asistencia</h3>
            <p>Muy pronto podrás comunicarte con nosotros en tiempo real.</p>
          </div>
        </div>
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
.support-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #f7f9fc;
  font-family: "Inter", sans-serif;
}

.support-content {
  flex: 1;
  padding: 3rem 2rem;
  text-align: center;
}

.support-section {
  background: white;
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  padding: 3rem 2rem;
  max-width: 800px;
  margin: 0 auto;
  animation: fadeIn 0.7s ease-in-out;
}

h1 {
  color: #007bff;
  margin-bottom: 1rem;
}

.description {
  color: #555;
  margin-bottom: 2rem;
}

.support-options {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
}

.support-card {
  background: #f9fafc;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 1.5rem;
  max-width: 250px;
  transition: transform 0.2s, box-shadow 0.3s;
}

.support-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.support-card h3 {
  color: #ff6f00;
  margin-bottom: 0.5rem;
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
