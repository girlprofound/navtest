<!--  -->
<template>
  <div>
    <NavHeader></NavHeader>
    <Shuffling></Shuffling>
    <ContentCard></ContentCard>
    <Footers></Footers>
  </div>
</template>

<script>
import NavHeader from "@/components/navHeader";
import Shuffling from "@/components/shuffling";
import Footers from "@/components/footer";
import ContentCard from "@/components/contentCard";

export default {
  name: "index",
  data() {
    return {};
  },
  components: {
    NavHeader: NavHeader,
    Shuffling: Shuffling,
    Footers: Footers,
    ContentCard: ContentCard
  }
};
</script>

<style scoped></style>
