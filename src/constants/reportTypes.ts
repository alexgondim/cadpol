export const TIPOS_OCORRENCIA = [
  { value: 'furto', label: 'Furto' },
  { value: 'roubo', label: 'Roubo' },
  { value: 'agressao', label: 'Agressão' },
  { value: 'vandalismo', label: 'Vandalismo' },
  { value: 'transito', label: 'Infração de Trânsito' },
  { value: 'outro', label: 'Outro' }
] as const;

export const STATUS_OCORRENCIA = {
  pendente: {
    label: 'Pendente',
    color: 'bg-yellow-100 text-yellow-800'
  },
  investigando: {
    label: 'Em Investigação',
    color: 'bg-blue-100 text-blue-800'
  },
  concluido: {
    label: 'Concluído',
    color: 'bg-green-100 text-green-800'
  }
} as const;