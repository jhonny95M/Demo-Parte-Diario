import { Component, Input } from '@angular/core';
import { TypeLoading } from 'src/app/model/TypeLoading';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent {
  @Input() typeLoad= TypeLoading.BallBeat;
  getTypeLoadBallBeat(t:TypeLoading ):boolean{
    return t==TypeLoading.BallBeat;
  }
}
