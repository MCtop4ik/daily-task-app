import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

type Organization = {
  id: number;
  name: string;
  tag: string;
  description: string;
}

declare var MathJax: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  @ViewChild('mathContent') mathContent!: ElementRef;

  organizations: Array<Organization>;
  dailyTasks = [{
    task: `Найти точку, равноудалённую от четырёх точек
            Рассмотрим треугольник \\(ABC\\). Пусть:
            \\( I \\) — центр вписанной окружности треугольника \\( ABC \\).
            \\( I_a \\) — центр вневписанной окружности, противоположной вершине \\( A \\).
            \\( L \\) — точка пересечения отрезка \\( II_a \\) с дугой описанной окружности, не содержащей точку \\( A \\).
            Докажите, что точка \\( L \\) равноудалена от точек \\( I \\), \\( I_a \\), \\( B \\) и \\( C \\).
    `,
    date: '08/02/2025',
    solution: `solution`,
    image: `assets/mansion-lemma.png`
  },
  {
    task: `Найти точку, равноудалённую от четырёх точек
            Рассмотрим треугольник \\(ABC\\). Пусть:
            \\( I \\) — центр вписанной окружности треугольника \\( ABC \\).
            \\( I_a \\) — центр вневписанной окружности, противоположной вершине \\( A \\).
            \\( L \\) — точка пересечения отрезка \\( II_a \\) с дугой описанной окружности, не содержащей точку \\( A \\).
            Докажите, что точка \\( L \\) равноудалена от точек \\( I \\), \\( I_a \\), \\( B \\) и \\( C \\).
    `,
    date: '08/02/2025',
    solution: `solution`,
    image: `assets/mansion-lemma.png`
  }];

  constructor(private router: Router) {
    this.organizations = [{ 'id': 1, 'name': 'Senya Zakharov', 'tag': 'senyazak', 'description': 'hihjijijjii' },
    { 'id': 2, 'name': 'Andrew', 'tag': 'djcooki', 'description': 'hihjijijjii' }
    ];
  }


  ngAfterViewInit() {
    this.updateMath();
  }

  updateMath() {
    setTimeout(() => {
      if (MathJax) {
        MathJax.typesetPromise();
      }
    }, 100);
  }

  toggleSpoiler(element: any) {
    element.classList.toggle('revealed');
  }

  onOrganizationClick(tag: string) {
    this.router.navigate(['organization', tag, 'main'])
  }

}
