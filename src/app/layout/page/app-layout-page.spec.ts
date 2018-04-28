import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLayoutPage } from './app-layout-page';

describe('PageComponent', () => {
  let component: AppLayoutPage;
  let fixture: ComponentFixture<AppLayoutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppLayoutPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLayoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
