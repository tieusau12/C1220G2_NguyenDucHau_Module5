import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BatDongSanService} from "../../service/bat-dong-san.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-bat-dong-san-create',
  templateUrl: './bat-dong-san-create.component.html',
  styleUrls: ['./bat-dong-san-create.component.css']
})
export class BatDongSanCreateComponent implements OnInit {
  realEstateForm!: FormGroup;
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder,
              private batDongSanService: BatDongSanService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.realEstateForm = this.formBuilder.group({
      category: [''],
      regions: [''],
      buyer: [''],
      articleType: [''],
      status: [''],
      address: ['', Validators.required],
      area: ['', [Validators.required, Validators.min(20)]],
      direction: [''],
      title: ['', Validators.required],
      content: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(10000)]],
      acceptTerms: [false, Validators.requiredTrue]
    })
  }

  get form() {
    return this.realEstateForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.realEstateForm.invalid) {
      return;
    }

    const realEstate = this.realEstateForm.value;
    this.batDongSanService.save(realEstate).subscribe(() => {
      this.router.navigateByUrl('/batdongsan/list')
    })
  }

  onReset() {
    this.submitted = false;
    this.realEstateForm.reset();
  }
}
