export class Model {
    patient;
    patients: Patient[];
    constructor() {
        this.patient = new Patient(0,"");
	} 
}

export class Patient {
	id;
    name;
    recordingList: Recording[];

    constructor(id, name) {
    	this.id = id;
        this.name = name;
	} 
}

export class Recording {
	id;
    type;
    patient: Patient;

    constructor(type, patient) {
        this.type = type;
        this.patient = patient;
	} 
}
