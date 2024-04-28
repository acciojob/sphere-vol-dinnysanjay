//Firstly, you need to get the radius value entered by the user from the input field. You can do this using the following code:
let radius = document.getElementById('radius').value;
//You then need to validate the input to ensure that the radius is a non-negative number. You can do this using an if condition:
if(radius < 0 || isNaN(radius)) {
    // Display NaN in the volume field
    document.getElementById('volume').value = 'NaN';
    return;
}
//If the input is valid, calculate the volume of the sphere using the formula V = 4/3 * π * r^3. You can use the Math object in JavaScript to get the value of π and to calculate the cube of the radius:
let volume = 4/3 * Math.PI * Math.pow(radius, 3);
//Finally, display the calculated volume in the designated output field. Ensure that the volume is rounded to four decimal places using the toFixed() method:
document.getElementById('volume').value = volume.toFixed(4);
//So, your final volume_sphere() function should look something like this:

function volume_sphere() {
    let radius = document.getElementById('radius').value;

    if(radius < 0 || isNaN(radius)) {
        document.getElementById('volume').value = 'NaN';
        return;
    }

    let volume = 4/3 * Math.PI * Math.pow(radius, 3);
    document.getElementById('volume').value = volume.toFixed(4);
}
window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
