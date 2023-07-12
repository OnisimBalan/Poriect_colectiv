<template>
  <div class="d-flex main-table-cl">
    <form class="add-form">
      <div class="form-control d-flex">
        <label class="m-1">Task name: </label>
        <input
          required
          type="text"
          name="TaskName"
          v-model="taskName"
          placeholder="Task name"
        />
      </div>
      <div class="form-control d-flex">
        <input
          required
          type="text"
          name="Shop"
          v-model="shop"
          placeholder="Shop"
        />
      </div>
      <div class="form-control d-flex">
        <input
          required
          type="text"
          name="Prodcut name"
          v-model="prodcutName"
          placeholder="Prodcut name"
        />
      </div>
      <div class="form-control d-flex">
        <input
          required
          type="text"
          name="Size"
          v-model="size"
          placeholder="Size"
        />
      </div>
      <div class="form-control d-flex">
        <input
          required
          type="text"
          name="Color"
          v-model="color"
          placeholder="Color"
        />
      </div>
      <div class="form-control d-flex">
        <input
          required
          type="text"
          name="Status"
          v-model="status"
          placeholder="Status"
        />
      </div>
      <div class="mt-4 d-flex">
        <button class="btn btn-success" @click="createTask()">Save Task</button>
        <div class="m-2"></div>
        <button class="btn btn-dark">Back</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts" src="./main-table.component.ts"></script>
