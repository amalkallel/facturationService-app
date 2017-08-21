import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-saisie-facture',
  templateUrl: './saisie-facture.component.html',
  styleUrls: ['./saisie-facture.component.css']
})
export class SaisieFactureComponent implements OnInit {

  form: FormGroup;
  post: any;
  numFacture: string ='';
  dateFacture: string ='';
  client: string='';
  designation: string='';
  quantite: number;
  prixunitHT: number;
  tva: number;

  totalHT: number;
  montantTVA: number;
  totalTTC: number;
  
  constructor(private fb: FormBuilder) { 
    this.form = fb.group({
      'numFacture':[null, Validators.required],
      'dateFacture':[null, Validators.required],
      'client':[null, Validators.compose([Validators.required, Validators.minLength(3),Validators.maxLength(20)])],
      'designation':[null, Validators.required],
      'quantite':[null, Validators.required],
      'prixunitHT':[null, Validators.required],
      'tva':[null, Validators.required],

    });
  }

  addPost(post){
    this.numFacture=post.numFacture;
    this.dateFacture=post.dateFacture;
    this.client=post.client;
    this.designation=post.designation;
    this.quantite=post.quantite;
    this.prixunitHT=post.prixunitHT;
    this.tva=post.tva;
    this.totalHT=this.prixunitHT * this.quantite;
    this.montantTVA=this.prixunitHT * (this.tva/100);
    this.totalTTC=this.totalHT * ( 1 + this.tva/100);


  }

  ngOnInit() {
  }

}
