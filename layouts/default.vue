<template>
  <v-app>
    <dashboard-core-app-bar v-model="expandOnHover" />

    <dashboard-core-drawer :expand-on-hover.sync="expandOnHover" />

    <!--    <dashboard-core-view />-->

    <div
      id="core-view-container"
      :class="
        expandOnHover ? 'core-view-container' : 'core-view-container-expanded'
      "
    >
      <nuxt />
    </div>

    <dashboard-core-settings v-model="expandOnHover" />
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',

  components: {
    DashboardCoreAppBar: () => import('@/components/core/AppBar'),
    DashboardCoreDrawer: () => import('@/components/core/Drawer'),
    DashboardCoreSettings: () => import('@/components/core/Settings')
    // DashboardCoreView: () => import('@/components/core/View')
  },

  data: () => ({
    expandOnHover: false
  })
}
</script>
<style>
#core-view-container {
  padding-top: 50px;
}
.core-view-container {
  padding-left: 60px;
}
.core-view-container-expanded {
  padding-left: 260px;
}
</style>
