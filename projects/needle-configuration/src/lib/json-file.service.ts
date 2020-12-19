import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class JsonFileService {

	constructor(private http: HttpClient) { }

	public read(path: string): Promise<any> {
		return this.http.get(path).toPromise();
	}
}