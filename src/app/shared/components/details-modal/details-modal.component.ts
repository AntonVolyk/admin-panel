import { Component, OnInit, ViewChild, ElementRef, Input, OnDestroy, OnChanges } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

declare const $: any;

@Component({
  selector: 'app-details-modal',
  templateUrl: './details-modal.component.html',
  styleUrls: ['./details-modal.component.scss']
})
export class DetailsModalComponent implements OnInit, OnChanges {
  @ViewChild('detailsModal', {static: true}) detailsModal: ElementRef;
  @Input() data: object;

  constructor() { }

  ngOnInit() {}

  ngOnChanges(changes) {
    if (changes.data && !changes.data.firstChange) {
      $(this.detailsModal.nativeElement).modal('show');
    }
  }

}
