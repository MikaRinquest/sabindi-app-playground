<template>
  <div>
    <div id="content">
      <damagereport />
      <insurancedetails />
      <damagetype />
      <facilitydamage />
      <inspection />
      <leakdetection />
      <recommendation />
      <locationstatus />
      <evidence />
    </div>
    <span>
      <input type="text" id="fileName" v-model="fileName" />
      <label for="fileName">Give the file a name</label>
    </span>
    <span>
      <input type="file" id="pdf" ref="pdfFile" @change="previewFile" />
      <label for="pdf">Insert pdf here</label>
    </span>
    <button @click="downloadPDF">Download PDF</button>
  </div>
</template>

<script>
import jspdf from "jspdf";
import html2canvas from "html2canvas";
import damagetype from "./Damage Assessment Report/Damage-Type.vue";
import damagereport from "./Damage Assessment Report/DAR.vue";
import evidence from "./Damage Assessment Report/Evidence.vue";
import facilitydamage from "./Damage Assessment Report/Facility-Damage.vue";
import inspection from "./Damage Assessment Report/Inspection.vue";
import insurancedetails from "./Damage Assessment Report/Insurance-Details.vue";
import leakdetection from "./Damage Assessment Report/Leak-Detection.vue";
import locationstatus from "./Damage Assessment Report/Location-Status";
import recommendation from "./Damage Assessment Report/Recommendation.vue";
export default {
  name: "htmltopdf",
  components: {
    damagetype,
    damagereport,
    evidence,
    facilitydamage,
    inspection,
    insurancedetails,
    leakdetection,
    locationstatus,
    recommendation,
  },
  data() {
    return {
      fileName: "",
      file: [],
    };
  },
  methods: {
    downloadPDF() {
      const canvas = document.getElementById("content"); //Turns the content inside of the div into an object
      const name = this.fileName; //Turning the file name we parsing into a variable, otherwise it will be considered undefined
      html2canvas(canvas).then(function (canvas) {
        const pdfData = canvas.toDataURL("image/png");
        const doc = new jspdf({
          oreintation: "portrait",
        });
        const imgProps = doc.getImageProperties(pdfData);
        const pdfWidth = doc.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

        doc.addImage(pdfData, "PNG", 0, 0, pdfWidth, pdfHeight);
        doc.save(name);
        //doc.save(this.fileName) This will be considered undefined
      });
    },
    previewFile() {
      this.file = this.$ref.pdfFile.files;
      console.log(this.file);
    },
  },
};
</script>

<style scoped>
#content {
  height: 100%;
  width: 100%;
}
</style>
