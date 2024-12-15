import type { PoliceReport } from '../types';

export const getOcorrencias = (): PoliceReport[] => {
  return JSON.parse(localStorage.getItem('ocorrencias') || '[]');
};

export const salvarOcorrencia = (ocorrencia: PoliceReport): void => {
  const ocorrencias = getOcorrencias();
  localStorage.setItem('ocorrencias', JSON.stringify([...ocorrencias, ocorrencia]));
};

export const atualizarOcorrencia = (ocorrenciaAtualizada: PoliceReport): void => {
  const ocorrencias = getOcorrencias();
  const ocorrenciasAtualizadas = ocorrencias.map(ocorrencia => 
    ocorrencia.id === ocorrenciaAtualizada.id ? ocorrenciaAtualizada : ocorrencia
  );
  localStorage.setItem('ocorrencias', JSON.stringify(ocorrenciasAtualizadas));
};

export const excluirOcorrencia = (id: string): void => {
  const ocorrencias = getOcorrencias();
  const ocorrenciasAtualizadas = ocorrencias.filter(ocorrencia => ocorrencia.id !== id);
  localStorage.setItem('ocorrencias', JSON.stringify(ocorrenciasAtualizadas));
};

export const atualizarStatusOcorrencia = (id: string, novoStatus: string): void => {
  const ocorrencias = getOcorrencias();
  const ocorrenciasAtualizadas = ocorrencias.map(ocorrencia => 
    ocorrencia.id === id ? { ...ocorrencia, status: novoStatus } : ocorrencia
  );
  localStorage.setItem('ocorrencias', JSON.stringify(ocorrenciasAtualizadas));
};

export const isAutenticado = (): boolean => {
  return localStorage.getItem('isAuthenticated') === 'true';
};

export const setAutenticado = (valor: boolean): void => {
  localStorage.setItem('isAuthenticated', String(valor));
};