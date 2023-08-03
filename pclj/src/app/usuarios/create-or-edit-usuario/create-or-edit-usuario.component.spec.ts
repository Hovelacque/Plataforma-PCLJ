import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrEditUsuarioComponent } from './create-or-edit-usuario.component';

describe('CreateOrEditUsuarioComponent', () => {
  let component: CreateOrEditUsuarioComponent;
  let fixture: ComponentFixture<CreateOrEditUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateOrEditUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateOrEditUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
