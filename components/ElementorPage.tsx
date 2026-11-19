import type { ReactNode } from "react";
import ElementorAnimations from "./ElementorAnimations";

/** Kadence full-width/unboxed page frame around an Elementor document (same wrappers as the home page). */
export default function ElementorPage({ pageId, children, extraClass = "fg-elementor-page" }: { pageId: number; children: ReactNode; extraClass?: string }) {
  return (
    <>
      <div id="primary" className="content-area">
        <div className="content-container site-container">
          <div id="main" className="site-main">
            <div className="content-wrap">
              <article id={`post-${pageId}`} className={`entry content-bg single-entry post-${pageId} page type-page status-publish hentry`}>
                <div className="entry-content-wrap">
                  <div className="entry-content single-content">
                    <div data-elementor-type="wp-page" data-elementor-id={pageId} className={`elementor elementor-${pageId} ${extraClass}`}>
                      {children}
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
      <ElementorAnimations />
    </>
  );
}

/* Elementor markup helpers */
export function Boxed({ id, className = "", children }: { id: string; className?: string; children: ReactNode }) {
  return (
    <div className={`elementor-element elementor-element-${id} e-flex e-con-boxed e-con e-parent${className ? " " + className : ""}`} data-id={id} data-element_type="container">
      <div className="e-con-inner">{children}</div>
    </div>
  );
}

export function Full({ id, className = "", children }: { id: string; className?: string; children: ReactNode }) {
  return (
    <div className={`elementor-element elementor-element-${id} e-con-full e-flex${className ? " " + className : ""} e-con e-child`} data-id={id} data-element_type="container">
      {children}
    </div>
  );
}

export function Widget({ id, type, extra = "", anim, html, children }: { id: string; type: string; extra?: string; anim?: string; html?: string; children?: ReactNode }) {
  const cls = `elementor-element elementor-element-${id}${extra ? " " + extra : ""}${anim ? " elementor-invisible" : ""} elementor-widget elementor-widget-${type}`;
  return (
    <div className={cls} data-id={id} data-element_type="widget" data-widget_type={`${type}.default`} data-fg-animation={anim}>
      {html !== undefined ? <div className="elementor-widget-container" dangerouslySetInnerHTML={{ __html: html }} /> : <div className="elementor-widget-container">{children}</div>}
    </div>
  );
}

export function Heading({ id, anim, children }: { id: string; anim?: string; children: ReactNode }) {
  return (
    <Widget id={id} type="heading" anim={anim}>
      <h2 className="elementor-heading-title elementor-size-default">{children}</h2>
    </Widget>
  );
}
