import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { QuestionService } from '../../services/question.service';
import { ActivatedRoute } from '@angular/router';
import { QuestionInterface } from '../../interfaces/question.interface';


@Component({
  selector: 'app-simulator',
  templateUrl: './simulator.component.html',
  styleUrls: ['./simulator.component.css']
})
export class SimulatorComponent implements OnInit {

  selectedAnswers: string[] = [];
  viewCorrectAnswer: boolean = false;

  getQuestion():QuestionInterface{
    return this.questionService.questionObj;
  }

  getNumberOfQuestion():number{
    return this.questionService.numberOfQuestion
  }

  getCurrentQuestion():number{
    return this.questionService.currentQuestion;
  }

  validateResponse(){
   if(!this.selectedAnswers.length){
     return;
   }
   this.viewCorrectAnswer = true;
   this.messageService.clear();

   if(this.questionService.validateResponse(this.selectedAnswers)){
    this.messageService.add({severity:'success', detail:'Correct Answer!', life:3000});
   }else{
    this.messageService.add({severity:'error', detail:'Wrong Answer!', life:3000});
   };



  }

  activateNextQuestion():boolean{
    if(this.questionService.numberOfQuestion == this.questionService.currentQuestion){
      return true;
    }
    return false;
  }


  nextQuestion(){
    this.viewCorrectAnswer = false;
    this.messageService.clear();
    this.selectedAnswers = [];
    this.questionService.getQuestion();
  }


  constructor(private questionService: QuestionService, private messageService: MessageService, private route: ActivatedRoute) {
   }

  ngOnInit(): void {
  }

}
