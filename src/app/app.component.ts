import {Component, ElementRef, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('form', {static: true}) submittedForm: NgForm;
  defaultPackage = 'Advanced';

  formData = {
    email: '',
    packageType: '',
    password: ''
  };

  onSubmit() {
    console.log(this.submittedForm.value);
    this.formData.email = this.submittedForm.value.email;
    this.formData.packageType = this.submittedForm.value.package;
    this.formData.password = this.submittedForm.value.password;
  }
}
