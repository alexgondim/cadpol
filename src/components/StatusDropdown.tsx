import React from 'react';
import { STATUS_OCORRENCIA } from '../constants/reportTypes';
import { atualizarStatusOcorrencia } from '../utils/storage';

interface StatusDropdownProps {
  id: string;
  currentStatus: string;
  onStatusChange: () => void;
}

export function StatusDropdown({ id, currentStatus, onStatusChange }: StatusDropdownProps) {
  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const novoStatus = e.target.value;
    atualizarStatusOcorrencia(id, novoStatus);
    onStatusChange();
  };

  return (
    <select
      value={currentStatus}
      onChange={handleStatusChange}
      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm"
    >
      {Object.entries(STATUS_OCORRENCIA).map(([value, { label }]) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
}