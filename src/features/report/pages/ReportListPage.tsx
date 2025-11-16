import React from 'react';

export const ReportListPage = () => {
  // Datos de ejemplo de reportes
  const reports = [
    {
      id: 1,
      title: 'Reporte de Ventas Q1 2024',
      description: 'Análisis completo de las ventas del primer trimestre',
      date: '2024-03-15',
      status: 'Completado',
      type: 'Ventas'
    },
    {
      id: 2,
      title: 'Reporte de Usuarios Activos',
      description: 'Estadísticas de usuarios activos en la plataforma',
      date: '2024-03-10',
      status: 'En progreso',
      type: 'Usuarios'
    },
    {
      id: 3,
      title: 'Análisis de Rendimiento',
      description: 'Métricas de rendimiento del sistema',
      date: '2024-03-05',
      status: 'Pendiente',
      type: 'Técnico'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completado': return '#28a745';
      case 'En progreso': return '#ffc107';
      case 'Pendiente': return '#dc3545';
      default: return '#6c757d';
    }
  };

  return (
    <div style={{ maxWidth: '800px', margin: '2rem auto', padding: '2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1 style={{ margin: '0' }}>Reportes</h1>
        <a
          href="/reports/create"
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: '#007bff',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '4px',
            fontWeight: 'bold'
          }}
        >
          Crear Nuevo Reporte
        </a>
      </div>

      <div style={{ display: 'grid', gap: '1rem' }}>
        {reports.map((report) => (
          <div
            key={report.id}
            style={{
              backgroundColor: '#f8f9fa',
              padding: '1.5rem',
              borderRadius: '8px',
              border: '1px solid #dee2e6',
              transition: 'box-shadow 0.2s',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <div>
                <h3 style={{ margin: '0 0 0.5rem 0', color: '#495057' }}>
                  <a href={`/reports/${report.id}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                    {report.title}
                  </a>
                </h3>
                <p style={{ margin: '0', color: '#6c757d', fontSize: '0.9rem' }}>
                  {report.description}
                </p>
              </div>
              <span
                style={{
                  padding: '0.25rem 0.75rem',
                  backgroundColor: getStatusColor(report.status),
                  color: 'white',
                  borderRadius: '12px',
                  fontSize: '0.8rem',
                  fontWeight: 'bold'
                }}
              >
                {report.status}
              </span>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', gap: '1rem', fontSize: '0.9rem', color: '#6c757d' }}>
                <span><strong>Tipo:</strong> {report.type}</span>
                <span><strong>Fecha:</strong> {report.date}</span>
              </div>
              
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <a
                  href={`/reports/${report.id}`}
                  style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: '#17a2b8',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '4px',
                    fontSize: '0.9rem'
                  }}
                >
                  Ver
                </a>
                <a
                  href={`/reports/${report.id}/edit`}
                  style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: '#ffc107',
                    color: '#212529',
                    textDecoration: 'none',
                    borderRadius: '4px',
                    fontSize: '0.9rem'
                  }}
                >
                  Editar
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {reports.length === 0 && (
        <div style={{ textAlign: 'center', padding: '3rem', color: '#6c757d' }}>
          <h3>No hay reportes disponibles</h3>
          <p>Crea tu primer reporte para comenzar.</p>
        </div>
      )}

      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <a
          href="/"
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: '#28a745',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '4px',
            fontWeight: 'bold'
          }}
        >
          Volver al Inicio
        </a>
      </div>
    </div>
  );
};