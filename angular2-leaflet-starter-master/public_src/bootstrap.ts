import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {HttpModule} from "@angular/http";
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//import {AppComponent} from "./components/app/app.component";
import {NavigatorComponent} from "./components/navigator/navigator.component";
import {MarkerComponent} from "./components/marker/marker.component";
import {LoginComponent} from "./components/login/login.component";

import {MapService} from "./services/map.service";
import {GeocodingService} from "./services/geocoding.service";

@NgModule({
    imports: [HttpModule, FormsModule, BrowserModule,ReactiveFormsModule],
    bootstrap: [LoginComponent],
    declarations: [
       // AppComponent,
        NavigatorComponent,
        MarkerComponent,
        LoginComponent,

    ],
    providers: [
        MapService,
        GeocodingService
    ]
})

export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
