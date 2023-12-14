import { Injectable } from '@angular/core';
import { Recette } from './models/recette';
import { CategoriePreparation } from './models/categoriePreparation';
import { Preparation } from './models/preparation';
import { CategorieIngredient } from './models/categorieIngredient';
import { Ingredient } from './models/ingredient';
import { Tag } from './models/tag';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() {
    this.generateTestData();
  }

  loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis vulputate enim nulla aliquet. Sed euismod nisi porta lorem mollis. Pretium fusce id velit ut tortor pretium viverra suspendisse. Adipiscing elit ut aliquam purus sit amet. Fusce id velit ut tortor pretium viverra suspendisse potenti nullam. Tellus integer feugiat scelerisque varius. Malesuada fames ac turpis egestas integer. Ipsum dolor sit amet consectetur adipiscing elit. Ultricies tristique nulla aliquet enim tortor at auctor. Nisl rhoncus mattis rhoncus urna neque. Quam vulputate dignissim suspendisse in est ante in.Etiam sit amet nisl purus in mollis. Augue neque gravida in fermentum et sollicitudin ac orci. Est ullamcorper eget nulla facilisi. Libero id faucibus nisl tincidunt eget nullam non nisi est. Fringilla urna porttitor rhoncus dolor. Quis commodo odio aenean sed adipiscing diam. Ligula ullamcorper malesuada proin libero nunc consequat. Etiam sit amet nisl purus in mollis nunc sed. Accumsan lacus vel facilisis volutpat est velit egestas dui. At volutpat diam ut venenatis tellus in. Facilisis leo vel fringilla est ullamcorper. Pharetra sit amet aliquam id diam maecenas ultricies mi. Sodales neque sodales ut etiam sit amet. Vulputate mi sit amet mauris commodo. Semper risus in hendrerit gravida rutrum quisque non tellus. Pulvinar etiam non quam lacus suspendisse. Nisl nisi scelerisque eu ultrices vitae auctor eu. Aliquet lectus proin nibh nisl condimentum id. Tincidunt augue interdum velit euismod in pellentesque massa placerat duis. Habitasse platea dictumst quisque sagittis purus sit amet. Leo duis ut diam quam nulla porttitor. Mattis molestie a iaculis at erat pellentesque. Odio morbi quis commodo odio aenean sed adipiscing diam donec. Fringilla ut morbi tincidunt augue. Bibendum est ultricies integer quis. Senectus et netus et malesuada fames ac turpis egestas integer. Faucibus interdum posuere lorem ipsum dolor sit. Euismod nisi porta lorem mollis aliquam ut porttitor. Vel risus commodo viverra maecenas accumsan lacus vel facilisis volutpat. Id neque aliquam vestibulum morbi blandit cursus risus at. Porta non pulvinar neque laoreet suspendisse. Molestie at elementum eu facilisis sed odio morbi quis commodo. Amet consectetur adipiscing elit ut aliquam purus sit. Consequat ac felis donec et odio. Praesent tristique magna sit amet. Sed augue lacus viverra vitae congue eu consequat. Eu lobortis elementum nibh tellus molestie. Varius quam quisque id diam vel quam elementum. Tempus quam pellentesque nec nam aliquam sem. Vel pretium lectus quam id leo in vitae turpis massa. Facilisi morbi tempus iaculis urna id volutpat lacus. Viverra tellus in hac habitasse platea dictumst. Faucibus a pellentesque sit amet. Elit ut aliquam purus sit amet luctus venenatis lectus. Vitae suscipit tellus mauris a diam. Id porta nibh venenatis cras sed felis eget velit aliquet. Dui accumsan sit amet nulla facilisi. Tortor condimentum lacinia quis vel eros. Condimentum lacinia quis vel eros donec ac odio tempor. Quis ipsum suspendisse ultrices gravida dictum fusce. Massa id neque aliquam vestibulum morbi blandit cursus. Mollis nunc sed id semper risus in hendrerit. Cum sociis natoque penatibus et magnis. Id consectetur purus ut faucibus pulvinar elementum integer enim neque. Rhoncus mattis rhoncus urna neque viverra justo. Pellentesque elit ullamcorper dignissim cras tincidunt. Ultrices eros in cursus turpis. Nec tincidunt praesent semper feugiat nibh sed pulvinar. Lobortis feugiat vivamus at augue eget arcu dictum.";
  loremIpsumSentences = this.loremIpsum.split('.').map(s => s.trim());
  recettes: Recette[] = [];

  generateTestData() {
    let numberOfRecipies = this.getRandomIntFromInterval(10, 100);
    for (let i = 0; i < numberOfRecipies; i++) {
      let recette: Recette = {
        id: i,
        nom: this.getRandomName(),
        tempsPreparation: this.getRandomIntFromInterval(1, 20),
        tempsCuisson: this.getRandomIntFromInterval(10, 120),
        date_creation: new Date(),
        date_ouverture: new Date(),
        tags: this.generateTags(),
        categoriePreparation: this.generatePreparation(),
        categorieIngredient: this.generateIngredients(),
      };
      this.recettes.push(recette);
    }
  }
  generateTags(): Tag[] {
    let tags = ['poulet', 'porc', 'boeuf', 'poisson'];
    if (Math.random() < 0.5) {
      return [
        {
          id: 0,
          nom: tags[this.getRandomInt(3)]
        },
        {
          id: 1,
          nom: "Plat principaux"
        }
      ];
    } else {
      return [
        {
          id: 0,
          nom: "Dessert"
        }
      ];
    }

  }

  generatePreparation(): CategoriePreparation[] {
    let toReturn: CategoriePreparation = {
      id: 1,
      nom: "asdf",
      ordre: 0,
      preparation: []
    };
    let numberOfSteps = this.getRandomIntFromInterval(2, 10);
    for (let i = 0; i < numberOfSteps; i++) {
      let step: Preparation = {
        id: i,
        text: this.getRandomSentence(),
        ordre: i,
      };
      toReturn.preparation.push(step);
    }
    return [toReturn];
  }

  generateIngredients(): CategorieIngredient[] {
    let toReturn: CategorieIngredient = new CategorieIngredient();
    toReturn.id = 1;
    toReturn.nom = "asdf";
    toReturn.ordre = 0;
    let numberOfSteps = this.getRandomIntFromInterval(2, 10);
    for (let i = 0; i < numberOfSteps; i++) {
      const unite = this.getRandomUnite();
      let step: Ingredient = {
        id: i,
        nom: this.getRandomName(),
        ordre: i,
        quantite: unite.quantite,
        unite: unite.unite,
        filterable: true,
      };
      toReturn.ingredient.push(step);
    }
    return [toReturn];
  }

  getRandomUnite() {
    if (Math.random() < 0.5) {
      return {
        quantite: Math.ceil(this.getRandomIntFromInterval(10, 1000) / 10) * 10,
        unite: "mL",
      };
    } else {
      return {
        quantite: Math.ceil(this.getRandomIntFromInterval(10, 1000) / 10) * 10,
        unite: "g",
      };
    }

  }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  getRandomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  getRandomName() {
    let sentence = this.getRandomSentence();
    let words = sentence.split(' ');
    let numberOfWords = this.getRandomIntFromInterval(2, words.length);
    words.splice(numberOfWords);
    return words.join(' ');
  }

  getRandomSentence() {
    let sentence = this.getRandomInt(this.loremIpsumSentences.length);
    return this.loremIpsumSentences[sentence];
  }
}
