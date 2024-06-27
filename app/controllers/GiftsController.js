import { AppState } from "../AppState.js";
import { giftsService } from "../services/GiftsService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

export class GiftsController {
  constructor() {
    AppState.on('user', this.getGifts)
    AppState.on('gifts', this.drawGiftCards)
    console.log(`Of course I'm here 🙄`);
  }

  async getGifts() {
    try {
      await giftsService.getGifts()
    } catch (error) {
      Pop.error(error)
      console.log('You messed up dawg');
    }
  }

  drawGiftCards() {
    const gifts = AppState.gifts
    let listHTML = ''
    gifts.forEach((gift) => listHTML += gift.giftCardHTML)
    setHTML('giftCards', listHTML)
  }

  async openGift(giftId) {
    try {
      console.log('Opening GIft');
      await giftsService.openGift(giftId)
      this.getGifts()
      Pop.success('Opening your present!')
    } catch (error) {
      Pop.error(error)
      console.log(error);
    }
  }
}