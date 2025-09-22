import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  API="http://localhost:8080";
  public registerAdmin(adminData: any)
  {
    return this.http.post(`${this.API}/adminservice` , adminData);
  }

  public getAdmins(){
    return this.http.get(`${this.API}/adminservice`);
  }

  public deleteAdmin(adminId:any){
    return this.http.delete(`${this.API}/adminservice/${adminId}`);
  }

  public updateAdmin(admin: any){
    return this.http.put(`${this.API}/adminservice/${admin.id}`, admin);
  }
  constructor(private http: HttpClient) { }
}