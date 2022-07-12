import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { QuestionInterface } from '../interfaces/question.interface';


@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  numberOfQuestion:number = 5;
  totalQuestion:number = 0;
  currentQuestion:number = 0;
  totalCorrectAnswers:number = 0;



  questions:QuestionInterface[] = [];
  questionObj:QuestionInterface = {};
  selectedQuestion:number[] = [];
  numberQuestionSelected: number = 0;


  saveQuestion(question : QuestionInterface){
    this.http.put<QuestionInterface>(`http://localhost:8080/api/question/save`,question)
    .subscribe(resp=>{
      console.log(resp);
    });
  }

 getAllQuestion(){

  if(this.questions.length == 0){
      this.http.get<QuestionInterface[]>(`http://localhost:8080/api/question`)
      .subscribe( resp =>{
        this.questions = resp;
        this.currentQuestion = this.currentQuestion +1;
        var numberQuestion:number = this.getRandomInt(0, resp.length);
        this.selectedQuestion.push(numberQuestion);
        this.questionObj = this.questions[numberQuestion];
        this.shuffle(this.questionObj.answers);
      }
    );
  }else{
    this.totalQuestion = 0;
    this.currentQuestion = 0;
    this.totalCorrectAnswers = 0;
    this.selectedQuestion = [];
    this.getQuestion();
  }
 }

  getQuestion():QuestionInterface{
    do{
      this.numberQuestionSelected = this.getRandomInt(0, this.questions.length);
    } while(this.selectedQuestion.includes(this.numberQuestionSelected));

    this.selectedQuestion.push(this.numberQuestionSelected);
    console.log(this.selectedQuestion);
    this.questionObj = this.questions[this.numberQuestionSelected];
    this.shuffle(this.questionObj.answers);
    this.currentQuestion = this.currentQuestion +1;
    return this.questionObj;
  }


  validateResponse(selectedAnswers: string[] ):boolean{
    this.totalQuestion = this.totalQuestion+1;

    var validResponse:Array<string> = [];

    this.questionObj.answers?.forEach(function(x){
      if(x.valid && x.option != undefined){
        validResponse.push(x.option);
      }
    }
    );

    selectedAnswers = selectedAnswers.sort();
    validResponse = validResponse.sort();

    if(this.equals(validResponse, selectedAnswers)){
      this.totalCorrectAnswers = this.totalCorrectAnswers+1;
      return true
    }
    return false;
  }

  equals = (a:any, b:any) =>  a.length === b.length &&  a.every((v:any, i:any) => v === b[i]);

  getRandomInt(min:number, max:number):number {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  shuffle(array:any) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

      // swap elements array[i] and array[j]
      // we use "destructuring assignment" syntax to achieve that
      // you'll find more details about that syntax in later chapters
      // same can be written as:
      // let t = array[i]; array[i] = array[j]; array[j] = t
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  constructor(private http: HttpClient) {  }




}
