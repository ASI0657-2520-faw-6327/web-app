import axios from "axios"

// URL base de tu backend IAM real
const API_URL = "http://iam-service-nango-fas.homeservergv.com/api/auth"

export async function loginUser(credentials) {
    try {
        const { data } = await axios.post(`${API_URL}/login`, credentials)

        // Si el backend devuelve un token, lo guardamos
        if (data.token) {
            localStorage.setItem("token", data.token)
        }

        return { success: true, ...data }
    } catch (error) {
        console.warn("⚠️ Backend no disponible, usando modo offline (login simulado).")

        // Modo simulado para desarrollo
        return {
            success: true,
            user: {
                email: credentials.email,
                offline: true,
            },
            token: "fake-jwt-token",
        }
    }
}

export async function registerUser(userData) {
    try {
        const { data } = await axios.post(`${API_URL}/register`, userData)
        return { success: true, ...data }
    } catch (error) {
        console.warn("⚠️ Backend no disponible, registro simulado (modo offline).")

        return {
            success: true,
            user: {
                name: userData.name,
                email: userData.email,
                offline: true,
            },
        }
    }
}

export function logoutUser() {
    localStorage.removeItem("token")
    return { success: true, message: "Sesión cerrada correctamente" }
}
