import type { ReactNode } from "react";

/** Kadence default page template: grey title hero + boxed white content card. */
export default function LegalPage({ title, postId, children }: { title: string; postId: number; children?: ReactNode }) {
  return (
    <>
      <section role="banner" className="entry-hero page-hero-section entry-hero-layout-standard">
        <div className="entry-hero-container-inner">
          <div className="hero-section-overlay" />
          <div className="hero-container site-container">
            <header className="entry-header page-title title-align-inherit title-tablet-align-inherit title-mobile-align-inherit">
              <h1 className="entry-title">{title}</h1>
            </header>
          </div>
        </div>
      </section>
      <div id="primary" className="content-area">
        <div className="content-container site-container">
          <div id="main" className="site-main">
            <div className="content-wrap">
              <article id={`post-${postId}`} className={`entry content-bg single-entry post-${postId} page type-page status-publish hentry`}>
                <div className="entry-content-wrap">
                  <div className="entry-content single-content">{children}</div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
