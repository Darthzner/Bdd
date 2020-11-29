import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallpersonalComponent } from './getallpersonal.component';

describe('GetallpersonalComponent', () => {
  let component: GetallpersonalComponent;
  let fixture: ComponentFixture<GetallpersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetallpersonalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetallpersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
