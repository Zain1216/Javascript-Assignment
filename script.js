let percantAge = prompt('Enter your Percantage:');

if (percantAge >= 80) {
    console.log('A+')
}
else if (percantAge >= 70) {
    console.log('A');
}
else if (percantAge >= 60) {
    console.log('B')
}
else if(percantAge >= 50) {
    console.log('C')}

else if(percantAge >= 40) {
    console.log('D')}

else if(percantAge >= 30) {
    console.log('E')}

else if(percantAge < 30) {
     console.log('F')}
else{
    console.log('Kindly enter valid Percantage')
}
