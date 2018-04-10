<template>
  <section class="onlineUsers">
    <h6 for="" class="title">在线主播</h6>
    <el-table :data="onlineUsers" border style="width: 100%">
      <el-table-column label="头像">
        <template slot-scope="scope">
          <img :src="scope.row.image" />
        </template>
      </el-table-column>
      <el-table-column label="ID" prop="id">
      </el-table-column>
      <el-table-column label="主播名称" prop="nickname">
      </el-table-column>
    </el-table>
    <el-pagination background layout="prev, pager, next" :total="templateList.length" @current-change="handleCurrentChange">
    </el-pagination>
  </section>
</template>
<script>
// import api_http from 'api/api.http'
import localOnlineUsers from 'components/http/onlineUsers'
export default {
  data() {
    return {
      onlineUsers: localOnlineUsers.slice(0,10),
      templateList: localOnlineUsers
    }
  },
  created() {
    // api_http.onlineUsers().then(res => {
      //测试数据
      for (let i = 0; i < 25; i++) {

        // let item = {
        //   nickname: res[0].nickname,
        //   image: res[0].image,
        //   id: res[0].id + '-' + i
        // }
        // if (i < 10) {
        //   this.onlineUsers.push(item);
        // }
        // this.templateList.push(item);
      }
    // })
  },
  methods: {
    handleCurrentChange(val) {
      let index = (val - 1) * 10;
      this.onlineUsers = [];
      for (let i = index, len = this.templateList.length; i < len; i++) {
        if (i < index + 10) {
          this.onlineUsers.push(this.templateList[i]);
        }
      }
    }
  }
};

</script>
<style type="text/css" scoped lang="less">
.onlineUsers {
  img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
  }
}

</style>
