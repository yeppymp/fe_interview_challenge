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
        <nuxt-link to="/" class="is-flex is-align-items-center">
          <b-icon icon="chevron-left"></b-icon> Go back
        </nuxt-link>
      </div>
    </div>

    <div class="card mt-4">
      <div class="card-content">
        <div
          class="is-flex is-align-items-center is-justify-content-space-between"
        >
          <p>
            Status &nbsp;&nbsp;
            <b-tag
              class="trx-status has-text-weight-bold px-5 py-3"
              v-if="invoice.status == 'paid'"
              type="is-success"
              >● {{ capitalize(invoice.status) }}</b-tag
            >
            <b-tag
              class="trx-status has-text-weight-bold px-5 py-3"
              v-else-if="invoice.status == 'pending'"
              type="is-warning"
              >● {{ capitalize(invoice.status) }}</b-tag
            >
            <b-tag
              class="trx-status has-text-weight-bold px-5 py-3"
              v-else
              type="is-light"
              >● {{ capitalize(invoice.status) }}</b-tag
            >
          </p>
          <div>
            <b-button :to="`/invoice/edit/${invoice.transaction_id}`" tag="router-link" class="btn-custom" type="is-secondary"> Edit </b-button>
            <b-button class="btn-custom" type="is-danger" @click="confirmDelete"> Delete </b-button>
            <b-button
              v-if="invoice.status == 'pending'"
              class="btn-custom"
              type="is-primary"
            >
              Mark as Paid
            </b-button>
          </div>
        </div>
      </div>
    </div>

    <div class="card invoice-detail mt-4">
      <div class="card-content">
        <div class="content">
          <div
            class="
              is-flex is-align-items-center is-justify-content-space-between
              py-5
            "
          >
            <div>
              <h3 class="title mb-2">
                <strong>
                  <span class="has-text-grey">#</span
                  >{{ invoice.transaction_id }}</strong
                >
              </h3>
              <p>{{ invoice.title }}</p>
            </div>

            <p class="address">{{ invoice.address }}</p>
          </div>

          <div class="columns mt-6">
            <div class="column">
              <p class="has-text-grey"><small>Invoice Date</small></p>
              <p>
                <strong>{{ invoice.transaction_date }}</strong>
              </p>
              <br />
              <p class="has-text-grey"><small>Payment Due</small></p>
              <p>
                <strong>{{ invoice.payment_due }}</strong>
              </p>
            </div>
            <div class="column">
              <p class="has-text-grey"><small>Bill to</small></p>
              <p>
                <strong>{{ invoice.bill_to }}</strong>
              </p>
              <p class="address">{{ invoice.bill_address }}</p>
            </div>
            <div class="column">
              <p class="has-text-grey"><small>Sent To</small></p>
              <p>
                <strong>{{ invoice.bill_email }}</strong>
              </p>
            </div>
          </div>

          <div class="card invoice-item mt-6" :class="{ 'has-background-white-ter': !$store.state.is_dark_mode }">
            <div class="card-content">
              <table class="table">
                <thead>
                  <tr>
                    <td class="has-text-grey"><small>Item Name</small></td>
                    <td class="has-text-grey"><small>QTY.</small></td>
                    <td class="has-text-grey"><small>Price</small></td>
                    <td class="has-text-grey"><small>Total</small></td>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, i) in invoice.items" :key="i">
                    <th>{{ item.name }}</th>
                    <th>{{ item.qty }}</th>
                    <th>{{ currencyFormat(item.price) }}</th>
                    <th>{{ currencyFormat(item.total) }}</th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="card invoice-total">
            <div class="card-content">
                <div class="is-flex is-align-items-center is-justify-content-space-between">
                    <p class="m-0">Amount Due</p>
                    <h2 class="m-0">{{ currencyFormat(invoice.total_payment) }}</h2>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapMutations } from 'vuex';

var formatter = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
});

export default {
  data() {
    return {
    };
  },
  computed: {
    invoice() {
      return this.$store.state.invoices.find(
        (inv) => inv.transaction_id == this.$route.params.id
      );
    },
  },
  methods: {
    ...mapMutations({
      deleteInvoice: 'delete_invoice'
    }),
    capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
    currencyFormat(amount) {
      return formatter.format(amount);
    },
    confirmDelete() {
        this.$buefy.dialog.confirm({
            title: 'Deleting invoice',
            message: 'Are you sure you want to <b>delete</b> this invoice? This action cannot be undone.',
            confirmText: 'Delete Invoice',
            type: 'is-danger',
            hasIcon: true,
            onConfirm: () => {
                this.deleteInvoice(this.invoice);
                this.$buefy.toast.open('Invoice deleted!');
                this.$router.push("/");
            }
        })
    }
  },
};
</script>

<style>
</style>