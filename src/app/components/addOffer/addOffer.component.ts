import { Component, OnInit } from '@angular/core';
import { ImagePickerConf } from 'ngp-image-picker';
import { jobOffer } from 'src/app/models/jobOffer.model';
import { FirebaseStorageService } from 'src/app/services/firebase/firebase-storage.service';
import { JobService } from '../../services/job.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-addOffer',
  templateUrl: './addOffer.component.html',
  styleUrls: ['./addOffer.component.scss']
})
export class AddOfferComponent implements OnInit {

  jobOffer: jobOffer = new jobOffer()

  textButton = "Guardar"
  // TODO: Hacer los patterns bien
  constructor(private jobService:JobService, private fb: FormBuilder, private firebaseStorage: FirebaseStorageService, private router: Router) {
    this.mForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      companyName: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      location: [],
      type: [],
      photo: [],
    })
  }
  fileToUpload: any = null
  imagenSrc = ""
  nombreArchivo= ""
  URLPublica = ""
  porcentaje = 0
  finalizado = false
  customDisplay = false

  name = ""
  companyName = ""
  location = ""
  type = ""
  photo = ""
  mForm: FormGroup;
  isSent = false

  ngOnInit() {
  }

  handleFileInput(files: any) {
    this.fileToUpload = files.target.files.item(0)
    const reader = new FileReader();
    reader.readAsDataURL(this.fileToUpload);

    this.nombreArchivo = this.fileToUpload.name
    reader.onload = () => {
      console.log(reader.result);
      this.customDisplay = true
      this.imagenSrc = reader.result as string

    };

  }
  //Llamar cuando guarde los datos
   subirArchivo() {
    let referencia =  this.firebaseStorage.referenciaCloudStorage(this.nombreArchivo);
    let tarea = this.firebaseStorage.tareaCloudStorage(this.nombreArchivo, this.fileToUpload);

    //Cambia el porcentaje
    tarea.percentageChanges().subscribe((porcentaje) => {
      this.porcentaje = Math.round(porcentaje as number);
      if (this.porcentaje == 100) {
        this.finalizado = true;
        console.log("Subida con exito");

        referencia.getDownloadURL().subscribe((URL) => {
          this.URLPublica = URL;
          console.log("La url es: "+ URL);

        });
      }
    });


  }
  removeUpload(){
    this.imagenSrc = ""
    this.customDisplay = false
  }




  addOffer() {

    const job: jobOffer = new jobOffer()
    job.name = "Desarrollador Android"
    this.jobService.postJob(job).subscribe((data) => {
      console.log(data)
    },
      (error) => {
        console.log("Error:", error);
      }
    );
  }

  onSubmit() {
    console.log("Enviar form")
    this.isSent = true
    if (this.mForm.invalid) {
      console.log("Invalido")
      return
    }
    console.log("entreeee perros")
    const job: jobOffer = new jobOffer()
    if (this.name != "" && this.companyName != "" && this.location != "" && this.type != "" && this.photo != "") {
      job.name = this.name
      job.companyName = this.companyName
      job.location = this.location
      job.type = this.type
      job.photo = this.photo
      console.log(job)
      this.jobService.loginUser(job).subscribe(
        (data) => {
          localStorage.setItem('token',data.access_token)
          this.router.navigate(["/home"])
        },
        (error) => {
          console.log("Error:", error);
        }
      );
    }
    console.log("Job Valido", this.mForm.value)
    this.router.navigate(["/home"])

  }
}
