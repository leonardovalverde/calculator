import { mount } from '@vue/test-utils';
import MoneyCard from '@/components/MoneyCard.vue';

describe('MoneyCard.vue', () => {
  it('renders the component', () => {
    const wrapper = mount(MoneyCard, {
      propsData: {
        amount: 1000,
        title: 'Test Title',
      },
    });
    expect(wrapper.find('.money-card').exists()).toBe(true);
  });

  it('renders the image when imageUrl prop is provided', () => {
    const imageUrl = 'http://example.com/image.jpg';
    const wrapper = mount(MoneyCard, {
      propsData: { amount: 1000, title: 'Test Title', imageUrl },
    });
    const image = wrapper.find('.money-card-image');
    expect(image.exists()).toBe(true);
    expect(image.attributes('src')).toBe(imageUrl);
  });

  it('renders the title and amount from the title and amount props', () => {
    const amount = 1000;
    const title = 'Test Title';
    const wrapper = mount(MoneyCard, {
      propsData: { amount, title },
    });
    expect(wrapper.find('.money-card-title').text()).toBe(title);
    expect(wrapper.find('.money-card-amount').text()).toBe(amount.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }));
  });
});