import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallstockComponent } from './getallstock.component';

describe('GetallstockComponent', () => {
  let component: GetallstockComponent;
  let fixture: ComponentFixture<GetallstockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetallstockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetallstockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
