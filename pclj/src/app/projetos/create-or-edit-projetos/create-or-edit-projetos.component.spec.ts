import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrEditProjetosComponent } from './create-or-edit-projetos.component';

describe('CreateOrEditProjetosComponent', () => {
  let component: CreateOrEditProjetosComponent;
  let fixture: ComponentFixture<CreateOrEditProjetosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateOrEditProjetosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateOrEditProjetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
