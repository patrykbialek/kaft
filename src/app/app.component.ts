import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    console.log('%cDear Developer, welcome to our site.', 'color: red; font-size: 20px');
    console.log('%c-----------------------------------------------------------------------', 'color: red; font-size: 20px');
    console.log('%cYou hit \'F12\' by mistake, or you wanted to find something interesting?', 'color: red; font-size: 20px');
    console.log('%cIf you found a bug or you are looking for a job, \njust contact us at kontakt@kaft.pl', 'color: red; font-size: 20px');
    console.log('%c-----------------------------------------------------------------------', 'color: red; font-size: 20px');
  }
}
