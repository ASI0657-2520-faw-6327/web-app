//import { useState } from 'react';
//import { Profile, ProfileDto } from '../types';
//import { profileService } from '../services/ProfileService';
//
//export const useCreateProfile = () => {
//  const [loading, setLoading] = useState(false);
//  const [error, setError] = useState<string | null>(null);
//
//  const createProfile = async (profileData: ProfileDto): Promise<Profile | null> => {
//    try {
//      setLoading(true);
//      setError(null);
//      const newProfile = await profileService.createProfile(profileData);
//      return newProfile;
//    } catch (err) {
//      const errorMessage = err instanceof Error ? err.message : 'Error al crear el perfil';
//      setError(errorMessage);
//      return null;
//    } finally {
//      setLoading(false);
//    }
//  };
//
//  return { createProfile, loading, error };
//};