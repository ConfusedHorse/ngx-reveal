import { DestroyRef, Directive, ElementRef, Input, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { tap } from 'rxjs/operators';
import { MouseMoveService } from '../util/mouseMoveService';
import { DEFAULT_MASK_SIZE } from './model';

@Directive({
  standalone: true,
  selector: '[reveal]'
})
export class RevealDirective implements OnInit {

  private _destroyRef = inject(DestroyRef);
  private _nativeElement = inject(ElementRef).nativeElement as HTMLElement;
  private _mouseMoveService = inject(MouseMoveService)

  private get _dimensions(): DOMRect {
    return this._nativeElement.getBoundingClientRect();
  }

  @Input() public maskSize = DEFAULT_MASK_SIZE;

  ngOnInit(): void {
    this._nativeElement.style.setProperty('--mask-size', `${this.maskSize}px ${this.maskSize}px`);

    this._mouseMoveService.move$.pipe(
      tap((mouseEvent: MouseEvent) => this._adjustMask(mouseEvent, this._dimensions)),
      takeUntilDestroyed(this._destroyRef)
    ).subscribe();
  }

  private _adjustMask(mouseEvent: MouseEvent, dimensions: DOMRect): void {
    const { top, left } = dimensions;
    const x = mouseEvent.pageX - left - this.maskSize * .5;
    const y = mouseEvent.pageY - top - this.maskSize * .5;

    this._nativeElement.style.setProperty('--mask-position', `${x}px ${y}px`);
  }

}
