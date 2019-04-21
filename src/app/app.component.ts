import { Component } from '@angular/core';
import { Model, Recording, Patient} from './model';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'todo-app',
    templateUrl: 'app.component.html'
})

export class AppComponent {

	title = 'app';
	constructor(private http: HttpClient){
	  }

    model = new Model();
    getPatientName() {
        return this.model.patient.name;
	}

	getRecordings() {
        return this.model.patient.recordingList;
	}

	searchRecordingsByPatientId(patientID) {
        
        this.http.get('http://localhost:8080/health-pro-zone-backend/recording/'+patientID).subscribe(data => {
	      console.log(data);
	      this.model.patient = data;
	    });
	}
}
