import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sample-http';

  constructor(
    private activatedRouteService: ActivatedRoute,
    private appService: AppService
  ) {
    setTimeout(() => {
      this.activatedRouteService.queryParams.subscribe((params)=>{
          const {token} = params;
        this.appService.validateToken(token);
      });
    }, 500)
  }

  ngOnInit(): void {
  }
}
