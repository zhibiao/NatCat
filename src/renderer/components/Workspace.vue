<template>
  <div id="workspace">
    <a-layout class="layout">
      <a-layout-content>
        <a-card>
        <a-tabs >
          <a-tab-pane key="udp-client" tab="UDP Client">
            <UdpClient />
          </a-tab-pane>

          <a-tab-pane key="dup-server" tab="UDP Server">
            <UdpServer />
          </a-tab-pane>

          <a-tab-pane key="tcp-client" tab="TCP Client">
            <TcpClient />
          </a-tab-pane>

          <a-tab-pane key="tcp-server" tab="TCP Server">
            <TcpServer />
          </a-tab-pane>

          <a-tab-pane key="serial-port" tab="Serial Port">
            <SerialPort />
          </a-tab-pane>
        </a-tabs>
        </a-card>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script>
import UdpClient from "@components/UdpClient";
import UdpServer from "@components/UdpServer";
import TcpClient from "@components/TcpClient";
import TcpServer from "@components/TcpServer";
import SerialPort from "@components/SerialPort";
export default {
  name: "Workspace",

  props: [],

  data() {
    return {};
  },

  async mounted() {},

  methods: {},

  async beforeDestroy() {},

  components: { UdpClient, UdpServer, TcpClient, TcpServer, SerialPort },
};
</script>

<style scoped>
#workspace {
  width: 100%;
  height: 100%;
}

#workspace .layout {
  width: 100%;
  height: 100%;
}
</style>
