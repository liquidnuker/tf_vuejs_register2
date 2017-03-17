const Vue = require("./js/vendor/vue.min.js");

// register
// Vue.component('my-component', {
//   template: '<div>A custom component!</div>'
// });

// nw
// Vue.component('my-component', {
//   template: '<span>{{ message }}</span>',
//   data: {
//     message: 'hello'
//   }
// });


// let data = { counter: 0 }
// Vue.component('my-component', {
//   template: '<button v-on:click="counter += 1">{{ counter }}</button>',
//   data: function () {
//     return data
//   }
// });

let data = { 
  message: "message1",
  message2: "message2"
};

Vue.component('my-component', {
  template: `<p>{{ message }} <br> {{ message2 }}</p>`,
  data: function () {
    return data
  }
});

// root instance
new Vue({
  el: '#register1'
});

// local register
// ======================================================/
let Child = {
  template: '<div>template from child</div>'
};

new Vue({
  el: "#register1",
  components: {
    'my-component2': Child
  }
});