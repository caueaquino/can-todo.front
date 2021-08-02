import { Component } from '@angular/core';

import { LoadingService } from 'src/app/core/services/loading.service';


@Component({
  selector: 'can-root',
  templateUrl: './can.component.html',
  styleUrls: ['./can.component.scss']
})
export class CanComponent {

  constructor(
    public loadingService: LoadingService,
  ) { }

}
