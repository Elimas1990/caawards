import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaNominadosComponent } from './lista-nominados.component';

describe('ListaNominadosComponent', () => {
  let component: ListaNominadosComponent;
  let fixture: ComponentFixture<ListaNominadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaNominadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaNominadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
