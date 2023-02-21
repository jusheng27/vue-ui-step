<template>
  <div style="width: 100%">
    <el-container>
      <el-aside>Aside</el-aside>

      <el-container direction="vertical">
        <el-header>Header</el-header>
        <el-main>
          <p>
            MainMainMainMainMainMainMainMainMainMainMainMainMainMainMai
            nMainMainMainMainMainMainMainMainMainMainMainMainMainMainMainMainMainMainMainMainMainMain
          </p>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss">
.el-header,
.el-footer,
.el-main,
.el-aside {
  text-align: center;
}

.el-header,
.el-footer {
  background: #c6e2ff;
}

.el-main {
  height: 150px;
  background: #ecf5ff;

  p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}

.el-aside {
  background: #d9ecff;
}
</style>
