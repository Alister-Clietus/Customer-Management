import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenserviceService 
{
  private TOKEN_KEY = 'auth-token';
  constructor() 
  {

  }
  getToken(): string | null 
  {
    return localStorage.getItem(this.TOKEN_KEY);
  } //gettoken ends here *************************************************

  setToken(token: string): void 
  {
    localStorage.setItem(this.TOKEN_KEY, token);
  } //set token ends here ***********************************************
  removeToken(): void 
  {
    localStorage.removeItem(this.TOKEN_KEY);
  } //remove token ends here *********************************************
}
