<template>
  <section class="lotteryOrdersList">
    <el-table :data="lotteryOrdersList" border style="width: 100%" :default-sort="{prop: 'id', order: 'descending'}">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="center" inline class="table-expand">
            <el-form-item label="id">
              <span>{{ props.row.id }}</span>
            </el-form-item>
            <el-form-item label="purchaser_nick_name">
              <span>{{ props.row.purchaser_nick_name }}</span>
            </el-form-item>
            <el-form-item label="createDate">
              <span>{{ props.row.createDate }}</span>
            </el-form-item>
            <el-form-item label="lottery_count">
              <span>{{ props.row.lottery_count }}</span>
            </el-form-item>
            <el-form-item label="lottery_money">
              <span>{{ props.row.lottery_money }}</span>
            </el-form-item>
            <el-form-item label="lottery_giftName">
              <span>{{ props.row.lottery_giftName || '-'}}</span>
            </el-form-item>
            <el-form-item label="channel_id">
              <span>{{ props.row.channel_id }}</span>
            </el-form-item>
            <el-form-item label="channel_order_no">
              <span>{{ props.row.channel_order_no }}</span>
            </el-form-item>
            <el-form-item label="channel_purchaser_id">
              <span>{{ props.row.channel_purchaser_id }}</span>
            </el-form-item>
            <el-form-item label="room_url">
              <a :href="props.row.room_url" target="_blank">{{props.row.room_url}}</a>
            </el-form-item>
            <el-form-item label="channel_purchaser_avatar">
              <img :src="props.row.channel_purchaser_avatar" alt="头像" style="max-width: 50%">
            </el-form-item>
            <br>
            <el-form-item label="order_list" style="white-space: pre-wrap;flex-basis: 100%;text-align: left;">
              <span>{{props.row.order_list}}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="主播ID" prop="id" sortable></el-table-column>
      <el-table-column label="购买姓名" prop="purchaser_nick_name"></el-table-column>
      <el-table-column label="数量(张)" prop="lottery_count" sortable></el-table-column>
      <el-table-column label="面额(元)">
        <template slot-scope="scope">
          <span>{{scope.row.lottery_money / 100}}</span>
        </template>
      </el-table-column>
      <el-table-column label="购买时间">
        <template slot-scope="scope">
          <span>{{setDate(scope.row.createDate) }}</span>
        </template>
      </el-table-column>
      <el-table-column label="房间地址">
        <template slot-scope="scope">
          <a :href="scope.row.room_url" target="_blank" style="color:#409EFF">{{scope.row.room_url}}</a>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination background layout="prev, pager, next" :total="templateList.length" @current-change="handleCurrentChange">
    </el-pagination>
  </section>
</template>
<script>
import api_http from 'api/api.http'
import moment from 'moment'
import localLotteryOrdersList from './lotteryOrdersList.js'
export default {
  data() {
    return {
      lotteryOrdersList: [],
      templateList: []
    }
  },
  created() {
    this.getLotteryOrdersList(1);
  },
  methods: {
    setDate(time) {
      return moment(time).format('YYYY-MM-DD HH:mm:ss');
    },
    getLotteryOrdersList(index) {
      api_http.lotteryOrdersList().then(res => {
        if (!res.length) {
          res = localLotteryOrdersList;
        }
        this.lotteryOrdersList = res.slice(0, 10);
        this.templateList = res;
      });
    },
    handleCurrentChange(val) {
      let index = (val - 1) * 10;
      this.lotteryOrdersList =this.templateList.slice(index, index + 10);
    }
  }
};

</script>
