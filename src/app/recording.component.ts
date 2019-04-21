import { Component } from '@angular/core';
import { Model, Recording, Patient} from './model';
import { HttpClient } from '@angular/common/http';

@Component({
    templateUrl: 'recording.component.html'
})

export class RecordingComponent {

	title = 'app';
	constructor(private http: HttpClient){
		this.http.get<Patient[]>('http://localhost:8080/health-pro-zone-backend/patients').subscribe(data => {
			this.model.patients = data;
	    });
	}

    model = new Model();

    selectedValue:Patient;
    savedRecordings:Recording[] = [];

	getRecordings() {
        return this.savedRecordings;
	}

	getPatients() {
        return this.model.patients;
	}

	saveRecording(recordingType) {

		let patient = new Patient(this.selectedValue.id, this.selectedValue.name);
		let recording = new Recording(recordingType, patient);

		console.log(recording);
        
        this.http.post<Recording>('http://localhost:8080/health-pro-zone-backend/recording', recording).subscribe(data => {
          data.patient= patient;
	      this.savedRecordings.push(data);
	    });
	}
}
