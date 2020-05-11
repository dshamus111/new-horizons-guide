import { BrowserModule } from '@angular/platform-browser';
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
  MatMenuModule
} from '@angular/material';

import { FishItemComponent } from './components/fish-item/fish-item.component';
import { DatePipe } from './pipes/date.pipe';
import { DetailsDialogComponent } from './components/details-dialog/details-dialog.component';
import { BugItemComponent } from './components/bug-item/bug-item.component';

@NgModule({
  declarations: [
    AppComponent,
    FishItemComponent,
    DatePipe,
    DetailsDialogComponent,
    BugItemComponent
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
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DetailsDialogComponent]
})
export class AppModule {  }
