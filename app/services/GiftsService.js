import { AppState } from "../AppState.js";
import { Gift } from "../models/Gift.js";
import { api } from "./AxiosService.js";


class GiftsService {
  constructor() {
    console.log('You rang?');
  }

  async openGift(giftId) {
    const response = await api.put(`api/gifts/${giftId}`, { opened: true })

    const openedGift = new Gift(response.data)

    const giftIndex = AppState.gifts.findIndex((gift) => giftId == gift.id)

    AppState.gifts.splice(giftIndex, 1, openedGift)
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