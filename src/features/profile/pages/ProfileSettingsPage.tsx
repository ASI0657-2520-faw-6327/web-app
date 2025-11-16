import { useState } from 'react';
import { InputSwitch } from 'primereact/inputswitch';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';
import { Panel } from 'primereact/panel';
import { Message } from 'primereact/message';

export const ProfileSettingsPage = () => {
  const [settings, setSettings] = useState({
    notifications: {
      email: true,
      push: false,
      sms: true,
      rideReminders: true,
      promotional: false
    },
    privacy: {
      profileVisible: true,
      showEmail: false,
      showPhone: false,
      showRating: true
    },
    preferences: {
      language: { name: 'Español', code: 'es' },
      theme: { name: 'Claro', code: 'light' },
      timezone: { name: 'America/Mexico_City', code: 'America/Mexico_City' },
      currency: { name: 'USD - Dólar Americano', code: 'USD' }
    }
  });

  const [hasChanges, setHasChanges] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const languages = [
    { name: 'Español', code: 'es' },
    { name: 'English', code: 'en' },
    { name: 'Français', code: 'fr' },
    { name: 'Português', code: 'pt' }
  ];

  const themes = [
    { name: 'Claro', code: 'light' },
    { name: 'Oscuro', code: 'dark' },
    { name: 'Automático', code: 'auto' }
  ];

  const timezones = [
    { name: 'America/Mexico_City', code: 'America/Mexico_City' },
    { name: 'America/New_York', code: 'America/New_York' },
    { name: 'America/Los_Angeles', code: 'America/Los_Angeles' },
    { name: 'Europe/Madrid', code: 'Europe/Madrid' }
  ];

  const currencies = [
    { name: 'USD - Dólar Americano', code: 'USD' },
    { name: 'MXN - Peso Mexicano', code: 'MXN' },
    { name: 'EUR - Euro', code: 'EUR' }
  ];

  const handleNotificationChange = (key: string) => {
    setSettings(prev => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [key]: !prev.notifications[key as keyof typeof prev.notifications]
      }
    }));
    setHasChanges(true);
  };

  const handlePrivacyChange = (key: string) => {
    setSettings(prev => ({
      ...prev,
      privacy: {
        ...prev.privacy,
        [key]: !prev.privacy[key as keyof typeof prev.privacy]
      }
    }));
    setHasChanges(true);
  };

  const handlePreferenceChange = (field: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        [field]: value
      }
    }));
    setHasChanges(true);
  };

  const handleSave = () => {
    console.log('Settings saved:', settings);
    setHasChanges(false);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleReset = () => {
    setSettings({
      notifications: {
        email: true,
        push: false,
        sms: true,
        rideReminders: true,
        promotional: false
      },
      privacy: {
        profileVisible: true,
        showEmail: false,
        showPhone: false,
        showRating: true
      },
      preferences: {
        language: { name: 'Español', code: 'es' },
        theme: { name: 'Claro', code: 'light' },
        timezone: { name: 'America/Mexico_City', code: 'America/Mexico_City' },
        currency: { name: 'USD - Dólar Americano', code: 'USD' }
      }
    });
    setHasChanges(true);
  };

  const notificationPanelHeader = (
    <div className="flex align-items-center gap-2">
      <i className="pi pi-bell text-2xl text-primary"></i>
      <span className="font-semibold text-lg">Notificaciones</span>
    </div>
  );

  const privacyPanelHeader = (
    <div className="flex align-items-center gap-2">
      <i className="pi pi-shield text-2xl text-primary"></i>
      <span className="font-semibold text-lg">Privacidad</span>
    </div>
  );

  const preferencesPanelHeader = (
    <div className="flex align-items-center gap-2">
      <i className="pi pi-cog text-2xl text-primary"></i>
      <span className="font-semibold text-lg">Preferencias</span>
    </div>
  );

  return (
    <div className="surface-ground min-h-screen py-4">
      <div className="surface-card p-4 shadow-2 border-round w-full lg:w-8 mx-auto">
        <div className="mb-4">
          <h1 className="text-2xl font-bold text-900 mb-2">
            <i className="pi pi-cog mr-2"></i>
            Configuración de Perfil
          </h1>
          <p className="text-600 m-0">Personaliza tu experiencia en la plataforma</p>
        </div>

        {showSuccess && (
          <div className="mb-4">
            <Message 
              severity="success" 
              text="Configuración guardada exitosamente" 
              className="w-full"
            />
          </div>
        )}

        <div className="grid">
          <div className="col-12">
            <Panel header={notificationPanelHeader} className="mb-4">
              <div className="grid">
                <div className="col-12 md:col-6">
                  <div className="field">
                    <div className="flex align-items-center justify-content-between mb-3">
                      <div>
                        <label className="block text-900 font-medium mb-1">Email</label>
                        <small className="text-600">Recibir notificaciones por correo electrónico</small>
                      </div>
                      <InputSwitch 
                        checked={settings.notifications.email} 
                        onChange={() => handleNotificationChange('email')}
                      />
                    </div>
                    
                    <div className="flex align-items-center justify-content-between mb-3">
                      <div>
                        <label className="block text-900 font-medium mb-1">Push</label>
                        <small className="text-600">Notificaciones en el navegador</small>
                      </div>
                      <InputSwitch 
                        checked={settings.notifications.push} 
                        onChange={() => handleNotificationChange('push')}
                      />
                    </div>
                    
                    <div className="flex align-items-center justify-content-between">
                      <div>
                        <label className="block text-900 font-medium mb-1">SMS</label>
                        <small className="text-600">Mensajes de texto importantes</small>
                      </div>
                      <InputSwitch 
                        checked={settings.notifications.sms} 
                        onChange={() => handleNotificationChange('sms')}
                      />
                    </div>
                  </div>
                </div>
                
                <div className="col-12 md:col-6">
                  <div className="field">
                    <div className="flex align-items-center justify-content-between mb-3">
                      <div>
                        <label className="block text-900 font-medium mb-1">Recordatorios de viaje</label>
                        <small className="text-600">Alertas antes de tus viajes programados</small>
                      </div>
                      <InputSwitch 
                        checked={settings.notifications.rideReminders} 
                        onChange={() => handleNotificationChange('rideReminders')}
                      />
                    </div>
                    
                    <div className="flex align-items-center justify-content-between">
                      <div>
                        <label className="block text-900 font-medium mb-1">Promociones</label>
                        <small className="text-600">Ofertas y descuentos especiales</small>
                      </div>
                      <InputSwitch 
                        checked={settings.notifications.promotional} 
                        onChange={() => handleNotificationChange('promotional')}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Panel>
          </div>

          <div className="col-12">
            <Panel header={privacyPanelHeader} className="mb-4">
              <div className="grid">
                <div className="col-12 md:col-6">
                  <div className="field">
                    <div className="flex align-items-center justify-content-between mb-3">
                      <div>
                        <label className="block text-900 font-medium mb-1">Perfil visible</label>
                        <small className="text-600">Otros usuarios pueden ver tu perfil</small>
                      </div>
                      <InputSwitch 
                        checked={settings.privacy.profileVisible} 
                        onChange={() => handlePrivacyChange('profileVisible')}
                      />
                    </div>
                    
                    <div className="flex align-items-center justify-content-between mb-3">
                      <div>
                        <label className="block text-900 font-medium mb-1">Mostrar email</label>
                        <small className="text-600">Tu email es visible en el perfil</small>
                      </div>
                      <InputSwitch 
                        checked={settings.privacy.showEmail} 
                        onChange={() => handlePrivacyChange('showEmail')}
                      />
                    </div>
                    
                    <div className="flex align-items-center justify-content-between">
                      <div>
                        <label className="block text-900 font-medium mb-1">Mostrar teléfono</label>
                        <small className="text-600">Tu número es visible en el perfil</small>
                      </div>
                      <InputSwitch 
                        checked={settings.privacy.showPhone} 
                        onChange={() => handlePrivacyChange('showPhone')}
                      />
                    </div>
                  </div>
                </div>
                
                <div className="col-12 md:col-6">
                  <div className="field">
                    <div className="flex align-items-center justify-content-between">
                      <div>
                        <label className="block text-900 font-medium mb-1">Mostrar calificación</label>
                        <small className="text-600">Tu valoración es pública</small>
                      </div>
                      <InputSwitch 
                        checked={settings.privacy.showRating} 
                        onChange={() => handlePrivacyChange('showRating')}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Panel>
          </div>

          <div className="col-12">
            <Panel header={preferencesPanelHeader} className="mb-4">
              <div className="grid">
                <div className="col-12 md:col-6">
                  <div className="field">
                    <label className="block text-900 font-medium mb-2">Idioma</label>
                    <Dropdown 
                      value={settings.preferences.language}
                      options={languages}
                      optionLabel="name"
                      placeholder="Selecciona un idioma"
                      className="w-full"
                      onChange={(e) => handlePreferenceChange('language', e.value)}
                    />
                  </div>
                  
                  <div className="field">
                    <label className="block text-900 font-medium mb-2">Tema</label>
                    <Dropdown 
                      value={settings.preferences.theme}
                      options={themes}
                      optionLabel="name"
                      placeholder="Selecciona un tema"
                      className="w-full"
                      onChange={(e) => handlePreferenceChange('theme', e.value)}
                    />
                  </div>
                </div>
                
                <div className="col-12 md:col-6">
                  <div className="field">
                    <label className="block text-900 font-medium mb-2">Zona Horaria</label>
                    <Dropdown 
                      value={settings.preferences.timezone}
                      options={timezones}
                      optionLabel="name"
                      placeholder="Selecciona zona horaria"
                      className="w-full"
                      onChange={(e) => handlePreferenceChange('timezone', e.value)}
                    />
                  </div>
                  
                  <div className="field">
                    <label className="block text-900 font-medium mb-2">Moneda</label>
                    <Dropdown 
                      value={settings.preferences.currency}
                      options={currencies}
                      optionLabel="name"
                      placeholder="Selecciona moneda"
                      className="w-full"
                      onChange={(e) => handlePreferenceChange('currency', e.value)}
                    />
                  </div>
                </div>
              </div>
            </Panel>
          </div>

          <div className="col-12">
            <Divider />
            <div className="flex flex-wrap gap-2 justify-content-end">
              <Button 
                label="Restablecer" 
                icon="pi pi-refresh"
                className="p-button-outlined p-button-warning"
                onClick={handleReset}
                disabled={!hasChanges}
              />
              <Button 
                label="Guardar Cambios" 
                icon="pi pi-check"
                className="p-button-success"
                onClick={handleSave}
                disabled={!hasChanges}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};