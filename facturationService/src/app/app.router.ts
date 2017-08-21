import{ ModuleWithProviders } from '@angular/core';
import{ Routes, RouterModule } from '@angular/router';

import{ AppComponent } from './app.component';
import{ SaisieFactureComponent } from './saisie-facture/saisie-facture.component';
import{ RechercheFactureComponent } from './recherche-facture/recherche-facture.component';

export const router: Routes = [
    {path: '', redirectTo: 'saisie-facture', pathMatch: 'full'},
    {path: 'saisie-facture', component: SaisieFactureComponent },
    {path: 'recherche-facture', component: RechercheFactureComponent },
]
export const routes: ModuleWithProviders = RouterModule.forRoot(router);