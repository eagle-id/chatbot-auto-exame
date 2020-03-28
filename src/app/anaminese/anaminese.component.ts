import { Component, OnInit, DebugElement, ElementRef } from '@angular/core';
import { ExameService } from '../_services/exame-service.service';
import * as M from 'materialize-css';

@Component({
  selector: 'app-anaminese',
  templateUrl: './anaminese.component.html',
  styleUrls: ['./anaminese.component.scss']
})
export class AnamineseComponent implements OnInit {

  private symptoms: any = null;
  private riscGourps: any = null;
  private riscContacts: any = null;
  private steps = ['SIMTOMAS', 'GRUPO DE RISCO', 'CONTATO DE RISCO' , 'CADASTRES-SE'];
  private titleSteps = ['APRENSENTA ALGUM DESTES SIMTOMAS?',
          'PERTENCE A ALGUM DESTE GRUPOS?',
          'MATEVE CONTATO COM PESSOAS, NOS ULTIMOS 14 DIAS COM:'
        ];
  private count = 0;
  private finalStep = 3;
  private mySymptoms = [];
  private myRiscGroups = [];
  private myRiscContacts = [];

  public onLoading = true;

  constructor(private exameService: ExameService, private el: ElementRef) { }

  ngOnInit() {
    this.onLoading = true;
    this.getSymptoms();
    this.getRiscs();
    this.getContacts();
    const element = this.el.nativeElement;
    const elems = document.querySelectorAll('.modal');
    M.Modal.init(elems, {});
  }
  private getSymptoms() {
    this.exameService.getSymptoms().subscribe(
      data => {
        this.symptoms = data;
        this.onLoading = false;
      },
      error => {
        this.symptoms = error;
        this.onLoading = false;
      }
    );
  }
  private getRiscs() {
    this.exameService.getRiscGroups().subscribe(
      data => {
        this.riscGourps = data;
      },
      error => {
        this.riscGourps = error;
      }
    );
  }
  private getContacts() {
    this.exameService.getRiscContacts().subscribe(
      data => {
        this.riscContacts = data;
      },
      error => {
        this.riscContacts = error;
      }
    );
  }

  public get currentStep() {
    return this.steps[this.count];
  }

  public get isLastStep() {
    return this.count >= this.finalStep;
  }

  public get currentSubTitle() {
    return this.titleSteps.length > this.count ? this.titleSteps[this.count] : '';
  }

  public get responses(): [] {
    if (this.count === 0) {
      return this.symptoms !== null ? this.symptoms.sintomas : [];
    } else if (this.count === 1) {
      return this.riscGourps !== null ? this.riscGourps.grupos : [];
    } else if (this.count === 2) {
      return this.riscContacts !== null ? this.riscContacts.atividades : [];
    }
    return [];
  }

  public get isFirstStep() {
    return this.count === 0;
  }

  public nextStep() {
    this.count += this.count < this.finalStep ? 1 : 0;
    window.scrollTo(0, 0);
  }

  public previuosStep() {
    this.count--;
    window.scrollTo(0, 0);
  }

  public selectedItem(id) {
    if (this.count === 0) {
      return this.mySymptoms.indexOf(id) !== -1;
    } else if (this.count === 1) {
      return this.myRiscGroups.indexOf(id) !== -1;
    }
    return false;
  }

  public addResponse(id) {
    if (this.count === 0) {
      this.pullPush(this.mySymptoms, id);
    } else if (this.count === 1) {
      this.pullPush(this.myRiscGroups, id);
    } else if (this.count === 2) {
      this.pullPush(this.myRiscContacts, id);
    }
  }
  public submit() {

  }

  private pullPush(arr, id) {
    const index: number = arr.indexOf(id);
    if (index === -1) {
      arr.push(id);
    } else {
      arr.splice(index, 1);
    }
  }

}
