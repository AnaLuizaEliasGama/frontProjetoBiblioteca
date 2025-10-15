export interface Emprestimo {
    // O 'id' é do backend e pode ser opcional ao criar um novo empréstimo
    id?: number; 
    
    // Datas. O back usa snake_case (data_devolucao), mas no front Angular/TS
    // é comum usar camelCase para propriedades (dataDevolucao).
    // Nota: O backend pode esperar o formato ISO string (Date) ou string.
    
    // data_devolucao (data prevista de devolução)
    dataDevolucao: string;
    
    // data_devolucao_real (data real de devolução)
    dataDevolucaoReal: string | null; // Pode ser nulo se não foi devolvido ainda
    
    // data_emprestimo
    dataEmprestimo: string;
    
    // status: String que define o estado do empréstimo (Ex: 'PENDENTE', 'DEVOLVIDO')
    status: string; 
    
    // valor_multa: Numérico (pode ser float ou number)
    valorMulta: number; 
    
    // Relações (chaves estrangeiras)
    // Usando 'number' para representar o ID da entidade relacionada
    clienteId: number; 
    livroId: number; 
}