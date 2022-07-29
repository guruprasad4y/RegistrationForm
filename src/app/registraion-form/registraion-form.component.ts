import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-registraion-form',
  templateUrl: './registraion-form.component.html',
  styleUrls: ['./registraion-form.component.css']
})
export class RegistraionFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  StateList = [
    {
      Id: 1,
      Name: "Andhra Pradesh"
    },
    {
      Id: 2,
      Name: "Telangana"
    },
    {
      Id: 3, Name: "Bangalore"
    }

  ]

  sEmail = "";
  sPassword = "";
  sAddress = "";
  sAddress2 = "";
  sCity = "";
  sState = "";
  sZipcode = "";

   @ViewChild("email") vEmail: ElementRef<any> | undefined;
  @ViewChild("password") vPassword: ElementRef<any> | undefined;
  @ViewChild("address") vAddress: ElementRef<any> | undefined;
  @ViewChild("address2") vAddress2: ElementRef<any> | undefined;
  @ViewChild("state") vState: ElementRef<any> | undefined;
  @ViewChild("city") vCity: ElementRef<any> | undefined;
  @ViewChild("zipcode") vZipcode: ElementRef<any> | undefined;

  CustomerDetails={  }
  receivedfeedbackinfo:any={}
  isSubmitted:boolean=true;
  
  
  submit() {
    this.sEmail = this.vEmail?.nativeElement.value;
    this.sPassword = this.vPassword?.nativeElement.value;
    this.sAddress = this.vAddress?.nativeElement.value;
    this.sAddress2 = this.vAddress2?.nativeElement.valuelu;
    this.sState = this.vState?.nativeElement.value;
    this.sCity = this.vCity?.nativeElement.value;
    this.sZipcode = this.vZipcode?.nativeElement.value;

    this.CustomerDetails={
      'Email':this.sEmail,
      'Password':this.sPassword,
      'Address':this.sAddress,
      'Address2':this.sAddress2,
      'State':this.sState,
      'City':this.sCity,
      'Zipcode':this.sZipcode

    }
    this.isSubmitted=true;
  }

  

  
  receivedfeedbackdata(info:any){
    console.log(info);
    this.receivedfeedbackinfo=info;

  }
}
