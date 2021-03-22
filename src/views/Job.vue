<template>
  <div class="body">
    <div class="title">
      <h1><b>Job Listings</b></h1>
    </div>
    <JobListing :jobs="jobs" />
  </div>
</template>
<script>
import JobListing from "../components/JobListing.vue";

export default {
  name: "Job",
  components: {
    JobListing,
  },
  data() {
    return {};
  },
  computed: {
    jobs() {
      return this.$root.$data.jobs;
    },
  },
};
</script>
<style>

</style>
