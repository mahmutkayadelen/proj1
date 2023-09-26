import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appCustomfor]'
})
export class CustomforDirective {

  constructor(private templateRef :TemplateRef<any>,  //bu iki parametreyi eklediğimiz strucrural directive oldu.
              private viewContainerRef : ViewContainerRef) { }
  @Input() set appCustomfor(value : number) //selektordaki değerle birebir aynı olmak zorunda
  {

      for(let i =0; i<value; i++)
      this.viewContainerRef.createEmbeddedView(this.templateRef,{
        index :i
  })


  }
}
