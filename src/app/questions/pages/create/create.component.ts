import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { topic } from '../../interfaces/topic.interface';



@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  topics:topic[] = [];


  createForm: FormGroup = this.fb.group({
    number:'',
    text_question:'',
    selectedTopic:'',
    objective:'',
    answers: this.fb.array([this.addAnswerFormGroup()])
  });

  addAnswerFormGroup(): FormGroup {
    return this.fb.group({
      answer:'w',
      valid:'d'
    })
  }

  addAnswerClick():void {
    (<FormArray>this.createForm.get("answers")).push(
      this.addAnswerFormGroup()
    )
  }

  deleteAnswerClick(index:number):void {
    console.log(index);
    (<FormArray>this.createForm.get("answers")).removeAt(index);
  }



  onSubmit(form:FormGroup){
    console.log('objective:',form.value.name);
    console.log("text_question:", form.value.text_question);
  }


  get answers() {
    return this.createForm.controls["answers"] as FormArray;
  }

  constructor(private fb: FormBuilder) {
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
