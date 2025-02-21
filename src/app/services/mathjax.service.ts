import { Injectable } from '@angular/core';

declare var MathJax: any;

@Injectable({
  providedIn: 'root',
})
export class MathJaxService {
  constructor() {}

  renderMath(element: HTMLElement): void {
    if (MathJax) {
      MathJax.typeset([element]);
    }
  }
}