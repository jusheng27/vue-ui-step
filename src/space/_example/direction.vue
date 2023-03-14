<template>
  <div>
    <el-space direction="vertical">
      <div
        v-for="i in 3"
        :key="i"
        class="box-card"
        style="width: 200px"
      />
    </el-space>
  </div>
</template>

<style lang="scss" scoped>
.box-card {
  display: inline-flex;
  height: 200px;
  background-color: #c6e2ff;
  border-radius: 4px;
}
</style>
