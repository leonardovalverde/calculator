import { mount } from '@vue/test-utils';
import HeroSection from '@/components/HeroSection.vue';

describe('HeroSection.vue', () => {
  it('renders the component', () => {
    const wrapper = mount(HeroSection, {
      propsData: {
        bgColor: 'rgb(0, 0, 0)',
        textColor: 'rgb(255, 255, 255)',
        title: 'Test Title',
        subtitle: 'Test Subtitle',
      },
    });
    expect(wrapper.find('.hero-section').exists()).toBe(true);
  });

  it('sets the background and text color from the bgColor and textColor props', () => {
    const bgColor = 'rgb(18, 52, 86)';
    const textColor = 'rgb(171, 205, 239)';
    const wrapper = mount(HeroSection, {
      propsData: { bgColor, textColor, title: 'Test Title', subtitle: 'Test Subtitle' },
    });
    const sectionStyles = (wrapper.find('.hero-section').element as HTMLElement).style;
    expect(sectionStyles.backgroundColor).toBe(bgColor);
    expect(sectionStyles.color).toBe(textColor);
  });

  it('renders the title and subtitle from the title and subtitle props', () => {
    const title = 'Test Title';
    const subtitle = 'Test Subtitle';
    const wrapper = mount(HeroSection, {
      propsData: { bgColor: 'rgb(0, 0, 0)', textColor: 'rgb(255, 255, 255)', title, subtitle },
    });
    expect(wrapper.find('h2').text()).toBe(title);
    expect(wrapper.find('p').text()).toBe(subtitle);
  });
});