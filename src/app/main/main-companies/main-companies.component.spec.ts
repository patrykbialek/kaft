import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCompaniesComponent } from './main-companies.component';

describe('MainCompaniesComponent', () => {
  let component: MainCompaniesComponent;
  let fixture: ComponentFixture<MainCompaniesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainCompaniesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
