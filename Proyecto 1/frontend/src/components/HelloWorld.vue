<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      La problemática que será resuelta con esta aplicación web es la incursión masiva de sistemas de sensores IoT <br>
      en los hogares,  en este caso más específicamente los relacionados a un sensor de temperatura y humedad, <br>
      así pues se proporcionará un servidor API-REST, el cual recibirá los datos del sensor y a su vez proveerá la <br>
      lógica funcional a la que se conectara el front end desde donde los usuarios podrán visualizar de una forma <br>
      sencilla los datos que han sido recogidos por el sensor. <br>
      <a href="https://github.com/jaromanp/ST0263-31-Proyectos/blob/master/Proyecto%201/README.md" target="_blank" rel="noopener"> Documentación Github</a>.
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
