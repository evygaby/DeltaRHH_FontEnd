import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { EventService } from '../core/services/event.service';
import { LAYOUT_VERTICAL, LAYOUT_HORIZONTAL, LAYOUT_TWOCOLUMN } from './layout.model';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})

/**
 * Layout Component
 */
export class LayoutComponent implements OnInit, OnDestroy {

  layoutType: string = LAYOUT_VERTICAL;
  private changeLayoutSubscription?: Subscription;

  constructor(private readonly eventService: EventService) { }

  ngOnInit(): void {
    // listen to event and change the layout, theme, etc
    this.changeLayoutSubscription = this.eventService.subscribe('changeLayout', (layout: string) => {
      this.layoutType = layout;
    });
  }

  ngOnDestroy(): void {
    this.changeLayoutSubscription?.unsubscribe();
  }

  /**
   * Check if the vertical layout is requested
   */
  isVerticalLayoutRequested(): boolean {
    return this.layoutType === LAYOUT_VERTICAL;
  }

  /**
   * Check if the horizontal layout is requested
   */
  isHorizontalLayoutRequested(): boolean {
    return this.layoutType === LAYOUT_HORIZONTAL;
  }

  /**
   * Check if the two column layout is requested
   */
  isTwoColumnLayoutRequested(): boolean {
    return this.layoutType === LAYOUT_TWOCOLUMN;
  }

}
