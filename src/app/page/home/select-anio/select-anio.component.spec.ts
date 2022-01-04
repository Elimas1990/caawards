import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectAnioComponent } from './select-anio.component';

describe('SelectAnioComponent', () => {
  let component: SelectAnioComponent;
  let fixture: ComponentFixture<SelectAnioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectAnioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectAnioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
