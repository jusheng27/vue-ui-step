<template>
  <div
    :class="[
      'el-space',
      `el-space--${direction}`,
      (wrap && direction === 'horizontal') && 'el-space--wrap'
    ]"
    :style="{
      alignItems: alignment,
      marginBottom: '-' + gapStyle.paddingBottom
    }"
  >
    <template
      v-for="(vNode, $index) in children"
      :key="vNode"
    >
      <span
        v-if="spacer && $index !== 0"
        class="el-space__spacer"
        :style="{
          ...gapStyle,
          paddingBottom: 0
        }"
      >
        <template v-if="typeof spacer === 'string' || typeof spacer === 'number'">
          {{ spacer }}
        </template>

        <component
          :is="spacer"
          v-else
        />
      </span>

      <div
        class="el-space__item"
        :style="{
          ...gapStyle,
          ...fillStyle
        }"
      >
        <component :is="vNode" />
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import {
  computed, CSSProperties, PropType, useSlots,
} from 'vue';

defineOptions({
  name: 'ElSpace',
});

const props = defineProps({
  alignment: {
    type: String,
    default: 'center',
  },
  direction: {
    type: String as PropType<'vertical' | 'horizontal'>,
    default: 'horizontal',
  },
  size: {
    type: [String, Number, Array],
    default: 'default',
  },
  wrap: {
    type: Boolean,
    default: false,
  },
  spacer: {
    type: [String, Number, Object],
    default: '',
  },
  fill: {
    type: Boolean,
    default: false,
  },
  fillRatio: {
    type: Number,
    default: 100,
  },
});

const slots = useSlots();
const children = slots?.default()?.reduce((result, cur) => {
  if (Array.isArray(cur.children)) {
    result.push(...cur.children);
  } else {
    result.push(cur.children);
  }

  return result;
}, []);

const gapStyle = computed(() => {
  const { size } = props;
  let gap = [0, 0];

  if (size === 'small') gap = [8, 8];

  if (size === 'default') gap = [12, 12];

  if (size === 'large') gap = [16, 16];

  if (typeof size === 'number') gap = [size, size];

  if (Array.isArray(size)) gap = [size[0], size[1]];

  if (props.direction === 'vertical') {
    gap[0] = 0;
  }

  return {
    marginRight: `${gap[0]}px`,
    paddingBottom: `${gap[1]}px`,
  };
});

const fillStyle = computed(() => {
  const style: CSSProperties = {};

  if (props.fill) {
    style.flexGrow = 1;
    style.minWidth = `${props.fillRatio}%`;
  }

  return style;
});
</script>

<style lang="scss">
.el-space {
  display: inline-flex;

  &--vertical {
    flex-direction: column;
  }

  &--horizontal {
    flex-direction: row;
  }

  &--wrap {
    flex-wrap: wrap;
  }

  &__item {
    display: flex;

    > * {
      flex: 1;
    }
  }
}

</style>
