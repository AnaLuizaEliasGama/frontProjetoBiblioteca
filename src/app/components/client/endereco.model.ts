// ARQUIVO: endereco.model.ts
export interface Endereco {
    id?: number;
    cep: string;
    logradouro: string;
    numero: string;
    bairro: string;
    cidade: string;
    estado: string;
    complemento?: string;
    // Adicione outros campos de endereço se houverem
}