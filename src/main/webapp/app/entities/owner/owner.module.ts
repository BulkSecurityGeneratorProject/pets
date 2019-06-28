import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PetsSharedModule } from 'app/shared';
import {
    OwnerComponent,
    OwnerDetailComponent,
    OwnerUpdateComponent,
    OwnerDeletePopupComponent,
    OwnerDeleteDialogComponent,
    ownerRoute,
    ownerPopupRoute
} from './';

const ENTITY_STATES = [...ownerRoute, ...ownerPopupRoute];

@NgModule({
    imports: [PetsSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [OwnerComponent, OwnerDetailComponent, OwnerUpdateComponent, OwnerDeleteDialogComponent, OwnerDeletePopupComponent],
    entryComponents: [OwnerComponent, OwnerUpdateComponent, OwnerDeleteDialogComponent, OwnerDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PetsOwnerModule {}
