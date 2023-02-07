<template>
  <main>
    <form @submit.prevent="submit">
      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          id="floatingInput"
          placeholder="name"
          :value="forms.name"
          @input="(event) => (forms.name = event.target.value)"
        />
        <label for="floatingInput">Name</label>
      </div>
      <div class="form-floating mb-3">
        <input
          type="email"
          class="form-control"
          id="floatingInput"
          placeholder="name@example.com"
          :value="forms.email"
          @input="(event) => (forms.email = event.target.value)"
        />
        <label for="floatingInput">Email address</label>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </main>
</template>

<script>
import { collection, addDoc } from "@firebase/firestore";
import { db } from "../config/config";

export default {
  name: "InputForm",
  data() {
    return {
      dbCollection: collection(db, "tamu"),
      forms: {
        name: "",
        email: "",
        dataAdded: "",
      },
    };
  },
  methods: {
    async submit() {
      const date = new Date();
      this.forms.dataAdded = date.toLocaleString("en-US");
      await addDoc(this.dbCollection, this.forms).then(() => {
        return alert("Data berhasil ditambahkan");
      });
      this.forms.name = "";
      this.forms.email = "";
      this.forms.dataAdded = "";
    },
  },
};
</script>
