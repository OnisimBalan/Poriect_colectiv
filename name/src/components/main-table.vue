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
        <label class="m-1">Shop:</label>
        <select class="btnCard" required>
          <option v-for="(children, i) in shops" :key="i">
            {{ children }}
          </option>
        </select>
      </div>
      <div class="form-control d-flex">
        <label class="m-1">Category:</label>
        <select class="btnCard" required>
          <option v-for="(children, i) in categorys" :key="i">
            {{ children }}
          </option>
        </select>
      </div>
      <div class="form-control d-flex">
        <label class="m-1">Product name:</label>
        <select class="btnCard" required>
          <option v-for="(children, i) in prodcutNames" :key="i">
            {{ children }}
          </option>
        </select>
      </div>
      <div class="form-control d-flex">
        <label class="m-1">Size: </label>
        <select class="btnCard" required>
          <option v-for="(children, i) in sizes" :key="i">
            {{ children }}
          </option>
        </select>
      </div>
      <div class="form-control d-flex">
        <label class="m-1">Color:</label>
        <select class="btnCard" required>
          <option v-for="(children, i) in colors" :key="i">
            {{ children }}
          </option>
        </select>
      </div>
      <div class="form-control d-flex">
        <label class="m-1">Profile:</label>
        <select class="btnCard" required>
          <option v-for="(children, i) in profiles" :key="i">
            {{ children }}
          </option>
        </select>
      </div>
      <div class="form-control d-flex">
        <label class="m-1">Card:</label>
        <select class="btnCard" required>
          <option v-for="(children, i) in cards" :key="i">
            {{ children }}
          </option>
        </select>
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
