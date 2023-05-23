<template>
  <div class="d-flex main-table-cl">
    <form class="add-form">
      <div class="form-control d-flex">
        <label class="m-1">Task name: </label>
        <input required type="text" name="TaskName" placeholder="Task name" />
      </div>
      <div class="form-control d-flex">
        <label class="m-1">Shop:</label>
        <select class="btnCard" required>
          <option value="Palace">Palace</option>
          <option value="Supreme">Supreme</option>
        </select>
      </div>
      <div class="form-control d-flex">
        <label class="m-1">Category:</label>
        <select class="btnCard" required>
          <option value="0" disabled>Select category ...</option>
        </select>
      </div>
      <div class="form-control d-flex">
        <label class="m-1">Product name:</label>
        <select class="btnCard" required>
          <option value="0" disabled>Select name ...</option>
        </select>
      </div>
      <div class="form-control d-flex">
        <label class="m-1">Size: </label>
        <select class="btnCard" required>
          <option value="0" disabled>Select zise ...</option>
        </select>
      </div>
      <div class="form-control d-flex">
        <label class="m-1">Color:</label>
        <select class="btnCard" required>
          <option value="0" disabled>Select color ...</option>
        </select>
      </div>
      <div class="form-control d-flex">
        <label class="m-1">Profile:</label>
        <select class="btnCard" required>
          <option value="0" disabled>Select profile ...</option>
        </select>
      </div>
      <div class="form-control d-flex">
        <label class="m-1">Card:</label>
        <select class="btnCard" required>
          <option value="0" disabled>Select card ...</option>
        </select>
      </div>
      <div class="mt-4 d-flex">
        <button class="btn btn-success">Save Task</button>
        <div class="m-2"></div>
        <button class="btn btn-dark">Back</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts" src="./main-table.component.ts"></script>
