import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AnimationService {
  animateValue(finalValue: number, duration: number): Observable<number> {
    const steps = Math.ceil(duration / 1); // Cantidad de actualizaciones
    const increment = finalValue / steps; // Incremento por cada paso

    return timer(0, 5).pipe(
      map((elapsed) => Math.min(Math.floor(elapsed * increment), finalValue)), // Valor actual
      take(steps + 1) // Asegura que se emitan todos los pasos
    );
  }
}
