<template>
  <q-page class="q-ma-md page">
    <div class="row justify-around">
      <div class="col-8">
        <q-card class="bg-grey-2 q-mr-md">
          <q-card-section align="right">
            <div class="row justify-end">
              <div class="text-h6 text-primary">Product</div>
              <q-icon name="add" size="sm" color="secondary"></q-icon>
            </div>
          </q-card-section>
          <q-card-section class="q-gutter-y-md">
            <q-input dense label="Name" placeholer="Name" v-model="newProduct.name"></q-input>
            <q-input dense label="Description" placeholder="Description" type="textarea" autogrow v-model="newProduct.description"></q-input>
            <q-input dense label="Price" type="number" prefix="£" v-model="newProduct.price"></q-input>
            <q-select dense label="Category" :options="categories" v-model="newProduct.categoryId"></q-select>
          </q-card-section>
          <q-card-section class="row justify-end">
            <q-btn flat size="20px" icon="backup" color="secondary" class="submit-button"></q-btn>
            <q-btn flat size="20px" icon="cancel" color="negative" class="submit-button"></q-btn>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-4">
        <q-card class="bg-grey-2 full-height">
          <q-card-section align="right">
            <div class="row justify-end">
              <div class="text-h6 text-primary">Category</div>
              <q-icon name="add" size="sm" color="secondary"></q-icon>
            </div>
          </q-card-section>

          <q-card-section class="q-gutter-y-md">
            <q-input dense label="Name" placeholer="Name" v-model="newCategory.name"></q-input>
          </q-card-section>
          <q-card-section class="row justify-end">
            <q-btn flat size="20px" icon="backup" color="secondary" class="submit-button"></q-btn>
            <q-btn flat size="20px" icon="cancel" color="negative" class="submit-button"></q-btn>
          </q-card-section>
        </q-card>
      </div>

    </div>

    <div class="row q-mt-md">
      <div class="col-12">
        <q-card class="">
          <q-table
              title="Products"
              :data="products"
              :columns="productColumns"
              row-key="name"
              table-class="text-grey-8"
              table-style="padding: 0 40px"
          >
            <template slot="top">
              <q-select dense label="Filter Category" style="width: 200px"></q-select>
            </template>
          </q-table>
        </q-card>
      </div>
    </div>



  </q-page>
</template>

<script>
    export default {
        name: "Products",
        data() {
            return {
                newProduct: {
                    name: null,
                    description: null,
                    price: null,
                    categoryId: null
                },
                newCategory: {
                    name: null
                },
                categories: [
                    {
                        label: 'Technology',
                        value: 1
                    },
                    {
                        label: 'Peripheral',
                        value: 1
                    },
                ],
                products: [],
                productColumns: [
                    { name: 'name', label: 'Name', field: 'name', align: 'left', sortable: true },
                    { name: 'description', label: 'Description', field: 'description', align: 'left', sortable: false },
                    { name: 'price', label: 'Price', field: 'price', sortable: false }
                ]
            }
        },
        created() {
            this.$axios.get('https://localhost:5001/api/v1/products')
                .then(res => {
                    this.products = res.data;
                })
                .catch(err => {
                    console.log(err);
                    this.$q.notify({
                        message: 'Error contacting server',
                        color: 'negative',
                        classes: 'notification'
                    })
                });

            this.$axios.get('https://localhost:5001/api/v1/category')
                .then(res => {
                    this.categories = res.data.map(cat => {
                        return {
                            label: cat.name,
                            value: cat.id
                        }
                    })
                })
                .catch(err => {

                });
        }
    }
</script>

<style scoped>
  .page {

  }
  .submit-button {
    margin: 0 5px;
  }
</style>