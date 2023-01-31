import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'generic-modal-wide',
    templateUrl: './generic-modal-wide.component.html',
    styleUrls: ['./generic-modal-wide.component.scss']
})
export class GenericModalWideComponent {
    @ViewChild('genericModalWide')
    private genericModalWide: ElementRef;

    private activeModal: NgbActiveModal;

    constructor(private modalService: NgbModal) {}

    public show() {
        this.activeModal = this.modalService.open(this.genericModalWide, {
            windowClass: 'modal-dialog-wide',
            backdrop: 'static'
        });
    }

    public hide() {
        if (this.activeModal) {
            this.activeModal.close();
        }
    }
}
