<template>
  <main>
    <div class="container">
      <div class="header d-flex justify-content-center align-items-center">
        <h1>List Guest</h1>
        <img src="../assets/cat.png" alt="" class="d-block img-fluid cat" />
      </div>
      <List />
    </div>
  </main>
</template>

<script>
import List from "../components/List.vue";
export default { components: { List } };
</script>

<style>
.header {
  margin: 1rem 0 3rem 0;
}
.header h1 {
  z-index: 2;
  padding-right: 10rem;
  padding-top: 7.5rem;
}
.cat {
  z-index: 1;
  width: 40%;
  position: absolute;
  right: 23.5rem;
}

@media (max-width: 992px) {
  .header h1 {
    z-index: 2;
    padding-right: 10rem;
    padding-top: 5rem;
    font-size: 30px;
  }
  .cat {
    z-index: 1;
    width: 40%;
    position: absolute;
    right: 17rem;
  }
}
</style>
