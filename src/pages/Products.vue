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
            <q-btn flat size="20px" icon="backup" color="secondary" class="submit-button" @click="createProduct"></q-btn>
            <q-btn flat size="20px" icon="cancel" color="negative" class="submit-button" @click="clearProduct"></q-btn>
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
            <q-btn flat size="20px" icon="backup" color="secondary" class="submit-button" @click="createCategory"></q-btn>
            <q-btn flat size="20px" icon="cancel" color="negative" class="submit-button" @click="clearCategory"></q-btn>
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
              row-key="productNumber"
              table-class="text-grey-8"
              table-style="padding: 0 40px"
              :loading="tableLoading"
          >
            <template slot="top">
              <q-select dense label="Filter Category" style="width: 200px" :options="categories" v-model="productFilter" clearable></q-select>
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
                tableLoading: false,
                newProduct: {
                    name: null,
                    description: null,
                    price: null,
                    categoryId: null
                },
                newCategory: {
                    name: null
                },
                categories: [],
                products: [],
                productColumns: [
                    { name: 'productNumber', label: 'Product Number', field: 'productNumber', align: 'left', sortable: true },
                    { name: 'name', label: 'Name', field: 'name', align: 'left', sortable: true },
                    { name: 'description', label: 'Description', field: 'description', align: 'left', sortable: false },
                    { name: 'price', label: 'Price', field: 'price', sortable: false }
                ],
                productFilter: null
            }
        },
        watch: {
            productFilter(val) {
                if (val) {
                    this.getAllProductsByCategory(val.label);
                    return;
                }

                this.getAllProducts();
            }
        },
        methods: {
            createProduct() {
                console.log('newProduct1', this.newProduct);

                function capitaliseFirst(word) {
                    let capitalise = word.split('');
                    capitalise[0] = capitalise[0].toUpperCase();
                    return capitalise.join('');
                }

                var valid = true;
                for (let field in this.newProduct) {
                    if (!this.newProduct[field]) {
                        valid = false;
                        this.$q.notify({
                            message: `${capitaliseFirst(field)} cannot be blank`,
                            color: 'negative',
                            classes: 'notification'
                        });
                    }
                }

                if(!valid) return;

                const newProduct = {
                    name: this.newProduct.name,
                    description: this.newProduct.description,
                    price: Number.parseFloat(this.newProduct.price),
                    categoryId: Number.parseInt(this.newProduct.categoryId.value)
                };
                console.log('newProduct', newProduct);
                this.$axios.post('https://localhost:5001/api/v1/products', newProduct)
                    .then(res => {
                        console.log(res);
                        if (res.status === 201) {
                            this.$q.notify({
                                message: `Product Number: ${res.data.productNumber}, '${res.data.name}' created`,
                                color: 'positive',
                                classes: 'notification'
                            });
                            this.clearProduct();
                            if (this.productFilter) {
                                this.getAllProductsByCategory(this.productFilter);
                                return;
                            }

                            this.getAllProducts();
                        }
                    })
                    .catch(err => {
                        console.log(err.response);
                        if (err.response.data.title === "One or more validation errors occurred.") {
                            this.$q.notify({
                                message: 'One or more validation errors occurred',
                                color: 'warning',
                                classes: 'notification'
                            });
                        }
                    })
            },
            clearProduct() {
                this.newProduct = {
                    name: null,
                    description: null,
                    price: null,
                    categoryId: null
                }
            },
            createCategory() {
                this.$axios.post('https://localhost:5001/api/v1/category', this.newCategory)
                    .then(res => {
                        console.log(res);
                        if (res.status === 201) {
                            this.$q.notify({
                                message: `${res.data.name} category created`,
                                color: 'positive',
                                classes: 'notification'
                            });
                            this.clearCategory();
                            this.getAllCategories();
                        }
                    })
                    .catch(err => {
                        console.log(err.response);
                        if (err.response.status === 400 && err.response.data === "Category already exists") {
                            this.$q.notify({
                                message: 'Category already exists',
                                color: 'warning',
                                classes: 'notification'
                            });
                            this.clearCategory();
                        }
                    })
            },
            clearCategory() {
                this.newCategory.name = null;
            },
            getAllProductsByCategory(name) {
                this.tableLoading = true;
                this.$axios.get(`https://localhost:5001/api/v1/products?category=${name}`)
                    .then(res => {
                        this.products = res.data;
                        this.tableLoading = false;
                    })
                    .catch(err => {
                        console.log(err);
                        this.tableLoading = false;
                        this.createServerErrorMessage();
                    });
            },
            getAllProducts() {
                this.tableLoading = true;
                this.$axios.get('https://localhost:5001/api/v1/products')
                    .then(res => {
                        this.tableLoading = false;
                        this.products = res.data;
                        console.log(this.products)
                    })
                    .catch(err => {
                        console.log(err);
                        this.tableLoading = false;
                        this.createServerErrorMessage();
                    });
            },
            getAllCategories() {
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
                        console.log(err);
                        this.tableLoading = false;
                        this.createServerErrorMessage();
                    });
            },
            createServerErrorMessage() {
                this.$q.notify({
                    message: 'Error contacting server',
                    color: 'negative',
                    classes: 'notification'
                })
            }
        },
        created() {
            this.getAllProducts();
            this.getAllCategories();
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