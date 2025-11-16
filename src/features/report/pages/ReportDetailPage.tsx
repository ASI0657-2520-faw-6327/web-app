import React from 'react';

export const ReportDetailPage = () => {
  // Datos de ejemplo del reporte (normalmente vendría de una API)
  const report = {
    id: 1,
    title: 'Reporte de Ventas Q1 2024',
    description: 'Análisis completo de las ventas del primer trimestre del año 2024, incluyendo métricas de rendimiento, comparativas con períodos anteriores y proyecciones.',
    type: 'Ventas',
    priority: 'Alta',
    status: 'Completado',
    createdDate: '2024-03-01',
    dueDate: '2024-03-15',
    completedDate: '2024-03-14',
    tags: ['mensual', 'importante', 'cliente'],
    author: 'Juan Pérez',
    department: 'Ventas',
    summary: {
      totalSales: '$125,000',
      growth: '+15%',
      customers: '1,250',
      avgOrderValue: '$100'
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completado': return '#28a745';
      case 'En progreso': return '#ffc107';
      case 'Pendiente': return '#dc3545';
      default: return '#6c757d';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Crítica': return '#dc3545';
      case 'Alta': return '#fd7e14';
      case 'Media': return '#ffc107';
      case 'Baja': return '#28a745';
      default: return '#6c757d';
    }
  };

  return (
    <div style={{ maxWidth: '900px', margin: '2rem auto', padding: '2rem' }}>
      {/* Header */}
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
          <h1 style={{ margin: '0', color: '#495057' }}>{report.title}</h1>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
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
            <span
              style={{
                padding: '0.25rem 0.75rem',
                backgroundColor: getPriorityColor(report.priority),
                color: 'white',
                borderRadius: '12px',
                fontSize: '0.8rem',
                fontWeight: 'bold'
              }}
            >
              {report.priority}
            </span>
          </div>
        </div>
        
        <p style={{ color: '#6c757d', fontSize: '1.1rem', lineHeight: '1.6' }}>
          {report.description}
        </p>
      </div>

      {/* Información del reporte */}
      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '1.5rem', 
        borderRadius: '8px', 
        border: '1px solid #dee2e6',
        marginBottom: '2rem'
      }}>
        <h3 style={{ marginTop: '0', marginBottom: '1rem' }}>Información del Reporte</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          <div>
            <strong>Tipo:</strong> {report.type}
          </div>
          <div>
            <strong>Autor:</strong> {report.author}
          </div>
          <div>
            <strong>Departamento:</strong> {report.department}
          </div>
          <div>
            <strong>Fecha de creación:</strong> {report.createdDate}
          </div>
          <div>
            <strong>Fecha límite:</strong> {report.dueDate}
          </div>
          <div>
            <strong>Fecha de finalización:</strong> {report.completedDate}
          </div>
        </div>
        
        {report.tags.length > 0 && (
          <div style={{ marginTop: '1rem' }}>
            <strong>Etiquetas:</strong>
            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
              {report.tags.map((tag, index) => (
                <span
                  key={index}
                  style={{
                    padding: '0.25rem 0.75rem',
                    backgroundColor: '#e9ecef',
                    color: '#495057',
                    borderRadius: '12px',
                    fontSize: '0.9rem'
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Resumen de métricas */}
      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '1.5rem', 
        borderRadius: '8px', 
        border: '1px solid #dee2e6',
        marginBottom: '2rem'
      }}>
        <h3 style={{ marginTop: '0', marginBottom: '1rem' }}>Resumen de Métricas</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem' }}>
          <div style={{ textAlign: 'center', padding: '1rem', backgroundColor: 'white', borderRadius: '4px' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#007bff' }}>
              {report.summary.totalSales}
            </div>
            <div style={{ fontSize: '0.9rem', color: '#6c757d' }}>Ventas Totales</div>
          </div>
          <div style={{ textAlign: 'center', padding: '1rem', backgroundColor: 'white', borderRadius: '4px' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#28a745' }}>
              {report.summary.growth}
            </div>
            <div style={{ fontSize: '0.9rem', color: '#6c757d' }}>Crecimiento</div>
          </div>
          <div style={{ textAlign: 'center', padding: '1rem', backgroundColor: 'white', borderRadius: '4px' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#17a2b8' }}>
              {report.summary.customers}
            </div>
            <div style={{ fontSize: '0.9rem', color: '#6c757d' }}>Clientes</div>
          </div>
          <div style={{ textAlign: 'center', padding: '1rem', backgroundColor: 'white', borderRadius: '4px' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#ffc107' }}>
              {report.summary.avgOrderValue}
            </div>
            <div style={{ fontSize: '0.9rem', color: '#6c757d' }}>Valor Promedio</div>
          </div>
        </div>
      </div>

      {/* Acciones */}
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <a
          href={`/reports/${report.id}/edit`}
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: '#ffc107',
            color: '#212529',
            textDecoration: 'none',
            borderRadius: '4px',
            fontWeight: 'bold'
          }}
        >
          Editar Reporte
        </a>
        
        <button
          onClick={() => window.print()}
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: '#17a2b8',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Imprimir
        </button>
        
        <button
          onClick={() => alert('Función de exportar no implementada')}
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: '#6f42c1',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Exportar PDF
        </button>
        
        <a
          href="/reports"
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: '#28a745',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '4px',
            fontWeight: 'bold'
          }}
        >
          Volver a Reportes
        </a>
      </div>
    </div>
  );
};