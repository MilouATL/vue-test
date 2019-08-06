const app = new Vue({
    el: "#app",
    data: {
        friends: [
        {
            first: "John",
            last: "doe",
            age: 24,            
        },
        {
            first: "Jane",
            last: "Doe",
            age: 27,
        }
    ], 
}, 
    filters: { 
        fullName(value ){
            return `${value.first} ${value.last}`
        }
    }, 

    methods: {
        plusAge(friend) {
            friend.age = friend.age + 1; 
        },
        minusAge(friend) {
            friend.age = friend.age - 1; 
        }
    },
    template: `
    <div>
        <h2 v-for="friend in friends">
        <h3>{{friend | fullName}}</h3>
        <h4>age: {{friend.age}}</h4>
        <button v-on:click="plusAge(friend)">+</button>
        <button v-on:click="minusAge(friend)">-</button>
        <input v-model="friend.first"/>
        <input v-model="friend.last"/>
        </h2>
    </div>
    `
 
})