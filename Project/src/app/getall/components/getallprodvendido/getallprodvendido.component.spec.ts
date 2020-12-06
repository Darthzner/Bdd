import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallprodvendidoComponent } from './getallprodvendido.component';

describe('GetallprodvendidoComponent', () => {
  let component: GetallprodvendidoComponent;
  let fixture: ComponentFixture<GetallprodvendidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetallprodvendidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetallprodvendidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
