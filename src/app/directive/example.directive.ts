import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit } from '@angular/core';
declare var $:any;
@Directive({
  selector: '[appExample]'//uygulamada directivi kullanmamız sağlayan referanstır.
  //selectör özelliği köşeli parantez içerisinde yazılıyorsa attribete olarak kullanılır. Eğer . ile başlıyorsa class ile directivin çağrılacağı anlamına gelmektedir
  //Directive ile işaretlenmiş html nesnesini elde etme 
  //Direcive üzerinden parametre tanımlayabilmek için Input field tanımlamak yeterlidir..

})
export class ExampleDirective implements OnInit{
 ngOnInit(): void {
  this.element.nativeElement.style.backgroundColor = this.color;
  $(this.element.nativeElement).fadeOut(20000).fadeIn();
  }
 
  constructor(private element: ElementRef) {
   element.nativeElement.style.backgroundColor = "red";
   $(element.nativeElement).fadeOut(20000).fadeIn();
   }
   @Input() color:string="";
   @HostListener("click")
   onClick(){
alert("Html nesnei click edildi..."+this.color)
   }
   @HostBinding("style.color")
   writingColor:string="red";

}
