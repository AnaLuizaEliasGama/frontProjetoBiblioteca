import { Fornecedor } from "../fornecedor/fornecedor.model"

export interface Product{
    proId?: number
    proNome: string
    proPrecoCusto: number
    proPrecoVenda: number
    fornecedor?: Fornecedor
}