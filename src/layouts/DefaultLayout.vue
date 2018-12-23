<template>
  <div id="app">
    <v-app id="inspire">
      <v-navigation-drawer
        fixed
        :clipped="$vuetify.breakpoint.mdAndUp"
        app
        v-model="drawer"
      >
        <v-list dense class="sidebarNavigation">
          <template v-for="item in items">
            <v-list-tile @click="" :key="item.text" :class="item.cssClass ? item.cssClass : ''">
              <v-list-tile-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ item.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-navigation-drawer>
      <v-toolbar
        color="blue darken-3"
        dark
        app
        :clipped-left="$vuetify.breakpoint.mdAndUp"
        fixed
      >
        <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
          <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
          <span class="hidden-sm-and-down">KPI Portal</span>
        </v-toolbar-title>
        <v-text-field
          flat
          solo-inverted
          prepend-inner-icon="search"
          label="Procurar"
          class="hidden-sm-and-down"
        ></v-text-field>
        <v-spacer></v-spacer>
        <v-menu offset-y>
          <v-btn
            slot="activator"
            dark
            icon
          >
            <v-icon>apps</v-icon>
          </v-btn>
          <v-container grid-list-lg text-xs-center class="white">
            <v-layout row wrap>
              <v-flex
                v-for="(link, i) in links"
                :key="i"
                xs4
                @click=""
              >
                <v-icon>{{ link.icon }}</v-icon>
                <div>{{ link.text }}</div>
              </v-flex>
            </v-layout>
          </v-container>
        </v-menu>
        <v-btn icon>
          <v-icon>notifications</v-icon>
        </v-btn>
      </v-toolbar>
      <v-content>
        <v-container fluid fill-height>
          <v-layout justify-center align-center>
            <slot />
          </v-layout>
        </v-container>
      </v-content>
      <v-btn
        fab
        bottom
        right
        color="pink"
        dark
        fixed
        @click.stop="dialog = !dialog"
      >
        <v-icon>add</v-icon>
      </v-btn>
      <v-dialog v-model="dialog" width="800px">
        <v-card>
          <v-card-title
            class="grey lighten-4 py-4 title"
          >
            Create contact
          </v-card-title>
          <v-container grid-list-sm class="pa-4">
            <v-layout row wrap>
              <v-flex xs12 align-center justify-space-between>
                <v-layout align-center>
                  <v-avatar size="40px" class="mr-3">
                    <img
                      src="//ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png"
                      alt=""
                    >
                  </v-avatar>
                  <v-text-field
                    placeholder="Name"
                  ></v-text-field>
                </v-layout>
              </v-flex>
              <v-flex xs6>
                <v-text-field
                  prepend-icon="business"
                  placeholder="Company"
                ></v-text-field>
              </v-flex>
              <v-flex xs6>
                <v-text-field
                  placeholder="Job title"
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  prepend-icon="mail"
                  placeholder="Email"
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  type="tel"
                  prepend-icon="phone"
                  placeholder="(000) 000 - 0000"
                  mask="phone"
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  prepend-icon="notes"
                  placeholder="Notes"
                ></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
          <v-card-actions>
            <v-btn flat color="primary">More</v-btn>
            <v-spacer></v-spacer>
            <v-btn flat color="primary" @click="dialog = false">Cancel</v-btn>
            <v-btn flat @click="dialog = false">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-app>
  </div>
</template>

<script>
export default{
  data: () => ({
    dialog: false,
    drawer: null,
    items: [
      { icon: 'business', text: 'Quadro Principal' },
      {
        icon: 'keyboard_arrow_up',
        'icon-alt': 'keyboard_arrow_down',
        text: 'Indicadores',
        model: false,
        children: [
          { text: 'Qualidade e produtividade' },
          { text: 'Capacidade e eficacia (Real Time)' },
          { text: 'Gestão de tempo' },
          { text: 'Eficiência (Técnicos)' },
          { text: 'Clientes' },
          { text: 'Atendimentos' },
        ]
      },
      { icon: 'dashboard', text: 'Dashboard' },
      { icon: 'settings', text: 'Configuraçẽos' },
      { icon: 'contact_support', text: 'Sobre', cssClass: 'about' },
    ],
    links: [
      { text: 'App.', icon: 'shop' },
      { text: 'Base de conhecimento', icon: 'info' },
      { text: 'Mantis', icon: 'bug_report' },
      { text: 'Updates', icon: 'new_releases' },
      { text: 'Webmail', icon: 'mail' },
      { text: 'FOP', icon: 'phone' },
    ],
  }),
  props: {
    source: String,
  },
};
</script>

<style lang="scss">
.about{
  margin-top: auto;
}

.sidebarNavigation{
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
