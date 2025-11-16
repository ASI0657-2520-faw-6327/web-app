import { Routes, Route, Navigate } from 'react-router-dom';
import { ProfileViewPage } from '../pages/ProfileViewPage';
import { ProfileEditPage } from '../pages/ProfileEditPage';
import { ProfileSettingsPage } from '../pages/ProfileSettingsPage';
import { ProfileListPage } from '../pages/ProfileListPage';

export const ProfileRouter = () => {
  return (
    <Routes>
      {/* Ruta principal del perfil */}
      <Route path="/" element={<ProfileViewPage />} />
      
      {/* Rutas específicas del perfil */}
      <Route path="/edit" element={<ProfileEditPage />} />
      <Route path="/settings" element={<ProfileSettingsPage />} />
      
      {/* Ruta para la lista de perfiles */}
      <Route path="/profiles" element={<ProfileListPage />} />
      
      {/* Ruta para páginas no encontradas dentro de Profile */}
      <Route path="*" element={<Navigate to="/profile" replace />} />
    </Routes>
  );
};