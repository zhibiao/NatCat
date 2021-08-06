<template>
  <div>
    <a-input-group>
      <a-row :gutter="8">
        <a-col :span="8">
          <a-input defaultValue="0.0.0.0" />
        </a-col>

        <a-col :span="4">
          <a-input defaultValue="0" />
        </a-col>

        <a-col :span="4">
          <a-button> Connect </a-button>
        </a-col>
      </a-row>
    </a-input-group>

    <a-divider />

    <a-textarea :rows="8" v-model="sendContent" />

    <a-divider />

    <a-button @click="onSend"> Send </a-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sendContent: "",
    };
  },

  methods: {
    onSend() {},
  },
};
</script>

<style>
</style>