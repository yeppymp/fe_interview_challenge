<template>
  <b-sidebar
    position="static"
    :mobile="mobile"
    :expand-on-hover="expandOnHover"
    :reduce="reduce"
    :delay="expandWithDelay ? 500 : null"
    open
  >
    <div
      class="
        columns
        is-flex-direction-column is-justify-content-space-between
        m-0
        py-5
      "
    >
      <div class="block p-0">
        <div class="brand is has-background-primary">
          <nuxt-link to="/" class="has-text-white">
            <b-icon icon="file-document-outline" size="is-large"> </b-icon>
          </nuxt-link>
        </div>
      </div>
      <div class="is-flex is-flex-direction-column">
        <b-menu class="is-custom-mobile">
          <b-tooltip :label="$store.state.is_dark_mode ? 'Light Mode' : 'Dark Mode'" position="is-right">
            <b-menu-list>
              <b-menu-item @click.prevent="changeMode" :icon="$store.state.is_dark_mode ? 'white-balance-sunny' : 'brightness-2'" label="Mode"></b-menu-item>
            </b-menu-list>
          </b-tooltip>
        </b-menu>

        <hr />

        <div class="is-flex is-justify-content-center">
          <figure class="image profile is-32x32">
            <nuxt-link to="/">
              <img class="is-rounded" src="~assets/user.png" alt="Buefy" />
            </nuxt-link>
          </figure>
        </div>
      </div>
    </div>
  </b-sidebar>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  data() {
    return {
      expandOnHover: false,
      expandWithDelay: false,
      mobile: "reduce",
      reduce: true,
    };
  },
  methods: {
    ...mapMutations({
      changeMode: 'change_mode'
    })
  }
};
</script>

<style lang="scss">
.p-1 {
  padding: 1em;
}
.sidebar-page {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
  min-height: 100vh;
  .sidebar-layout {
    display: flex;
    flex-direction: row;
    min-height: 100%;
    min-height: 100vh;
    width: 100%;
  }
}
@media screen and (max-width: 1023px) {
  .b-sidebar {
    .sidebar-content {
      &.is-mini-mobile {
        &:not(.is-mini-expand),
        &.is-mini-expand:not(:hover):not(.is-mini-delayed) {
          .menu-list {
            li {
              a {
                span:nth-child(2) {
                  display: none;
                }
              }
              ul {
                padding-left: 0;
                li {
                  a {
                    display: inline-block;
                  }
                }
              }
            }
          }
          .menu-label:not(:last-child) {
            margin-bottom: 0;
          }
        }
      }
    }
  }
}
@media screen and (min-width: 1024px) {
  .b-sidebar {
    .sidebar-content {
      &.is-mini {
        &:not(.is-mini-expand),
        &.is-mini-expand:not(:hover):not(.is-mini-delayed) {
          .menu-list {
            li {
              a {
                span:nth-child(2) {
                  display: none;
                }
              }
              ul {
                padding-left: 0;
                li {
                  a {
                    display: inline-block;
                  }
                }
              }
            }
          }
          .menu-label:not(:last-child) {
            margin-bottom: 0;
          }
        }
      }
    }
  }
}
.is-mini-expand {
  .menu-list a {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>