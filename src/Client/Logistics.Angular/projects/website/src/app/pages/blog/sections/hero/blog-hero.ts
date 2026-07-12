import { Component } from "@angular/core";
import { SectionContainer } from "@/shared/components";
import { ScrollAnimateDirective } from "@/shared/directives";

/**
 * BlogHero component
 * 
 * Responsible for rendering the hero section of the blog page.
 * Uses shared section layout and scroll animation utilities.
 */
@Component({
  selector: "web-blog-hero",
  templateUrl: "./blog-hero.html",
  imports: [SectionContainer, ScrollAnimateDirective],
})
export class BlogHero {
  /**
   * Component initialization hook.
   * Reserved for future blog hero configuration.
   */
}
