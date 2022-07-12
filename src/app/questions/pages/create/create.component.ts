import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { topic } from '../../interfaces/topic.interface';
import { QuestionInterface } from '../../../simulator/interfaces/question.interface';
import { Answer } from '../../interfaces/answer.model';
import { QuestionService } from '../../../simulator/services/question.service';




@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  question:QuestionInterface = {};
  qanswers:Answer[] = [];

  topics:topic[] = [];


  createForm: FormGroup = this.fb.group({
    number:'',
    text_question:'',
    selectedTopic:'',
    objective:'',
    answers: this.fb.array([this.addAnswerFormGroup(
      {option:'A',description:'',valid:false}),
      this.addAnswerFormGroup(
      {option:'B',description:'',valid:false}),
      this.addAnswerFormGroup(
      {option:'C',description:'',valid:false}),
      this.addAnswerFormGroup(
      {option:'D',description:'',valid:false})])
  });

  addAnswerFormGroup(ans: Answer): FormGroup {
    return this.fb.group({
      option:ans.option,
      description:ans.description,
      valid:ans.valid
    })
  }

  addAnswerClick():void {
    (<FormArray>this.createForm.get("answers")).push(
      this.addAnswerFormGroup({description:'',valid:false, option:''})
    )
  }

  deleteAnswerClick(index:number):void {
    console.log(index);
    (<FormArray>this.createForm.get("answers")).removeAt(index);
  }



  onSubmit(form:FormGroup){
    console.log('number:',form.value.number);
    console.log("text_question:", form.value.text_question);
    console.log("selectedTopic:",form.value.selectedTopic);
    console.log("objective",form.value.objective);
    console.log("answers", form.value.answers);


    var topicSelected = this.topics.find(e => e.code == form.value.selectedTopic);

    this.question.number = form.value.number;
    this.question.text_question = form.value.text_question.split("\n");
    this.question.objective = form.value.objective;
    this.question.topic = {description:topicSelected?.topic, code:form.value.selectedTopic};
    this.question.answers = [];

    form.value.answers.forEach((e:Answer) => {

      this.question.answers?.push({
        option:e.option,
        description:e.description!.split("\n"),
        valid:e.valid
      })
    });

    console.log(this.question);

    this.questionService.saveQuestion(this.question);



  }


  get answers() {
    return this.createForm.controls["answers"] as FormArray;
  }

  constructor(private fb: FormBuilder, private questionService:QuestionService) {
    this.topics = [
      {topic: 'Java Data Types', code: '1'},
      {topic: 'Controlling Program Flow', code: '2'},
      {topic: 'Java Object-Oriented', code: '3'},
      {topic: 'Exception Handling', code: '4'},
      {topic: 'Arrays and Collections', code: '5'},
      {topic: 'Streams and Lambda expressions', code: '6'},
      {topic: 'Java Platform Module System', code: '7'},
      {topic: 'Concurrency', code: '8'},
      {topic: 'Java I/O API', code: '9'},
      {topic: 'Secure Coding in Java SE Application', code: '10'},
      {topic: 'Database Applications with JDBC', code: '11'},
      {topic: 'Localization', code: '12'},
      {topic: 'Annotations', code: '13'},
    ]


  }

  ngOnInit(): void {
  }

}
