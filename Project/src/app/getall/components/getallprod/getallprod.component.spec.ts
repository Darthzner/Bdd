import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallprodComponent } from './getallprod.component';

describe('GetallprodComponent', () => {
  let component: GetallprodComponent;
  let fixture: ComponentFixture<GetallprodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetallprodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetallprodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
