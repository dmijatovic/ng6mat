import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLoaderComponent } from './loader.component';
import { AppLoaderService } from './loader.service';

describe('AppLoaderComponent', () => {
  let component: AppLoaderComponent;
  let fixture: ComponentFixture<AppLoaderComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppLoaderComponent ],
      providers:[ AppLoaderService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


describe('AppLoaderService',()=>{
  let service:AppLoaderService;
  beforeAll(() => {
    service = new AppLoaderService();
  });

  it('should emit hide loader',()=>{
    service.showLoader$.subscribe((d)=>{
      expect(d).toBe(false);
    });
    service.setShowLoader(false);
  });

  it('should emit loader configuration',()=>{
    service.loaderDef$.subscribe((d:any)=>{
      expect(d.loaderId).toBe('test-component');
      expect(d.loaderSolid).toBe(false);
    });
    service.setLoaderDef({
      loaderId:'test-component',
      loaderStyle:'square-spin',
      loaderType:'page',
      loaderSolid:false
    });
  });
});
