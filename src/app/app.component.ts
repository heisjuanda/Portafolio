import { Component, OnInit, ViewChild} from '@angular/core';
import { AboutComponent } from './about/about.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild(AboutComponent) AboutComponent: AboutComponent | undefined;
  @ViewChild(ContactMeComponent) ContactMeComponent: ContactMeComponent | undefined;
  pausarAnimacionAbout(animation: number) {
    this.AboutComponent?.stop(animation);
  }
  continuarAnimacionAbout(animation: number) {
    this.AboutComponent?.play(animation);
  }
  pausarAnimacionContact() {
    this.ContactMeComponent?.stop();
  }
  continuarAnimacionContact() {
    this.ContactMeComponent?.play();
  }
  ngOnInit() {
    //Main
    const logo = document.getElementById('LOGO');
    // About section
    const init = document.getElementById('init');
    const end = document.getElementById('stopAbout');
    const about = document.getElementById('aboutMe');
    const stop1 = document.getElementById('stop1');
    const stop2 = document.getElementById('stop2');
    //Work section
    const inicio = document.getElementById('inicio');
    const work = document.getElementById('myWork');
    const terminar = document.getElementById('end');
    const cargarAnimaciones = document.getElementById('cargarAnimaciones');
    // Contact me section
    const inciar = document.getElementById('inciar');
    const contactMe = document.getElementById('contactMe');
    const finalizar = document.getElementById('terminar');
    const scroll$ = fromEvent(window, 'scroll').pipe(
      debounceTime(10) // Debounce scroll event by 50ms to improve performance
    );
    // Subscribe to scroll event
    scroll$.subscribe(() => {
      const value = window.scrollY;
      if (about && end && init && logo && stop1 && stop2) {
        const valueN = value - init.offsetTop;
        logo.style.color = (init.offsetTop - logo.offsetHeight <= value) ? 'white' : 'lightgray';
        if (init.offsetTop < value && value < (end.offsetTop)) {
          about.style.position = 'relative';
          about.style.opacity = 1 - (valueN * 0.002 * (window.innerWidth > 1000 ? 1 : 1.5)) + '';
          about.style.top = valueN * 0.5 + 'px';
        } else {
          about.style.top = 0 + 'px';
          about.style.opacity = 1 + '';
        }
        (value > stop1.offsetTop) ? this.pausarAnimacionAbout(0) : this.continuarAnimacionAbout(0);
        (value > stop2.offsetTop) ? this.pausarAnimacionAbout(1) : this.continuarAnimacionAbout(1);
      }
      if (work && inicio && logo && terminar && cargarAnimaciones) {
        logo.style.color = (inicio.offsetTop - logo.offsetHeight <= value) ? 'lavender' : '';
        (cargarAnimaciones.offsetTop > value) ? this.pausarAnimacionContact() : this.continuarAnimacionContact();
        if (inicio.offsetTop > value) {
          work.style.right = 0 + 'px';
        } else if (inicio.offsetTop < value && value < (terminar.offsetTop+(terminar.offsetWidth*3))) {
          work.style.position = 'relative';
          const valueN = value - inicio.offsetTop;
          work.style.right = valueN * 0.6 + 'px';
        }
      }
      if (inciar && contactMe && finalizar && logo) {
        logo.style.color = (inciar.offsetTop - logo.offsetHeight <= value) ? 'lavenderblush' : '';
        let valueN = value - inciar.offsetTop;
        if (inciar.offsetTop < value && value < finalizar.offsetTop) {
          contactMe.style.textIndent = valueN * 0.5 + 'px';
        } else {
          contactMe.style.textIndent = 0 + 'px';
        }
      }
    });
  }
}
