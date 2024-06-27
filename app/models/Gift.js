


export class Gift {

  constructor(data) {
    this.id = data.id
    this.tag = data.tag
    this.url = data.url
    this.opened = data.opened
  }



  get giftCardHTML() {
    return `
            <div class="col-4">
              <div onclick="app.GiftsController.openGift('${this.id}')" class="card selectable" style="width: 18rem;">
                <img src="${this.url}" class="card-img-top" alt="A wonderful gift..." title="See what's inside">
                <div class="card-body">
                  <h5 class="card-title">${this.tag}</h5>
                </div>
              </div>
            </div>
    `
  }


}