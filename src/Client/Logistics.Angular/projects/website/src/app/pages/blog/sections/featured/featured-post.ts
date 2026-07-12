import { DatePipe } from "@angular/common";
import { Component, inject } from "@angular/core";
import { RouterLink } from "@angular/router";
import { Icon, Skeleton, UiButton } from "@logistics/shared/ui";
import { Avatar, SectionContainer } from "@/shared/components";
import { ScrollAnimateDirective } from "@/shared/directives";
import { getReadTime } from "@/shared/utils";
import { BlogStore } from "../../store/blog.store";

/**
 * FeaturedPost component
 *
 * Displays the highlighted blog post section with:
 * - Post details
 * - Author information
 * - Reading time calculation
 * - Loading skeleton state
 */
@Component({
  selector: "web-featured-post",
  templateUrl: "./featured-post.html",
  imports: [
    Avatar,
    DatePipe,
    Icon,
    RouterLink,
    ScrollAnimateDirective,
    SectionContainer,
    Skeleton,
    UiButton,
  ],
})
export class FeaturedPost {
  /**
   * Store responsible for managing blog post data.
   */
  protected readonly store = inject(BlogStore);

  /**
   * Utility function to calculate estimated reading time.
   */
  protected readonly getReadTime = getReadTime;
}
