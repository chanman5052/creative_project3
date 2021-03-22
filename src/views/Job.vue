<template>
  <div class="body">
    <div class="title">
      <h1><b>Job Listings</b></h1>
    </div>
    <JobListing :jobs="jobs" />
    <a class= "github" href="https://github.com/chanman5052/creative_project3">Github</a>
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
