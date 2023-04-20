<template>
  <v-navigation-drawer
    id="core-navigation-drawer"
    :dark="barColor !== 'rgba(228, 226, 226, 1), rgba(255, 255, 255, 0.7)'"
    mobile-break-point="960"
    app
    width="260"
    v-bind="$attrs"
  >
    <v-divider class="mb-1" />
    <v-list dense nav>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title />
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-list expand nav>
      <template>
        <base-item-group> </base-item-group>

        <base-item />
      </template>
    </v-list>

    <template v-slot:append>
      <base-item />
    </template>
  </v-navigation-drawer>
</template>
