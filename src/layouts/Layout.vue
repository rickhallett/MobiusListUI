<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
            flat
            dense
            round
            @click="leftDrawerOpen = !leftDrawerOpen"
            icon="menu"
            aria-label="Menu"
        />

        <q-toolbar-title>
          MobiusList
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        bordered
        content-class="bg-grey-2"
        :width="250"
    >
      <q-list>
        <q-icon name="fas fa-infinity" color="primary" class="nav-icon"></q-icon>
        <q-item-label header>Mobius Navigation</q-item-label>

        <q-item clickable @click="navTo('/')">
          <q-item-section avatar>
            <q-icon name="home"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Homepage</q-item-label>
            <q-item-label caption>Your Dashboard</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable @click="navTo('/products')">
          <q-item-section avatar>
            <q-icon name="view_list"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Products</q-item-label>
            <q-item-label caption>View & Add Products</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
    import {EventBus} from "../router";

    export default {
        name: 'MyLayout',
        data() {
            return {
                leftDrawerOpen: false
            }
        },
        methods: {
            navTo(path) {
                this.$router.push({ path: path }).catch(err => err);
            }
        },
        beforeCreate() {
            if (window.location.href.split(':')[1] === '//localhost') {
                EventBus.$domain = 'https://localhost:5001'
            } else {
                EventBus.$domain = 'https://mobiuscore222.azurewebsites.net'
            }

            console.log(EventBus.$domain)
        },
        created() {

        }

    }
</script>

<style>
  .nav-icon {
    font-size: 170px;
    margin-left: 36px;
  }

  @media screen and (max-width: 400px) {
    .nav-icon {
      font-size: 60px;
      margin-left: 16px;
    }
  }

  .notification {
     text-align: center;
  }
</style>
