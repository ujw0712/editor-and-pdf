import { createStore } from 'vuex'

import editor from '@/store/modules/editor'

export const store = createStore({
  modules: {
    editor,
  },
});