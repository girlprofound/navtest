<!--  -->
<template>
  <div>
    <NavHeader></NavHeader>
    <Shuffling></Shuffling>
    <div class="container">
      <div class="card-deck mb-4 text-center">
        <div class="card" style="width: 18rem;">
          <img
            src="@/assets/images/logo/go.jpg"
            class="card-img-top "
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        <div class="card" style="width: 18rem;">
          <img
            src="@/assets/images/logo/go.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        <div class="card" style="width: 18rem;">
          <img
            src="@/assets/images/logo/go.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        <div class="card" style="width: 18rem;">
          <img
            src="@/assets/images/logo/go.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
    <Footers></Footers>
  </div>
</template>

<script>
import NavHeader from "@/components/navHeader";
import Shuffling from "@/components/shuffling";
import Footers from "@/components/footer";

export default {
  name: "index",
  data() {
    return {};
  },
  components: {
    NavHeader: NavHeader,
    Shuffling: Shuffling,
    Footers: Footers
  }
};
</script>

<style scope></style>
