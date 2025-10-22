// ARQUIVO: cliente.model.ts
import { Contato } from './contato.model';
import { Endereco } from './endereco.model';

export interface Cliente {
    id?: number;          // ID gerado pelo banco
    cliId: string;       // Identificador único do cliente
    cliNome: string;     // Nome completo do cliente
    cliCpf: string;      // CPF do cliente
    cliRg?: string;      // RG do cliente (opcional)
    cliDataNascimento?: string; // Data de nascimento (formato: YYYY-MM-DD)
    cliSexo?: string;    // Sexo do cliente
    cliObservacoes?: string; // Observações adicionais
    cliAtivo: boolean;   // Indica se o cliente está ativo
    cliDataCadastro?: string; // Data de cadastro
}