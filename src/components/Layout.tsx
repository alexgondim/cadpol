import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut } from 'lucide-react';
import { isAutenticado, setAutenticado } from '../utils/storage';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setAutenticado(false);
    navigate('/login');
  };

  if (!isAutenticado()) {
    navigate('/login');
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-blue-800 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center space-x-8">
              <h1 className="text-xl font-bold">Sistema de Ocorrências</h1>
              <div className="hidden md:flex space-x-4">
                <button
                  onClick={() => navigate('/ocorrencias')}
                  className="px-3 py-2 rounded-md hover:bg-blue-700 transition"
                >
                  Lista de Ocorrências
                </button>
                <button
                  onClick={() => navigate('/nova-ocorrencia')}
                  className="px-3 py-2 rounded-md hover:bg-blue-700 transition"
                >
                  Nova Ocorrência
                </button>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
              <LogOut size={20} />
              <span>Sair</span>
            </button>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
}