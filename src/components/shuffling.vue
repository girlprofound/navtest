<!--  -->
<template>
  <div>
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-ride="carousel"
    >
      <ol class="carousel-indicators scollradius">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active" data-interval="1000">
          <img
            src="@/assets/images/logo/go.jpg"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="@/assets/images/logo/go.jpg"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="@/assets/images/logo/go.jpg"
            class="d-block w-100"
            alt="..."
          />
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span
          class="carousel-control-prev-icon nextpage"
          aria-hidden="true"
        ></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span
          class="carousel-control-next-icon nextpage"
          aria-hidden="true"
        ></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {}
};
</script>

<style scoped>
.nextpage {
  width: 2.875rem;
  height: 2.875rem;
}
.scollradius li {
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
}
</style>
