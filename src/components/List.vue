<template>
  <div class="container-table">
    <table class="table table-striped">
      <thead>
        <tr class="text-center">
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Email Address</th>
          <th scope="col" style="width: 10rem">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="text-center"
          v-for="(guest, index) in guests"
          v-bind:key="guest.id"
        >
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ guest.name }}</td>
          <td>{{ guest.email }}</td>
          <td>
            <div class="d-flex justify-content-between">
              <button
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                @click="handleEdit(guest.id)"
              >
                Edit
              </button>
              <button class="btn btn-danger" @click="deleteGuest(guest.id)">
                Delete
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Update</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <form @submit.prevent="updateGuest()">
            <div class="modal-body">
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name"
                  v-model="formEdit.name"
                />
                <label for="floatingInput">Name</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  v-model="formEdit.email"
                />
                <label for="floatingInput">Email address</label>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="submit"
                class="btn btn-primary"
                data-bs-dismiss="modal"
                v-if="hiddenModal === true"
              >
                Save changes
              </button>
              <button type="submit" class="btn btn-primary" v-else>
                Save changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "../config/config";
import {
  collection,
  doc,
  getDocs,
  deleteDoc,
  updateDoc,
  orderBy,
  query,
} from "firebase/firestore";

export default {
  name: "List",
  data() {
    return {
      guests: [],
      dbCollection: collection(db, "tamu"),
      formEdit: {
        id: "",
        name: "",
        email: "",
      },
      hiddenModal: false,
    };
  },
  methods: {
    async getGuests() {
      const response = await getDocs(
        query(this.dbCollection, orderBy("dataAdded", "asc"))
      );
      const guestsTemp = response.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      this.guests = guestsTemp;
    },

    async deleteGuest(id) {
      await deleteDoc(doc(db, "tamu", id));
      this.getGuests();
    },

    async handleEdit(id) {
      const response = await getDocs(this.dbCollection);
      const data = response.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      const guest = data.find((guest) => guest.id === id);
      this.formEdit = guest;
    },

    async updateGuest() {
      const { id, name, email } = this.formEdit;
      await updateDoc(doc(db, "tamu", id), {
        name,
        email,
      }).then(() => {
        this.hiddenModal = true;
      });
      this.getGuests();
    },
  },
  mounted() {
    this.getGuests();
  },
};
</script>

<style></style>
