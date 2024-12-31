import "$styles/index.css"
import "$styles/syntax-highlighting.css"

// Import all JavaScript & CSS files from src/_components
import components from "$components/**/*.{js,jsx,js.rb,css}"

console.info("Bridgetown is loaded!")

import { Application } from "@hotwired/stimulus"

import MobileMenuController from "./controllers/mobile_menu_controller"

window.Stimulus = Application.start()
Stimulus.register("mobile-menu", MobileMenuController)