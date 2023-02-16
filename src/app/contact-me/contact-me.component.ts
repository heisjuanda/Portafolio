import { Component,NgZone} from '@angular/core';
import { EmailService} from './email.service'
import { AnimationItem} from 'lottie-web';
import { AnimationOptions} from 'ngx-lottie';
@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent{
  email = "";
  message = "";
  name = "";
  private animationItems: AnimationItem[] = [];
  goodData = false;
  badData = false;
  constructor(private emailService: EmailService,private ngZone: NgZone) { }
  instagram: AnimationOptions = {
    path: '/assets/animations/instagramLogo.json',
  };
  linkedIn: AnimationOptions = {
    path: '/assets/animations/linkedInLogo.json',
  };
  facebook: AnimationOptions = {
    path: '/assets/animations/facebookLogo.json',
  };
  stop(): void {
    this.ngZone.runOutsideAngular(() => {
      this.animationItems.forEach(animation=>{
        animation.stop();
      });
    });
  }
  play(): void {
    this.ngZone.runOutsideAngular(() => {
      this.animationItems.forEach(animation=>{
        animation.play();
      });
    });
  }
  animationCreated(animationItem: AnimationItem,index:number): void {
    this.animationItems[index] = animationItem;
  }
  validarEmail(email: string): boolean {
    email = email.toLowerCase();
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email) ? true : false;
  }
  onSubmit() {
    if (this.validarEmail(this.email) && this.name.length > 0 && this.message.length > 0) {
      this.emailService.sendEmail(this.email, this.name, this.message)
        .subscribe(response => {
        });
      this.goodData = true;
      this.badData = false;
    } else {
      this.badData = true;
      this.goodData = false;
    }
  }
}
