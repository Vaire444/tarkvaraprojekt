import { shallowMount } from "@vue/test-utils";
import cost from "@/components/FuelCalculator.vue";
import picked from "@/components/FuelCalculator.vue";
import fuelCalc from "@/components/FuelCalculator.vue";

describe("FuelCalculator.vue", () => {
  const wrapper = shallowMount(fuelCalc);

  it("should calculates fuel cost correctly", () => {
    const result = wrapper.vm.f4(1.22, 77);

    expect(result).toBe("93.94");
  });

  test("costComponent", () => {
    const wrapper = shallowMount(cost);
    wrapper.setData({ cost: 7 });
    expect(wrapper.vm.cost).toBe(7);
  });

  test("setChecked", async () => {
    const wrapper = shallowMount(picked);
    const radioInput = wrapper.find('input[type="radio"]');
    await radioInput.setChecked();
    expect(radioInput.element.checked).toBeTruthy();
  });
});
