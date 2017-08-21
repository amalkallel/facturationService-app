import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes} from './app.router';


import { AppComponent } from './app.component';
import { SaisieFactureComponent } from './saisie-facture/saisie-facture.component';
import { RechercheFactureComponent } from './recherche-facture/recherche-facture.component';

@NgModule({
  declarations: [
    AppComponent,
    SaisieFactureComponent,
    RechercheFactureComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
