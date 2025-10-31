// src/app/models/cliente.model.ts
export interface Cliente {
  id?: number;      // << ADICIONE ISTO   // ID gerado pelo banco (auto incremento) 
  version?: number; // adicionado
  cliNome: string;     // Nome completo do cliente
  cliCpf: string;      // CPF do cliente
  cliRg?: string;      // RG do cliente (opcional)
  cliDataNascimento?: string; // Data de nascimento (formato: YYYY-MM-DD)
  cliSexo?: string;    // Sexo do cliente (ex: "M", "F", "Outro")
  cliObservacoes?: string; // Observações adicionais
  cliAtivo: boolean;   // Indica se o cliente está ativo
  cliDataCadastro?: string; // Data de cadastro (formato: YYYY-MM-DD)
  
  // Relacionamentos (opcionais)
  endereco?: Endereco;
  contato?: Contato;
}

export interface Endereco {
  idEndereco?: number;
  logradouro: string;
  numero: string;
  complemento?: string;
  bairro: string;
  cidade: string;
  estado: string;
  cep: string;
  pais: string;
}

export interface Contato {
  idContato?: number;
  email: string;
  telefone: string;
  whatsapp: string;
}