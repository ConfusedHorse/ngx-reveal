// import { animate, animateChild, query, stagger, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, inject } from '@angular/core';
import { RevealDirective } from '../directive';
import { DEFAULT_MASK_SIZE } from '../model';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    RevealDirective
  ],
  selector: 'reveal-border',
  templateUrl: 'component.html',
  styleUrls: ['component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RevealBorderComponent implements OnInit {

  private _nativeElement = inject(ElementRef).nativeElement as HTMLElement;
  protected _thickness = '2px';

  @Input() public maskSize = DEFAULT_MASK_SIZE;

  @Input() set thickness(value: string) {
    this._thickness = value;
    this._setCssThickness(value);
  }

  ngOnInit(): void {
    this._setCssThickness(this._thickness);
  }

  private _setCssThickness(value: string) {
    this._nativeElement.style.setProperty('--border-thickness', value);
  }
}
