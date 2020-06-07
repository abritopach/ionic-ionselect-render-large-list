// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';

// Ionic
import { IonicModule } from '@ionic/angular';

// Project
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { AlertModalComponent } from '../modals/alert-modal/alert-modal.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HomePageRoutingModule,
        ScrollingModule
    ],
    declarations: [HomePage, AlertModalComponent],
    entryComponents: [AlertModalComponent]
})
export class HomePageModule {}
