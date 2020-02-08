<template>
    <div class="container">
        <h1>DataIoT</h1>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">Usuario</th>
      <th scope="col">Temperatura</th>
      <th scope="col">Humedad</th>
      <th scope="col">Ubicacion</th>
      <th scope="col">Fecha </th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(item, index) in datos" :key="index">
      <td>{{item.userID}}</td>
      <td>{{item.temperatura}}</td>
      <td>{{item.humedad}}</td>
      <td>{{item.ubicacion}}</td>
      <td>{{item.date}}</td>
      <td>
      </td>
    </tr>
  </tbody>
</table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            datos: []
        }
    },
    created(){
        this.listarDatos();
    },
    methods:{
        listarDatos(){
            this.axios.get('/consultar')
                .then(res =>{
                    console.log(res.data)
                    this.datos = res.data
                })
                .catch(e => {
                    console.log(e.response)
                })
        }
    }
}
</script>