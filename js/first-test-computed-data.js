const app = new Vue({
    el: "#app",
    data: {
        milou: {
            first: "Milou",
            last: "de Veen",
            age: 24,
        },
        djuri: {
            first: "Djuri",
            last: "Schiffer",
            age: 27,
        },
    }, 
    computed: { 
        milouFullName(){
            return `${this.milou.first} ${this.milou.last}`
        }, 
        milouAgeInOneYear() {
            return this.milou.age + 1;
        },
        djuriFullName(){
            return `${this.djuri.first} ${this.djuri.last}`
        }, 
        djuriAgeInOneYear() {
            return this.djuri.age + 1;
        },
    },
    filters: { 
        fullName(value ){
            return `${value.first} ${value.last}`
        }
    }, 
    template: `
    <div>
        <h2>Name: {{milou | fullName}}</h2>
        <h2>Age in one year: {{milouAgeInOneYear}}</h2>
        <h2>Name: {{djuriFullName}}</h2>
        <h2>Age in one year: {{djuriAgeInOneYear}}</h2>
    </div>
    `
 
})