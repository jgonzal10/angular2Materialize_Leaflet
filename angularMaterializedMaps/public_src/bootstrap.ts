import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {HttpModule} from "@angular/http";
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from './shared/shared.module';

import { routing } from './app.routes';



@NgModule({
    imports: [
    HttpModule, 
    FormsModule, 
    BrowserModule,
    ReactiveFormsModule,
    routing,
    SharedModule

    ],
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,LoginComponent

    ],
    providers: [{
        provide: APP_BASE_HREF,
        useValue: 'login'
    }
    ]
})

export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
