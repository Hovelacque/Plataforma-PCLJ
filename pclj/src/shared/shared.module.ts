import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';

import { CustomPaginatorComponent } from './components/custom-paginator/custom-paginator.component';
import { AppSessionService } from './session/app-session.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    
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
        AppSessionService,
        { provide: MatPaginatorIntl, useClass: CustomPaginatorComponent }
      ]
    };
  }
}
