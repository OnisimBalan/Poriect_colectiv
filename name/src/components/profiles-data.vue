<template>
  <div>
    <div class="profile-cls">
      <form>
        <div class="row">
          <div class="col">
            <input
              type="text"
              class="form-control"
              placeholder="Shipment name"
            />
          </div>
          <div class="col">
            <input
              type="text"
              v-model="shipmentName"
              class="form-control"
              placeholder="Name"
            />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <input
              type="text"
              v-model="name"
              class="form-control"
              placeholder="Surname"
            />
          </div>

          <div class="col">
            <input
              type="text"
              v-model="adress"
              class="form-control"
              placeholder="Adress"
            />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <input
              type="text"
              v-model="adressExtend"
              class="form-control"
              placeholder="Adress extend"
            />
          </div>
          <div class="col">
            <input
              type="text"
              v-model="city"
              class="form-control"
              placeholder="City"
            />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <input
              type="text"
              v-model="country"
              class="form-control"
              placeholder="County"
            />
          </div>
          <div class="col">
            <input
              type="text"
              v-model="county"
              class="form-control"
              placeholder="Country"
            />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <input
              type="text"
              v-model="zipCode"
              class="form-control"
              placeholder="Zip code"
            />
          </div>
          <div class="col">
            <input
              type="text"
              v-model="email"
              class="form-control"
              placeholder="Email"
            />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <input
              type="text"
              v-model="phoneNumber"
              class="form-control"
              placeholder="Phone number"
            />
          </div>
          <div class="col"></div>
        </div>
      </form>
      <div class="d-flex mt-4">
        <button class="btn btn-outline-primary" @click="addProfiles()">
          Add
        </button>
        <div class="m-2"></div>
        <button class="btn btn-outline-primary" @click="toggleViews()">
          View Profiles
        </button>
      </div>
    </div>
    <div v-if="showProfiles">
      <ShowProfiles></ShowProfiles>
      <button class="btn btn-outline-primary" @click="toggleViews()">
        Back
      </button>
    </div>
  </div>
</template>
<script lang="ts" src="./profile-data.component"></script>
