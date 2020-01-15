import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KtAppFooterComponent } from './kt-app-footer.component';

describe('KtAppFooterComponent', () => {
  let component: KtAppFooterComponent;
  let fixture: ComponentFixture<KtAppFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KtAppFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KtAppFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
