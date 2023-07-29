import { Injectable } from "@angular/core";
import { MatPaginatorIntl } from "@angular/material/paginator";
import { Subject } from "rxjs";

@Injectable()
export class CustomPaginatorComponent implements MatPaginatorIntl {
  changes = new Subject<void>();

  firstPageLabel = 'Primeira página';
  itemsPerPageLabel = "Itens por página";
  lastPageLabel = "Última página";
  nextPageLabel = 'Próxima página';
  previousPageLabel = 'Página anterior';

  getRangeLabel(page: number, pageSize: number, length: number): string {
    const amountPages = Math.ceil(length / pageSize);
    return `Página ${page + 1} de ${amountPages}`;
  }
}
