<template>
  <NavPaseador/>
  <div class="general">
    <h1>Paseos reservados</h1>
    <div v-if="notification" class="notification" :class="notificationClass">
      {{ message }}
    </div>
    <div class="filter-section">
      <form @submit.prevent="fetchReservasFiltradas">
        <div class="form-row">
          <label class="fecha" for="fecha">Fecha:</label>
          <input type="date" v-model="fecha" id="fecha">
        </div>

        <div class="form-row">
          <label class="hora" for="hora">Hora:</label>
          <select v-model="hora" id="hora">
            <option value="">Todos</option>
            <option value="7:00">7:00 - 13:00</option>
            <option value="13:00">13:00 - 17:00</option>
            <option value="18:00">18:00 - 22:00</option>
          </select>
        </div>

        <div class="form-row">
          <label class="estado" for="estado">Estado:</label>
          <select v-model="estado" id="estado">
            <option value="">Todos</option>
            <option value="Pendiente">Pendiente</option>
            <option value="Terminado">Terminado</option>
            <option value="Cancelado">Cancelado</option>
          </select>
        </div>

        <div class="form-row row-buttons">
          <button type="submit">Filtrar</button>
          <button @click="clearFilters">Borrar Filtros</button>
        </div>
      </form>
    </div>
    <div v-for="reserva in reservas" :key="reserva.id" class="reserva-item">
      <div class="img-reserva">
        <p>Fecha: {{ formatDate(reserva.fecha) }}</p>
        <img class="img-perfil" :src="getImageUrl(reserva.foto_perfil || '/uploads/default-profile.png')" :alt="reserva.nombre + ' ' + reserva.apellido">
      </div>
      <p>Hora: {{ reserva.hora }}</p>
      <p>Cliente: {{ reserva.nombre }} {{ reserva.apellido }}</p>

	<!--Mapa-->
      <div class="map-container">
        <p>Dirección: {{ reserva.direccion }}</p>
        <div id="map"></div>
        <button @click="showDirections(reserva.direccion)" v-on:touchstart="showDirections(reserva.direccion)">Ver cómo llegar</button>
      </div>
	<!-- FIN Mapa-->
	    
      <p>Perro: {{ reserva.nombre_perro }} Raza: {{ reserva.nombre_raza }}</p>
      <p>Estado: {{ reserva.estado }}</p>
      <button v-if="reserva.estado === 'Pendiente'" @click="cambiarEstado(reserva.id, 'Terminado')" :disabled="!canMarkAsCompleted(reserva)">Paseo terminado</button>
      <span v-if="reserva.estado === 'Terminado'"></span>
      <span v-if="reserva.estado === 'Cancelado'"></span>
    </div>
  </div>
</template>

<script>
import ReservasService from "@/services/ReservasService";
import store from "@/store";
import moment from "moment";
import NavPaseador from "@/components/Nav/NavPaseador.vue";

