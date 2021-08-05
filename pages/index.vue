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
        <h1 class="title mb-2">Invoices</h1>
        <p
          :class="{
            'has-text-grey': !$store.state.is_dark_mode,
            'has-text-white-ter': $store.state.is_dark_mode,
          }"
        >
          There are total {{ invoices.length }} invoices
        </p>
      </div>
      <div class="column is-narrow">
        <b-select
          placeholder="Filter by status"
          class="is-inline-block no-bg mr-2"
          v-model="status"
        >
          <option value="" disabled>Filter by status</option>
          <option value="all">All Status</option>
          <option value="paid">Paid</option>
          <option value="pending">Pending</option>
          <option value="draft">Draft</option>
        </b-select>
        <b-button tag="router-link" to="/invoice/new" class="btn-custom" type="is-primary" icon-left="plus">
          &nbsp; New Invoice
        </b-button>
      </div>
    </div>

    <div class="invoices">
      <template v-for="(invoice, i) in invoices">
        <nuxt-link :to="`/invoice/${invoice.transaction_id}`" :key="i">
          <div class="card mt-4">
            <div class="card-content">
              <div class="content">
                <ul
                  class="
                    columns
                    is-align-items-center is-justify-content-space-around
                    m-0
                  "
                >
                  <li class="is-flex-grow-1">
                    <strong>
                      <span class="has-text-grey">#</span
                      >{{ invoice.transaction_id }}</strong
                    >
                  </li>
                  <li class="is-flex-grow-1">
                    Due {{ invoice.transaction_date }}
                  </li>
                  <li class="is-flex-grow-1">{{ invoice.name }}</li>
                  <li class="is-flex-grow-1">
                    <strong>{{ currencyFormat(invoice.total_payment) }}</strong>
                  </li>
                  <li class="is-flex-grow-1">
                    <b-tag
                      class="trx-status has-text-weight-bold"
                      v-if="invoice.status == 'paid'"
                      type="is-success"
                      >● {{ capitalize(invoice.status) }}</b-tag
                    >
                    <b-tag
                      class="trx-status has-text-weight-bold"
                      v-else-if="invoice.status == 'pending'"
                      type="is-warning"
                      >● {{ capitalize(invoice.status) }}</b-tag
                    >
                    <b-tag
                      class="trx-status has-text-weight-bold"
                      v-else
                      type="is-light"
                      >● {{ capitalize(invoice.status) }}</b-tag
                    >
                  </li>
                  <li>
                    <b-icon icon="chevron-right"> </b-icon>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nuxt-link>
      </template>
    </div>
  </section>
</template>

<script>
var formatter = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
});

export default {
  name: "HomePage",
  data() {
    return {
      status: '',
      filtered_invoices: []
    };
  },
  computed: {
    invoices() {
      if (!this.status || this.status == 'all') {
        return this.$store.state.invoices;
      } else {
        return this.$store.state.invoices.filter(inv => !inv.status.indexOf(this.status));
      }
    },
  },
  methods: {
    capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
    currencyFormat(amount) {
      return formatter.format(amount);
    }
  },
  mounted() {
    console.log(this.invoices);
  }
};
</script>
