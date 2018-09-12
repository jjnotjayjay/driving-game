class Car {
  constructor($img, speed, direction, location) {
    this.$img = $img
    this.speed = speed
    this.direction = direction
    this.location = location
  }
}

var $img = document.createElement('img')
$img.setAttribute('src', 'blue-car.png')
document.body.appendChild($img)
