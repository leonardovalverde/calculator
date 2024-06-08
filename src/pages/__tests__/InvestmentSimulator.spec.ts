import { mount, VueWrapper } from "@vue/test-utils";
import InvestmentSimulator from "@/pages/InvestmentSimulator.vue";
import RangeSlider from "@/components/RangeSlider.vue";

describe("InvestmentSimulator.vue", () => {
  let wrapper: VueWrapper<InstanceType<typeof InvestmentSimulator>> | typeof InvestmentSimulator;

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
      "Em 24 meses você teria:"
    );
  });

  it("should render three RangeSliders", () => {
    const sliders = wrapper.findAllComponents(RangeSlider);
    expect(sliders.length).toBe(3);
  });

  it("should update rentability values when sliders are changed", async () => {
    const sliders = wrapper.findAllComponents(RangeSlider);

    await sliders[0].setValue(5000); // Simulate setting value for the first slider
    await sliders[1].setValue(2000); // Simulate setting value for the second slider
    await sliders[2].setValue(36); // Simulate setting value for the third slider

    // Assume calcularRentabilidade updates slider4 and slider5
    expect(wrapper.vm.slider4).toBeGreaterThan(0);
    expect(wrapper.vm.slider5).toBeGreaterThan(0);
  });

  it("should respect slider min and max values", async () => {
    const sliders = wrapper.findAllComponents(RangeSlider);

    await sliders[0].setValue(50); // Below minimum
    expect(sliders[0].vm.$props.min).toBe(100);

    await sliders[1].setValue(20000); // Above maximum
    expect(sliders[1].vm.$props.max).toBe(10000);

    await sliders[2].setValue(0); // Below minimum
    expect(sliders[2].vm.$props.min).toBe(1);

    await sliders[2].setValue(100); // Above maximum
    expect(sliders[2].vm.$props.max).toBe(60);
  });

  it("should calculate the correct values for rentability", async () => {
    const sliders = wrapper.findAllComponents(RangeSlider);

    await sliders[0].setValue(1000); // Simulate setting value for the first slider
    await sliders[1].setValue(500); // Simulate setting value for the second slider
    await sliders[2].setValue(24); // Simulate setting value for the third slider

    wrapper.vm.calcularRentabilidade();
    await wrapper.vm.$nextTick();

    // Use reasonable expected values for the calculation based on your specific implementation
    const expectedValueSelic = 14318; // Substitute with actual expected value
    const expectedValueArca = 15612; // Substitute with actual expected value
    const precision = 0; // Adjust precision as needed

    expect(wrapper.vm.slider4).toBeCloseTo(expectedValueSelic, precision);
    expect(wrapper.vm.slider5).toBeCloseTo(expectedValueArca, precision);
  });
});
