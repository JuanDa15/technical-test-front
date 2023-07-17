import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/utils/session.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  public session = inject(SessionService);
  public router = inject(Router);

  logOut() {
    this.session.logOut();
    this.router.navigateByUrl('/auth/login');
  }
}
