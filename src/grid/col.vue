<script lang="ts">
import { computed } from '@vue/reactivity';
import { h, inject, useSlots } from 'vue';
import { useWindowSize } from '@vueuse/core';

export default {
  name: 'ElCol',
  props: {
    span: {
      type: Number,
      default: 24,
    },
    offset: {
      type: Number,
      default: 0,
    },
    push: {
      type: Number,
      default: 0,
    },
    pull: {
      type: Number,
      default: 0,
    },
    xs: {
      type: [Number, Object, undefined],
      default: undefined,
    },
    sm: {
      type: [Number, Object, undefined],
      default: undefined,
    },
    md: {
      type: [Number, Object, undefined],
      default: undefined,
    },
    lg: {
      type: [Number, Object, undefined],
      default: undefined,
    },
    xl: {
      type: [Number, Object, undefined],
      default: undefined,
    },
    tag: {
      type: String,
      default: 'div',
    },
  },
  setup(props: any) {
    const gutter = (inject('gutter') ?? 0) as number;

    const gutterStyle = computed(() => {
      const gutterVal = `${gutter / 2}px`;

      if (gutter) {
        return {
          'padding-left': gutterVal,
          'padding-right': gutterVal,
        };
      }

      return {};
    });

    const mergeGridInfo = (target: any, source: any) => {
      if (typeof source === 'number') {
        // eslint-disable-next-line no-param-reassign
        target.span = source;
      } else if (typeof source === 'object') {
        Object.assign(target, source);
      }
    };

    const { width } = useWindowSize();

    const gridInfo = computed(() => {
      const info = {
        span: props.span,
        offset: props.offset,
        pull: props.pull,
        push: props.push,
      };

      if (width.value < 768) {
        mergeGridInfo(info, props.xs);
      }

      if (width.value >= 768) {
        mergeGridInfo(info, props.sm);
      }

      if (width.value >= 992) {
        mergeGridInfo(info, props.md);
      }

      if (width.value >= 1200) {
        mergeGridInfo(info, props.lg);
      }

      if (width.value >= 1920 && props.xl) {
        mergeGridInfo(info, props.xl);
      }

      return info;
    });

    const offsetStyle = computed(() => {
      const offset = gridInfo.value.offset + gridInfo.value.push - gridInfo.value.pull;

      if (offset) {
        return {
          'margin-left': `${(offset / 24) * 100}%`,
        };
      }

      return {};
    });

    const slots = useSlots();

    return () => h(
      props.tag,
      {
        class: ['el-col', `el-col-${gridInfo.value.span}`],
        style: {
          ...gutterStyle.value,
          ...offsetStyle.value,
        },
      },
      [slots.default()],
    );
  },
};
</script>

<style lang="scss">
@for $i from 1 through 24 {
  .el-col-#{$i} {
    width: calc($i / 24) * 100%;
  }
}
</style>
