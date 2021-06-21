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
  batdongsanForm!: FormGroup;
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder,
              private batDongSanService: BatDongSanService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.batdongsanForm = this.formBuilder.group({
      danhMuc: [''],
      vungMien: [''],
      nguoiMua: [''],
      loaiBaiViet: [''],
      tinhTrang: [''],
      diaChi: ['', Validators.required],
      dienTich: ['', [Validators.required, Validators.min(20)]],
      huong: [''],
      tieuDe: ['', Validators.required],
      noiDung: ['', Validators.required],
      gia: ['', [Validators.required, Validators.min(100000000)]],
      acceptTerms: [false, Validators.requiredTrue]
    })
  }

  get form() {
    return this.batdongsanForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.batdongsanForm.invalid) {
      return;
    }

    const batdongsan = this.batdongsanForm.value;
    this.batDongSanService.save(batdongsan).subscribe(() => {
      this.router.navigateByUrl('/batdongsan/list')
    })
  }

  onReset() {
    this.submitted = false;
    this.batdongsanForm.reset();
  }
}
