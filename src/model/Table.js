export default class {
  constructor(name, confirmed, newConfirmed, recovered, newRecovered, death, newDeath, slug, active) {
    this.name = name;
    this.totalConfirmed = confirmed;
    this.newConfirmed = newConfirmed;
    this.totalRecovered = recovered;
    this.newRecovered = newRecovered;
    this.totalDeath = death;
    this.newDeath = newDeath;
    this.slug = slug;
    this.active = active;
  }
}
