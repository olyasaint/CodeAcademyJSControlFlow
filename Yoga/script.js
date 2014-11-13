var yoga = prompt("What kind of yoga do you practice?","Type the kind of yoga you practice here");

switch (yoga) {
case 'Bikram':
    console.log("You like it hot!");
    break;
case 'Ashtanga':
    console.log("You must be very athletic");
    break;    
case 'Wall':
    console.log("hmmm....I don't even know what that is. Can you tell me more?);
    break;
case 'Vinyasa':
    console.log("That sounds relaxing");
    break;
default:
    console.log("You need to start practicing yoga!");
}
