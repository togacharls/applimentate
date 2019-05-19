import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { take } from 'rxjs/operators';
import { AllergenInterface } from '../interfaces/allergen.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable( {
  providedIn: 'root'
} )
export class AllergensService {

  private allergenList: AllergenInterface[];
  private urlAllergenList = 'https://applimentate.herokuapp.com/allergens';
  public aName: string;
  private srcIcon = '../../../assets/icon/';
  public srcImg = '../../../assets/img/ImgAllergens/';
  public srcImgNameSummary = [ '_S01', '_S02', '_S03' ];
  public srcImgNameHealth = [ '_H01', '_H02', '_H03' ];
  public srcImgNameFood = [ '_F01', '_F02', '_F03' ];

  constructor(
    private translateService: TranslateService,
    public http: HttpClient,
  ) {
    this.getDefaultAllergenList();
  }

  getList(): AllergenInterface[] {
    return this.allergenList;
  }

  getAllergenNameFromParams( data ): string {
    this.aName = data.slice( data.indexOf( '.' ) + 1 );
    return this.aName;
  }

  // TODO  añadir cabeceras CORS al http provider
  // TODO TESTS
  private getDefaultAllergenList(): any {
    const allergenListStack = [];

    this.http.get( this.urlAllergenList )
      .pipe( take( 1 ) )
      .subscribe( ( response: any ) => {
        this.allergenList = [];
        for ( const Name of response ) {
          this.allergenList.push( {
            name: 'ALLERGENS.' + Name.id,
            icon: this.srcIcon + Name.id.toLowerCase() + '.png'
          } );
        }
        this.sortAllergenList();
      }
      );
  }

  private sortAllergenList(): void {
    this.translateService
      .get( this.allergenList.map( aName => aName.name ) )
      .pipe( take( 1 ) )
      .subscribe( translated => {
        this.allergenList.sort( ( elem1, elem2 ) =>
          translated[ elem1.name ] < translated[ elem2.name ] ? -1 : translated[ elem1.name ] > translated[ elem2.name ] ? 1 : 0
        );
      } );
  }
}
