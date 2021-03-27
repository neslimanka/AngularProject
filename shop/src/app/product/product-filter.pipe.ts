import { analyzeAndValidateNgModules, LiteralExpr } from '@angular/compiler';
import { stripGeneratedFileSuffix } from '@angular/compiler/src/aot/util';
import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(value: Product[], filterText?:  string  ): Product[] { //Bana bir data geliyor ,ben o datayı değiştiriyorum

  filterText?filterText.toLocaleLowerCase():null  //Arama ifadesini kullanıcı yazdı,onu küçük harfe çevir.çünkü javascript buyuk/küçük harf duyarlıdır.
    //Bu yuzden arama ifadesini direkt küçk harfe çeviriyorum.(Eğer arama ifadesi gönderildiyse)
    //filterText varmı? varsa küçük harfe çevir.Yoksa null dır.Hiçbirşey yapma
    return filterText?value.filter((p:Product)=>p.name.toLocaleLowerCase().indexOf(filterText)!==-1):value;
    //filterText varmı?var ise vakue ı filtrele.
    //(p:Product)=>p.name.toLocaleLowerCase() ..Her bir p(ürün) için p nin ismini küçük harfe çevir.
    //(p:Product)=>p.name.toLocaleLowerCase().indexOf(filterText) .. ve içerisinde arama ifadesi varmı diye bak


  }

}
