import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Setting} from "../../_models/setting";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-settings-list',
  templateUrl: './settings-list.component.html',
  styleUrls: ['./settings-list.component.scss']
})
export class SettingsListComponent {
  @Input()
  settings: Setting[]
  @Output()
  select = new EventEmitter<Setting>();

  selectSetting(setting: Setting) {
    this.select.emit(setting)
  }
}
