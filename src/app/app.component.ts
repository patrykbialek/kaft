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
        z-index: 1000;
        color: white;
        background-color: #fafafa;
        height: 96px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .content {
        padding-top: 96px;
      }

      .page {
        height: 50vh;
      }

      .page:nth-child(odd) {
        background-color: rgba(0, 0, 0, 0.1);
      }

      .page:nth-child(even) {
        background-color: rgba(0, 0, 0, 0.05);
      }
    `
  ]
})
export class AppComponent implements OnInit{
 
  ngOnInit() {
    console.log("%cDear developer, welcome to our site.", "color: red; font-size: 20px")
    console.log("%c-----------------------------------------------------", "color: red; font-size: 20px")
    console.log("%cYou hit 'F12' by mistake, or you want to find something interesting?", "color: red; font-size: 20px")
    console.log("%cIf you looking for a job, just contact us at job@kaft.pl", "color: red; font-size: 20px")
  }
}
