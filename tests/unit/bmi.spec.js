import { shallowMount } from "@vue/test-utils";
import BMICalculator from "@/components/BMICalculator.vue";

describe("BMICalculator.vue", () => {
  const wrapper = shallowMount(BMICalculator);
  it("should show correct weightGroup message", () => {
    const result = wrapper.vm.bmiCalc(160, 45);
    expect(result).toBe("Sul on kerge alakaal");
  });
});
