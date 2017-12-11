import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatListModule, MatSidenavModule,MatIconModule } from '@angular/material';


@NgModule({
    imports: [MatButtonModule, MatSidenavModule, MatToolbarModule, MatListModule,MatIconModule],
    exports: [MatButtonModule, MatSidenavModule, MatToolbarModule, MatListModule,MatIconModule]
})

export class MaterialModule { }