import { Component, Injector } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponentBase } from '@shared/app-component-base';
import { SessionServiceProxyService } from '@shared/service-proxies/session/session-service-proxy.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends AppComponentBase {

  loginForm: FormGroup = null;

  constructor(
    public injector: Injector,
    private _router: Router,
    private formBuilder: FormBuilder,
    private _service: SessionServiceProxyService
  ) {
    super(injector);
    this.loginForm = this.formBuilder.group({
      usuario: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }

  login(): void {
    pclj.ui.setBusy()
    this._service.login(this.loginForm.value.usuario, this.loginForm.value.senha)
      .pipe(finalize(() => pclj.ui.clearBusy()))
      .subscribe(() => {
        this.appSession.refreshSession().then(() => {
          this._router.navigate(['app']);
        });
      });
  }
}
