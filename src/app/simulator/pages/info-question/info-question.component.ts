import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../services/question.service';

@Component({
  selector: 'app-info-question',
  templateUrl: './info-question.component.html',
  styleUrls: ['./info-question.component.css']
})
export class InfoQuestionComponent implements OnInit {

  getIdQuestion():number | undefined{
    return this.questionService.questionObj.number;
  }

  getQuestionObjective():string | undefined {
    return this.questionService.questionObj.objective?.toString();
  }

  constructor(private questionService:QuestionService) { }

  ngOnInit(): void {
  }

}
