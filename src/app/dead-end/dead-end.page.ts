import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dead-end',
  templateUrl: './dead-end.page.html',
  styleUrls: ['./dead-end.page.scss'],
})
export class DeadEndPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  moveHome() {
    this.router.navigateByUrl('home')
  }

}
