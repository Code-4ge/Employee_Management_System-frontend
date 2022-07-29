import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from '../Services/contact/contact.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  public contactForm !:FormGroup;

  constructor(private formBuilder : FormBuilder, private contactService : ContactService, private router:Router) { }

  ngOnInit(): void {
    this.contactForm=this.formBuilder.group({
      name:[""],
      email: [''],
      phone:[""],
      body: ['']
    })
  }

  sendMail(){
    this.contactService.sendMessage(this.contactForm.value)
    .subscribe({
      next:(res)=>{
        console.log(res);
        alert("Message Sent")
        this.router.navigate(['contact']);
      },
      error:(err)=>{
        if(err.status == 200)
        {
          alert("Message Sent")
          this.router.navigate(['contact']);
        }
        else{
          console.log(err);
          alert("Unable to Send Message")}
       }
    })
  }

}
