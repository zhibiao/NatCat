<template>
  <Workspace />
</template>

<script>
import Workspace from "@components/Workspace";

export default {
  name: "App",
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  beforeDestroy() {},
  components: { Workspace },
};
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
}

#app {
  width: 100%;
  height: 100%;
}

* {
  touch-action: none;
  user-select: none;
  margin: 0;
}
</style>
