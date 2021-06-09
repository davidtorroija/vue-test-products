import { shallowMount } from '@vue/test-utils';
import ProductsDashboard from '@/components/ProductsDashboard.vue';

describe('ProductsDashboard.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(ProductsDashboard, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
