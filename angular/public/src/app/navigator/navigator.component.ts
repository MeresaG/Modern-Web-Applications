import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }


onHome(): void {
  this._router.navigate(['']);
}
onGames(): void {
  this._router.navigate(['/games']);
}

}
