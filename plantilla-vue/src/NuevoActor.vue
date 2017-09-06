<template>
  <div class="center">
    <h2>{{title}}</h2>
    <!--//Formulario actor nuevo-->
    <form v-if="!submitted">
      <label for="nombre">
        Nombre
      </label><br>
      <input id="nombre" required type="text" v-model="actor.firstName" required /><br>
      <label for="apellido">Apellido</label><br>
      <input id="apellido" required type="text" v-model="actor.lastName" required /><br>
      <button v-on:click="post">Agregar actor</button>
    </form>
    <div v-if="submitted">
      <h2>¡Actor añadido!</h2>
      <!--Añadir otro actor
      <button v-on:click="refresh">Agregar otro actor</button>-->
    </div>
    </ul>
  </div>
</template>
<script>
export default {
  data(){
    //Datos objeto actor
    return{
      title:'Nuevo Actor',
      actor:{
        firstName:'',
        lastName:''
      },
      submitted: false
    }
  },
  methods:{
    //Metodo para agregar actores
    post: function(){
      //Si los campos no se encuentran vacios se agrega el actor
      if(this.actor.firstName != '' && this.actor.lastName != ''){
        this.$http.post('http://localhost:8081/sakila-spring-backend/actors', {
          firstName: this.actor.firstName,
          lastName: this.actor.lastName
        }).then(function(data){
          console.log(data);
          this.submitted = true;
        });
      }
    }
}

}
</script>