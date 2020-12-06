import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallventasComponent } from './getallventas.component';

describe('GetallventasComponent', () => {
  let component: GetallventasComponent;
  let fixture: ComponentFixture<GetallventasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetallventasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetallventasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
