import { mount } from '@vue/test-utils';
import RangeSlider from '@/components/RangeSlider.vue';

describe('RangeSlider.vue', () => {
  it('renders the component', () => {
    const wrapper = mount(RangeSlider, {
      propsData: {
        label: 'Test Label',
        modelValue: 50,
      },
    });
    expect(wrapper.find('.slider-container').exists()).toBe(true);
  });

  it('updates the slider value when modelValue prop is changed', async () => {
    const wrapper = mount(RangeSlider, {
      propsData: {
        label: 'Test Label',
        modelValue: 50,
      },
    });
    await wrapper.setProps({ modelValue: 60 });
    expect(wrapper.vm.sliderValue).toBe(60);
  });

  it('emits update:modelValue event when slider value is changed', async () => {
    const wrapper = mount(RangeSlider, {
      propsData: {
        label: 'Test Label',
        modelValue: 50,
      },
    });
    await wrapper.setData({ sliderValue: 70 });
    const emitted = wrapper.emitted('update:modelValue');
    expect(emitted).toBeTruthy();
    if (emitted) {
      expect(emitted[0]).toEqual([70]);
    }
  });
});