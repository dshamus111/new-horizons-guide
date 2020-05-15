import { BrowserModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material Modules
import {
  MatTabsModule,
  MatDialogModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatMenuModule,
  MatDividerModule
} from '@angular/material';

import { FishItemComponent } from './components/fish-item/fish-item.component';
import { DatePipe } from './pipes/date.pipe';
import { AnimalDetailsComponent } from './components/animal-details/animal-details.component';
import { BugItemComponent } from './components/bug-item/bug-item.component';
import { FossilItemComponent } from './components/fossil-item/fossil-item.component';
import { ArtItemComponent } from './components/art-item/art-item.component';

declare var Hammer: any;

export class MyHammerConfig extends HammerGestureConfig  {
  buildHammer(element: HTMLElement) {
    const mc = new Hammer(element, {
      touchAction: 'pan-y'
    });
    return mc;
  }
}

@NgModule({
  declarations: [
    AppComponent,
    FishItemComponent,
    DatePipe,
    AnimalDetailsComponent,
    BugItemComponent,
    FossilItemComponent,
    ArtItemComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,

    // Material Modules
    MatTabsModule,
    MatDialogModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule
  ],
  providers: [
    {
      // hammer instantion with custom config
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig ,
    },
  ],
  bootstrap: [AppComponent],
  entryComponents: [AnimalDetailsComponent]
})
export class AppModule {  }
