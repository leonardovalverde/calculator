import { mount } from "@vue/test-utils";
import ColoredDivider from "@/components/ColoredDivider.vue";

describe("ColoredDivider.vue", () => {
  it("renders the component", () => {
    const wrapper = mount(ColoredDivider);
    expect(wrapper.find(".divider").exists()).toBe(true);
  });

  it("sets the background color from the color prop", () => {
    const color = "rgb(18, 52, 86)";
    const wrapper = mount(ColoredDivider, {
      propsData: { color },
    });
    expect(
      (wrapper.find(".divider").element as HTMLElement).style.backgroundColor
    ).toBe(color);
  });

  it("sets the background color to the default value when color prop is not provided", () => {
    const defaultColor = "rgb(0, 0, 0)";
    const wrapper = mount(ColoredDivider);
    expect(
      (wrapper.find(".divider").element as HTMLElement).style.backgroundColor
    ).toBe(defaultColor);
  });
});
