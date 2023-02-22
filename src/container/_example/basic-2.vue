<template>
  <div class="demo-layout">
    <el-container>
      <el-header height="80px">
        Header
      </el-header>
      <el-main>Main</el-main>
      <el-footer height="80px">
        Footer
      </el-footer>
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
    height: 150px;
    background: #ecf5ff;
  }

  .el-aside {
    background: #d9ecff;
  }
}
</style>
