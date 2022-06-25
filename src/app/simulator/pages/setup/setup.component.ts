import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionService } from '../../services/question.service';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css']
})
export class SetupComponent implements OnInit {

  numberOfQuestion: number=25;


  selectedTopics: any[] = [];

  examTopics: any[] = [ {name: 'Java Data Types', key: '1'},
                        {name: 'Controlling Program Flow', key: '2'},
                        {name: 'Java Object-Oriented', key: '3'},
                        {name: 'Exception Handling', key: '4'},
                        {name: 'Arrays and Collections', key: '5'},
                        {name: 'Streams and Lambda expressions', key: '6'},
                        {name: 'Java Platform Module System', key: '7'},
                        {name: 'Concurrency', key: '8'},
                        {name: 'Java I/O API', key: '9'},
                        {name: 'Secure Coding in Java SE Application', key: '10'},
                        {name: 'Database Applications with JDBC', key: '11'},
                        {name: 'Localization', key: '12'},
                        {name: 'Annotations', key: '13'},

                      ];


  starExam(){
    this.questionService.numberOfQuestion = this.numberOfQuestion;
    this.questionService.getAllQuestion();
    this.router.navigate(['simulatorExam'],{queryParams:{numberOfQuestion:this.numberOfQuestion}});
  }

  constructor(private router:Router, private questionService:QuestionService) { }

  ngOnInit(): void {
  }



}
