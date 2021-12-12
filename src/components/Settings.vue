<template>
    <div class="SettingParking">
    <div class="container_SettingParking">
    
<section class="contact-clean" style="background: rgb(255,255,255);">
        <form  v-on:submit.prevent="updateSettings" style="width: 500px;box-shadow: 0px 0px 12px 5px;">
            <h1 class="text-center" style="width: 450;color: rgb(0,122,255);font-weight: bold;font-family: Alatsi, sans-serif;">Configuraciones</h1>
            <h1 class="text-center" style="width: 450;color: rgb(0,122,255);font-weight: bold;font-family: Alatsi, sans-serif;">Parking System</h1>
            <div style="transform: scale(1);border-radius: 0;border-top-width: 23px;padding: 0;margin: 22px;"></div><input class="form-control" v-model="actualSettings.nameParking" type="text"  placeholder="Nombre Completo" name="name"  >
            <div style="transform: scale(1);border-radius: 0;border-top-width: 23px;padding: 0;margin: 10px;"></div><input class="form-control" v-model="actualSettings.admin" type="text"   name="admon" placeholder="Administrador" style="box-shadow: 0px 0px;">
            <div style="transform: scale(1);border-radius: 0;border-top-width: 23px;padding: 0;margin: 10px;"></div><input class="form-control" v-model="actualSettings.minutePrice" type="number" name="cost"  placeholder="Costo minuto">
            <div style="transform: scale(1);border-radius: 0;border-top-width: 23px;padding: 0;margin: 10px;"></div><input class="form-control" v-model="actualSettings.capacity" type="number" name="capacity" placeholder="Capacidad">
            <div style="transform: scale(1);border-radius: 0;border-top-width: 23px;padding: 0;margin: 10px;"></div><input class="form-control" v-model="actualSettings.prefix" type="text" name="prefixBilling"  placeholder="Prefijo Factura" style="box-shadow: 0px 0px;" >
            <div style="transform: scale(1);border-radius: 0;border-top-width: 23px;padding: 0;margin: 10px;"></div><input class="form-control" v-model="actualSettings.billNumberInit" type="number" name="numStartBilling" placeholder="Inicio Factura">
            <div style="transform: scale(1);border-radius: 0;border-top-width: 23px;padding: 0;margin: 10px;"></div><input class="form-control" v-model="actualSettings.billNumberEnd" type="number" name="numEndBilling"   placeholder="Final Factura">
            <div style="transform: scale(1);border-radius: 0;border-top-width: 23px;padding: 0;margin: 1px;text-align: center;"><button class="btn btn-primary" type="submit" style="text-align: center;background: rgb(0,122,255);">Modificar</button></div>
        </form>
    </section>

    </div>
    </div>
</template>

<script>

import gql from "graphql-tag";
export default {
  name: "Settings",
  data: function () {
    return {
      user:"nuvf",
      actualSettings: {
        admin:"admin",
        capacity:100,
        
        nameParking:"parking",
        minutePrice:37,
        prefix:"999",
        billNumberInit:1000,
        billNumberEnd:10000
        
       
      },
      datos: {
        capacity:this.actualSettings.capacity,
        admin:this.actualSettings.admin,
        nameParking:this.actualSettings.nameParking,
        minutePrice:this.actualSettings.minutePrice,
        prefix:this.actualSettings.prefix,
        billNumberInit:this.actualSettings.billNumberInit,
        billNumberEnd:this.actualSettings.billNumberEnd
       
      }
    };
  },
  methods: {
    updateSettings: async function() {
      
      await this.$apollo
        .mutate({
          mutation: gql`
            mutation UpdateSettings($settingsParking: SettingsParkingInput!) {
              updateSettings(settingsParking: $settingsParking) {
                capacity
                admin
                nameParking
                adressParking
                minutePrice
                prefix
                billNumberInit
                billNumberEnd
                lastBillNumber
              }
            }
          `,
          variables: {
            settingsParking: this.datos,
          },
        })
        .then((result) => {
          
          alert("actualizacion exitosa")
          this.$apollo.queries.actualSettings.refetch();
        })
        .catch((error) => {
          alert("ERROR 401: Credenciales Incorrectas.");
        });
    },
  },
  apollo: {
    actualSettings: {
      query: gql`
        query ActualSettings($user: String) {
          actualSettings(user: $user) {
            admin
            nameParking
            adressParking
            minutePrice
            capacity
            prefix
            billNumberInit
            billNumberEnd
            lastBillNumber
          }
        }
      `,
      variables() {
        return {
          user: "dsds",
        };
      }
    },
  },
  created: function () {
    this.$apollo.queries.actualSettings.refetch();
  }
};
</script>




<style>
.contact-clean {
  background: #fafafa;
  padding: 80px 0;
}
@media (max-width:767px) {
  .contact-clean {
    padding: 20px 0;
  }
}
.contact-clean form {
  max-width: 480px;
  width: 90%;
  margin: 0 auto;
  background-color: #ffffff;
  padding: 40px;
  border-radius: 4px;
  color: #505e6c;
  box-shadow: 1px 1px 5px rgba(0,0,0,0.1);
}
@media (max-width:767px) {
  .contact-clean form {
    padding: 30px;
  }
}
.contact-clean h2 {
  margin-top: 5px;
  font-weight: bold;
  font-size: 28px;
  margin-bottom: 36px;
  color: inherit;
}
.contact-clean form .form-control {
  background: #fff;
  border-radius: 2px;
  box-shadow: 1px 1px 1px rgba(0,0,0,0.05);
  outline: none;
  color: inherit;
  padding-left: 12px;
  height: 42px;
}
.contact-clean form .form-control:focus {
  border: 1px solid #b2b2b2;
}
.contact-clean form textarea.form-control {
  min-height: 100px;
  max-height: 260px;
  padding-top: 10px;
  resize: vertical;
}
.contact-clean form .btn {
  padding: 16px 32px;
  border: none;
  background: none;
  box-shadow: none;
  text-shadow: none;
  opacity: 0.9;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 13px;
  letter-spacing: 0.4px;
  line-height: 1;
  outline: none !important;
}
.contact-clean form .btn:hover {
  opacity: 1;
}
.contact-clean form .btn:active {
  transform: translateY(1px);
}
.contact-clean form .btn-primary {
  background-color: #055ada !important;
  margin-top: 15px;
  color: #fff;
}
</style>