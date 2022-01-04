import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TernasComponent } from './ternas.component';

describe('TernasComponent', () => {
  let component: TernasComponent;
  let fixture: ComponentFixture<TernasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TernasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TernasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
