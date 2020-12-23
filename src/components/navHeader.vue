<!--  -->
<template>
  <header>
    <div class="header fixed-top">
      <div class="header-top">
        <div class="container">
          <div class="row d-flex align-items-center">
            <div class="col-xl-6 col-lg-6 col-md-10">
              <div class="topbar-left text-left">
                <p>Welcome to Gosund Online Shopping Store !</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="header-bottom ">
        <nav class="navbar navbar-expand-lg navbar-light  navbar-fixed-top">
          <a class="navbar-brand" href="#">
            <img src="@/assets/images/logo/logon.png" alt="111" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div
            class="collapse navbar-collapse ml-4"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav mr-auto">
              <li class="nav-item ">
                <a class="nav-link" href="#">Products </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Download App</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Sopport</a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  News
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <div class="d-flex flex-row">
                    <div class="mydropright  ml-5 menuboder">
                      <a class="dropdown-item" href="#">Action </a>
                      <a class="dropdown-item" href="#">Something else here</a>
                      <a class="dropdown-item " href="#">Another action</a>
                      <a class="dropdown-item" href="#">Something else here</a>
                      <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                    <div
                      class="flex-fill mydropleft  d-flex justify-content-start  mb-3"
                    >
                      <div class="container">
                        <div class="row">
                          <div class="col-md-3 col-md-offset-1 m-2">
                            <img
                              src="@/assets/images/blog/post-mini-2.jpg"
                              alt="111"
                            />
                          </div>
                          <div class="col-md-3 col-md-offset-1 m-2">
                            <img
                              src="@/assets/images/blog/post-mini-2.jpg"
                              alt="111"
                            />
                          </div>
                          <div class="col-md-3 col-md-offset-1 m-2">
                            <img
                              src="@/assets/images/blog/post-mini-2.jpg"
                              alt="111"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  About
                </a>

                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <div class="d-flex flex-row">
                    <div class="mydropright  ml-5 menuboder">
                      <a class="dropdown-item" href="#">Action </a>
                      <a class="dropdown-item" href="#">Something else here</a>
                      <a class="dropdown-item" href="#">Another action</a>
                      <a class="dropdown-item" href="#">Something else here</a>
                      <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                    <div
                      class="flex-fill mydropleft  d-flex justify-content-start  mb-3"
                    >
                      <div class="container">
                        <div class="row">
                          <div class="col-md-3 col-md-offset-1 m-2">
                            <img
                              src="@/assets/images/blog/post-mini-2.jpg"
                              alt="111"
                            />
                          </div>
                          <div class="col-md-3 col-md-offset-1 m-2">
                            <img
                              src="@/assets/images/blog/post-mini-2.jpg"
                              alt="111"
                            />
                          </div>
                          <div class="col-md-3 col-md-offset-1 m-2">
                            <img
                              src="@/assets/images/blog/post-mini-2.jpg"
                              alt="111"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
              <a href=""
                ><i class="fa fa-search fa-2x mr-sm-3 fa-inverse"></i>
                <input type="hidden" />
              </a>
              <a href=""
                ><i class="fa fa-user fa-2x mr-sm-3 fa-inverse"></i>
                <input type="hidden"
              /></a>
              <a class="shopcar" href=""
                ><i class="fa fa-shopping-cart fa-2x fa-inverse"></i>
                <span>（0）</span>
              </a>
              <a href=""
                ><i class="fa fa-map-marker fa-2x mr-sm-3 fa-inverse"></i>
                <input type="hidden" />
              </a>
            </form>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
var onResize = function() {
  // apply dynamic padding at the top of the body according to the fixed navbar height
  $("body").css("padding-top", $(".header").height());
};

// attach the function to the window resize event
$(window).resize(onResize);

// call it also when the page is ready after load or reload
$(function() {
  onResize();
});
export default {
  data() {
    return {};
  },
  components: {}
};
</script>

<style scoped>
.header {
  margin-bottom: 0;
}
.header .header-top {
  height: 2.1875rem;
  width: 100%;
  font-size: 14px;
  background-color: #78b637;
}
.header .header-bottom {
  height: 4.75rem;
  width: 100%;
  background-color: #60c17c;
}
.header .header-bottom nav a {
  font-size: 16px;
  font-weight: bolder;
}
.dropdown {
  position: static;
}
.dropdown-menu {
  width: 100%;
  text-align: center;
  z-index: 1004;
}
.dropdown-menu > li {
  display: inline-block;
}
.navbar .nav > li > a.dropdown-toggle {
  position: relative;
  bottom: -1px;
  z-index: 1005;
  background: white;
  padding-bottom: 0.75rem;
}

ul.nav li.dropdown:hover ul.dropdown-menu {
  /* ... */
  border-top: 1px solid #000;
}
.menuboder {
  border-right: solid 1px black;
}

.shopcar {
  text-decoration: none;
}
.shopcar i {
  display: inline-block;
  vertical-align: middle;
}
.shopcar span {
  color: #fff;
  margin: 0 0.625rem 0 -0.625rem;
}
</style>
