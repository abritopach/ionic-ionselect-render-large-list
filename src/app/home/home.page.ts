// Angular
import { Component, OnInit } from '@angular/core';

// Ionic
import { AlertController } from '@ionic/angular';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

    items: any;

    constructor(private alertController: AlertController) {}

    ngOnInit() {
        this.items = Array.from({length: 100000}).map((_, i) => `Item ${i}`);
    }

    async presentAlert() {

        let itemsList = ``;

        this.items.map((item) => {
            itemsList +=
            `<ion-item>
                    <ion-label>${item}</ion-label>
            </ion-item>
            `;
        });

        const message = `<ion-list>${itemsList}</ion-list>`;

        const alert = await this.alertController.create({
            header: 'List virtual scrolling',
            message
            ,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: (blah) => {
                        console.log('Confirm Cancel: blah');
                    }
                },
                {
                    text: 'Ok',
                    handler: () => {
                        console.log('Confirm Okay');
                    }
                }
            ]
        });
        await alert.present();
    }

}
