//import { useState, useEffect } from 'react';
//import { Profile } from '../types';
//import { profileService } from '../services/ProfileService';
//
//export const useProfile = (userId: string) => {
//  const [profile, setProfile] = useState<Profile | null>(null);
//  const [loading, setLoading] = useState(true);
//  const [error, setError] = useState<string | null>(null);
//
//  useEffect(() => {
//    const fetchProfile = async () => {
//      try {
//        setLoading(true);
//        setError(null);
//        const profileData = await profileService.getProfileByUserId(userId);
//        setProfile(profileData);
//      } catch (err) {
//        setError(err instanceof Error ? err.message : 'Error al cargar el perfil');
//      } finally {
//        setLoading(false);
//      }
//    };
//
//    if (userId) {
//      fetchProfile();
//    }
//  }, [userId]);
//
//  const refetch = async () => {
//    try {
//      setLoading(true);
//      setError(null);
//      const profileData = await profileService.getProfileByUserId(userId);
//      setProfile(profileData);
//    } catch (err) {
//      setError(err instanceof Error ? err.message : 'Error al cargar el perfil');
//    } finally {
//      setLoading(false);
//    }
//  };
//
//  return { profile, loading, error, refetch };
//};