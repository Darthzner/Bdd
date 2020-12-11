import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetpersonalproComponent } from './getpersonalpro.component';

describe('GetpersonalproComponent', () => {
  let component: GetpersonalproComponent;
  let fixture: ComponentFixture<GetpersonalproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetpersonalproComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetpersonalproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
