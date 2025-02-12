<template>
  <v-container>
    <v-card elevation="2" class="pa-4">
      <v-row align="center" justify="space-between">
        <v-col cols="12" md="6">
          <!--                    <SearchBar />-->
        </v-col>
        <v-col cols="12" md="6">
          <v-row align="center" justify="end" class="gap-2">
            <slot name="create" />
            <v-menu offset-y>
              <template #activator="{ props }">
                <v-btn v-bind="props" outlined>
                  Actions
                  <v-icon end>mdi-menu-down</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item title="Mass Edit" />
                <v-list-item title="Delete All" />
              </v-list>
            </v-menu>
            <v-menu offset-y>
              <template #activator="{ props }">
                <v-btn v-bind="props" outlined>
                  <v-icon start>mdi-filter-variant</v-icon>
                  Filter
                  <v-icon end>mdi-menu-down</v-icon>
                </v-btn>
              </template>
              <v-card>
                <v-card-title class="text-h6">Category</v-card-title>
                <v-card-text>
                  <v-checkbox
                    label="Apple (56)"
                    value="apple"
                  />
                  <v-checkbox
                    label="Fitbit (56)"
                    value="fitbit"
                  />
                  <v-checkbox
                    label="Dell (56)"
                    value="dell"
                  />
                  <v-checkbox
                    label="Asus (97)"
                    value="asus"
                    model-value
                  />
                </v-card-text>
              </v-card>
            </v-menu>
          </v-row>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<style scoped lang="scss">

</style>