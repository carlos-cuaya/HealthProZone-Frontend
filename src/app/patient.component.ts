import { Component } from '@angular/core';
import { Model, Recording, Patient} from './model';
import { HttpClient } from '@angular/common/http';

@Component({
    templateUrl: 'patient.component.html'
})

export class PatientComponent {

	title = 'app';
	constructor(private http: HttpClient){
		this.http.get<Patient[]>('http://localhost:8080/health-pro-zone-backend/patients').subscribe(data => {
	      this.model.patients = data;
	    });
	}

    model = new Model();

    selectedValue:Patient;

    getPatientName() {
        return this.model.patient.name;
	}

	getRecordings() {
        return this.model.patient.recordingList;
	}

	getPatients() {
        return this.model.patients;
	}

	searchRecordingsByPatientId() {
        
        this.http.get<Patient>('http://localhost:8080/health-pro-zone-backend/recording/'+this.selectedValue.id).subscribe(data => {
	      	this.model.patient = data;
	    });
	}
}
