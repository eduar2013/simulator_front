import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { SimulatorComponent } from './pages/simulator/simulator.component';
import { FormsModule } from '@angular/forms';

import { DialogService } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { FormatCodePipe } from './pipes/format-code.pipe';
import { SummaryComponent } from './pages/summary/summary.component';

import { NgxChronometerModule } from 'ngx-chronometer';
import { SetupComponent } from './pages/setup/setup.component';
import { InfoQuestionComponent } from './pages/info-question/info-question.component';


@NgModule({
  declarations: [
    HomeComponent,
    SimulatorComponent,
    FormatCodePipe,
    SummaryComponent,
    SetupComponent,
    InfoQuestionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxChronometerModule,
    PrimeNgModule
  ],
  providers:[
    DialogService,
    MessageService
  ]
})
export class SimulatorModule { }
