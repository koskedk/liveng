import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {Setting} from "../../_models/setting";
import {Store} from "@ngrx/store";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-setting-detail',
  templateUrl: './setting-detail.component.html',
  styleUrls: ['./setting-detail.component.scss']
})
export class SettingDetailComponent implements OnChanges{
  @Input()
  setting: Setting;
  @Output()
  save = new EventEmitter<Setting>();
  @Output()
  cancel = new EventEmitter();
  settingForm: FormGroup;


  constructor(private store: Store, private fb: FormBuilder) {
    this.settingForm = this.fb.group({
      id: ['', Validators.required],
      value: ['', Validators.required],
      description: ['']
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.setting){
      this.settingForm.setValue({
        id: this.setting.id,
        value: this.setting.value,
        description:this.setting.description
      })
    }
  }


  saveSetting() {
    this.save.emit(this.settingForm.value)
  }
  cancelSaveSetting() {
    this.cancel.emit()
  }



}
