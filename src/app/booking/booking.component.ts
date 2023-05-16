import { Component, OnInit } from '@angular/core';
import { btn } from './btn';
import { FormArray, FormBuilder, FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { BookingService } from './booking.service';
import { exhaustMap, switchMap } from 'rxjs';
import { CustomValidator } from '../validator/custom-validator';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})

export class BookingComponent implements OnInit {

  /*-----For Slider----*/
  btnArray = ['one', 'two', 'three', 'four', 'five'];
  useableBtn: btn[] = [];
  diff = 100 / this.btnArray.length;
  d: number = 0;
  /*-----For Slider----*/

  startDate = new Date();
  bookingForm!: FormGroup;
  constructor(private fb: FormBuilder, private bookingservice: BookingService, private route: ActivatedRoute) { }

  get guests() {
    return this.bookingForm.get('guests') as FormArray;
  }

  ngOnInit(): void {

    const roomId = this.route.snapshot.paramMap.get('roomid');


    /*-----For Slider----*/
    this.btnArray.map((data) => {
      this.useableBtn.push({ btnname: data, left: this.d });
      this.d = this.d + this.diff;
    })
    /*-----For Slider----*/

    this.bookingForm = this.fb.group({
      roomId: new FormControl({ value: roomId, disabled: true }, { validators: [Validators.required] }),
      guestEmail: ['', [Validators.required, Validators.email]],
      checkinTime: [''],
      checkoutTime: [('')],
      bookingStatus: ['', [Validators.minLength(5), CustomValidator.validateName]],
      bookingAmount: ['', [CustomValidator.validateAmount('1'), Validators.required]],
      bookingDate: [('')],
      moblieNumber: ['', [Validators.required, Validators.min(1000000000), Validators.max(9999999999)]],
      address: this.fb.group({
        addressLine1: ['', [Validators.required]],
        addressLine2: [('')],
        city: [('')],
        state: [('')],
        country: [('')],
        zipCode: [('')],
      }),
      guests: this.fb.array([
        this.addguestControl(),
      ]),

    }, { validators: [CustomValidator.validatedate] });
    // { updateOn: 'blur' }

    this.setPatchValueEx();

    this.bookingForm.valueChanges.pipe(
      exhaustMap((data) => this.bookingservice.bookRoom(data))
    ).subscribe((data) => console.log(data));



  }
  addguestControl() {
    return this.fb.group({ guestName: ['', [Validators.required, CustomValidator.validateName]], age: new FormControl('', [Validators.required]) });
  }
  bookRoom() {
    console.log(this.bookingForm.value)
    this.bookingservice.bookRoom(this.bookingForm.getRawValue()).subscribe((data) => { console.log(data) })
    // this.bookingForm.reset();
  }
  addguest() {
    this.guests.push(
      this.addguestControl()
    )
  }
  addpassport() {
    this.bookingForm.addControl('passport', new FormControl(''));
  }
  rmpassport() {
    if (this.bookingForm.get('passport'))
      this.bookingForm.removeControl('passport');
  }
  removeguest(i: number) {
    this.guests.removeAt(i);
  }
  setPatchValueEx() {
    this.bookingForm.patchValue({
      guestEmail: 'Ashu@eg.in',
      address: {
        addressLine1: 'aaaaaa',
        addressLine2: '',
        city: '',
        state: '',
        country: '',
        zipCode: '',
      },
      guests: [],
    })
  }


  /*-----For Slider----*/
  shift(str: number) {
    document.getElementById('box')?.setAttribute("style", `left:${str}%`);
  }
  /*-----For Slider----*/
}
