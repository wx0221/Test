<template>
    <Aside :activeIndex="activeIndex" :items="items" :title="title"></Aside>
</template>

<script>
  import Aside from '../ThreeAside'
  export default {
    data(){
      return{
        activeIndex:'column',
        title:'党建平台',
        items:[
          {
            index:'1',
            title:'党务中心',
            subs:[
              {





                index:'#1-1',
                title:'党组织管理',
                subs:[
                  {
                      index:'organ_list',
                    title:'党组织列表'
                  },
                  {
                    index:'outstanding_organ',
                    title:'优秀党组织'
                  }








                ],
              },
              {
                index:'party_posts',
                title:'党内职务管理'
              },
              //
              {
                index:'#1-3',
                title:'党员管理',
              //   subs:[
              //     {
              //       index:'list',
              //       title:'党员列表'
              //     },
              //     {
              //       index:'history',
              //       title:'历史党员'
              //     },
              //     {
              //       index:'outstanding',
              //       title:'优秀党员'
              //     }
              //   ],
              // },
              // {
              //   index:'party_develop',
              //   title:'党员发展全纪实'
              // },
              // {
              //   index:'#1-5',
                title:'党员关系转移',
                subs:[
                  {
                    index:'relation_into',
                    title:'党员关系转入'
                  },
                  {
                    index:'#relationOut',
                    title:'党员关系转出'
                  }
                ],
              },
              {
                index:'#1-6',
                title:'流动党员',
                subs:[
                  {
                    index:'flowInto',
                    title:'流动党员转入'
                  },
                  {
                    index:'#flowOut',
                    title:'流动党员转出'
                  }
                ],
              },
              {
                index:'fee',
          //       title:'党费缴纳记录'
          //     },
          //     {
          //       index:'birthday',
          //       title:'政治生日'
          //     },
          //   ],
          // },
          // {
          //   index:'#2',
          //   title:'学习平台',
          //   subs:[
          //     {
          //       index:'setting',
          //       title:'专题设置'
          //     },
          //     {
          //       index:'#2-2',
          //       title:'学习资料管理',
          //       subs:[
                  {
                    index:'column',
                    title:'学习资料栏目'
                  },
                  {
                    index:'#2-2-2',
                    title:'学习资料列表'
                  }
                ],
              },
              {
                index:'study_base',
                title:'题库管理'
              },
              {
                index:'study_exam',
                title:'考试中心'
              },
              {
                index:'study_note',
                title:'学习笔记'
              },
            ]
          },
          {
            index:'#3',
            title:'活动中心',
            subs:[
              {
                index:'#3-1',
                title:'三会一课',
                subs:[
                  {
                    index:'origan',
                    title:'组织会议'
                  },
                  {
                    index:'#3-1-2',
                    title:'会议列表'
                  },
                  {
                    index:'#3-1-3',
                    title:'会议记录'
                  },
                ]
              },
              {
                index:'#origan',
                title:'组织生活'
              },
              {
                index:'#3-4',
                title:'品牌党建',
                subs:[
                  {
                    index:'construction_party',
                    title:'品牌党建建设'
                  },
                  {
                    index:'dynamic_party',
                    title:'品牌党建动态'
                  },
                  {
                    index:'log_party',
                    title:'品牌党建日志'
              //     },
              //   ]
              // },
              // {
              //   index:'#3-5',
              //   title:'第一书记',
              //   subs:[
              //     {
              //       index:'first_setting',
              //       title:'第一书记设置'
              //     },
              //     {
              //       index:'first_dynamic',
                    title:'第一书记动态'
                  },
                  {
                    index:'first_log',
                    title:'第一书记日志'
                  },
                ]
              },
              {
                index:'#3-7',
                title:'民主评议',
              },
            ]
          }
        ],
      }
    },
   components:{
      Aside
   },
    mounted(){
      //解决页面刷新的时候路由不高亮显示的问题
      let urlStr =this.$route.matched[1].path;
      let index=urlStr.lastIndexOf('\/');
      urlStr=urlStr.substring(index+1,urlStr.length)
      this.activeIndex=urlStr;
    }
  }
</script>
<style scoped>
</style>
