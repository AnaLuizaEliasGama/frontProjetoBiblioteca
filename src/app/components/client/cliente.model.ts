// ARQUIVO: cliente.model.ts
import { Contato } from './contato.model';
import { Endereco } from './endereco.model';

export interface Cliente {
    id?: number; 
    
    // Campos Primitivos (usando os nomes do @JsonProperty)
   
    nome: string; // Mapeia para cliNome
    cpf: string; // Mapeia para cliCpf
    rg: string;
    
    // Datas e status
    dataNascimento: string; // Formato 'yyyy-MM-dd'
    sexo: string;
    ativo?: boolean; // É opcional no POST pois tem valor default no backend
    dataCadastro?: string; // Gerado no backend, opcional no envio
    
    // Campos Opcionais
    observacoes?: string; 
    
    // Relacionamentos
    endereco: Endereco;
    contato: Contato;
}