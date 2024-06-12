import { mount, VueWrapper } from "@vue/test-utils";
import InvestmentSimulator from "@/pages/InvestmentSimulator.vue";
import RangeSlider from "@/components/RangeSlider.vue";

describe("InvestmentSimulator.vue", () => {
  let wrapper:
    | VueWrapper<InstanceType<typeof InvestmentSimulator>>
    | typeof InvestmentSimulator;

  beforeEach(() => {
    wrapper = mount(InvestmentSimulator, {
      stubs: {
        AppHeader: true,
        HeroSection: true,
        MoneyCard: true,
        ColoredDivider: true,
        RentabilityInfo: true,
      },
    });
  });

  it("should render correctly", () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.findComponent({ name: "AppHeader" }).exists()).toBe(true);
    expect(wrapper.findComponent({ name: "HeroSection" }).exists()).toBe(true);
    expect(wrapper.findComponent({ name: "RangeSlider" }).exists()).toBe(true);
    expect(wrapper.find(".grid-right-title").text()).toBe(
      "Em 12 meses você teria:"
    );
  });

  it("should render three RangeSliders", () => {
    const sliders = wrapper.findAllComponents(RangeSlider);
    expect(sliders.length).toBe(3);
  });

  it("should update rentability values when sliders are changed", async () => {
    const sliders = wrapper.findAllComponents(RangeSlider);

    await sliders[0].setValue(5000);
    await sliders[1].setValue(2000);
    await sliders[2].setValue(36);

    expect(wrapper.vm.selicResult).toBeGreaterThan(0);
    expect(wrapper.vm.arcaResult).toBeGreaterThan(0);
  });

  it("should respect slider min and max values", async () => {
    const sliders = wrapper.findAllComponents(RangeSlider);

    await sliders[0].setValue(50);
    expect(sliders[0].vm.$props.min).toBe(100);

    await sliders[1].setValue(20000);
    expect(sliders[1].vm.$props.max).toBe(10000);

    await sliders[2].setValue(0);
    expect(sliders[2].vm.$props.min).toBe(1);

    await sliders[2].setValue(100);
    expect(sliders[2].vm.$props.max).toBe(60);
  });

  it("should calculate the correct values for rentability", async () => {
    const sliders = wrapper.findAllComponents(RangeSlider);

    await sliders[0].setValue(1000);
    await sliders[1].setValue(500);
    await sliders[2].setValue(24);

    wrapper.vm.calculateProfitability();
    await wrapper.vm.$nextTick();

    const expectedValueSelic = 14272;
    const expectedValueArca = 15519;
    const precision = 0;
    expect(wrapper.vm.selicResult).toBeCloseTo(expectedValueSelic, precision);
    expect(wrapper.vm.arcaResult).toBeCloseTo(expectedValueArca, precision);
  });
});
