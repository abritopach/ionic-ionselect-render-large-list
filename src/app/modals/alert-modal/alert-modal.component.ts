import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
    selector: 'app-alert-modal',
    templateUrl: './alert-modal.component.html',
    styleUrls: ['./alert-modal.component.scss'],
})
export class AlertModalComponent implements OnInit {

    constructor(private modalController: ModalController) { }

    ngOnInit() {}

    dismissModal() {
        // using the injected ModalController this page
        // can 'dismiss' itself and optionally pass back data.
        this.modalController.dismiss({
            dismissed: true
        });
    }

}
