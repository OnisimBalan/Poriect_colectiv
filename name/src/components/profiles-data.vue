<template>
  <div>
    <div class="profile-cls" v-if="showData">
      <form>
        <div class="row">
          <div class="col">
            <input type="text" class="form-control" placeholder="First name" />
          </div>
          <div class="col">
            <input type="text" class="form-control" placeholder="Last name" />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <input type="text" class="form-control" placeholder="Email" />
          </div>

          <div class="col">
            <input
              type="text"
              class="form-control"
              placeholder="Phone number"
            />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <input type="text" class="form-control" placeholder="Street" />
          </div>
          <div class="col">
            <input type="text" class="form-control" placeholder="Zip code" />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <input type="text" class="form-control" placeholder="City" />
          </div>
          <div class="col">
            <input type="text" class="form-control" placeholder="Country" />
          </div>
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
<script lang="ts" src="./profile-data.component.ts"></script>
