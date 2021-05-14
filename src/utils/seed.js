/* eslint-disable indent */
import colorSchemes from './colorSchemes';

class Planet {
  constructor() {
    this.data = {
      name: '',
      size: '',
      distanceFromSun: 0,
      atmosphere: [],
      ozoneLayer: false,
      temperature: '',
      population: 0,
      description: '',
      price: 100,
    };

    this.settings = {
      gradinetType: '',
      numberOfColors: 0,
      colorString: '',
      palette: {},
      atmosphereBase: 0.4,
      borderStyle: '',
      numberSize: 0,
    };

    this.styles = {
      planet: {},
      rings: {
        show: false,
      },
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
          : (this.data.name +=
              letters[this.random(0, letters.length - 1)].toUpperCase());
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
      this.settings.numberSize = value;
      this.styles.planet.transform = `scale(${
        value === 100 ? 1 : `0.${value}`
      })`;
    };

    switch (true) {
      case sizeChances < 3:
        setSize('small', this.random(16, 30));
        break;
      case sizeChances > 2 && sizeChances < 7:
        setSize('medium', this.random(33, 66));
        break;
      case sizeChances > 6 && sizeChances < 10:
        setSize('large', this.random(70, 83));
        break;
      case sizeChances > 9:
        setSize('huge', this.random(86, 100));
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
        this.random(2, 4) < 3 ? atmosphereLayers[0] : atmosphereLayers[4]
      );
    }

