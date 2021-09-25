import { Directive, ElementRef, HostListener } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Directive({
  selector: '[appKeydown]'
})
export class KeydownDirective {

  constructor(
    private el: ElementRef,
    private toastr: ToastrService
  ) { }

  @HostListener('keydown') onKeyDown() {
    console.log('keydown');
    this.toastr.success('keydown');
  }

}
