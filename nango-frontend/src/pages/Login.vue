<template>
  <div class="login-page">
    <div class="login-card">
      <div class="logo-section">
        <img src="/logo.png" alt="ÑanGo Logo" class="logo" />
        <h1>ÑanGo</h1>
        <p class="subtitle">Movilidad universitaria más segura</p>
      </div>

      <form @submit.prevent="handleLogin" class="login-form">
        <div class="form-group">
          <label for="email">Correo electrónico</label>
          <input
              id="email"
              type="email"
              v-model="email"
              placeholder="ejemplo@correo.com"
              required
          />
        </div>

        <div class="form-group">
          <label for="password">Contraseña</label>
          <input
              id="password"
              type="password"
              v-model="password"
              placeholder="••••••••"
              required
          />
        </div>

        <button type="submit" class="btn-login">
          Iniciar Sesión
        </button>

        <p class="register-link">
          ¿No tienes cuenta?
          <router-link to="/register">Regístrate aquí</router-link>
        </p>
      </form>
    </div>

    <footer class="login-footer">
      <p>© 2025 TinkuyTech — Impulsando movilidad segura</p>
    </footer>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"
import { loginUser } from "../services/authService.js"

const router = useRouter()
const email = ref("")
const password = ref("")

const handleLogin = async () => {
  const res = await loginUser({
    email: email.value,
    password: password.value,
  })

  if (res.success) router.push("/home")
  else alert("Error al iniciar sesión")
}
</script>

<style scoped>
/* Fondo general */
.login-page {
  background: linear-gradient(135deg, #007bff 50%, #ff6f00 50%);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* Tarjeta del login */
.login-card {
  background: white;
  padding: 2.5rem 3rem;
  border-radius: 15px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  width: 100%;
  max-width: 420px;
  text-align: center;
  animation: fadeIn 0.7s ease-in-out;
}

/* Animación suave */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Logo y título */
.logo-section {
  margin-bottom: 1.5rem;
}
.logo {
  width: 80px;
  margin-bottom: 10px;
}
h1 {
  font-size: 1.8rem;
  color: #007bff;
  margin: 0;
}
.subtitle {
  color: #555;
  font-size: 0.9rem;
}

/* Formulario */
.login-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.form-group {
  text-align: left;
}
label {
  font-size: 0.9rem;
  color: #333;
}
input {
  width: 100%;
  padding: 10px 12px;
  border-radius: 6px;
  border: 1px solid #ddd;
  margin-top: 5px;
  transition: border-color 0.3s, box-shadow 0.3s;
}
input:focus {
  border-color: #007bff;
  box-shadow: 0 0 4px rgba(0, 123, 255, 0.4);
  outline: none;
}

/* Botón principal */
.btn-login {
  background: linear-gradient(90deg, #007bff, #0056d6);
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  padding: 10px;
  cursor: pointer;
  transition: background 0.3s, transform 0.2s;
}
.btn-login:hover {
  background: linear-gradient(90deg, #ff6f00, #ff9100);
  transform: scale(1.03);
}

/* Link registro */
.register-link {
  margin-top: 0.8rem;
  font-size: 0.9rem;
}
.register-link a {
  color: #ff6f00;
  text-decoration: none;
  font-weight: 500;
}
.register-link a:hover {
  text-decoration: underline;
}

/* Footer */
.login-footer {
  margin-top: 2rem;
  color: white;
  font-size: 0.85rem;
  text-align: center;
  opacity: 0.9;
}
</style>
