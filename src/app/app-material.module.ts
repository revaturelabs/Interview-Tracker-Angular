import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatCardModule,
   MatButtonModule,
   MatToolbarModule,
   MatIconModule,
   MatBadgeModule,
   MatSidenavModule,
   MatListModule,
   MatGridListModule,
   MatFormFieldModule,
   MatInputModule,
   MatSelectModule,
   MatRadioModule,
   MatDatepickerModule,
   MatNativeDateModule,
   MatChipsModule,
   MatTooltipModule,
   MatTableModule,
   MatPaginatorModule,
<<<<<<< HEAD
   MatButtonToggleModule,
   MatCheckboxModule,
   MatSlideToggleModule,
   MatAutocompleteModule
=======
   MatButtonToggleModule
>>>>>>> UserFeature
} from '@angular/material';

const MaterialComponents = [
  MatCardModule,
   CommonModule,
   MatButtonModule,
   MatToolbarModule,
   MatIconModule,
   MatSidenavModule,
   MatBadgeModule,
   MatListModule,
   MatGridListModule,
   MatFormFieldModule,
   MatInputModule,
   MatSelectModule,
   MatRadioModule,
   MatDatepickerModule,
   MatNativeDateModule,
   MatChipsModule,
   MatTooltipModule,
   MatTableModule,
   MatButtonToggleModule,
<<<<<<< HEAD
   MatPaginatorModule,
   MatCheckboxModule,
   MatSlideToggleModule,
   MatAutocompleteModule
=======
   MatPaginatorModule
>>>>>>> UserFeature
];
@NgModule({
   imports: [
      MaterialComponents
   ],
   exports: [
      MaterialComponents
   ],
   providers: [
      MatDatepickerModule,
   ]
})

export class AppMaterialModule { }
