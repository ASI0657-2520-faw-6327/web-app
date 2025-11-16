//import { Profile, ProfileDto } from '../types';
//
//const PROFILE_API_BASE_URL = 'http://profile-service-nango-fas.homeservergv.com/api/profiles';
//
//export class ProfileService {
//  /**
//   * Obtiene todos los perfiles
//   * @returns Promise con array de perfiles
//   */
//  async getAllProfiles(): Promise<Profile[]> {
//    try {
//      const response = await fetch(PROFILE_API_BASE_URL, {
//        method: 'GET',
//        headers: {
//          'Content-Type': 'application/json',
//          'Authorization': `Bearer ${localStorage.getItem('token') || ''}`
//        }
//      });
//
//      if (!response.ok) {
//        throw new Error(`HTTP error! status: ${response.status}`);
//      }
//
//      return await response.json();
//    } catch (error) {
//      console.error('Error al obtener perfiles:', error);
//      throw new Error('No se pudieron cargar los perfiles');
//    }
//  }
//
//  /**
//   * Obtiene el perfil de un usuario específico
//   * @param userId ID del usuario
//   * @returns Promise con el perfil del usuario
//   */
//  async getProfileByUserId(userId: string): Promise<Profile> {
//    try {
//      const response = await fetch(`${PROFILE_API_BASE_URL}/user/${userId}`, {
//        method: 'GET',
//        headers: {
//          'Content-Type': 'application/json',
//          'Authorization': `Bearer ${localStorage.getItem('token') || ''}`
//        }
//      });
//
//      if (!response.ok) {
//        throw new Error(`HTTP error! status: ${response.status}`);
//      }
//
//      return await response.json();
//    } catch (error) {
//      console.error(`Error al obtener perfil del usuario ${userId}:`, error);
//      throw new Error('No se pudo cargar el perfil del usuario');
//    }
//  }
//
//  /**
//   * Crea un nuevo perfil
//   * @param profileDto Datos del perfil a crear
//   * @returns Promise con el perfil creado
//   */
//  async createProfile(profileDto: ProfileDto): Promise<Profile> {
//    try {
//      const response = await fetch(PROFILE_API_BASE_URL, {
//        method: 'POST',
//        headers: {
//          'Content-Type': 'application/json',
//          'Authorization': `Bearer ${localStorage.getItem('token') || ''}`
//        },
//        body: JSON.stringify(profileDto)
//      });
//
//      if (!response.ok) {
//        throw new Error(`HTTP error! status: ${response.status}`);
//      }
//
//      return await response.json();
//    } catch (error) {
//      console.error('Error al crear perfil:', error);
//      throw new Error('No se pudo crear el perfil');
//    }
//  }
//
//  /**
//   * Actualiza el perfil de un usuario
//   * @param userId ID del usuario
//   * @param profileDto Datos del perfil a actualizar
//   * @returns Promise con el perfil actualizado
//   */
//  async updateProfile(userId: string, profileDto: ProfileDto): Promise<Profile> {
//    try {
//      const response = await fetch(`${PROFILE_API_BASE_URL}/user/${userId}`, {
//        method: 'PUT',
//        headers: {
//          'Content-Type': 'application/json',
//          'Authorization': `Bearer ${localStorage.getItem('token') || ''}`
//        },
//        body: JSON.stringify(profileDto)
//      });
//
//      if (!response.ok) {
//        throw new Error(`HTTP error! status: ${response.status}`);
//      }
//
//      return await response.json();
//    } catch (error) {
//      console.error(`Error al actualizar perfil del usuario ${userId}:`, error);
//      throw new Error('No se pudo actualizar el perfil');
//    }
//  }
//}
//
//// Exportar una instancia única del servicio
//export const profileService = new ProfileService();