function volume_sphere() {
    let radius = document.getElementById('radius').value;

    if(radius < 0 || isNaN(radius)) {
        document.getElementById('volume').value = 'NaN';
        return;
    }

    let volume = 4/3 * Math.PI * Math.pow(radius, 3);
    document.getElementById('volume').value = volume.toFixed(4);
}

window.onload = function() {
    document.getElementById('MyForm').onsubmit = volume_sphere;
}

