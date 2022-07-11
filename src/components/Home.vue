<template>
	<body class="main-layout">
      <!-- header -->
      <header>
         <!-- header inner -->
         <div class="header">
            <div class="container-fluid">
               <div class="row">
                  <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                     <div class="full">
                        <div class="center-desk">
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
                              <li class="nav-item active">
                                 <a class="nav-link" href="/">Home</a>
                              </li>
                              <li class="nav-item">
                                 <a class="nav-link" href="/myPage">MyPage</a>
                              </li>
                           </ul>
                        </div>
                     </nav>
                  </div>
               </div>
            </div>
         </div>
      </header>
      <!-- banner -->
      <section class="banner_main">
         <div id="banner1" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
               <li data-target="#banner1" data-slide-to="0" class="active"></li>
               <li data-target="#banner1" data-slide-to="1"></li>
               <li data-target="#banner1" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
               <div class="carousel-item active">
                  <div class="container">
                     <div class="carousel-caption">
                        <div class="text-bg">
                           <h1> <span class="blu" style="color:cornflowerblue">For your Interview <br></span></h1>
                           <figure><img src="images/banner_img.png" alt="#"/></figure>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="carousel-item">
                  <div class="container">
                     <div class="carousel-caption">
                        <div class="text-bg">
                           <h1> <span class="blu" style="color:cornflowerblue">For your Interview <br></span></h1>
                           <figure><img src="images/banner_img.png" alt="#"/></figure>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="carousel-item">
                  <div class="container">
                     <div class="carousel-caption">
                        <div class="text-bg">
                           <h1> <span class="blu" style="color:cornflowerblue">For your Interview <br></span></h1>
                           <figure><img src="images/banner_img.png" alt="#"/></figure>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <a class="carousel-control-prev" href="#banner1" role="button" data-slide="prev">
            <i class="fa fa-arrow-left" aria-hidden="true"></i>
            </a>
            <a class="carousel-control-next" href="#banner1" role="button" data-slide="next">
            <i class="fa fa-arrow-right" aria-hidden="true"></i>
            </a>
         </div>
      </section>
      <!-- end banner -->
      <!-- Our  Glasses section -->
      <div class="glasses">
         <div class="container">
            <div class="row">
               <div class="col-md-10 offset-md-1">
                  <div class="titlepage">
                     <h2>Interview</h2>
                     <h3>더 좋은 장비로 상대방에게 좋은 인상을 심어주세요!</h3>
                  </div>
               </div>
            </div>
         </div>
         <div class="container-fluid">
            <div class="row">
               <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                  <div class="glasses_box">
                     <figure><img src="images/glass1.png" alt="#"/></figure>
                     <h3><span class="blu">$</span>Free</h3>
                     <p>WebCam</p>
                  </div>
               </div>
               <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                  <div class="glasses_box">
                     <figure><img src="images/glass2.png" alt="#"/></figure>
                     <h3><span class="blu">$</span>Free</h3>
                     <p>Light</p>
                  </div>
               </div>
               <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                  <div class="glasses_box">
                     <figure><img src="images/glass3.png" alt="#"/></figure>
                     <h3><span class="blu">$</span>Free</h3>
                     <p>Mike</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <!-- end Our  Glasses section -->
      <!-- Our shop section -->
      <div id="about" class="shop">
         <div class="container-fluid">
            <div class="row">
               <div class="col-md-5">
                  <div  class="shop_img">
                     <figure><img src="images/shop_img.png" alt="#"/></figure>
                  </div>
               </div>
               <div class="col-md-7 padding_right0">
                  <div class="max_width">
                     <div class="titlepage">
                        <h2>첫인상의 중요성</h2>
                        <p></p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <!-- end Our shop section -->
      <!-- contact section -->
      <div id="contact" class="contact">
         <div class="container">
            <div class="row">
               <div class="col-md-6">
                  <form id="request" class="main_form">
                     <div class="row">
                        <div class="col-md-12">
                           <h3>Constact Us</h3>
                        </div>
                        <div class="col-md-12 ">
                           <input class="contactus" placeholder="Name" type="type" name="Name"> 
                        </div>
                        <div class="col-md-12">
                           <input class="contactus" placeholder="Phone Number" type="type" name="PhoneNumber"> 
                        </div>
                        <div class="col-md-12">
                           <input class="contactus" placeholder="Email" type="type" name="Email">                          
                        </div>   
                        <div class="col-md-12">
                           <input class="contactus" placeholder="password" type="type" name="ReserveNumber">
                        </div>
                        <div class="col-md-12">
                           <h3 style="margin-bottom:15px">Reserve Date</h3>
                           <Datepicker v-model="date" :disabledDates="disabledDates" :enableTimePicker="false" required/>
                        </div>
                        <div class="col-md-12">
                           <button class="send_btn" type="submit">Send</button>
                        </div>
                     </div>
                  </form>
               </div>
            </div>
         </div>
         <div class="container-fluid">
            <div class="map_section">
               <div id="map">
               </div>
            </div>
         </div>
      </div>
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
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

export default {
    name: 'HomeVue',
    data() {
            return {
                date: null,
                disabledDates: [new Date()],
            };
        },
    components : {
      Datepicker
    },

    methods: {
        },
}
</script>

<style>

</style>