<template>
  <div class="home-layout">
    <!-- Header global -->
    <Header />

    <!-- Contenido principal -->
    <main class="main-content">
      <section class="hero">
        <div class="hero-text">
          <h1>Bienvenido a ÑanGo 🚗</h1>
          <p>
            Conecta con otros estudiantes, comparte tus rutas y viaja seguro hacia tu universidad.
            Somos la comunidad universitaria que transforma la movilidad en confianza y colaboración.
          </p>
          <button class="btn-primary">Explorar rutas</button>
        </div>

        <div class="hero-image">
          <img src="/logo.png" alt="ÑanGo Hero" />
        </div>
      </section>

      <section class="features">
        <div class="feature-card">
          <h3>🚘 Seguridad</h3>
          <p>
            Verifica perfiles, rutas y vehículos antes de viajar. La seguridad es nuestra prioridad.
          </p>
        </div>
        <div class="feature-card">
          <h3>💸 Ahorro</h3>
          <p>
            Comparte gastos de combustible con tus compañeros y reduce tus costos diarios.
          </p>
        </div>
        <div class="feature-card">
          <h3>⏱ Eficiencia</h3>
          <p>
            Coordina horarios y trayectos optimizados para ahorrar tiempo en cada viaje.
          </p>
        </div>
      </section>
    </main>

    <!-- Footer global -->
    <Footer />
  </div>
</template>

<script setup>
import Header from "../components/Header.vue"
import Footer from "../components/Footer.vue"
</script>

<style scoped>
/* Layout general */
.home-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #f7f9fc;
  font-family: "Inter", sans-serif;
}

.main-content {
  flex: 1;
  padding: 3rem 2rem;
  text-align: center;
}

/* HERO SECTION */
.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap-reverse;
  background: white;
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  padding: 3rem 2rem;
  margin-bottom: 3rem;
  animation: fadeIn 0.7s ease-in-out;
}

.hero-text {
  flex: 1;
  min-width: 280px;
  text-align: left;
  padding-right: 2rem;
}
.hero-text h1 {
  color: #007bff;
  font-size: 2rem;
  margin-bottom: 1rem;
}
.hero-text p {
  color: #555;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  max-width: 500px;
}
.btn-primary {
  background: linear-gradient(90deg, #007bff, #0056d6);
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  padding: 12px 20px;
  cursor: pointer;
  transition: background 0.3s, transform 0.2s;
}
.btn-primary:hover {
  background: linear-gradient(90deg, #ff6f00, #ff9100);
  transform: scale(1.05);
}

.hero-image {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.hero-image img {
  width: 200px;
  border-radius: 10px;
  transition: transform 0.3s;
}
.hero-image img:hover {
  transform: scale(1.05);
}

/* FEATURES SECTION */
.features {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
}
.feature-card {
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  max-width: 300px;
  transition: transform 0.2s, box-shadow 0.3s;
}
.feature-card h3 {
  color: #ff6f00;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}
.feature-card p {
  color: #444;
  font-size: 0.95rem;
}
.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

/* Animación */
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

/* Responsive */
@media (max-width: 1024px) {
  .hero {
    flex-direction: column-reverse;
    text-align: center;
  }
  .hero-text {
    text-align: center;
    padding: 0;
  }
  .hero-image img {
    width: 150px;
  }
  .btn-primary {
    width: 100%;
  }
}
</style>
