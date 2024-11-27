<template>
  <a-layout style="min-height: 100vh">
    <a-layout-header style="background: #fff; padding: 0">
      <!-- Header content -->
    </a-layout-header>
    <a-layout>
      <a-layout-sider width="200px" style="background: #fff">
        <!-- Sider content -->
      </a-layout-sider>
      <a-layout-content style="padding: 0 16px">
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
export default {
  name: "DefaultLayout",
};
</script>

