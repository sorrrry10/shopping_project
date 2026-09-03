import { shallowRef } from "vue";
import { useIntersectionObserver } from "@vueuse/core";
export const ImgLazyPlugin = {
  //@ts-expect-error///
  install(app) {
    const targetIsVisible = shallowRef(false);
    app.directive("img-lazy", {
      //@ts-expect-error///
      mounted(el, bind) {
        const { stop } = useIntersectionObserver(el, ([entry]) => {
          targetIsVisible.value = entry?.isIntersecting || false;
          if (targetIsVisible.value) {
            el.src = bind.value;
            stop();
          }
        });
      },
    });
  },
};
