import { useState, useEffect } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';
import { Tag } from 'primereact/tag';
import { DataView } from 'primereact/dataview';
import { Rating } from 'primereact/rating';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Skeleton } from 'primereact/skeleton';

interface Profile {
  id: string;
  userId: string;
  fullName: string;
  email: string;
  phone: string;
  userType: 'driver' | 'passenger' | 'both';
  rating: number;
  totalRides: number;
  verified: boolean;
  avatar?: string;
  bio?: string;
}

const mockProfiles: Profile[] = [
  {
    id: '1',
    userId: 'user1',
    fullName: 'Juan Pérez García',
    email: 'juan.perez@email.com',
    phone: '+52 55 1234 5678',
    userType: 'driver',
    rating: 4.8,
    totalRides: 156,
    verified: true,
    avatar: 'JP',
    bio: 'Conductor profesional con más de 5 años de experiencia. Me encanta conversar y hacer que cada viaje sea agradable.'
  },
  {
    id: '2',
    userId: 'user2',
    fullName: 'María González López',
    email: 'maria.gonzalez@email.com',
    phone: '+52 55 2345 6789',
    userType: 'passenger',
    rating: 4.9,
    totalRides: 89,
    verified: true,
    avatar: 'MG',
    bio: 'Pasajera frecuente que valora la puntualidad y la seguridad. Siempre puntual y respetuosa.'
  },
  {
    id: '3',
    userId: 'user3',
    fullName: 'Carlos Rodríguez Martínez',
    email: 'carlos.rodriguez@email.com',
    phone: '+52 55 3456 7890',
    userType: 'both',
    rating: 4.7,
    totalRides: 203,
    verified: false,
    avatar: 'CR',
    bio: 'Conductor y pasajero. Me adapto a cualquier situación y siempre busco la mejor ruta.'
  },
  {
    id: '4',
    userId: 'user4',
    fullName: 'Ana Martínez Sánchez',
    email: 'ana.martinez@email.com',
    phone: '+52 55 4567 8901',
    userType: 'driver',
    rating: 4.6,
    totalRides: 78,
    verified: true,
    avatar: 'AM',
    bio: 'Conduzco por las mañanas. Mi prioridad es la seguridad y el comfort de mis pasajeros.'
  },
  {
    id: '5',
    userId: 'user5',
    fullName: 'Luis Hernández Flores',
    email: 'luis.hernandez@email.com',
    phone: '+52 55 5678 9012',
    userType: 'passenger',
    rating: 5.0,
    totalRides: 45,
    verified: true,
    avatar: 'LH',
    bio: 'Pasajero tranquilo que disfruta de los viajes en silencio o con buena música.'
  }
];

