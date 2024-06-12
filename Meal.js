class Meal {
  constructor(
    name,
    proteinContentInMilligram,
    carbohydrateContentInMilligram,
    fatContentInMilligram
  ) {
    this.name = name;
    this.proteinContentInMilligram = proteinContentInMilligram;
    this.carbohydrateContentInMilligram = carbohydrateContentInMilligram;
    this.fatContentInMilligram = fatContentInMilligram;
  }

  toString() {
    return `Meal{name='${this.name}', proteinContentInMilligram=${this.proteinContentInMilligram}, carbohydrateContentInMilligram=${this.carbohydrateContentInMilligram}, fatContentInMilligram=${this.fatContentInMilligram}}`;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(data) {
    if (!this.head) {
      this.head = { data, next: null };
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = { data, next: null };
    }
  }

  remove(obj) {
    if (!this.head) return null;
    if (this.head.data === obj) {
      this.head = this.head.next;
      return obj;
    }

    let current = this.head;
    while (current.next) {
      if (current.next.data === obj) {
        current.next = current.next.next;
        return obj;
      }
      current = current.next;
    }

    return null;
  }

  find(data) {
    let current = this.head;
    let index = 0;

    while (current) {
      if (current.data === data) {
        return index;
      }
      current = current.next;
      index++;
    }

    return -1;
  }

  toString() {
    let result = "";
    let current = this.head;

    while (current) {
      result += current.data.name + (current.next ? ", " : "");
      current = current.next;
    }

    return result;
  }
}

const meal1 = new Meal("Salad", 300.0, 150.0, 50.0);
const meal2 = new Meal("Pasta", 120.0, 250.0, 70.0);
const meal3 = new Meal("Pizza", 200.0, 300.0, 80.0);

const mealList = new LinkedList();
mealList.add(meal1);
mealList.add(meal2);
mealList.add(meal3);
mealList.find(meal3);
