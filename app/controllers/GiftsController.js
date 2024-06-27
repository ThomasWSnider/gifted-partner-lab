import { giftsService } from "../services/GiftsService.js";
import { Pop } from "../utils/Pop.js";

export class GiftsController {
  constructor() {
    console.log(`Of course I'm here 🙄`);
    this.getGifts()
  }

  async getGifts() {
    try {
      await giftsService.getGifts()
    } catch (error) {
      Pop.error(error)
      console.log('You messed up dawg');
    }
  }
}