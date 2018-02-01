import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  imports: [MatButtonModule,
            MatToolbarModule,
            MatIconModule,
            MatMenuModule,
            MatFormFieldModule,
            MatInputModule,
            MatCardModule,
            MatProgressSpinnerModule
  ],
  exports: [MatButtonModule,
            MatToolbarModule,
            MatIconModule,
            MatMenuModule,
            MatFormFieldModule,
            MatInputModule,
            MatCardModule,
            MatProgressSpinnerModule
  ]
})

export class MaterialModule {}
