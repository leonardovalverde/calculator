import { mount } from "@vue/test-utils";
import HomePage from "@/pages/HomePage.vue";
import { nextTick } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import InvestmentSimulator from "@/pages/InvestmentSimulator.vue";

function waitFor(ms = 0) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

describe("HomePage.vue", () => {
  it("renders the texts correctly", () => {
    const wrapper = mount(HomePage);
    expect(wrapper.text()).toContain(
      "Acesse o nosso simulador de investimentos e escolha as melhores opções do mercado."
    );
    expect(wrapper.text()).toContain(
      "Conquiste sua liberdade financeira, conheça o Grupo Primo."
    );
  });

  it("navigates to InvestmentSimulator on button click", async () => {
    const router = createRouter({
      history: createWebHistory(),
      routes: [
        {
          path: "/",
          name: "Home",
          component: HomePage,
        },
        {
          path: "/investment-simulator",
          name: "InvestmentSimulator",
          component: InvestmentSimulator,
        },
      ],
    });

    const wrapper = mount(HomePage, {
      global: {
        plugins: [router],
      },
    });

    await router.isReady();

    await wrapper.find(".center-button").trigger("click");

    await router.isReady();
    await nextTick();
    await waitFor(1000);

    expect(router.currentRoute.value.name).toBe("InvestmentSimulator");
  });
});
