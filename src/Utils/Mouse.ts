export const getMouseCoordinates = (
  event: MouseEvent,
  canvas: SVGSVGElement | null
) => {
  if (!canvas) return { x: 0, y: 0 };
  const rect = canvas.getBoundingClientRect();
  const canvasWidth = canvas.width.baseVal.value;
  const canvasHeight = canvas.height.baseVal.value;

  const elementRelativeX = event.clientX - rect.left;
  const elementRelativeY = event.clientY - rect.top;

  const canvasRelativeX = (elementRelativeX * canvasWidth) / rect.width;
  const canvasRelativeY = (elementRelativeY * canvasHeight) / rect.height;
  return { x: canvasRelativeX, y: canvasRelativeY };
};
