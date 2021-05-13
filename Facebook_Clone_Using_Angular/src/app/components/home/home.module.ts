import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FormsModule, NgForm } from '@angular/forms';
import {MaterialModule} from '../../shared/material.module';
// import {MatIconModule,MatBadgeModule,MatMenuModule,MatButtonModule,MatCardModule} from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@NgModule({
    declarations:[
        // HomeComponent,
    ],
    imports:[
        CommonModule,
        FormsModule,
        MaterialModule,
        MatMenuModule,
        MatButtonModule,
        MatBadgeModule,
        MatIconModule,
        MatCardModule
    ],
})

export class HomeModule{
}


