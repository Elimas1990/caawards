import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormStreamerComponent } from './form-streamer.component';

describe('FormStreamerComponent', () => {
  let component: FormStreamerComponent;
  let fixture: ComponentFixture<FormStreamerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormStreamerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormStreamerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
