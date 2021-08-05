<template>
  <section class="section is-small px-16rem">
    <div
      class="
        columns
        is-justify-content-space-between is-align-items-center
        mb-5
      "
    >
      <div class="column is-flex-direction-column">
        <h1 class="title mb-2">Edit Invoices</h1>
      </div>
    </div>

    <div class="card invoice-form mt-4 py-3">
      <div class="card-content">
        <div class="content">
          <b-field label="Invoice Title">
            <b-input v-model="invoice.title"></b-input>
          </b-field>

          <p class="has-text-primary mt-6">Bill From</p>

          <b-field label="Name">
            <b-input v-model="invoice.name"></b-input>
          </b-field>

          <b-field label="Address">
            <b-input
              v-model="invoice.address"
              maxlength="200"
              type="textarea"
            ></b-input>
          </b-field>

          <p class="has-text-primary mt-6">Bill To</p>

          <div class="columns">
            <div class="column">
              <b-field label="Client Name">
                <b-input v-model="invoice.bill_to"></b-input>
              </b-field>
            </div>
            <div class="column">
              <b-field label="Client Email">
                <b-input v-model="invoice.bill_email"></b-input>
              </b-field>
            </div>
          </div>

          <b-field label="Client Address">
            <b-input
              v-model="invoice.bill_address"
              maxlength="200"
              type="textarea"
            ></b-input>
          </b-field>

          <p class="has-text-primary mt-6">Invoice Details</p>

          <div class="columns">
           <div class="column">
              <b-field label="Invoice Date">
                <b-input v-model="invoice.transaction_date"></b-input>
              </b-field>
            </div>
            <div class="column">
              <b-field label="Invoice Due">
                <b-input v-model="invoice.payment_due"></b-input>
              </b-field>
            </div>
            <div class="column">
              <b-field label="Total Payment">
                <b-input type="number" v-model="invoice.total_payment"></b-input>
              </b-field>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="
        columns
        is-justify-content-space-between is-align-items-center
        my-5
      "
    >
      <div class="column is-flex is-justify-content-flex-end">
        <b-button @click="discard" class="btn-custom mr-2" type="is-secondary">
          Discard
        </b-button>
        <b-button @click="save('draft')" class="btn-custom mr-2" type="is-dark">
          Save as Draft
        </b-button>
        <b-button @click="save('pending')" class="btn-custom" type="is-primary">
          Save and Send
        </b-button>
      </div>
    </div>
  </section>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "EditInvoice",
  data() {
    return {
      invoice: {
        items: [],
      },
    };
  },
  mounted() {
    var res = this.$store.state.invoices.find(
      (inv) => inv.transaction_id == this.$route.params.id
    );

    this.invoice = {...res};
  },
  methods: {
    ...mapMutations({
      addInvoice: "add_invoice",
      deleteInvoice: 'delete_invoice'
    }),
    discard() {
      this.invoice = {
        items: [],
      };
      this.$router.push("/");
    },
    save(status) {
      this.invoice.transaction_id =
        "INV" + Math.floor(1000 + Math.random() * 9000);
      if (status == "draft") {
        this.invoice.status = "draft";
        this.deleteInvoice(this.invoice);
        this.addInvoice(this.invoice);
        this.$buefy.toast.open("Invoice edited!");
        this.$router.push("/");
      } else {
        this.invoice.status = "pending";
        this.deleteInvoice(this.invoice);
        this.addInvoice(this.invoice);
        this.$buefy.toast.open("Invoice edited!");
        this.$router.push("/");
      }

      console.log(this.invoice);
    },
  },
};
</script>
