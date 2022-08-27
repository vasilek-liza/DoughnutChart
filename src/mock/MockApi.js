class MockApi {
    data = [
        { title: "НИТ", currentValue: 234840, fullValue: 246051},
        { title: "ПРОГНОЗ", currentValue: 272289, fullValue: 283500}
    ]

    getForecast() {
        return new Promise(async (res) => {
            setTimeout(() => res(this.data), 1500);
        });
    }    
}

export const mockApi = new MockApi();