import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import {NgIcon} from '@ng-icons/core';
import {Icons} from '@models/Icons.enum';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating-selector.html',
  styleUrl: './star-rating-selector.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => StarRatingSelector),
      multi: true,
    },
  ],
  imports: [
    NgIcon
  ]
})
export class StarRatingSelector implements ControlValueAccessor {

  @Input() max = 5;

  value = 0;
  disabled = false;
  hoverValue = 0;

  private onChange = (v: number) => {};
  private onTouched = () => {};

  writeValue(value: number): void {
    this.value = value ?? 0;
  }

  registerOnChange(fn: (v: number) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  setRating(v: number) {
    if (this.disabled) return;
    this.value = v;
    this.onChange(v);
    this.onTouched();
  }

  setHover(v: number) {
    if (this.disabled) return;
    this.hoverValue = v;
  }

  clearHover() {
    this.hoverValue = 0;
  }

  isActive(index: number): boolean {
    return index <= (this.hoverValue || this.value);
  }

  protected readonly Icons = Icons;
}
