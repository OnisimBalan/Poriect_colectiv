<template>
  <div id="app" class="fixed-top">
    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">Project name</a>
        </div>
      </div>
    </nav>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-3 col-md-2 sidebar">
          <ul class="nav nav-sidebar">
            <li>
              <button
                @click="toggleHomeVision()"
                class="btn btn-outline-info active"
              >
                Home
              </button>
            </li>
            <li>
              <button
                class="btn btn-outline-info"
                @click="toggleProfileVision()"
              >
                Profiles
              </button>
            </li>
            <li>
              <button
                class="btn btn-outline-info"
                @click="toggleBillingVision()"
              >
                Billing
              </button>
            </li>
            <li><button class="btn btn-outline-info">Settings</button></li>
          </ul>
        </div>
        <div class="col-10 col-sm-offset-3 col-md-12 col-md-offset-2 main">
          <div class="justify-content-center mt-5">
            <div
              v-if="profileVisible"
              tabindex="-1"
              role="dialog"
              aria-labelledby="myLargeModalLabel"
              aria-hidden="true"
            >
              <h1 class="page-header">Profiles</h1>
              <Profile></Profile>
            </div>

            <div v-if="billingVisible" aria-hidden="true">
              <div class="">
                <h1 class="page-header">Billing</h1>
                <Billing></Billing>
              </div>
            </div>
            <div v-if="homeVisible">
              <h1 class="page-header">Tasks</h1>
              <Entry :toggleTaskVision="toggleTaskVision"></Entry>
            </div>
            <div v-if="taskVisible" aria-hidden="true">
              <div class="">
                <h1 class="page-header">Tasks</h1>
                <MainTable></MainTable>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./App.component.ts"></script>
<style lang="css" src="./style/main.css"></style>
