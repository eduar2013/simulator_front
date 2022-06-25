import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { SetupComponent } from '../setup/setup.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ref: DynamicDialogRef = new DynamicDialogRef;

   show() {
    this.ref = this.dialogService.open(SetupComponent, {
        header: 'Set up test',
        width: '50%',
        contentStyle: {"max-height": "500px", "overflow": "auto"}

    });

    /*this.ref.onClose.subscribe((product: Product) =>{
        if (product) {
            this.messageService.add({severity:'info', summary: 'Product Selected', detail: product.name});
        }
    });*/
 }



  constructor(public dialogService: DialogService, public messageService: MessageService) { }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    if (this.ref) {
        this.ref.close();
    }
}

}
