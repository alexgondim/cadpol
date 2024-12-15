export interface User {
  id: string;
  email: string;
  name: string;
}

export interface PoliceReport {
  id: string;
  title: string;
  description: string;
  location: string;
  date: string;
  reportedBy: string;
  status: 'pendente' | 'investigando' | 'concluido';
  type: string;
}