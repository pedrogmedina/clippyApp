import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faLock, faUser, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  faLock = faLock;
  faUser = faUser;
  faQuestion = faQuestionCircle;
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

}
