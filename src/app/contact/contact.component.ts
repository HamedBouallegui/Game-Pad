import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  form:FormGroup= this.fb.group({
    name:'',
    to_name:'Admin',
    from_email:'',
    subject:'',
    message:'',
  })

  constructor(private fb:FormBuilder){}
 async send(){
  emailjs.init('AiGUj6pwUEDVlS_b-');
    let reponse = await emailjs.send("service_v7d5vio","template_jozce0f",{
    name: this.form.value.name,
    to_name: this.form.value.to_name,
    from_email: this.form.value.from_email,
    subject: this.form.value.subject,
    message: this.form.value.message,
    });

    alert('Message has been sent.');
    this.form.reset();
}
  }

