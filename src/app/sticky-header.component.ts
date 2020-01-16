import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';
import { AfterViewInit, Component, HostBinding } from '@angular/core';
import { fromEvent } from 'rxjs';
import {
  distinctUntilChanged,
  filter,
  map,
  pairwise,
  share,
  throttleTime,
  tap
} from 'rxjs/operators';

enum VisibilityState {
  Visible = 'visible',
  Hidden = 'hidden'
}

enum Direction {
  Up = 'Up',
  Down = 'Down'
}

@Component({
  selector: 'app-sticky-header',
  template: `
    <ng-content></ng-content>
  `,
  styles: [
    `
      :host {
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 1000;
      }
    `
  ],
  animations: [
    trigger('toggle', [
      state(
        VisibilityState.Hidden,
        style({
          opacity: 0,
          transform: 'translateY(-100%)',
        })
      ),
      state(
        VisibilityState.Visible,
        style({
          opacity: 1,
          transform: 'translateY(0)',
        })
      ),
      transition('* => *', animate('350ms ease-in-out'))
    ])
  ]
})
export class StickyHeaderComponent implements AfterViewInit {
  private isVisible = true;

  backgroundColor = 'transparent';
  isUp = false;
  offset = 0;

  @HostBinding('@toggle')
  get toggle(): VisibilityState {
    return this.isVisible ? VisibilityState.Visible : VisibilityState.Hidden;
  }

  @HostBinding('style.transition')
  get transition(): any {
    return 'all 450ms ease-out 0s';
  }

  @HostBinding('style.background')
  get style(): any {
    return this.isUp ? '#fafafa' : 'transparent';
  }

  @HostBinding('class')
  get class(): any {
    return this.isUp ? 'u-elevation-z1' : '';
  }

  ngAfterViewInit() {
    const scroll$ = fromEvent(window, 'scroll').pipe(
      throttleTime(10),
      map(() => window.pageYOffset),
      tap(console.log),
      tap((offset) => this.offset = offset),
      pairwise(),
      map(([y1, y2]): Direction => (y2 < y1 ? Direction.Up : Direction.Down)),
      tap((direction) => {
        this.isUp = direction === 'Up' && this.offset > 50;
      }),
      distinctUntilChanged(),
      share()
    );

    const goingUp$ = scroll$.pipe(
      filter(direction => direction === Direction.Up)
    );

    const goingDown$ = scroll$.pipe(
      filter(direction => direction === Direction.Down)
    );

    goingUp$.subscribe(() => (this.isVisible = true));
    goingDown$.subscribe(() => (this.isVisible = false));
  }
}
