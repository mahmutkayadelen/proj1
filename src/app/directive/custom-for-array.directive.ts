import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appCustomForArray]'
})
export class CustomForArrayDirective {

  constructor(private templateRef :TemplateRef<any>,  //bu iki parametreyi eklediğimiz strucrural directive oldu.
              private viewContainerRef : ViewContainerRef) { }
  @Input() set appCustomForArray(value : string[]) //selektordaki değerle birebir aynı olmak zorunda
  {

    for(let i =0; i<value.length; i++)
      this.viewContainerRef.createEmbeddedView(this.templateRef,{
       $implicit: value[i]
      })


  }

}
