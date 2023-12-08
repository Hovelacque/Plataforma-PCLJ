import { SafeResourceUrl } from "@angular/platform-browser"

export interface AlunoTrabalhoOutput {
    id: number,
    nome: string,  
    pastaDeArquivos: string,  
    url: SafeResourceUrl
}

export interface TrabalhoOutput {
    id: number,
    nome: string,
    descricao: string,
    cor: string,
    pastaDeArquivos: string,
    alunos: AlunoTrabalhoOutput[]
}
