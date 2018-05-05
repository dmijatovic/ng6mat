//Angular
import { Component, Input,
  Renderer2, ElementRef } from '@angular/core';
/**
 * Note 1:
 * following classes are added to html markup of the component by parent components or manually
 * .bg-white -> for adding white background color
 * .page-loader -> for covering comlete page [position: fixed]
 * .component-loader -> for covering only 'relative' space [position: absolute]
 * Note 2:
 * styles in scss file are added directly into main.scss
 * and applied globaly because loader is used in other components
 * Note 3:
 * for loader types see material/loaders
 */

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  /*read notes at the top!*/
  styleUrls: ['./loader.component.scss'],
  host:{
    class:'app-loader'
  }
})
export class AppLoaderComponent {

  @Input() loaderStyle:string='square-spin';
  //two types supported page / component
  @Input() loaderType:string='page';
  //should background be solid or transparant
  @Input() loaderSolid:boolean=true;

  //applyStyles:string = 'app-loader';

  constructor(
    private renderer: Renderer2,
    private elemRef: ElementRef
  ){}
  ngOnInit() {
    this.applyStyles();
  }
  applyStyles(){
    //debugger
    //check page/component loader
    if (this.loaderType &&
      this.loaderType.toLowerCase() === 'page'){
      this.renderer.addClass(
        this.elemRef.nativeElement,
        "page-loader"
      )
    }else{
      this.renderer.addClass(
        this.elemRef.nativeElement,
        "component-loader"
      )
    }
    if (this.loaderSolid &&
      this.loaderSolid==true){
      this.renderer.addClass(
        this.elemRef.nativeElement,
        "solid"
      )
    }else{
      this.renderer.addClass(
        this.elemRef.nativeElement,
        "transparant"
      )
    }
  }
  ngOnDestroy(){

  }
}
