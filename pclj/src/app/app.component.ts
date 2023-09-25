import { Component, Injector } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { setTheme } from 'ngx-bootstrap/utils';
import { AppComponentBase } from '@shared/app-component-base';
import { SessionServiceProxyService } from '@shared/service-proxies/session/session-service-proxy.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { AlterarSenhaComponent } from './alterar-senha/alterar-senha.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends AppComponentBase {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    public injector: Injector,
    private _sessionService: SessionServiceProxyService,
    private breakpointObserver: BreakpointObserver,
    private _modalService: BsModalService
  ) {
    super(injector);
    setTheme('bs3');
  }

  alterarSenha(): void {
    this._modalService.show(AlterarSenhaComponent);
  }

  logout(): void {
    this._sessionService.logout().subscribe(() => {
      this.appSession.refreshSession();
    });
  }

}