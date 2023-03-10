import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureFormComponent } from './temperature-form.component';

describe('TemperatureFormComponent', () => {
  let component: TemperatureFormComponent;
  let fixture: ComponentFixture<TemperatureFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemperatureFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemperatureFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
