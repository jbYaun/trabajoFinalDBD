import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotacionComponent } from './rotacion.component';

describe('RotacionComponent', () => {
  let component: RotacionComponent;
  let fixture: ComponentFixture<RotacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RotacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RotacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
