import React, { useState } from 'react';

export const ReportCreatePage = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    type: 'Ventas',
    priority: 'Media',
    dueDate: '',
    tags: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para crear el reporte
    console.log('New report:', formData);
    alert('Reporte creado correctamente');
    // Redireccionar a la lista de reportes
    window.location.href = '/reports';
  };

  return (
    <div style={{ maxWidth: '600px', margin: '2rem auto', padding: '2rem' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Crear Nuevo Reporte</h1>
      
      <form onSubmit={handleSubmit} style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '2rem', 
        borderRadius: '8px', 
        border: '1px solid #dee2e6' 
      }}>
        <div style={{ marginBottom: '1.5rem' }}>
          <label htmlFor="title" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
            Título del reporte: *
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            style={{ 
              width: '100%', 
              padding: '0.75rem', 
              border: '1px solid #ced4da', 
              borderRadius: '4px',
              fontSize: '1rem'
            }}
            placeholder="Ej: Reporte de Ventas Q1 2024"
          />
        </div>
        
        <div style={{ marginBottom: '1.5rem' }}>
          <label htmlFor="description" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
            Descripción: *
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows={4}
            style={{ 
              width: '100%', 
              padding: '0.75rem', 
              border: '1px solid #ced4da', 
              borderRadius: '4px',
              fontSize: '1rem',
              resize: 'vertical'
            }}
            placeholder="Describe el propósito y contenido del reporte..."
          />
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
          <div>
            <label htmlFor="type" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
              Tipo de reporte:
            </label>
            <select
              id="type"
              name="type"
              value={formData.type}
              onChange={handleChange}
              style={{ 
                width: '100%', 
                padding: '0.75rem', 
                border: '1px solid #ced4da', 
                borderRadius: '4px',
                fontSize: '1rem'
              }}
            >
              <option value="Ventas">Ventas</option>
              <option value="Usuarios">Usuarios</option>
              <option value="Técnico">Técnico</option>
              <option value="Financiero">Financiero</option>
              <option value="Marketing">Marketing</option>
              <option value="Operaciones">Operaciones</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="priority" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
              Prioridad:
            </label>
            <select
              id="priority"
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              style={{ 
                width: '100%', 
                padding: '0.75rem', 
                border: '1px solid #ced4da', 
                borderRadius: '4px',
                fontSize: '1rem'
              }}
            >
              <option value="Baja">Baja</option>
              <option value="Media">Media</option>
              <option value="Alta">Alta</option>
              <option value="Crítica">Crítica</option>
            </select>
          </div>
        </div>
        
        <div style={{ marginBottom: '1.5rem' }}>
          <label htmlFor="dueDate" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
            Fecha límite:
          </label>
          <input
            type="date"
            id="dueDate"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleChange}
            style={{ 
              width: '100%', 
              padding: '0.75rem', 
              border: '1px solid #ced4da', 
              borderRadius: '4px',
              fontSize: '1rem'
            }}
          />
        </div>
        
        <div style={{ marginBottom: '2rem' }}>
          <label htmlFor="tags" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
            Etiquetas:
          </label>
          <input
            type="text"
            id="tags"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            style={{ 
              width: '100%', 
              padding: '0.75rem', 
              border: '1px solid #ced4da', 
              borderRadius: '4px',
              fontSize: '1rem'
            }}
            placeholder="Ej: mensual, importante, cliente (separadas por comas)"
          />
          <small style={{ color: '#6c757d', fontSize: '0.9rem' }}>
            Separa las etiquetas con comas para facilitar la búsqueda
          </small>
        </div>
        
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            type="submit"
            style={{
              padding: '0.75rem 2rem',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: '1rem'
            }}
          >
            Crear Reporte
          </button>
          
          <a
            href="/reports"
            style={{
              padding: '0.75rem 2rem',
              backgroundColor: '#6c757d',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '4px',
              fontWeight: 'bold',
              fontSize: '1rem'
            }}
          >
            Cancelar
          </a>
        </div>
      </form>
    </div>
  );
};