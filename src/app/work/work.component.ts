import { Component,NgZone } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  template: '<ng-lottie [options]="options" (animationCreated)="animationCreated($event)"></ng-lottie>',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent{
  private animationItem: any;
  constructor(private ngZone: NgZone) { }
  options1: AnimationOptions = {
    path: 'https://assets1.lottiefiles.com/packages/lf20_QQedoPiDBq.json',
  };
  options2: AnimationOptions = {
    path:'https://assets7.lottiefiles.com/packages/lf20_we9lzvwy.json',
  };
  stop(): void {
    this.ngZone.runOutsideAngular(() => {
      this.animationItem.stop();
    });
  }
  play(): void {
    this.ngZone.runOutsideAngular(() => {
      this.animationItem.play();
    });
  }
  animationCreated(animationItem: AnimationItem): void {
    this.animationItem = animationItem;
  }
}
