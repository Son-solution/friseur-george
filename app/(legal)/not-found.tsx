import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Seite wurde nicht gefunden. - Friseur & Kosmetik George" },
  robots: { index: false, follow: true },
};

/**
 * Kadence 404 template with the original German texts. The WordPress search form that
 * followed the text is not reproduced (there is no search without WordPress).
 */
export default function NotFound() {
  return (
    <div id="primary" className="content-area">
      <div className="content-container site-container">
        <div id="main" className="site-main">
          <div className="content-wrap">
            <section className="error-404 not-found entry content-bg">
              <div className="entry-content-wrap">
                <header className="page-header">
                  <h1 className="page-title">Ups! Diese Seite kann nicht gefunden werden.</h1>
                </header>
                <div className="page-content">
                  <p>Es sieht so aus, als ob an diesem Ort nichts gefunden wurde. Vielleicht eine Suche versuchen?</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
