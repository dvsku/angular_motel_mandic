import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'generic-modal',
    templateUrl: './generic-modal.component.html',
    styleUrls: ['./generic-modal.component.scss']
})
export class GenericModalComponent {
    @ViewChild('genericModal')
    private genericModal: ElementRef;

    private activeModal: NgbActiveModal;

    constructor(private modalService: NgbModal) {}

    public show() {
        this.activeModal = this.modalService.open(this.genericModal, {
            windowClass: 'modal-dialog-standard',
            backdrop: 'static'
        });
    }

    public hide() {
        if (this.activeModal) {
            this.activeModal.close();
        }
    }
}
