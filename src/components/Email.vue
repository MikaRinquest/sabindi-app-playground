<template>
  <div id="email_template">
    <h4>Attachment</h4>
    <div class="fallback">
      <section class="dropdown-wrapper">
        <div class="selected-client" @click="isVisible = !isVisible">
          <span>Select an account</span>
          <!-- <span v-else v-if="!selectedClient">{{ selectedClient.fullName }}</span> -->
          <svg
            class="dropdown-icon"
            :class="isVisible ? 'dropdown' : ''"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"
            />
          </svg>
        </div>
        <div
          :class="isVisible ? 'visible' : 'invisible'"
          class="dropdown-popover"
          v-if="isVisible"
        >
          <input
            type="text"
            name="search"
            id="search"
            v-model="search"
            placeholder="Search for insurer"
          />
          <span v-if="insurers.length === 0">No data available</span>
          <div class="options">
            <ul>
              <li
                v-for="insurer in insurers"
                :key="insurer.id"
                @click="selectInsurer(insurer)"
              >
                {{ insurer.insurerEmail }}
              </li>
            </ul>
          </div>
        </div>
      </section>
      <input
        type="file"
        name="file"
        id="file"
        placeholder="Drop PDF file here"
      />
    </div>
    <button class="button" @click="sendEmail">Send Email</button>
  </div>
</template>

<script>
export default {
  name: "email",
  data() {
    return {
      search: "",
      selectedClient: null,
      isVisible: false,
      insurers: [
        {
          id: "1",
          insurerEmail: "queries@santam.co.za",
        },
        {
          id: "2",
          insurerEmail: "queries@absa.co.za",
        },
        {
          id: "3",
          insurerEmail: "queries@bryte.co.za",
        },
      ],
    };
  },
  // mounted() {
  //   return this.$store.dispatch("getInsurers");
  // },
  // computed: {
  //   filteredInsurers() {
  //     return this.$store.state.insurers?.filter((insurer) => {
  //       let isMatch = true;
  //       if (
  //         !insurer.insurerEmail
  //           ?.toLowerCase()
  //           .includes(this.search.toLowerCase())
  //       )
  //         isMatch = false;
  //       return isMatch;
  //     });
  //   },
  // },
  methods: {
    selectInsurer(insurer) {
      this.selectedInsurer = insurer;
      this.isVisible = false;
      console.log(this.selectedInsurer.insurerEmail);
    },
  },
};
</script>

<style scoped>
.dropdown-wrapper {
  max-width: 350px;
  position: relative;
  margin: 0 auto;
}

.selected-client {
  height: 40px;
  border: 2px solid lightgray;
  border-radius: 5px;
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: 400;
}

.dropdown-icon {
  transform: rotate(0deg);
  transition: all 0.5s ease;
}

.dropdown-icon.dropdown {
  transition: all 0.3s ease;
  transform: rotate(180deg);
}

.dropdown-popover {
  position: absolute;
  border: 2px solid lightgray;
  top: 46px;
  left: 0;
  right: 0;
  background-color: #fff;
  max-width: 100%;
  padding: 20px;
  visibility: hidden;
  transition: all 0.4s linear;
  max-height: 0px;
  overflow: hidden;
}

.dropdown-popover.visible {
  max-height: 450px;
  visibility: visible;
  transition: all 0.4s linear;
}

input {
  width: 90%;
  height: 30px;
  border: 2px solid lightgray;
  font-size: 16px;
  padding-left: 8px;
}

.options {
  width: 100%;
}

ul {
  list-style: none;
  text-align: left;
  padding-left: 8px;
  max-height: 150px;
  overflow-y: scroll;
  overflow-x: hidden;
}

li {
  width: 100%;
  border-bottom: 2px solid lightgray;
  padding: 10px;
  background-color: hsl(0, 0%, 95%);
  cursor: pointer;
  font-size: 16px;
}

li:hover {
  background: #70878a;
  color: #fff;
  font-weight: bold;
}

.dropzone {
  border: 1px dashed #e9ecef;
}

.dropzone {
  padding: 5% 0;
  margin: 0px;
}
</style>
