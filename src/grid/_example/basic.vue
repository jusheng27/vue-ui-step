<template>
  <el-row>
    <el-col :span="24">
      <div class="grid-content ep-bg-purple-dark" />
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="12">
      <div class="grid-content ep-bg-purple" />
    </el-col>
    <el-col :span="12">
      <div class="grid-content ep-bg-purple-light" />
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="8">
      <div class="grid-content ep-bg-purple" />
    </el-col>
    <el-col :span="8">
      <div class="grid-content ep-bg-purple-light" />
    </el-col>
    <el-col :span="8">
      <div class="grid-content ep-bg-purple" />
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="6">
      <div class="grid-content ep-bg-purple" />
    </el-col>
    <el-col :span="6">
      <div class="grid-content ep-bg-purple-light" />
    </el-col>
    <el-col :span="6">
      <div class="grid-content ep-bg-purple" />
    </el-col>
    <el-col :span="6">
      <div class="grid-content ep-bg-purple-light" />
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="4">
      <div class="grid-content ep-bg-purple" />
    </el-col>
    <el-col :span="4">
      <div class="grid-content ep-bg-purple-light" />
    </el-col>
    <el-col :span="4">
      <div class="grid-content ep-bg-purple" />
    </el-col>
    <el-col :span="4">
      <div class="grid-content ep-bg-purple-light" />
    </el-col>
    <el-col :span="4">
      <div class="grid-content ep-bg-purple" />
    </el-col>
    <el-col :span="4">
      <div class="grid-content ep-bg-purple-light" />
    </el-col>
  </el-row>
</template>

<style>
.ep-bg-purple-dark {
  background: #99a9bf;
}
.ep-bg-purple {
  background: #d3dce6;
}
.ep-bg-purple-light {
  background: #e5e9f2;
}
</style>

<style lang="scss" scoped>
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 8px;
}

.grid-content {
  border-radius: 8px;
  min-height: 36px;
}
</style>
