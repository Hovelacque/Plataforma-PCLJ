import { SafeResourceUrl } from "@angular/platform-browser"

export interface AlunoTrabalhoOutput {
    id: number,
    nome: string,
    pastaDeArquivos: SafeResourceUrl
}

export interface TrabalhoOutput {
    id: number,
    nome: string,
    descricao: string,
    cor: string,
    alunos: AlunoTrabalhoOutput[]
}
