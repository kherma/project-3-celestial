/* eslint-disable indent */

class Planet {
  constructor() {
    this.data = {
      name: '',
      size: '',
      distanceFromSun: 0,
      atmosphere: [],
      ozoneLayer: false,
      temperature: '',
      population: false,
      description: '',
      price: 100,
    };

    this.styles = {
      planet: '',
      rings: false,
    };
  }

  random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  generateName() {
    const letters = 'abcdefghijklmnopqrestuvwxyz';
    for (let i = 0; i < 12; i++) {
      if (i <= 6) {
        i === 6
          ? (this.data.name += '-')
          : (this.data.name += letters[
              this.random(0, letters.length - 1)
            ].toUpperCase());
      } else if (i > 6 && i <= 10) {
        i === 10
          ? (this.data.name += '-')
          : (this.data.name += this.random(0, 9));
      } else {
        this.data.name += letters[this.random(0, letters.length - 1)];
      }
    }
  }

  generateSize() {
    const sizeChances = this.random(1, 10);

    const setSize = (text, value) => {
      this.data.size = text;
      this.styles.planet += `width: ${value}rem; height: ${value}rem;`;
    };

    switch (true) {
      case sizeChances < 3:
        setSize('small', this.random(5, 9));
        break;
      case sizeChances > 2 && sizeChances < 7:
        setSize('medium', this.random(10, 20));
        break;
      case sizeChances > 6 && sizeChances < 10:
        setSize('large', this.random(21, 25));
        break;
      case sizeChances > 9:
        setSize('huge', this.random(26, 30));
        break;
      default:
        break;
    }
  }

  generateDistanceFromSun() {
    this.data.distanceFromSun = this.random(30, 3000);
  }

  generateAtmosphere() {
    const atmosphereLayers = [
      'troposphere',
      'stratosphere',
      'mesosphere',
      'thermosphere',
      'exosphere',
    ];

    const distance = this.data.distanceFromSun;

    if (distance < 100) {
      this.data.atmosphere.push(
        this.random(0, 1) === 1 ? atmosphereLayers[0] : atmosphereLayers[4]
      );
    }

    if (distance >= 100 && distance <= 200) {
      const chancesOfLive = this.random(1, 10);
      switch (true) {
        case chancesOfLive < 8:
          this.data.atmosphere.push(
            atmosphereLayers[0],
            atmosphereLayers[2],
            atmosphereLayers[4]
          );
          break;
        case chancesOfLive > 7 && chancesOfLive < 10:
          this.data.atmosphere.push(...atmosphereLayers);
          break;
        case chancesOfLive === 10:
          this.data.atmosphere.push(...atmosphereLayers);
          this.data.ozoneLayer = true;
          break;
        default:
          return;
      }
    }

    if (distance > 200) {
      const randomLayers = this.random(1, 10);
      switch (true) {
        case randomLayers < 7:
          this.data.atmosphere.push(atmosphereLayers[0]);
          break;
        case randomLayers > 6:
          this.data.atmosphere.push(
            atmosphereLayers[0],
            atmosphereLayers[2],
            atmosphereLayers[4]
          );
          break;
        default:
          return;
      }
    }
  }

  generateTemperature() {
    const atmosphere = this.data.atmosphere;
    const ozone = this.data.ozoneLayer;
    const distance = this.data.distanceFromSun;

    if (distance < 100 && atmosphere.includes('troposphere')) {
      this.data.temperature = this.random(100, 200);
    }

    if (distance < 100 && atmosphere.includes('exosphere')) {
      this.data.temperature = this.random(300, 500);
    }

    if (distance >= 100 && distance <= 200 && !ozone) {
      this.data.temperature = this.random(-100, 60);
    }

    if (distance >= 100 && distance <= 200 && ozone) {
      this.data.temperature = this.random(10, 30);
    }

    if (distance > 200) {
      this.data.temperature = this.random(-200, 0);
    }
  }

  generatePopulation() {
    const size = this.data.size;
    const ozone = this.data.ozoneLayer;

    if (ozone) {
      switch (size) {
        case 'small':
          this.data.population = this.random(100, 1750);
          break;
        case 'medium':
          this.data.population = this.random(1751, 3500);
          break;
        case 'large':
          this.data.population = this.random(3501, 5250);
          break;
        case 'huge':
          this.data.population = this.random(5551, 7000);
          break;
        default:
          return;
      }
    }
  }

  generateDescription() {
    const {
      name,
      size,
      distanceFromSun,
      temperature,
      atmosphere,
      population,
    } = this.data;
    const options = {
      temperature: [
        'it has great potential for resource extraction',
        'mining resources on the planet will be very difficult or almost impossible',
      ],
      atmosphere: [
        'there is no potential for terraformation in the future',
        'and there is a lot of oxygen in it',
        'it has potential for terraformation in the future',
      ],
      population: [
        `the planet is inhabited by ${population} M of unexplored creatures`,
        'the planet is uninhabited',
      ],
    };

    this.data.description = `${name} is a ${size} planet. It is located ${distanceFromSun} milion miles from its star. The average temperature is ${temperature} degrees Celsius and because of that ${
      temperature > -100 && temperature < 61
        ? options.temperature[0]
        : options.temperature[1]
    }. The atmosphere has ${atmosphere.length} layers so ${
      atmosphere.length < 3
        ? options.atmosphere[0]
        : population
        ? options.atmosphere[1]
        : options.atmosphere[2]
    }. Finally ${population ? options.population[0] : options.population[1]}.`;
  }

  generatePrice() {
    const { size, temperature, atmosphere, population } = this.data;

    this.data.price = 100;

    this.data.price *= atmosphere.length;

    switch (true) {
      case temperature > 200:
        this.data.price += this.random(10, 20);
        break;
      case temperature >= 100 && temperature <= 200:
        this.data.price += this.random(20, 50);
        break;
      case temperature >= -100 && temperature <= 60:
        this.data.price += this.random(100, 200);
        break;
      case temperature >= -200 && temperature <= -101:
        this.data.price += this.random(30, 50);
        break;
      default:
        break;
    }

    switch (size) {
      case 'small':
        this.data.price += this.random(10, 50);
        break;
      case 'medium':
        this.data.price += this.random(50, 100);
        break;
      case 'large':
        this.data.price += this.random(100, 150);
        break;
      case 'huge':
        this.data.price += this.random(150, 200);
        break;
      default:
        break;
    }

    if (population) {
      switch (true) {
        case population <= 1750:
          this.data.price += this.random(500, 1000);
          break;
        case population > 1750 && population <= 3500:
          this.data.price += this.random(1000, 2000);
          break;
        case population > 3500 && population <= 5250:
          this.data.price += this.random(2000, 3000);
          break;
        case population > 5250 && population <= 7000:
          this.data.price += this.random(3000, 4000);
          break;
        default:
          break;
      }
    }
  }

  // RenderPlanet() {}

  // RenderRings() {}

  generatePlanet() {
    this.generateName();
    this.generateSize();
    this.generateDistanceFromSun();
    this.generateAtmosphere();
    this.generateTemperature();
    this.generatePopulation();
    this.generateDescription();
    this.generatePrice();
    // this.RenderPlanet();
    // this.RenderRings();
  }
}

export default Planet;
