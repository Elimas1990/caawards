import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNominadosComponent } from './form-nominados.component';

describe('FormNominadosComponent', () => {
  let component: FormNominadosComponent;
  let fixture: ComponentFixture<FormNominadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormNominadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormNominadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
