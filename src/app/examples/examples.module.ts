import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LandingComponent } from './landing/landing.component';
import { OurStoryComponent } from './our-story/our-story.component';
import { LocationComponent } from './location/location.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
    ],
    declarations: [
        LandingComponent,
        OurStoryComponent,
        LocationComponent
    ]
})
export class ExamplesModule { }
