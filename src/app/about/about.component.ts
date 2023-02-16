import { Component, NgZone } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  template: '<ng-lottie [options]="options" (animationCreated)="animationCreated($event,0)">',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  animationItems: AnimationItem[] = [];
  constructor(private ngZone: NgZone) { }
  geometry: AnimationOptions = {
    path: '/assets/animations/infinite.json',
    autoplay: true,
    loop: true,
  };
  blackShapes: AnimationOptions = {
    path: '/assets/animations/3dShapes.json',
    autoplay: true,
    loop: true,
  };
  options3: AnimationOptions = {
    path: 'https://assets5.lottiefiles.com/packages/lf20_1GtvLS.json',
    autoplay: true,
    loop: true,
  };
  stop(index: number): void {
    this.ngZone.runOutsideAngular(() => {
      this.animationItems[index].stop();
    });
  }
  play(index: number): void {
    this.ngZone.runOutsideAngular(() => {
      this.animationItems[index].play();
    });
  }
  animationCreated(animationItem: AnimationItem, index: number): void {
    this.animationItems[index] = animationItem;
  }
  updateAnimation(): void {
    this.options3 = {
      ...this.options3,
      autoplay: true,
    }
  }
}
