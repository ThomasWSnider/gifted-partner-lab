import { AppState } from "../AppState.js";
import { Gift } from "../models/Gift.js";
import { api } from "./AxiosService.js";


class GiftsService {
  constructor() {
    console.log('You rang?');
  }

  async openGift(giftId) {
    await api.put(`api/gifts/${giftId}`, { opened: true })
  }

  async getGifts() {
    console.log(`*Looks inside* ... Oh boy, you got some great gits here.`);
    const response = await api.get(`api/gifts`)
    console.log(`Look at all these presents!`, response.data);
    let gifts = response.data.map((giftData) => new Gift(giftData))
    AppState.gifts = gifts
    console.log(gifts);
  }


}

export const giftsService = new GiftsService