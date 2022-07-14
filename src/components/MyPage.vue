<template>
<body class="main-layout position_head">
      <!-- header -->
      <header>
         <!-- header inner -->
         <div class="header">
            <div class="container-fluid">
               <div class="row">
                  <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                     <div class="full">
                        <div class="center-desk">
                           <div class="logo">
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                     <nav class="navigation navbar navbar-expand-md navbar-dark ">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarsExample04">
                           <ul class="navbar-nav mr-auto">
                              <li class="nav-item ">
                                 <a class="nav-link" href="/">Home</a>
                              </li>
                           </ul>
                        </div>
                     </nav>
                  </div>
               </div>
            </div>
         </div>
      </header>
      <!-- Our  Glasses section -->
      <div class="glasses">
         <div class="container">
            <div class="row">
               <div class="col-md-10 offset-md-1">
                  <div class="titlepage">
                     <h2>예약 현황</h2>
                  </div>
               </div>
            </div>
         </div>
         <div class="container-fluid">
            <div class="row">
               <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6" v-for="(each,i) in getData" :key="i">
                  <div class="card shadow-sm">
                     <div class="card-body">
                        <p class="card-text">{{each.username}}</p>
                        <p class="card-text">{{each.orderDate}}</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <!-- end Our  Glasses section -->
      <!--  footer -->
      <!--  footer -->
      <footer>
         <div class="footer">
            <div class="container">
               <div class="row">
                  <div class="col-md-8 offset-md-2">
                     <ul class="location_icon">
                        <li><a href="#"><i class="fa fa-phone" aria-hidden="true"></i></a><br> 010-9021-0816</li>
                        <li><a href="#"><i class="fa fa-envelope" aria-hidden="true"></i></a><br> cswcsm02@gmail.com</li>
                     </ul>
                  </div>
               </div>
            </div>
            <div class="copyright">
               <div class="container">
                  <div class="row">
                     <div class="col-md-12">
                        <p>© 2022 All Rights Reserved. Design by <a href="https://github.com/Gseungmin">Gseungmin</a></p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   </body>
         
</template>

<script>
import axios from 'axios'

export default {
    name: 'MyPageVue',
    data() {
            return {
               count : 0,
               getData : []
            };
        },
    components : {

    },

    mounted() {
         axios.get('http://3.36.79.61/orderPage').then((result)=>{
            for (let i = 0; i < result.data.length; i++) {
               var date = new Date(result.data[i].orderDate)
               result.data[i].orderDate = date
               this.getData.push(result.data[i])}
         })
   },


    methods: {
        },
}
</script>

<style>

</style>