export const ProfileListPage = () => {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [userTypeFilter, setUserTypeFilter] = useState<string>('all');
  const [sortOrder, setSortOrder] = useState<string>('name');

  const userTypeOptions = [
    { label: 'Todos', value: 'all' },
    { label: 'Conductores', value: 'driver' },
    { label: 'Pasajeros', value: 'passenger' },
    { label: 'Ambos', value: 'both' }
  ];

  const sortOptions = [
    { label: 'Nombre', value: 'name' },
    { label: 'Calificación', value: 'rating' },
    { label: 'Viajes', value: 'rides' }
  ];

  useEffect(() => {
    // Simular carga de datos
    setTimeout(() => {
      setProfiles(mockProfiles);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredProfiles = profiles.filter(profile => {
    const matchesSearch = profile.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        profile.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = userTypeFilter === 'all' || profile.userType === userTypeFilter;
    return matchesSearch && matchesType;
  }).sort((a, b) => {
    switch (sortOrder) {
      case 'rating':
        return b.rating - a.rating;
      case 'rides':
        return b.totalRides - a.totalRides;
      default:
        return a.fullName.localeCompare(b.fullName);
    }
  });

  const getUserTypeLabel = (userType: string) => {
    switch (userType) {
      case 'driver':
        return { label: 'Conductor', severity: 'success' as const };
      case 'passenger':
        return { label: 'Pasajero', severity: 'info' as const };
      case 'both':
        return { label: 'Conductor/Pasajero', severity: 'warning' as const };
      default:
        return { label: 'Usuario', severity: 'secondary' as const };
    }
  };

  const renderHeader = () => (
    <div className="flex flex-column md:flex-row gap-3 mb-4">
      <div className="p-inputgroup flex-1">
        <span className="p-inputgroup-addon">
          <i className="pi pi-search"></i>
        </span>
        <InputText
          placeholder="Buscar por nombre o email..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <Dropdown
        value={userTypeFilter}
        options={userTypeOptions}
        onChange={(e) => setUserTypeFilter(e.value)}
        placeholder="Filtrar por tipo"
        className="w-full md:w-12rem"
      />
      <Dropdown
        value={sortOrder}
        options={sortOptions}
        onChange={(e) => setSortOrder(e.value)}
        placeholder="Ordenar por"
        className="w-full md:w-12rem"
      />
    </div>
  );

  const renderProfileCard = (profile: Profile) => (
    <Card key={profile.id} className="mb-3 shadow-2 hover:shadow-4 transition-all transition-duration-300">
      <div className="flex flex-column md:flex-row gap-4">
        <div className="flex flex-column align-items-center md:align-items-start gap-2" style={{ minWidth: '120px' }}>
          <Avatar
            label={profile.avatar}
            size="xlarge"
            shape="circle"
            className="bg-primary text-xl"
          />
        </div>
        
        <div className="flex-1">
          <div className="flex flex-column md:flex-row justify-content-between align-items-start gap-2 mb-2">
            <div>
              <h3 className="text-xl font-semibold text-900 mb-1">{profile.fullName}</h3>
              <p className="text-600 mb-2">{profile.email}</p>
              <p className="text-600 mb-2">{profile.phone}</p>
              {profile.bio && (
                <p className="text-700 mb-2" style={{ fontSize: '0.9rem' }}>{profile.bio}</p>
              )}
            </div>
            <div className="flex flex-column align-items-end gap-2">
              <Tag 
                value={getUserTypeLabel(profile.userType).label} 
                severity={getUserTypeLabel(profile.userType).severity}
              />
              <div className="flex align-items-center gap-2">
                <Rating value={profile.rating} readOnly stars={5} cancel={false} />
                <span className="text-600 text-sm">({profile.rating})</span>
              </div>
            </div>
          </div>
          
          <div className="flex justify-content-between align-items-center pt-2 border-top-1 surface-border">
            <div className="flex align-items-center gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{profile.totalRides}</div>
                <div className="text-600 text-sm">Viajes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-500">
                  {Math.round((profile.rating / 5) * 100)}%
                </div>
                <div className="text-600 text-sm">Satisfacción</div>
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                label="Ver Perfil"
                icon="pi pi-eye"
                className="p-button-outlined p-button-primary p-button-sm"
                onClick={() => console.log('Ver perfil:', profile.id)}
              />
              <Button
                label="Contactar"
                icon="pi pi-envelope"
                className="p-button-success p-button-sm"
                onClick={() => console.log('Contactar:', profile.email)}
              />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );

  const renderSkeleton = () => (
    <Card className="mb-3">
      <div className="flex gap-4">
        <Skeleton shape="circle" size="4rem"></Skeleton>
        <div className="flex-1">
          <Skeleton width="100%" className="mb-2"></Skeleton>
          <Skeleton width="75%"></Skeleton>
        </div>
      </div>
    </Card>
  );

  return (
    <div className="surface-ground min-h-screen py-4">
      <div className="surface-card p-4 shadow-2 border-round w-full lg:w-10 mx-auto">
        <div className="mb-4">
          <h1 className="text-3xl font-bold text-900 mb-2">
            <i className="pi pi-users mr-2"></i>
            Lista de Perfiles
          </h1>
          <p className="text-600 m-0">
            Descubre y conecta con otros usuarios de la plataforma
          </p>
        </div>

        {renderHeader()}

        {loading ? (
          <div>
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index}>{renderSkeleton()}</div>
            ))}
          </div>
        ) : (
          <DataView 
            value={filteredProfiles}
            itemTemplate={renderProfileCard}
            layout="list"
            emptyMessage="No se encontraron perfiles que coincidan con tu búsqueda."
          />
        )}

        {!loading && filteredProfiles.length === 0 && (
          <div className="text-center py-8">
            <i className="pi pi-search text-4xl text-400 mb-3"></i>
            <p className="text-600 text-lg">No se encontraron resultados</p>
            <p className="text-500">Intenta ajustar tus filtros de búsqueda</p>
          </div>
        )}
      </div>
    </div>
  );
};