//import { useState } from 'react';
//import { Profile, ProfileDto } from '../types';
//import { profileService } from '../services/ProfileService';
//
//export const useUpdateProfile = () => {
//  const [loading, setLoading] = useState(false);
//  const [error, setError] = useState<string | null>(null);
//
//  const updateProfile = async (userId: string, profileData: ProfileDto): Promise<Profile | null> => {
//    try {
//      setLoading(true);
//      setError(null);
//      const updatedProfile = await profileService.updateProfile(userId, profileData);
//      return updatedProfile;
//    } catch (err) {
//      const errorMessage = err instanceof Error ? err.message : 'Error al actualizar el perfil';
//      setError(errorMessage);
//      return null;
//    } finally {
//      setLoading(false);
//    }
//  };
//
//  return { updateProfile, loading, error };
//};