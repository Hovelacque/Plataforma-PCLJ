import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { CustomPaginatorComponent } from './components/custom-paginator/custom-paginator.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    
    MatPaginatorModule
  ],
  exports:[    
    MatPaginatorModule
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [
        { provide: MatPaginatorIntl, useClass: CustomPaginatorComponent }
      ]
    };
  }
}
