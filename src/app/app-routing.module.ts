import { NgModule } 			from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecordingComponent }   from './recording.component';
import { PatientComponent }     from './patient.component';


const routes: Routes = [{ path: 'recordings', component: PatientComponent },
						{ path: 'save-recording', component: RecordingComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