    if (distance >= 100 && distance <= 200) {
      const chancesOfLive = this.random(1, 10);
      switch (true) {
        case chancesOfLive < 7:
          this.data.atmosphere.push(
            atmosphereLayers[0],
            atmosphereLayers[2],
            atmosphereLayers[4]
          );
          break;
        case chancesOfLive > 6 && chancesOfLive < 10:
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
        case randomLayers < 3:
          this.data.atmosphere.push(atmosphereLayers[0]);
          break;
        case randomLayers > 2 && randomLayers < 5:
          this.data.atmosphere.push(atmosphereLayers[4]);
          break;
        case randomLayers > 4 && randomLayers < 8:
          this.data.atmosphere.push(
            atmosphereLayers[0],
            atmosphereLayers[2],
            atmosphereLayers[4]
          );
          break;
        case randomLayers > 7:
          this.data.atmosphere.push(...atmosphereLayers);
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
    const { name, size, distanceFromSun, temperature, atmosphere, population } =
      this.data;
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

  RenderPlanet() {
    const { cold, warm, etheric, ethericCold } = colorSchemes;
    switch (true) {
      case this.data.temperature > 60:
        this.settings.palette = warm[this.random(0, warm.length - 1)];
        break;
      case this.data.temperature >= 0 && this.data.temperature <= 60:
        this.settings.palette = etheric[this.random(0, etheric.length - 1)];
        break;
      case this.data.temperature < 0 && this.data.temperature >= -100:
        this.settings.palette =
          ethericCold[this.random(0, ethericCold.length - 1)];
        break;
      case this.data.temperature < -100:
        this.settings.palette = cold[this.random(0, cold.length - 1)];
        break;
      default:
        break;
    }

    switch (this.random(1, 2)) {
      case 1:
        this.settings.gradinetType = 'linear';
        break;
      case 2:
        this.settings.gradinetType = 'radial';
        break;
      default:
        break;
    }

    this.settings.numberOfColors = this.random(3, 4);

    for (let i = 0; i < this.settings.numberOfColors; i++) {
      if (i < this.settings.numberOfColors - 1) {
        this.settings.colorString += `${this.settings.palette.colors[i]}, `;
      } else {
        this.settings.colorString += `${this.settings.palette.colors[i]}`;
      }
    }

    this.styles.planet.background = `${this.settings.gradinetType}-gradient(${this.settings.colorString})`;
  }

  RenderAtmosphere() {
    const { atmosphere } = colorSchemes;
    const { atmosphereBase } = this.settings;

    if (
      this.data.atmosphere.length === 1 &&
      this.data.atmosphere.includes('exosphere')
    ) {
      this.styles.planet.boxShadow = `inset -2.5rem -1.5rem 1rem rgba(0,0,0,0.2), 0 0 0 ${(
        atmosphereBase * this.random(4, 7)
      ).toFixed(1)}rem ${atmosphere[4]}`;
    }

    if (
      this.data.atmosphere.length === 1 &&
      this.data.atmosphere.includes('troposphere')
    ) {
      this.styles.planet.boxShadow = `inset -2.5rem -1.5rem 1rem rgba(0,0,0,0.2), 0 0 0 ${(
        atmosphereBase * this.random(1, 3)
      ).toFixed(1)}rem ${atmosphere[0]}`;
    }

    if (this.data.atmosphere.length === 3) {
      this.styles.planet.boxShadow = `inset -2.5rem -1.5rem 1rem rgba(0,0,0,0.2), 0 0 0 ${atmosphereBase}rem ${
        atmosphere[0]
      }, 0 0 0 ${atmosphereBase * 4}rem ${atmosphere[2]}, 0 0 0 ${
        atmosphereBase * 10
      }rem ${atmosphere[4]}`;
    }

    if (this.data.atmosphere.length === 5 && !this.data.ozoneLayer) {
      this.styles.planet.boxShadow = `inset -2.5rem -1.5rem 1rem rgba(0,0,0,0.2), 0 0 0 ${atmosphereBase}rem ${
        atmosphere[0]
      }, 0 0 0 ${(atmosphereBase * 3).toFixed(1)}rem ${atmosphere[1]}, 0 0 0 ${(
        atmosphereBase * 4
      ).toFixed(1)}rem ${atmosphere[2]}, 0 0 0 ${(atmosphereBase * 6).toFixed(
        1
      )}rem ${atmosphere[3]}, 0 0 0 ${(atmosphereBase * 10).toFixed(1)}rem ${
        atmosphere[4]
      }`;
    }

    if (this.data.atmosphere.length === 5 && this.data.ozoneLayer) {
      this.styles.planet.boxShadow = `inset -2.5rem -1.5rem 1rem rgba(0,0,0,0.2), 0 0 0 ${atmosphereBase}rem ${
        atmosphere[0]
      }, 0 0 0 ${(atmosphereBase * 2).toFixed(1)}rem ${atmosphere[5]}, 0 0 0 ${(
        atmosphereBase * 3
      ).toFixed(1)}rem ${atmosphere[1]}, 0 0 0 ${(atmosphereBase * 4).toFixed(
        1
      )}rem ${atmosphere[2]}, 0 0 0 ${(atmosphereBase * 6).toFixed(1)}rem ${
        atmosphere[3]
      }, 0 0 0 ${(atmosphereBase * 10).toFixed(1)}rem ${atmosphere[4]}`;
    }
  }

  RenderRings() {
    if (
      this.random(1, 2) === 2 &&
      (this.data.size === 'medium' || this.data.size === 'large')
    ) {
      switch (this.random(1, 2)) {
        case 1:
          this.settings.borderStyle = 'solid';
          break;
        case 2:
          this.settings.borderStyle = 'double';
          break;
        default:
          break;
      }

      this.styles.rings.transform = `translate(-50%, -50%) scale(${
        this.settings.numberSize === 100 ? 1 : `0.${this.settings.numberSize}`
      })`;
      this.styles.rings.borderLeft = `1.5rem ${this.settings.borderStyle} ${this.settings.palette.ring}`;
      this.styles.rings.borderBottom = `1.5rem ${this.settings.borderStyle} ${this.settings.palette.ring}`;
      this.styles.rings.borderRight = `1.5rem ${this.settings.borderStyle} ${this.settings.palette.ring}`;
      this.styles.rings.borderTop = `0.1rem solid transparent`;
      this.styles.rings.show = true;
    }
  }

  generatePlanet() {
    this.generateName();
    this.generateSize();
    this.generateDistanceFromSun();
    this.generateAtmosphere();
    this.generateTemperature();
    this.generatePopulation();
    this.generateDescription();
    this.generatePrice();
    this.RenderPlanet();
    this.RenderAtmosphere();
    this.RenderRings();
  }
}

export default Planet;
