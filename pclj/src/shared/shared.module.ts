import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';

import { CustomPaginatorComponent } from './components/custom-paginator/custom-paginator.component';
import { AppSessionService } from './session/app-session.service';
import { AppRouteGuard } from './auth/auth-route-guard';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,

    MatPaginatorModule,
    MatSnackBarModule
  ],
  exports: [
    MatPaginatorModule,
    MatSnackBarModule
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [
        AppSessionService,
        AppRouteGuard,
        { provide: MatPaginatorIntl, useClass: CustomPaginatorComponent }
      ]
    };
  }
}
