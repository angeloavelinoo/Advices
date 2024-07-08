import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { AdviceServiceService } from '../../services/advice-service.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  advicedText?: string

  constructor(private advicedService: AdviceServiceService) { }

  getAdvice(){
    this.advicedService.getRandomAdivce().subscribe((data) =>{
      this.advicedText = data.slip.advice
    })
  }
}
