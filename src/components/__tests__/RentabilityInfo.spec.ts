import { mount } from '@vue/test-utils';
import RentabilityInfo from '@/components/RentabilityInfo.vue';

describe('RentabilityInfo.vue', () => {
  it('renders the component', () => {
    const wrapper = mount(RentabilityInfo, {
      propsData: {
        taxaSelic: '2.75%',
        rentabilidadeArca: '5.00%',
        dataAtualizacao: '01/01/2022',
      },
    });
    expect(wrapper.find('.info-box').exists()).toBe(true);
  });

  it('renders the taxaSelic, rentabilidadeArca, and dataAtualizacao props', () => {
    const taxaSelic = '2.75%';
    const rentabilidadeArca = '5.00%';
    const dataAtualizacao = '01/01/2022';
    const wrapper = mount(RentabilityInfo, {
      propsData: { taxaSelic, rentabilidadeArca, dataAtualizacao },
    });
    expect(wrapper.find('.rentability > strong').text()).toBe(taxaSelic);
    expect(wrapper.find('.rentability-container > div:nth-child(2) > strong').text()).toBe(rentabilidadeArca);
    expect(wrapper.find('.date-info-text + p').text()).toBe(`- Data da última atualização: ${dataAtualizacao}`);
  });
});