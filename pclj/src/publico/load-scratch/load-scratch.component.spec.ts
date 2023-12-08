import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadScratchComponent } from './load-scratch.component';

describe('LoadScratchComponent', () => {
  let component: LoadScratchComponent;
  let fixture: ComponentFixture<LoadScratchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadScratchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadScratchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
