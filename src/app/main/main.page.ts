import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
  standalone: false
})
export class MainPage implements OnInit, AfterViewInit { 
  slogans: string[] = ["Живем не ради ЕГЭ!", "Ведьмочек сожгли!", "Ботва Еверидей"];
  currentSlogan: string = this.slogans[0];
  index: number = 0;
  router: any;

  startCounter: number = 0;
  endCounter: number = 5;
  currentCounter: number = this.startCounter;
  @ViewChild('counterElement') counterElement!: ElementRef;

  constructor() {}

  ngOnInit() {
    setInterval(() => {
      this.index = (this.index + 1) % this.slogans.length;
      this.currentSlogan = this.slogans[this.index];
    }, 3000);
  }

  private animationStarted = false;

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !this.animationStarted) {
            this.animationStarted = true;
            this.startCounterAnimation();
            observer.disconnect(); // Отключаем, чтобы не повторялось
          }
        });
      },
      { threshold: 0.5 } // Запуск при 50% видимости
    );
  
    if (this.counterElement) {
      observer.observe(this.counterElement.nativeElement);
    }
  }

  startCounterAnimation() {
    let current = this.startCounter;
    const interval = setInterval(() => {
      current++;
      this.currentCounter = current;
      if (current >= this.endCounter) clearInterval(interval);
    }, 500);
  }

  goToActivity() {
    this.router.navigate(['/activity']);
  }

  goToAuthorization() {
    this.router.navigate(['/authorization']);
  }

  openPage(page: string) {
    if (page === 'home') {
      this.router.navigate(['/']);
    } else if (page === 'about') {
      this.router.navigate(['/about']);
    } else if (page === 'services') {
      this.router.navigate(['/services']);
    } else if (page === 'contact') {
      this.router.navigate(['/contact']);
    }
  }
}