/*function GradeChecker(grade){
    
    if(grade >= 80 && grade <= 100) return "A";
    if(grade <= 79 && grade >=60) return "B";
    if(grade <= 59 && grade >=50) return "C";
    if(grade <= 50) return "F";
    if(grade < 0 || grade > 100) return "Invalid value";
    if(typeof grade != "number" || isNaN(grade)) return "Invalid Data type";
    
}
console.log(GradeChecker("me"));

function timestable(number) {
    const product = [];
    for(let i = 1; i <=12; i++){
       product.push(number * i);
    }
       return product;

}
console.log(timestable(2));*/

function countVowels(text){
    const vowels = "aeiou";
    const lower = text.toLowerCase();
    let count = 0;
    for(let i = 0; i < lower.length; i++){
        if (vowels.includes(lower[i]));
        count++;
    }
    return count;
}
console.log(countVowels("Brightea"));