import React from 'react';
import { TabMenu } from 'primereact/tabmenu';
import type { MenuItem } from 'primereact/menuitem';
import { useNavigate, useLocation } from 'react-router-dom';

interface ProfileNavigationProps {
  userId?: string;
}

export const ProfileNavigation: React.FC<ProfileNavigationProps> = ({ userId }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const items: MenuItem[] = [
    {
      label: 'Mi Perfil',
      icon: 'pi pi-user',
      command: () => navigate('/profile')
    },
    {
      label: 'Editar Perfil',
      icon: 'pi pi-user-edit',
      command: () => navigate('/profile/edit')
    },
    {
      label: 'Configuración',
      icon: 'pi pi-cog',
      command: () => navigate('/profile/settings')
    },
    {
      label: 'Buscar Usuarios',
      icon: 'pi pi-search',
      command: () => navigate('/profiles')
    }
  ];

  const getActiveIndex = () => {
    const path = location.pathname;
    if (path === '/profile') return 0;
    if (path === '/profile/edit') return 1;
    if (path === '/profile/settings') return 2;
    if (path === '/profiles') return 3;
    return 0;
  };

  return (
    <div className="surface-card shadow-2 border-round mb-4">
      <TabMenu 
        model={items} 
        activeIndex={getActiveIndex()}
        className="border-noround"
      />
    </div>
  );
};