import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appCustomif]'
})
export class CustomifDirective {

  constructor(private templateRef :TemplateRef<any>,  //bu iki parametreyi eklediğimiz strucrural directive oldu.
              private viewContainerRef : ViewContainerRef) {

  }
@Input() set appCustomif(values : boolean) //selektordaki değerle birebir aynı olmak zorunda
{
if(values)
  {
    this.viewContainerRef.createEmbeddedView(this.templateRef);
  }
else{
  this.viewContainerRef.clear();
}
}

}
