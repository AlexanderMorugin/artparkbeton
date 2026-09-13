const isScreenMobile = ref(null);
const windowWidth = ref(null);

export function useResizeMobile() {
  onMounted(() => {
    window.addEventListener("resize", resizeHandler);
    resizeHandler();
  });

  onUnmounted(() => {
    window.removeEventListener("resize", resizeHandler);
  });

  const resizeHandler = () => {
    windowWidth.value = window.innerWidth;

    if (windowWidth.value <= 576) {
      isScreenMobile.value = true;
      return;
    }

    isScreenMobile.value = false;
  };

  return {
    isScreenMobile,
  };
}
