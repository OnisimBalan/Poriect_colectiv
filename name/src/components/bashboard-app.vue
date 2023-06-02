<template>
  <div class="mt-5">
    <div class="d-flex">
      <!-- <table class="table">
        <thead>
          <tr>
            <th scope="col">Store</th>
            <th scope="col">Task name</th>
            <th scope="col">Product name</th>
            <th scope="col">Color</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Supreme</th>
            <th scope="row">Sup</th>
            <th scope="row">Box Logo Crewneck sweatshirt</th>
            <th scope="row">Black</th>
            <th scope="row">Stopped</th>
          </tr>
          <tr>
            <th scope="row">2</th>
          </tr>
          <tr>
            <th scope="row">3</th>
          </tr>
          <tr>
            <th scope="row">4</th>
          </tr>
          <tr>
            <th scope="row">5</th>
          </tr>
        </tbody>
      </table> -->
      <div>
        <v-data-table item-key="name" class="elevation-1">
          <template v-slot:top>
            <v-text-field
              label="Search (UPPER CASE ONLY)"
              class="mx-4"
            ></v-text-field>
          </template>
          <template>
            <tr>
              <td></td>
              <td>
                <v-text-field type="number" label="Less than"></v-text-field>
              </td>
              <td colspan="4"></td>
            </tr>
          </template>
        </v-data-table>
      </div>
    </div>

    <div class="">
      <button class="btn btn-outline-success" @click="toggleTaskVision()">
        <!-- <font-awesome-icon icon="plus"></font-awesome-icon> -->
        <span class="text-muted">Create task </span>
      </button>
    </div>
  </div>
</template>
<script lang="ts" src="./dashboard-app.component.ts"></script>
