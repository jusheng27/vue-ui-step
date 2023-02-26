<script lang="ts">
import { computed } from '@vue/reactivity';
import {
  PropType, provide, h, useSlots,
} from 'vue';

export default {
  name: 'ElRow',
  props: {
    gutter: {
      type: Number,
      default: 0,
    },
    justify: {
      type: String as PropType<'start' | 'end' | 'center' | 'space-around' | 'space-between' | 'space-evenly'>,
      default: 'start',
    },
    align: {
      type: String as PropType<'start' | 'center' | 'end'>,
      default: 'start',
    },
    tag: {
      type: String,
      default: 'div',
    },
  },
  setup(props: any) {
    provide('gutter', props.gutter);

    const style = computed(() => {
      const obj = {
        'justify-content': props.justify,
        'align-items': props.align,
      };

      if (props.gutter) {
        const gutterVal = `${-1 * (props.gutter / 2)}px`;

        return {
          ...obj,
          'margin-left': gutterVal,
          'margin-right': gutterVal,
        };
      }

      return obj;
    });

    const slots = useSlots();

    return () => h(
      props.tag,
      {
        class: ['el-row'],
        style: style.value,
      },
      [slots.default()],
    );
  },
};
</script>

<style lang="scss">
.el-row {
  display: flex;
  flex-direction: row;
}
</style>
