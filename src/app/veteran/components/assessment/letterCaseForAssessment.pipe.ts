import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'letterCaseForAssessment' })
export class LetterCase implements PipeTransform {
  transform(value: any) {
    if(typeof value === 'string'){
      // return value.charAt(0).toUpperCase() + value.slice(1);        
      return value.toLowerCase().split(' ').map(s => s.charAt(0).toUpperCase() + s.substring(1)).join(' '); 
    }
      if(value === true ){
        return "Yes";
      }
      if (value === false){
        return "No";
      }
    return value;
    }
}