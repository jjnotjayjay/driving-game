class Car {
  constructor($img, speed, direction, location) {
    this.$img = $img
    this.speed = speed
    this.direction = direction
    this.location = location
  }

  turn(direction) {
    this.direction = direction
    this.$img.classList.remove('north', 'east', 'south', 'west')
    this.$img.classList.add(direction)
  }

  move() {
    switch (this.direction) {
      case 'north':
        this.location[1] += this.speed
        break
      case 'east':
        this.location[0] += this.speed
        break
      case 'south':
        this.location[1] -= this.speed
        break
      case 'west':
        this.location[0] -= this.speed
        break
    }
    this.$img.style.top = this.location[1] + 'px'
    this.$img.style.left = this.location[0] + 'px'
  }

  start() {
    window.setInterval(this.move.bind(this), 16)
  }
}

var $blueCarImage = document.createElement('img')
$blueCarImage.setAttribute('src', 'blue-car.png')
$blueCarImage.classList.add('blue-car', 'east')
document.body.appendChild($blueCarImage)

var blueCar = new Car($blueCarImage, 10, 'east', [0, 0])

document.addEventListener('keydown', (e) => {
  if (e.key === ' ') {
    blueCar.start()
  }

  switch (e.key) {
    case 'ArrowUp':
      blueCar.turn('north')
      break
    case 'ArrowRight':
      blueCar.turn('east')
      break
    case 'ArrowDown':
      blueCar.turn('south')
      break
    case 'ArrowLeft':
      blueCar.turn('west')
      break
  }
})
