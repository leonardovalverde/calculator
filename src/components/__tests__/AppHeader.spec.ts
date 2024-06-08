import { mount } from "@vue/test-utils";
import AppHeader from "@/components/AppHeader.vue";

describe("AppHeader.vue", () => {
  // Teste de interface: Verifica se o logo é renderizado corretamente
  it("has correct src on logo", () => {
    const wrapper = mount(AppHeader);
    const logo = wrapper.find(".logo");
    expect(logo.attributes("src")).toContain('mocked-svg-file');
  });

  // Teste de usabilidade: Verifica se o logo tem o atributo alt correto
  it("has correct alt text on logo", () => {
    const wrapper = mount(AppHeader);
    const logo = wrapper.find(".logo");
    expect(logo.attributes("alt")).toBe("Logo");
  });

});
