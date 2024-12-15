import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, Plus, Pencil, Trash2 } from 'lucide-react';
import { Layout } from '../components/Layout';
import { StatusDropdown } from '../components/StatusDropdown';
import { STATUS_OCORRENCIA, TIPOS_OCORRENCIA } from '../constants/reportTypes';
import { getOcorrencias, excluirOcorrencia } from '../utils/storage';
import type { PoliceReport } from '../types';

export function ListaOcorrencias() {
  const navigate = useNavigate();
  const [ocorrencias, setOcorrencias] = useState<PoliceReport[]>(getOcorrencias());

  const handleStatusChange = () => {
    setOcorrencias(getOcorrencias());
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Tem certeza que deseja excluir esta ocorrência?')) {
      excluirOcorrencia(id);
      setOcorrencias(getOcorrencias());
    }
  };

  const handleEdit = (id: string) => {
    navigate(`/editar-ocorrencia/${id}`);
  };

  return (
    <Layout>
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-semibold text-gray-900">Ocorrências Policiais</h1>
          <p className="mt-2 text-sm text-gray-700">
            Lista de todas as ocorrências registradas no sistema.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            onClick={() => navigate('/nova-ocorrencia')}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-800 hover:bg-blue-700"
          >
            <Plus className="mr-2 h-4 w-4" />
            Nova Ocorrência
          </button>
        </div>
      </div>

      <div className="mt-8 flex flex-col">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              {ocorrencias.length === 0 ? (
                <div className="flex flex-col items-center justify-center p-8 bg-white">
                  <FileText className="h-12 w-12 text-gray-400" />
                  <h3 className="mt-2 text-sm font-medium text-gray-900">Nenhuma ocorrência</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Comece registrando uma nova ocorrência policial.
                  </p>
                </div>
              ) : (
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Título
                      </th>
                      <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Tipo
                      </th>
                      <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Local
                      </th>
                      <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Data
                      </th>
                      <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Status
                      </th>
                      <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Ações
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {ocorrencias.map((ocorrencia) => (
                      <tr key={ocorrencia.id}>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                          {ocorrencia.title}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {TIPOS_OCORRENCIA.find(t => t.value === ocorrencia.type)?.label}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {ocorrencia.location}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {new Date(ocorrencia.date).toLocaleDateString('pt-BR')}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm">
                          <div className="w-40">
                            <StatusDropdown
                              id={ocorrencia.id}
                              currentStatus={ocorrencia.status}
                              onStatusChange={handleStatusChange}
                            />
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm">
                          <div className="flex space-x-2">
                            <button
                              onClick={() => handleEdit(ocorrencia.id)}
                              className="text-blue-600 hover:text-blue-900"
                            >
                              <Pencil className="h-5 w-5" />
                            </button>
                            <button
                              onClick={() => handleDelete(ocorrencia.id)}
                              className="text-red-600 hover:text-red-900"
                            >
                              <Trash2 className="h-5 w-5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}