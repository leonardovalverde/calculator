import { mount } from '@vue/test-utils';
import RentabilityInfo from '@/components/RentabilityInfo.vue';

describe('RentabilityInfo.vue', () => {
  it('renders the component', () => {
    const wrapper = mount(RentabilityInfo, {
      propsData: {
        selicRate: '2.75%',
        archRate: '5.00%',
        lastUpdatedDate: '01/01/2022',
      },
    });
    expect(wrapper.find('.info-box').exists()).toBe(true);
  });

  it('renders the taxaSelic, rentabilidadeArca, and dataAtualizacao props', () => {
    const selicRate = '2.75%';
    const archRate = '5.00%';
    const lastUpdatedDate = '01/01/2022';
    const wrapper = mount(RentabilityInfo, {
      propsData: { selicRate, archRate, lastUpdatedDate },
    });
    expect(wrapper.find('.rentability > strong').text()).toBe(selicRate);
    expect(wrapper.find('.rentability-container > div:nth-child(2) > strong').text()).toBe(archRate);
    expect(wrapper.find('.date-info-text + p').text()).toBe(`- Data da última atualização: ${lastUpdatedDate}`);
  });
});