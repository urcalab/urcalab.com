import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["menu"]

  toggle() {
    this.menuTarget.style.display = this.menuTarget.style.display === "none" ? "block" : "none"
  }
} 