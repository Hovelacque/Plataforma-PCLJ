import { Injectable } from "@angular/core";

@Injectable()
export class TipoUsuario {
    static Administrador: number = 1;
    static Professor: number = 2;
    static Aluno: number = 3;

    translate(index: number): string {
        switch (index) {
            case 1: return "Administrador";
            case 2: return "Professor";
            case 3: return "Aluno";
        }
        return "";
    }
}