export default {
  name: "ReservasPaseador",
  components: {
    NavPaseador,
  },
  data() {
    return {
      reservas: [],
      notification: null,
      fecha: '',
      hora: '',
      estado: '',
      map: null, // MAPA
    };
  },
  mounted() {
    this.fetchReservas();
    this.fetchNotification();
    this.loadGoogleMapsAPI(); // MAPA
  },
  methods: {
    fetchReservas() {
      const idPaseador = store.getters.getClientId;
      
      ReservasService.getReservasByPaseadorId(idPaseador)
        .then((response) => {
          this.reservas = response.data.reverse();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    fetchReservasFiltradas() {
        const id_paseador = store.getters.getClientId;
        ReservasService.getReservasFiltradasPaseador(id_paseador, {
          fecha: this.fecha,
          hora: this.hora,
          estado: this.estado,
        })
          .then((response) => {
            console.log(response)
            this.reservas = response.data.reverse();
          })
          .catch((error) => {
            console.log(error);
          });
      },
      clearFilters() {
      this.fecha = '';
      this.hora = '';
      this.estado = '';
      this.fetchReservas();
      },
    cambiarEstado(reservaId, nuevoEstado) {
      ReservasService.updateEstado(reservaId, nuevoEstado)
        .then((response) => {
          this.fetchReservas();
          console.log(response) // Volver a cargar las reservas actualizadas
        })
        .catch((error) => {
          console.log("Error al actualizar el estado de reserva:", error);
        });
    },
    formatDate(date) {
      return moment(date).format("DD/MM/YYYY");
    },
    canMarkAsCompleted(reserva) {
      const reservaDateTime = moment(`${reserva.fecha} ${reserva.hora}`, "YYYY-MM-DD HH:mm");
      const now = moment();
      const oneHourAfterReserva = reservaDateTime.clone().add(4, 'hour');
      return now.isAfter(oneHourAfterReserva);
    },
    fetchNotification() {
      this.notification = store.state.notification;
      this.message = store.state.message;
      // Limpiar la notificación después de mostrarla
      setTimeout(() => {
      this.notification = null;
      this.message = null;
      store.commit('setNotification', null);
      store.commit('setMessage', null);
    }, 8000); // 5 segundos en milisegundos
    },
    getImageUrl(filename) {
      if (filename) {
        const imagePath = filename.replace('vue', '').replace('public', '');
        const baseUrl = window.location.origin;
        return `${baseUrl}/${imagePath}`;
      }
    },
	   // MAPA
    showDirections(address) {
  const geocoder = new window.google.maps.Geocoder();
  const directionsService = new window.google.maps.DirectionsService();
  const directionsDisplay = new window.google.maps.DirectionsRenderer({
    map: null, // Initialize map to null here
  });

  geocoder.geocode({ address }, (results, status) => {
    if (status === "OK") {
      const destination = results[0].geometry.location;

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const origin = new window.google.maps.LatLng(
            position.coords.latitude,
            position.coords.longitude
          );

          const request = {
            origin,
            destination,
            travelMode: window.google.maps.TravelMode.DRIVING,
          };

          directionsService.route(request, (response, status) => {
            if (status === "OK") {
              directionsDisplay.setDirections(response);
              directionsDisplay.setMap(this.map); // Set the map here
            }
          });
        });
      }
    }
  });
},
	   // MAPA
    loadGoogleMapsAPI() {
      const googleMapsScript = document.createElement("script");
      googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAolIlSEOimzlZRcQk8CX2Zep2GMtK3HVo&libraries=places&callback=initMap`;
      googleMapsScript.async = true;
      googleMapsScript.defer = true;
      googleMapsScript.onload = this.initMap; // Agrega esto para llamar a la función initMap al cargar el script
      document.head.appendChild(googleMapsScript);
    },
	   // MAPA
    initMap() {
  // Crea una instancia del mapa y asigna la variable this.map
  this.map = new window.google.maps.Map(document.getElementById('map'), {
    center: { lat: -34.397, lng: 150.644 }, // Puedes cambiar el centro del mapa según tus necesidades
    zoom: 8, // Puedes cambiar el nivel de zoom según tus necesidades
  });
	},
  },
  computed: {
    notificationClass() {
      // Agrega las clases CSS según el tipo de notificación
      return {
        'notification-success': this.notification === 'success',
        'notification-error': this.notification === 'error',
      };
    },
  },
};
</script>

<style scoped>

.map-container {
  margin-top: 20px;
  width: 100%;
  max-width: 400px;
}

#map {
  width: 100%;
  height: 300px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.general{
    min-height: 60vh;  
    margin: 0 auto;
    padding-left: 10px;
    padding-right: 10px;
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 40px;
  }

  h1 {
    text-align: center;
    font-size: 24px;
    margin-bottom: 15px;
  }

  .img-perfil{
    width: 85px;
    border-radius: 100px;
  }

  .reserva-item {
    width: 100%;
    margin-bottom: 10px;
    background-color: #fff;
    border-radius: 5px;
    border: 3px solid #8DBD47;
    padding: 10px;
  }

  .img-reserva{
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: -45px;
  }

  button{
    border-radius: 5px;
    border: 1px solid #8DBD47;
    background-color: #8DBD47;
    font-size: 14px;
    padding: 3px 15px;
  }

  .notification {
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  }

  .notification-success {
    background-color: #dff0d8;
    color: #3c763d;
  }

  .notification-error {
    background-color: #f2dede;
    color: #a94442;
  }

  @media (min-width: 860px){
    .filter-section {
    margin-top: 20px;
    margin-bottom: 20px;
    width: 100%;
    padding: 10px;
  }

  .filter-section form{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .form-row{
    margin-right: 15px;
      margin-left: 0;
  }

  .form-row button {
    margin-right: 5px;
    cursor: pointer;
    padding: 4px 15px;
    border: none;
    border-radius: 5px;
    color: #fff;
    background-color: #8dbd47;
  }

  label{
    margin-right: 5px;
    margin-bottom: 0;
  }

  }

  @media (max-width: 859px) {
    .filter-section {
    margin-top: 20px;
    margin-bottom: 20px;
    width: 100%;
    padding: 10px;
  }


  input, select{
    width: 200px;
    padding: 0px 8px;
  }

  .filter-section form{
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }

  label{
    margin-right: 15px;
  }
  .form-row{
    margin-top: 10px;
  }
  .form-row button {
    margin-right: 5px;
    cursor: pointer;
    padding: 4px 15px;
    border: none;
    border-radius: 5px;
    color: #fff;
    background-color: #8dbd47;
  }

  .fecha{
    margin-right: 17px;
  }

  .hora{
    margin-right: 24px;
  }

  .estado{
    margin-right: 10px;
  }
  }
</style>
