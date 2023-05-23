<template>
  <div>
    <div class="padding">
      <div class="row">
        <div class="col-5">
          <div class="card">
            <div class="card-header p-2">
              <strong>Credit Card</strong>
              <small class="m-2">-enter your card details</small>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-sm-12">
                  <div class="form-group">
                    <label for="name">Name</label>
                    <input
                      class="form-control"
                      id="name"
                      type="text"
                      placeholder="Enter your name"
                    />
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-sm-12">
                  <div class="form-group">
                    <label for="ccnumber">Credit Card Number</label>

                    <div class="input-group">
                      <input
                        class="form-control"
                        type="text"
                        placeholder="0000 0000 0000 0000"
                        autocomplete="email"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="form-group col-sm-4">
                  <label for="ccmonth">Month</label>
                  <select class="form-control" id="ccmonth">
                    <option>1</option>
                  </select>
                </div>
                <div class="form-group col-sm-4">
                  <label for="ccyear">Year</label>
                  <select class="form-control" id="ccyear">
                    <option>2023</option>
                  </select>
                </div>
                <div class="col-sm-4">
                  <div class="form-group">
                    <label for="cvv">CVV/CVC</label>
                    <input
                      class="form-control"
                      id="cvv"
                      type="text"
                      placeholder="123"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="card-footer d-flex">
              <button class="btn btn-sm btn-success float-right" type="submit">
                Continue
              </button>
              <div class="p-2"></div>
              <button
                class="btn btn-sm btn-danger float-left ml-5 p-1"
                type="reset"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" src="./billing-data.component.ts"></script>

<style scoped>
.padding {
  padding: 5rem !important;
  margin-left: 300px;
}
.card {
  margin-bottom: 1.5rem;
}

.card {
  left: 55%;
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid #c8ced3;
  border-radius: 0.25rem;
}

.card-header:first-child {
  border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;
}

.card-header {
  padding: 0.75rem 1.25rem;
  margin-bottom: 0;
  background-color: #f0f3f5;
  border-bottom: 1px solid #c8ced3;
}

.card-body {
  flex: 1 1 auto;
  padding: 1.25rem;
}

.form-control:focus {
  color: #5c6873;
  background-color: #fff;
  border-color: #c8ced3 !important;
  outline: 0;
  box-shadow: 0 0 0 #f44336;
}
</style>
