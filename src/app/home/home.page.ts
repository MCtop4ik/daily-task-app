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
    task: `После учебы лицеисты разбегаются по своим домам, 
    каждый идет по кратчайшему расстоянию (по прямой от школы до дома). 
    Учитель географии узнал, что суммарное расстояние, 
    пройденное ими после школы на север равно расстоянию, 
    пройденному на юг, а также что расстояние, 
    пройденное на восток равно расстоянию, пройденному на запад. 
    Обязательно ли то же самое будет выполняться
     для северо востока и югозапада; северозапада и юговостока? 
     (считаем расстояние, пройденное в опр направлении как проекцию на прямую этого направления)
    `,
    date: '17/02/2025',
    solution: null,
    image: null
  },{
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
