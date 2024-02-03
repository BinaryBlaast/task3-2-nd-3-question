let XMLHttpRequest= require('xhr2');
let xhr=new XMLHttpRequest();
xhr.open('GET','https://restcountries.com/v3.1/all');
xhr.send();
xhr.onload=function () {
    let countries=JSON.parse(xhr.responseText);
    data.forEach(country=>{
    let name=country.name.common;
    let region=region.name.common;
    let subregion=subregion.name.common;
     
    console.log('country:{name},region:{region},subregion:{subregion}')
});
}