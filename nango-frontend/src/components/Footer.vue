<template>
  <footer class="footer">
    <div class="footer-content">
      <p>© 2025 TinkuyTech — Impulsando movilidad universitaria segura</p>
      <nav class="footer-nav">
        <a href="#">Política de Privacidad</a>
        <a href="#">Términos de Uso</a>
        <a href="#">Contacto</a>
      </nav>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
.footer {
  background: #002b5c;
  color: white;
  text-align: center;
  padding: 1.5rem 1rem;
  font-size: 0.9rem;
  margin-top: auto;
}
.footer-content {
  max-width: 900px;
  margin: 0 auto;
}
.footer-nav {
  margin-top: 0.5rem;
  display: flex;
  justify-content: center;
  gap: 1.2rem;
  flex-wrap: wrap;
}
.footer-nav a {
  color: #ffcc80;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
}
.footer-nav a:hover {
  color: #ffffff;
}
</style>
