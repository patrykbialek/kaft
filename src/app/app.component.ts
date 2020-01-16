import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `
      :host {
        background: rgba(0, 0, 0, 0.1);
      }

      app-sticky-header {
        align-items: center;
        display: flex;
        justify-content: center;

        background-color: #fafafa;
        color: #fff;
        height: 96px;
        z-index: 1000;
      }

    `
  ]
})
export class AppComponent implements OnInit {

  ngOnInit() {
    console.log('%cDear developer, welcome to our site.', 'color: red; font-size: 20px');
    console.log('%c-----------------------------------------------------', 'color: red; font-size: 20px');
    console.log('%cYou hit \'F12\' by mistake, or you want to find something interesting?', 'color: red; font-size: 20px');
    console.log('%cIf you looking for a job, just contact us at job@kaft.pl', 'color: red; font-size: 20px');
  }
}
