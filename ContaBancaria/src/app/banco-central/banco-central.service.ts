import { Injectable } from '@angular/core';

import { RequestService } from '../shared/services/request/request.service';

@Injectable({
  providedIn: 'root'
})
export class BancoCentralService {
  private readonly PATH: string = 'BancoCentral';

  constructor(private requestService: RequestService) { }

  async listagem() : Promise<any> {
    return new Promise((resolve, reject) => {
      this.requestService.get(this.PATH + '/ListarBancos')
      .then((data: any) => {
        resolve(data);
      })
      .catch((error: any) => {
        reject(error);
      });
    });
    
  }
}
