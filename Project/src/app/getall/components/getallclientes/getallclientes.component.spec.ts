import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallclientesComponent } from './getallclientes.component';

describe('GetallclientesComponent', () => {
  let component: GetallclientesComponent;
  let fixture: ComponentFixture<GetallclientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetallclientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetallclientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
