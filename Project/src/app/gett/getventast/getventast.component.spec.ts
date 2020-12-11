import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetventastComponent } from './getventast.component';

describe('GetventastComponent', () => {
  let component: GetventastComponent;
  let fixture: ComponentFixture<GetventastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetventastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetventastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
