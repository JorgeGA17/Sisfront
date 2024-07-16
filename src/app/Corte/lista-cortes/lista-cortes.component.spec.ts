import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCortesComponent } from './lista-cortes.component';

describe('ListaCortesComponent', () => {
  let component: ListaCortesComponent;
  let fixture: ComponentFixture<ListaCortesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaCortesComponent]
    });
    fixture = TestBed.createComponent(ListaCortesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
