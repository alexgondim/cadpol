import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Login } from './pages/Login';
import { NovaOcorrencia } from './pages/NovaOcorrencia';
import { ListaOcorrencias } from './pages/ListaOcorrencias';
import { EditarOcorrencia } from './pages/EditarOcorrencia';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/ocorrencias" element={<ListaOcorrencias />} />
        <Route path="/nova-ocorrencia" element={<NovaOcorrencia />} />
        <Route path="/editar-ocorrencia/:id" element={<EditarOcorrencia />} />
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;