function voteEligibility(age, name){
    var ageValue = +age;
    if (age<=0 || isNaN(ageValue) || age>=120) {
        console.log(`${name} your age ${age} is invalid`); 
    } else {
        if (age>=18) {
            console.log(`${name} you are eligible for vote`);
        } else {
            console.log(`${name} you are not eligible for vote`);
        }
    }
}
voteEligibility(45, "Jenny");
voteEligibility(17, "Ken");
voteEligibility(8, "Steve");
voteEligibility(20, "Jeh");
voteEligibility(-10, "Henry");
voteEligibility(200, "Bob");
voteEligibility(0, "Kitty");
voteEligibility(null, "Karl");
voteEligibility(undefined, "Ben");



