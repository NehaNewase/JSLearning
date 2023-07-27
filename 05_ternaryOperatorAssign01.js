


var select= function(gradScore, hscScore, sscScore, candidateName){
    var result= gradScore>=70 || hscScore>=80 || sscScore>=90 ? 'Congratulations '+candidateName+' , You are eligible for interview' : 'Sorry '+candidateName+' , You are not eligible';
    console.log(result);
}
select(80, 86,90, 'Neha');
select(70, 65,55, 'Shubham');
select(60, 79,88, 'ABC');