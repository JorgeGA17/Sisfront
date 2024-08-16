import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaProponenteComponent } from './busqueda-proponente.component';

describe('BusquedaProponenteComponent', () => {
  let component: BusquedaProponenteComponent;
  let fixture: ComponentFixture<BusquedaProponenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusquedaProponenteComponent]
    });
    fixture = TestBed.createComponent(BusquedaProponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
