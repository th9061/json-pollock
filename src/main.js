import Vue from 'vue';
import Vuex from 'vuex';
import App from './App';

Vue.config.productionTip = false;
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    json: {
      type: 'vertical',
      elements: [
        {
          type: 'image',
          url: 'https://cdn.bgr.com/2016/08/iphone-8-concept.jpg?quality=98&strip=all',
          tooltip: 'image tooltip',
          click: {
            actions: [
              {
                type: 'navigate',
                name: 'Navigate to store via image',
                lo: 23423423,
                la: 2423423423,
              },
            ],
          },
        },
        {
          type: 'carousel',
          padding: 0,
          elements: [
            {
              type: 'vertical',
              elements: [
                {
                  type: 'text',
                  text: 'SIM only plan',
                  tooltip: 'SIM only plan',
                  rtl: false,
                  style: {
                    bold: false,
                    italic: false,
                    color: '#000000',
                    size: 'large',
                  },
                },
                {
                  type: 'text',
                  text: 'Twelve month plan BYO mobile',
                  tooltip: 'Twelve month plan BYO mobile',
                  rtl: false,
                  style: {
                    bold: true,
                    italic: false,
                    color: '#000000',
                  },
                },
                {
                  type: 'button',
                  tooltip: 'Choose a plan',
                  title: 'Choose a plan',
                  click: {
                    metadata: [
                      {
                        type: 'ExternalId',
                        id: 'ANOTHER_ONE_1',
                      },
                    ],
                    actions: [
                      {
                        type: 'publishText',
                        text: 'SIM only plan',
                      },
                    ],
                  },
                },
              ],
            },
            {
              type: 'vertical',
              elements: [
                {
                  type: 'text',
                  text: 'Swap plan',
                  tooltip: 'Swap plan',
                  rtl: false,
                  style: {
                    bold: false,
                    italic: false,
                    color: '#000000',
                    size: 'large',
                  },
                },
                {
                  type: 'text',
                  text: 'Two year plan leasing a mobile',
                  tooltip: 'Two year plan leasing a mobile',
                  rtl: false,
                  style: {
                    bold: true,
                    italic: false,
                    color: '#000000',
                  },
                },
                {
                  type: 'button',
                  tooltip: 'Choose a plan',
                  title: 'Choose a plan',
                  click: {
                    metadata: [
                      {
                        type: 'ExternalId',
                        id: 'ANOTHER_ONE_2',
                      },
                    ],
                    actions: [
                      {
                        type: 'publishText',
                        text: 'Two year plan leasing a mobile',
                      },
                    ],
                  },
                },
              ],
            },
            {
              type: 'vertical',
              elements: [
                {
                  type: 'text',
                  text: 'Mobiles on a plan',
                  tooltip: 'Mobiles on a plan',
                  rtl: false,
                  style: {
                    bold: false,
                    italic: false,
                    color: '#000000',
                    size: 'large',
                  },
                },
                {
                  type: 'text',
                  text: 'Two year plan with a mobile',
                  tooltip: 'Two year plan with a mobile',
                  rtl: false,
                  style: {
                    bold: true,
                    italic: false,
                    color: '#000000',
                  },
                },
                {
                  type: 'button',
                  tooltip: 'Choose a plan',
                  title: 'Choose a plan',
                  click: {
                    metadata: [
                      {
                        type: 'ExternalId',
                        id: 'ANOTHER_ONE_3',
                      },
                    ],
                    actions: [
                      {
                        type: 'publishText',
                        text: 'Mobiles on a plan',
                      },
                    ],
                  },
                },
              ],
            },
          ],
        },
        {
          type: 'text',
          text: 'product name (Title)',
          tooltip: 'text tooltip',
          style: {
            bold: true,
            size: 'large',
          },
        },
        {
          type: 'text',
          text: 'product name (Title)',
          tooltip: 'text tooltip',
        },
        {
          type: 'button',
          tooltip: 'button tooltip',
          title: 'Add to cart',
          click: {
            actions: [
              {
                type: 'link',
                name: 'Add to cart',
                uri: 'https://example.com',
              },
            ],
          },
        },
        {
          type: 'horizontal',
          elements: [
            {
              type: 'button',
              title: 'Buy',
              tooltip: 'Buy this broduct',
              click: {
                actions: [{
                  type: 'link',
                  name: 'Buy',
                  uri: 'https://example.com',
                }],
              },
            },
            {
              type: 'button',
              title: 'Find similar',
              tooltip: 'store is the thing',
              click: {
                actions: [{
                  type: 'link',
                  name: 'Buy',
                  uri: 'https://search.com',
                }],
              },
            },
          ],
        },
        {
          type: 'button',
          tooltip: 'button tooltip',
          title: 'Publish text',
          click: {
            actions: [
              {
                type: 'publishText',
                text: 'my text',
              },
            ],
          },
        },
        {
          type: 'map',
          lo: 64.128597,
          la: -21.896110,
          tooltip: 'map tooltip',
        },
        {
          type: 'button',
          tooltip: 'button tooltip',
          title: 'Navigate',
          click: {
            actions: [
              {
                type: 'publishText',
                text: 'my text',
              },
              {
                type: 'navigate',
                name: 'Navigate to store via image',
                lo: 23423423,
                la: 2423423423,
              },
            ],
          },
        },
      ],
    },
  },
  mutations: {
    setJson(state, json) {
      state.json = json;
    },
  },
  getters: {
    json: state => state.json,
  },
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App },
});
