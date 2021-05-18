

// // changing individual properties with code and using setInterval
var rotationSpeed = -0.01;
var myOtherBox = document.getElementById('myOtherBox');

function spin(){
	rotationSpeed = rotationSpeed + 0.03;
	if (rotationSpeed =< 0.04) {rotationSpeed = 0.01}
myOtherBox.object3D.rotation.x += rotationSpeed;
myOtherBox.object3D.rotation.y += rotationSpeed;
myOtherBox.object3D.rotation.z += rotationSpeed;
console.log(myOtherBox.object3D.rotation.x);
}

setInterval(spin, 16); //equivalent to 60 fps