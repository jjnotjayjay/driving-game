class Car {
  constructor($img, speed, direction, location) {
    this.$img = $img
    this.speed = speed
    this.direction = direction
    this.location = location
  }
}

var $blueCarImage = document.createElement('img')
$blueCarImage.setAttribute('src', 'blue-car.png')
$blueCarImage.classList.add('blue-car', 'east')
document.body.appendChild($blueCarImage)

var blueCar = new Car($blueCarImage, 10, 'east', [0, 0])
