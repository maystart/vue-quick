<template>
  <section class="401">
  	这是我的stattstret
  </section>
</template>
<script type="text/javascript">
export default {
  data() {
    return {
      form: {
        username: null,
        password: null
      },
      rules: {
        username: [{ required: true, message: '请输入账户名！', trigger: 'blur' }],
        password: [{ required: true, message: '请输入账户密码！', trigger: 'blur' }]
      },
      loading: false
    }
  },
  methods: {
    
  }
}

</script>

