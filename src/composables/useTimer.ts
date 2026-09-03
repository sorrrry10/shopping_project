import { computed, ref } from "vue";
import dayjs from "dayjs";

export function useTime() {
  const time = ref(0);
  const formaTime = computed(() => {
    return dayjs.unix(time.value).format("mm分ss秒");
  });
  function start(timeValue: number) {
    time.value = timeValue;
    setInterval(() => {
      time.value = time.value - 1;
    }, 1000);
  }
  return {
    start,
    formaTime,
  };
}
