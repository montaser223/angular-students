import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor(public myRef:ElementRef) {
    
    console.log(this.myRef)
    this.myRef.nativeElement.style.backgroundColor = this.color.bgColor
    this.myRef.nativeElement.style.color = this.color.fgColor
   }

   @HostListener('click') onClick(){
    this.myRef.nativeElement.style.backgroundColor = this.color.bgColor
    this.myRef.nativeElement.style.color = this.color.fgColor
   
   }

   @Input('appCustom') color = {
    bgColor:'black',
    fgColor:'white'
   }
}
