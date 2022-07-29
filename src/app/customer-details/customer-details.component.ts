import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { customer } from '../Models/customer.model';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  @Input('test') _test: any;

  @Input('RegistrationForm') _CustomerDetails: any;
  @Input('RegistrationForm') set InputCustomerForm(value: any) {
    if (value.Email == "" || value.Email==undefined) {
      value.Email = "No Email";

    }
    this._CustomerDetails = value;
  }

  @Output('evtfeedbackinformation') information = new EventEmitter<any>();

  ICForm: customer | undefined;
  feedbackinformation = { "Emailfeedback":""}
  ICForms: any[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log(this._CustomerDetails);
    this.ICForm = this._CustomerDetails;
    this.ICForms.push(this.ICForm);
    console.log(this.ICForm);
  }

}
