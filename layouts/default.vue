<template>
  <div class="sidebar-page" :class="{ 'is-light': !$store.state.is_dark_mode, 'is-dark': $store.state.is_dark_mode }">
    <section class="sidebar-layout">
      <sidebar />
      
      <div class="is-flex-grow-1">
        <Nuxt />
      </div>
    </section>
  </div>
</template>

<script>
import Sidebar from "~/components/Sidebar";

export default {
  data() {
    return {
      items: [
        {
          title: "Home",
          icon: "home",
          to: { name: "index" },
        },
        {
          title: "Inspire",
          icon: "lightbulb",
          to: { name: "inspire" },
        },
      ],
    };
  },
  components: {
    Sidebar,
  },
};
</script>
