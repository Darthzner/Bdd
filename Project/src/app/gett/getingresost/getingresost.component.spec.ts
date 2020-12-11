import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetingresostComponent } from './getingresost.component';

describe('GetingresostComponent', () => {
  let component: GetingresostComponent;
  let fixture: ComponentFixture<GetingresostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetingresostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetingresostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
