import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

const vuetify = new Vuetify({
    theme: {
      themes: {
        light: {
            primary: '#7ed321',
            secondary: '#f9fbfc',
            accent: '#82B1FF',
            error: '#FF5252',
            info: '#4b5f6a',
            success: '#7ed321',
            warning: '#e65411',
            danger: '#d9534f ',
        },
      },
    },
  })

  export default vuetify;