<template>
  <div class="register-page">
    <div class="register-card">
      <div class="logo-section">
        <img src="/logo.png" alt="ÑanGo Logo" class="logo" />
        <h1>Crear cuenta ÑanGo</h1>
        <p class="subtitle">Conéctate con tu comunidad universitaria</p>
      </div>

      <form @submit.prevent="handleRegister" class="register-form">
        <div class="form-group">
          <label for="name">Nombre completo</label>
          <input
              id="name"
              v-model="name"
              type="text"
              placeholder="Tu nombre"
              required
          />
        </div>

        <div class="form-group">
          <label for="email">Correo electrónico</label>
          <input
              id="email"
              v-model="email"
              type="email"
              placeholder="ejemplo@correo.com"
              required
          />
        </div>

        <div class="form-group">
          <label for="password">Contraseña</label>
          <input
              id="password"
              v-model="password"
              type="password"
              placeholder="••••••••"
              required
          />
        </div>

        <div class="form-group">
          <label for="confirmPassword">Confirmar contraseña</label>
          <input
              id="confirmPassword"
              v-model="confirmPassword"
              type="password"
              placeholder="••••••••"
              required
          />
        </div>

        <button type="submit" class="btn-register">Registrarse</button>

        <p class="login-link">
          ¿Ya tienes una cuenta?
          <router-link to="/">Inicia sesión aquí</router-link>
        </p>
      </form>
    </div>

    <footer class="register-footer">
      <p>© 2025 TinkuyTech — Conectando estudiantes con seguridad</p>
    </footer>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"
import { registerUser } from "../services/authService.js"

const router = useRouter()
const name = ref("")
const email = ref("")
const password = ref("")
const confirmPassword = ref("")

const handleRegister = async () => {
  if (password.value !== confirmPassword.value) {
    alert("Las contraseñas no coinciden.")
    return
  }

  const res = await registerUser({
    name: name.value,
    email: email.value,
    password: password.value,
  })

  if (res.success) {
    alert("Registro exitoso 🎉")
    router.push("/home")
  } else {
    alert("No se pudo registrar el usuario.")
  }
}
</script>

<style scoped>
/* Fondo principal */
.register-page {
  background: linear-gradient(135deg, #007bff 50%, #ff6f00 50%);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* Tarjeta de registro */
.register-card {
  background: white;
  padding: 2.5rem 3rem;
  border-radius: 15px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  width: 100%;
  max-width: 480px;
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
.register-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
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

/* Botón */
.btn-register {
  background: linear-gradient(90deg, #ff6f00, #ff9100);
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  padding: 10px;
  cursor: pointer;
  transition: background 0.3s, transform 0.2s;
}
.btn-register:hover {
  background: linear-gradient(90deg, #007bff, #0056d6);
  transform: scale(1.03);
}

/* Link login */
.login-link {
  margin-top: 0.8rem;
  font-size: 0.9rem;
  text-align: center;
}
.login-link a {
  color: #007bff;
  text-decoration: none;
  font-weight: 500;
}
.login-link a:hover {
  text-decoration: underline;
}

/* Footer */
.register-footer {
  margin-top: 2rem;
  color: white;
  font-size: 0.85rem;
  text-align: center;
  opacity: 0.9;
}
</style>
