import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainIndustriesComponent } from './main-industries.component';

describe('MainIndustriesComponent', () => {
  let component: MainIndustriesComponent;
  let fixture: ComponentFixture<MainIndustriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainIndustriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainIndustriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
