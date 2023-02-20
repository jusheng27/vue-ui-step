<template>
  <div class="demo-layout">
    <el-container>
      <el-aside>Aside</el-aside>
      <el-container direction="vertical">
        <el-header>Header</el-header>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss">
.demo-layout {
  & + & {
    margin-top: 20px;
  }

  .el-header,
  .el-footer,
  .el-main,
  .el-aside {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .el-header,
  .el-footer {
    background: #c6e2ff;
  }

  .el-main {
    flex-basis: 150px;
    background: #ecf5ff;
  }

  .el-aside {
    background: #d9ecff;
  }
}
</style>
