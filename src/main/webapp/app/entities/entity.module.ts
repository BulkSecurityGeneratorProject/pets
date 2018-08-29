import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { PetsOwnerModule } from './owner/owner.module';
import { PetsPetModule } from './pet/pet.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        PetsOwnerModule,
        PetsPetModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PetsEntityModule {}
