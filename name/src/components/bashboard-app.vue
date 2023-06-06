<template>
  <div class="mt-5">
    <div class="d-flex">
      <table class="table">
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
            <th>
              {{}}
              <div>
                <button class="btn btn-outline-success" @click="startTask()">
                  <span class="text-muted">Start</span>
                </button>
                <button class="btn btn-outline-success" @click="stopTask()">
                  <span class="text-muted">Stop</span>
                </button>
              </div>
            </th>
          </tr>
        </tbody>
      </table>
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
