/**
 *
 * @namespace faker.music
 */
 var Planets = function (faker) {
    var self = this;
    /**
       * genre
       *
       * @method faker.music.genre
       */
    self.name = function () {
      return faker.random.arrayElement(faker.definitions.planets.name);
    };
  
    self.genre.schema = {
      "description": "Generates planet names.",
      "sampleResults": ["Earth", "Venus", "Mars"]
    };
  };
  
  module["exports"] = Planets;
  