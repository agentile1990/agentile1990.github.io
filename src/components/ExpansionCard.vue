<template>
  <div class="mt-3 mb-3">
    <v-card>
      <slot name="title"></slot>
      <slot name="subtitle"></slot>
      <slot name="text"></slot>
      <transition
        name="expand"
        @enter="enter"
        @after-enter="afterEnter"
        @leave="leave"
      >
        <div v-if="open" class="expand-text">
          <slot name="expand-text"></slot>
        </div>
      </transition>
      <div class="text-center pb-2">
        <v-icon large @click.stop="open = !open" :class="{ 'open-icon': open }">
          mdi-chevron-down
        </v-icon>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "ExpansionCard",
  data: () => ({
    open: false
  }),
  methods: {
    enter(element) {
      const { width } = getComputedStyle(element);

      element.style.width = width;
      element.style.position = "absolute";
      element.style.visibility = "hidden";
      element.style.height = "auto";

      const { height } = getComputedStyle(element);
      element.style.width = null;
      element.style.position = null;
      element.style.visibility = null;
      element.style.height = 0;

      getComputedStyle(element).height;

      requestAnimationFrame(() => {
        // Hack: add 16px padding to calculated height
        element.style.height = `${parseFloat(height.slice(0, -2)) + 16}px`;
      });
    },

    afterEnter(element) {
      element.style.height = "auto";

      // Hack: add 16px padding to div
      element.style.paddingBottom = "16px";
    },

    leave(element) {
      const { height } = getComputedStyle(element);

      element.style.height = height;

      getComputedStyle(element).height;

      requestAnimationFrame(() => {
        element.style.height = 0;

        // Hack: remove 16px padding from div
        element.style.paddingBottom = 0;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.open-icon {
  transform: rotate(180deg);
}

.expand-enter-active,
.expand-leave-active {
  transition: height 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
  overflow: hidden;
}

.expand-enter,
.expand-leave-to {
  height: 0;
}

* {
  will-change: height;
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000px;
}

.expand-text {
  font-size: 0.875rem;
  color: rgba(0, 0, 0, 0.6);
  padding: 0px 16px;
}
</style>
