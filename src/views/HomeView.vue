<template>
  <main>
    <div class="container container-home">
      <div class="row d-flex align-items-center">
        <div class="col-md-6">
          <img
            src="../assets/wedding.png"
            alt="wedding"
            class="d-fblock img-fluid"
          />
        </div>
        <div class="col-md-6 text-center">
          <h1 class="mb-5 p-0">Wedding Guest</h1>
          <Input />
        </div>
      </div>
      <div class="buttonList">
        <div class="d-flex justify-content-end">
          <RouterLink to="/list" class="btn btn-success">List Guest</RouterLink>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Input from "../components/Input.vue";
import { RouterLink } from "vue-router";

export default {
  name: "HomeView",
  components: { Input },
};
</script>

<style>
.container-home {
  height: 100vh;
  margin-top: 5rem;
}
</style>
