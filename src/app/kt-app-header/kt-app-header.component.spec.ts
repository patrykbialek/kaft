import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KtAppHeaderComponent } from './kt-app-header.component';

describe('KtAppHeaderComponent', () => {
  let component: KtAppHeaderComponent;
  let fixture: ComponentFixture<KtAppHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KtAppHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KtAppHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
