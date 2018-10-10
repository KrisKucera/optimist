import {Component, OnInit} from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
declare var gapi : any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'optimist';

  
    ngOnInit(){ 

      gapi.load("client", () => { 
        // now we can use gapi.client
        // ... 
    });

    gapi.client.load('calendar', 'v3', () => {
      // now we can use gapi.client.calendar
      // ... 
  });

  var client_id = '287011187204-qk81st4n6hn0dda5jkpvl8gg5mlb660n.apps.googleusercontent.com',
  scope = [     
      // Manage your calendars
      'https://www.googleapis.com/auth/calendar',
  
      // View your calendars
      'https://www.googleapis.com/auth/calendar.readonly',
  ],
  immediate = true;
// ...

gapi.auth.authorize({ client_id: client_id, scope: scope, immediate: immediate }, authResult => {
    if (authResult && !authResult.error) {
        console.log("Success");
    } else {
      console.log("failed");
    }
    });   

    gapi.client.calendarList.list({  }); 

    }

      
 }
