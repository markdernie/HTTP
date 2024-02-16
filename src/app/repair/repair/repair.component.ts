import { Component } from '@angular/core';
import {Repair} from '../repair';
import {RepairService} from '../repair.service'

@Component({
  selector: 'app-repair',
  standalone: true,
  imports: [],
  templateUrl: './repair.component.html',
  styleUrl: './repair.component.css'
}) 
export class RepairComponent {

  repair:Repair=new Repair()
  title:string='Repairs'

  constructor(private repairService: RepairService) {}

  ngOnInit() {
    console.log('Repair:',this.repair)
    // this.getRepairs();
  }



}
