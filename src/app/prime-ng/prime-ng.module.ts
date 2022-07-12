import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { FieldsetModule } from 'primeng/fieldset';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { PanelModule } from 'primeng/panel';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SliderModule } from 'primeng/slider';
import { TabMenuModule } from 'primeng/tabmenu';
import { ToastModule } from 'primeng/toast';
import { ToggleButtonModule}  from 'primeng/togglebutton';


@NgModule({
  exports:[
    ButtonModule,
    CardModule,
    CheckboxModule,
    DividerModule,
    DropdownModule,
    DynamicDialogModule,
    FieldsetModule,
    InputTextModule,
    InputTextareaModule,
    MessagesModule,
    MessageModule,
    PanelModule,
    RadioButtonModule,
    SliderModule,
    TabMenuModule,
    ToastModule,
    ToggleButtonModule
  ]
})
export class PrimeNgModule { }
