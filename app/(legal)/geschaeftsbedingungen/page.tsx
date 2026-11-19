import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: { absolute: "Geschäftsbedingungen - Friseur & Kosmetik George" },
  alternates: { canonical: "/geschaeftsbedingungen/" },
  openGraph: { title: "Geschäftsbedingungen - Friseur & Kosmetik George", url: "/geschaeftsbedingungen/" },
};

/* Text verbatim from https://friseur-george.de/geschaeftsbedingungen/ (Complianz Terms & Conditions, English as on the original). */
export default function AgbPage() {
  return (
    <LegalPage title="Geschäftsbedingungen" postId={0}>
      <div id="cmplz-document" className="cmplz-document cmplz-terms-conditions">
        <p>The Terms and Conditions were last updated on 7. March 2025</p>
        <h2>1. Introduction</h2>
        <p>These Terms and conditions apply to this website and to the transactions related to our products and services. You may be bound by additional contracts related to your relationship with us or any products or services that you receive from us. If any provisions of the additional contracts conflict with any provisions of these Terms, the provisions of these additional contracts will control and prevail.</p>
        <h2>2. Binding</h2>
        <p>By registering with, accessing, or otherwise using this website, you hereby agree to be bound by these Terms and conditions set forth below. The mere use of this website implies the knowledge and acceptance of these Terms and conditions. In some particular cases, we can also ask you to explicitly agree.</p>
        <h2>3. Intellectual property</h2>
        <p>We or our licensors own and control all of the copyright and other intellectual property rights in the website and the data, information, and other resources displayed by or accessible within the website.</p>
        <p className="cmplz-subtitle">3.1 All the rights are reserved</p>
        <p>Unless specific content dictates otherwise, you are not granted a license or any other right under Copyright, Trademark, Patent, or other Intellectual Property Rights. This means that you will not use, copy, reproduce, perform, display, distribute, embed into any electronic medium, alter, reverse engineer, decompile, transfer, download, transmit, monetize, sell, market, or commercialize any resources on this website in any form, without our prior written permission, except and only insofar as otherwise stipulated in regulations of mandatory law (such as the right to quote).</p>
        <h2>4. Third-party property</h2>
        <p>Our website may include hyperlinks or other references to other party’s websites. We do not monitor or review the content of other party’s websites which are linked to from this website. Products or services offered by other websites shall be subject to the applicable Terms and Conditions of those third parties. Opinions expressed or material appearing on those websites are not necessarily shared or endorsed by us.</p>
        <p>We will not be responsible for any privacy practices or content of these sites. You bear all risks associated with the use of these websites and any related third-party services. We will not accept any responsibility for any loss or damage in whatever manner, however caused, resulting from your disclosure to third parties of personal information.</p>
        <h2>5. Responsible use</h2>
        <p>By visiting our website, you agree to use it only for the purposes intended and as permitted by these Terms, any additional contracts with us, and applicable laws, regulations, and generally accepted online practices and industry guidelines. You must not use our website or services to use, publish or distribute any material which consists of (or is linked to) malicious computer software; use data collected from our website for any direct marketing activity, or conduct any systematic or automated data collection activities on or in relation to our website.</p>
        <p>Engaging in any activity that causes, or may cause, damage to the website or that interferes with the performance, availability, or accessibility of the website is strictly prohibited.</p>
        <h2>6. Idea submission</h2>
        <p>Do not submit any ideas, inventions, works of authorship, or other information that can be considered your own intellectual property that you would like to present to us unless we have first signed an agreement regarding the intellectual property or a non-disclosure agreement. If you disclose it to us absent such written agreement, you grant to us a worldwide, irrevocable, non-exclusive, royalty-free license to use, reproduce, store, adapt, publish, translate and distribute your content in any existing or future media.</p>
        <h2>7. Termination of use</h2>
        <p>We may, in our sole discretion, at any time modify or discontinue access to, temporarily or permanently, the website or any Service thereon. You agree that we will not be liable to you or any third party for any such modification, suspension or discontinuance of your access to, or use of, the website or any content that you may have shared on the website. You will not be entitled to any compensation or other payment, even if certain features, settings, and/or any Content you have contributed or have come to rely on, are permanently lost. You must not circumvent or bypass, or attempt to circumvent or bypass, any access restriction measures on our website.</p>
        <h2>8. Warranties and liability</h2>
        <p>Nothing in this section will limit or exclude any warranty implied by law that it would be unlawful to limit or to exclude. This website and all content on the website are provided on an “as is” and “as available” basis and may include inaccuracies or typographical errors. We expressly disclaim all warranties of any kind, whether express or implied, as to the availability, accuracy, or completeness of the Content. We make no warranty that:</p>
        <p />
        <ul>
          <li>this website or our content will meet your requirements;</li>
          <li>this website will be available on an uninterrupted, timely, secure, or error-free basis.</li>
        </ul>
        <p />
        <p>Nothing on this website constitutes or is meant to constitute, legal, financial or medical advice of any kind. If you require advice you should consult an appropriate professional.</p>
        <p>The following provisions of this section will apply to the maximum extent permitted by applicable law and will not limit or exclude our liability in respect of any matter which it would be unlawful or illegal for us to limit or to exclude our liability. In no event will we be liable for any direct or indirect damages (including any damages for loss of profits or revenue, loss or corruption of data, software or database, or loss of or harm to property or data) incurred by you or any third party, arising from your access to, or use of, our website.</p>
        <p>Except to the extent any additional contract expressly states otherwise, our maximum liability to you for all damages arising out of or related to the website or any products and services marketed or sold through the website, regardless of the form of legal action that imposes liability (whether in contract, equity, negligence, intended conduct, tort or otherwise) will be limited to the total price that you paid to us to purchase such products or services or use the website. Such limit will apply in the aggregate to all of your claims, actions and causes of action of every kind and nature.</p>
        <h2>9. Privacy</h2>
        <p>To access our website and/or services, you may be required to provide certain information about yourself as part of the registration process. You agree that any information you provide will always be accurate, correct, and up to date.</p>
        <p>
          We have developed a policy to address any privacy concerns you may have. For more information, please see our{" "}
          {/* The original linked a /datenschutzerklaerung/ page that does not exist (404). */}
          <a href="/datenschutzerklaerung/">Privacy Statement</a> and our <Link href="/cookie-richtlinie-eu/">Cookie Policy</Link>.
        </p>
        <h2>10. Export restrictions / Legal compliance</h2>
        <p>Access to the website from territories or countries where the Content or purchase of the products or Services sold on the website is illegal is prohibited. You may not use this website in violation of export laws and regulations of Germany.</p>
        <h2>11. Assignment</h2>
        <p>You may not assign, transfer or sub-contract any of your rights and/or obligations under these Terms and conditions, in whole or in part, to any third party without our prior written consent. Any purported assignment in violation of this Section will be null and void.</p>
        <h2>12. Breaches of these Terms and conditions</h2>
        <p>Without prejudice to our other rights under these Terms and Conditions, if you breach these Terms and Conditions in any way, we may take such action as we deem appropriate to deal with the breach, including temporarily or permanently suspending your access to the website, contacting your internet service provider to request that they block your access to the website, and/or commence legal action against you.</p>
        <h2>13. Indemnification</h2>
        <p>You agree to indemnify, defend and hold us harmless, from and against any and all claims, liabilities, damages, losses and expenses, relating to your violation of these Terms and conditions, and applicable laws, including intellectual property rights and privacy rights. You will promptly reimburse us for our damages, losses, costs and expenses relating to or arising out of such claims.</p>
        <h2>14. Waiver</h2>
        <p>Failure to enforce any of the provisions set out in these Terms and Conditions and any Agreement, or failure to exercise any option to terminate, shall not be construed as waiver of such provisions and shall not affect the validity of these Terms and Conditions or of any Agreement or any part thereof, or the right thereafter to enforce each and every provision.</p>
        <h2>15. Language</h2>
        <p>These Terms and Conditions will be interpreted and construed exclusively in German. All notices and correspondence will be written exclusively in that language.</p>
        <h2>16. Entire agreement</h2>
        <p>
          These Terms and Conditions, together with our <a href="/datenschutzerklaerung/">privacy statement</a> and <Link href="/cookie-richtlinie-eu/">cookie policy</Link>, constitute the entire agreement between you and George Fiseur &amp; Kosmetik in relation to your use of this website.
        </p>
        <h2>17. Updating of these Terms and conditions</h2>
        <p>We may update these Terms and Conditions from time to time. It is your obligation to periodically check these Terms and Conditions for changes or updates. The date provided at the beginning of these Terms and Conditions is the latest revision date. Changes to these Terms and Conditions will become effective upon such changes being posted to this website. Your continued use of this website following the posting of changes or updates will be considered notice of your acceptance to abide by and be bound by these Terms and Conditions.</p>
        <h2>18. Choice of Law and Jurisdiction</h2>
        <p>These Terms and Conditions shall be governed by the laws of Germany. Any disputes relating to these Terms and Conditions shall be subject to the jurisdiction of the courts of Germany. If any part or provision of these Terms and Conditions is found by a court or other authority to be invalid and/or unenforceable under applicable law, such part or provision will be modified, deleted and/or enforced to the maximum extent permissible so as to give effect to the intent of these Terms and Conditions. The other provisions will not be affected.</p>
        <h2>19. Contact information</h2>
        <p>This website is owned and operated by George Fiseur &amp; Kosmetik.</p>
        <p>
          You may contact us regarding these Terms and Conditions by writing or emailing us at the following address: <br />
          info@friseur-george.de
          <br />
          Dotzheimer Str. 39, 65185 Wiesbaden
        </p>
        <h2>20. Download</h2>
        {/* The original linked to a WordPress plugin PHP endpoint (complianz-terms-conditions/download.php) which does not exist without WordPress. */}
        <p>You can also download our Terms and Conditions as a PDF.</p>
      </div>
    </LegalPage>
  );
}
