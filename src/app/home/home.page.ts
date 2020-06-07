// Angular
import { Component, OnInit, ViewChild, ViewContainerRef, TemplateRef, AfterViewInit } from '@angular/core';

// Ionic
import { AlertController } from '@ionic/angular';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit , AfterViewInit {

    @ViewChild('itemsContainer', {static: true, read: ViewContainerRef }) container: ViewContainerRef;
    @ViewChild('item', { read: TemplateRef }) template: TemplateRef<any>;
    items: any;

    constructor(private alertController: AlertController) {}

    ngOnInit() {
        this.items = Array.from({length: 10000}).map((_, i) => `Item ${i}`);
    }

    ngAfterViewInit() {
        this.buildData(10000);
    }

    onClickItem() {
        console.log('onClickItem');
    }

    // Technique 1. Virtual scrolling.
    async presentAlert() {

        /*
        let itemsList = ``;

        this.items.map((item) => {
            itemsList +=
            `<ion-item>
                    <ion-label>${item}</ion-label>
            </ion-item>
            `;
        });

        const message = `<ion-list>${itemsList}</ion-list>`;
        */

        let itemsList = '';

        this.items.map((item) => {
            itemsList +=
            `<div class="example-item" (click)="onClickItem()">${ item}</div>
            `;
        });

        const message = `<cdk-virtual-scroll-viewport class="example-viewport" itemSize="50">${itemsList}</cdk-virtual-scroll-viewport>`;

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

    // Technique 2. Manual rendering.
    buildData(length: number) {
        const start = 0;
        const end = start + length;
        for (let n = start; n <= end; n++) {
            this.container.createEmbeddedView(this.template, {
                item: {
                id: n,
                label: Math.random()
                },
            });
        }
    }

}
