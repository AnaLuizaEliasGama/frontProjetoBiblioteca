import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Emprestimo } from '../emprestimo.model';
import { emprestimo } from'src/app/components/
import { Fornecedor } from '../../fornecedor/fornecedor.model';
import { FornecedorService } from '../../fornecedor/fornecedor.service';

@Component({
  selector: 'app-emprestimo-update',
  templateUrl: './emprestimo-update.component.html',
  styleUrls: ['./emprestimo-update.component.css']
})
export class EmprestimoUpdateComponent implements OnInit {

  emprestimo!: Emprestimo;
  fornecedores: Fornecedor[] = []

  constructor(private emprestimoService: EmprestimoService, 
    private fornecedorService: FornecedorService,
    private router: Router, 
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    const proId = this.route.snapshot.paramMap.get('proId')
    this.emprestimoService.readById(proId!).subscribe((emprestimo: Emprestimo) =>{
      this.emprestimo = emprestimo
    })
    
    this.fornecedorService.read().subscribe(fornecedores => {
      this.fornecedores = fornecedores
    })
  }

  updateEmprestimo(): void {
    this.emprestimoService.update(this.emprestimo).subscribe(() => {
      this.emprestimoService.showMessage('Produto atualizado com sucesso!')
      this.router.navigate(['/emprestimos'])
    })
  }

  cancel(): void {
    this.router.navigate(['/emprestimos'])
  }

}
