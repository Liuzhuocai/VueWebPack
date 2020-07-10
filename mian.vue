<template>
  <div class="main">
    <toolbar msg="四川省教育公共信息服务平台"/>
    <mainPage></mainPage>
  </div>

</template>

<script>
    import toolbar from './components/toolbar.vue';
    import mainPage from './components/mainPage.vue';

    export default {
        name: "mian",

        data() {
            return {
                // menuList: []
            }
        },
        components: {
          toolbar, mainPage
        },

        methods: {
            // getMenus() {
            //     this.menuList = [
            //         {name: '国家学籍同步', id: 1, url: '/index'},
            //         {name: '未分班学生', id: 2, url: '/noclassStudent'},
            //         {name: '学生查询', id: 4, url: '/studentslete'},
            //         {name: '年级管理', id: 5, url: '/grademanagemen'},
            //         {name: '班级管理', id: 6, url: '/classmanagment'},
            //         {name: '学生管理', id: 7, url: '/studentmanagment'},
            //         {name: '调班/退班', id: 8, url: '/changeshift'},


            //     ];
            // }
        }
    }
</script>

<style scoped>

</style>