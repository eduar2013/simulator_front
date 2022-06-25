import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../services/question.service';
import { Chronometer } from 'ngx-chronometer';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  chronometer: Chronometer = new Chronometer();

  getTotalQuestion():number{
    return this.questionService.totalQuestion;
  }

  getTotalCorrectAnswers():number{
    return this.questionService.totalCorrectAnswers;
  }

  constructor(private questionService:QuestionService) { }

  ngOnInit(): void {
    this.chronometer.start();
  }

}
