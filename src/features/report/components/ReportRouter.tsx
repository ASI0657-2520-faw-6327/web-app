import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ReportListPage } from '../pages/ReportListPage';
import { ReportCreatePage } from '../pages/ReportCreatePage';
import { ReportDetailPage } from '../pages/ReportDetailPage';

export const ReportRouter = () => {
  return (
    <Routes>
      {/* Redirección por defecto a la lista de reportes */}
      <Route path="/" element={<Navigate to="/reports/list" replace />} />
      
      {/* Lista de reportes */}
      <Route path="/list" element={<ReportListPage />} />
      
      {/* Crear nuevo reporte */}
      <Route path="/create" element={<ReportCreatePage />} />
      
      {/* Ver detalle de reporte específico */}
      <Route path="/:id" element={<ReportDetailPage />} />
      
      {/* Editar reporte específico (reutiliza el componente de creación) */}
      <Route path="/:id/edit" element={<ReportCreatePage />} />
      
      {/* Ruta catch-all para rutas no encontradas dentro de reports */}
      <Route path="*" element={<Navigate to="/reports/list" replace />} />
    </Routes>
  );
};