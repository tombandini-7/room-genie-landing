export function PrivacyContent() {
  return (
    <div>
      <p className="text-sm text-text-tertiary">Last Updated: March 5, 2026</p>

      <div className="mt-6 space-y-8 text-sm leading-relaxed text-text-secondary [&_h2]:text-base [&_h2]:font-semibold [&_h2]:text-text-primary [&_h3]:text-sm [&_h3]:font-semibold [&_h3]:text-text-primary/90 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-1">

        <p>
          Lucidia Solutions, LLC (&quot;Lucidia,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates Room Genie, a software-as-a-service platform that monitors Walt Disney World resort hotel room availability and pricing (the &quot;Services&quot;). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you access or use our website, applications, and Services.
        </p>
        <p>
          By creating an account or otherwise using the Services, you acknowledge that you have read, understood, and agree to this Privacy Policy. If you do not agree, please do not use the Services.
        </p>

        <section>
          <h2>1. Information We Collect</h2>

          <div className="mt-3 space-y-4">
            <div>
              <h3>a. Account Information</h3>
              <p className="mt-1">When you create an account, we collect:</p>
              <ul className="mt-2">
                <li>Full name</li>
                <li>Email address</li>
                <li>Date of birth (used solely for age verification; you must be 18 or older)</li>
                <li>Password (stored in hashed form; we never store or have access to your plaintext password)</li>
                <li>Whether you are a travel professional (optional self-designation)</li>
              </ul>
            </div>

            <div>
              <h3>b. Alert and Travel Preference Data</h3>
              <p className="mt-1">When you create monitoring alerts, we collect:</p>
              <ul className="mt-2">
                <li>Selected Walt Disney World resorts and room types</li>
                <li>Check-in and check-out dates</li>
                <li>Party composition (number of adults, number of children, children&apos;s ages)</li>
                <li>Alert type preferences (availability monitoring, price-drop monitoring)</li>
                <li>Package preferences (ticket type, dining plan, add-ons)</li>
                <li>Price thresholds and notification preferences</li>
                <li>Optional notes you add to alerts</li>
              </ul>
            </div>

            <div>
              <h3>c. Notification Contact Information</h3>
              <p className="mt-1">To deliver alerts, we may collect:</p>
              <ul className="mt-2">
                <li>Email address (required for email notifications)</li>
                <li>Phone number (optional; required only if you opt in to SMS notifications)</li>
                <li>Your explicit consent to receive SMS messages, if applicable</li>
              </ul>
            </div>

            <div>
              <h3>d. Payment and Billing Information</h3>
              <p className="mt-1">
                We use Stripe, Inc. as our third-party payment processor. When you purchase a subscription or credit, Stripe collects your payment method details (e.g., credit card number, billing address) directly. We do not store your full payment card information on our servers. We receive and store:
              </p>
              <ul className="mt-2">
                <li>Your Stripe customer identifier</li>
                <li>Subscription status, plan type, and billing period dates</li>
                <li>Credit purchase and expiration records</li>
                <li>Invoice and transaction metadata</li>
              </ul>
            </div>

            <div>
              <h3>e. Automatically Collected Information</h3>
              <p className="mt-1">When you use the Services, we automatically collect:</p>
              <ul className="mt-2">
                <li>IP address</li>
                <li>Browser type and version (user-agent string)</li>
                <li>Device type and operating system</li>
                <li>Pages viewed, access times, and referring URLs</li>
                <li>Authentication session data (stored in cookies necessary for the Services to function)</li>
              </ul>
            </div>

            <div>
              <h3>f. Consent Records</h3>
              <p className="mt-1">
                When you accept our Terms &amp; Conditions or this Privacy Policy, we create an immutable audit record that includes your IP address, user-agent string, the exact consent text you agreed to, and a timestamp. These records are maintained for legal compliance and cannot be modified or deleted.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2>2. How We Use Your Information</h2>
          <p className="mt-3">We use the information we collect for the following purposes:</p>
          <ul className="mt-2">
            <li><strong>Provide and operate the Services</strong> — including monitoring Walt Disney World resort availability and pricing on your behalf, evaluating your alert conditions, and delivering notifications when conditions are met.</li>
            <li><strong>Process payments</strong> — managing subscriptions, credits, and billing through our payment processor.</li>
            <li><strong>Send transactional communications</strong> — alert notifications, account confirmations, password resets, security alerts, and billing-related messages.</li>
            <li><strong>Maintain and improve the Services</strong> — analyzing usage patterns, diagnosing technical issues, and developing new features.</li>
            <li><strong>Enforce our agreements</strong> — including our Terms of Service and this Privacy Policy.</li>
            <li><strong>Comply with legal obligations</strong> — responding to lawful requests and protecting our legal rights.</li>
          </ul>
          <p className="mt-3">
            We do <strong>not</strong> use your information for targeted advertising, and we do not sell your personal information to third parties.
          </p>
        </section>

        <section>
          <h2>3. Automated Processing</h2>
          <p className="mt-3">
            The Services use automated systems to periodically check Walt Disney World resort availability and pricing on your behalf. When your alert conditions are met (e.g., a room becomes available or drops below your price threshold), the system automatically sends you a notification via your chosen method (email and/or SMS). One-time alerts are automatically deactivated after a successful notification is sent.
          </p>
          <p className="mt-2">
            No automated decisions are made that produce legal effects or similarly significant effects on you. You retain full control over creating, modifying, and deleting your alerts at any time.
          </p>
        </section>

        <section>
          <h2>4. How We Share Your Information</h2>
          <p className="mt-3">
            We do not sell, rent, or trade your personal information. We share information only in the following limited circumstances:
          </p>

          <div className="mt-3 space-y-3">
            <div>
              <h3>a. Service Providers</h3>
              <p className="mt-1">We use third-party service providers to operate the Services. These providers process your information only on our behalf and in accordance with our instructions:</p>
              <ul className="mt-2">
                <li><strong>Supabase, Inc.</strong> — database hosting and user authentication</li>
                <li><strong>Stripe, Inc.</strong> — payment processing and subscription management</li>
                <li><strong>Twilio, Inc.</strong> — SMS message delivery (only if you opt in to SMS notifications)</li>
                <li><strong>Twilio SendGrid</strong> — email delivery</li>
                <li><strong>Vercel, Inc.</strong> — application hosting and content delivery</li>
                <li><strong>Axiom, Inc.</strong> — application monitoring and error tracking (event data only; no full personal data)</li>
              </ul>
            </div>

            <div>
              <h3>b. Legal Requirements</h3>
              <p className="mt-1">
                We may disclose your information if required to do so by law, regulation, legal process, or governmental request, or when we believe in good faith that disclosure is necessary to protect our rights, your safety, or the safety of others, investigate fraud, or respond to a lawful request.
              </p>
            </div>

            <div>
              <h3>c. Business Transfers</h3>
              <p className="mt-1">
                If Lucidia Solutions, LLC is involved in a merger, acquisition, asset sale, or bankruptcy, your information may be transferred as part of that transaction. We will provide notice before your information becomes subject to a different privacy policy.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2>5. SMS Communications &amp; TCPA Consent</h2>
          <p className="mt-3">
            If you choose to receive SMS alert notifications, you must provide and verify your phone number through a one-time verification code and provide explicit consent to receive text messages from us.
          </p>
          <ul className="mt-2">
            <li>SMS messages are sent solely to deliver the alert notifications you configure. We do not send marketing messages via SMS.</li>
            <li>Message frequency depends on the number and frequency of alerts you create.</li>
            <li>Message and data rates may apply, depending on your mobile carrier and plan.</li>
            <li>You may revoke SMS consent at any time by removing your phone number in your account settings. Removal takes effect immediately.</li>
            <li>We will never share your phone number with third parties for their marketing purposes.</li>
          </ul>
        </section>

        <section>
          <h2>6. Cookies &amp; Similar Technologies</h2>
          <p className="mt-3">
            We use cookies that are strictly necessary for the operation of the Services, specifically for authentication and session management. These cookies allow you to remain signed in and are required for the Services to function.
          </p>
          <p className="mt-2">
            We also use Google Analytics 4 (GA4) to collect anonymous usage data about how visitors interact with our marketing website. GA4 sets cookies (including <code className="text-text-primary/80">_ga</code> and <code className="text-text-primary/80">_ga_*</code>) to distinguish unique visitors and track session information. GA4 also derives your approximate geographic location (country, region, city) from your IP address; however, Google anonymizes your IP address and we do not have access to it. This data helps us understand which pages and features are most useful, measure the effectiveness of our content, and improve the overall experience. GA4 data is aggregated and does not identify you personally.
          </p>
          <p className="mt-2">
            Google&apos;s use of analytics data is governed by the{' '}
            <a href="https://policies.google.com/privacy" className="text-gold underline hover:text-gold-light" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a>.
            You can opt out of Google Analytics by installing the{' '}
            <a href="https://tools.google.com/dlpage/gaoptout" className="text-gold underline hover:text-gold-light" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a>.
          </p>
          <p className="mt-2">
            We do not use cookies for advertising, behavioral tracking, or cross-site profiling. We do not deploy third-party advertising cookies or tracking pixels.
          </p>
          <p className="mt-2">
            You may configure your browser to reject cookies, but doing so will prevent you from using the Services, as authentication requires session cookies.
          </p>
        </section>

        <section>
          <h2>7. Data Retention</h2>
          <p className="mt-3">We retain your information as follows:</p>
          <ul className="mt-2">
            <li><strong>Account data</strong> — retained for as long as your account is active. Upon account deletion, your personal data and all associated records (alerts, check results, notifications) are permanently deleted.</li>
            <li><strong>Alert credits</strong> — one-time alert credits expire one (1) year from the date of purchase.</li>
            <li><strong>Consent records</strong> — retained indefinitely as required for legal compliance and audit purposes, even after account deletion.</li>
            <li><strong>Payment records</strong> — retained as required by applicable tax and financial reporting laws (typically up to seven years).</li>
            <li><strong>Aggregated or de-identified data</strong> — may be retained indefinitely for analytics and service improvement, provided it cannot reasonably be used to identify you.</li>
          </ul>
        </section>

        <section>
          <h2>8. Data Security</h2>
          <p className="mt-3">
            We implement reasonable administrative, technical, and organizational safeguards to protect your personal information, including:
          </p>
          <ul className="mt-2">
            <li>Encryption of data in transit (TLS/HTTPS)</li>
            <li>Encryption of data at rest in our database</li>
            <li>Row-level security policies that restrict data access to authorized users</li>
            <li>Hashed password storage (we never store plaintext passwords)</li>
            <li>Rate limiting on authentication and sensitive endpoints</li>
            <li>Separate service-role credentials for administrative database operations</li>
          </ul>
          <p className="mt-2">
            However, no method of electronic transmission or storage is 100% secure. While we strive to protect your personal information, we cannot guarantee its absolute security, and you use the Services at your own risk.
          </p>
        </section>

        <section>
          <h2>9. Your Rights &amp; Choices</h2>
          <p className="mt-3">
            Depending on your jurisdiction, you may have the following rights regarding your personal information:
          </p>

          <div className="mt-3 space-y-3">
            <div>
              <h3>All Users</h3>
              <ul className="mt-1">
                <li><strong>Access and update</strong> — you can view and edit your profile information, email, phone number, and notification preferences in your account settings at any time.</li>
                <li><strong>Delete your account</strong> — you may request deletion of your account and all associated data by contacting us. Deletion is permanent and cannot be undone.</li>
                <li><strong>Withdraw SMS consent</strong> — remove your phone number from your account settings to immediately stop SMS notifications.</li>
                <li><strong>Manage alerts</strong> — create, edit, pause, or delete your monitoring alerts at any time.</li>
              </ul>
            </div>

            <div>
              <h3>California Residents (CCPA/CPRA)</h3>
              <p className="mt-1">If you are a California resident, you have additional rights under the California Consumer Privacy Act, as amended by the California Privacy Rights Act:</p>
              <ul className="mt-1">
                <li><strong>Right to know</strong> — you may request the categories and specific pieces of personal information we have collected about you.</li>
                <li><strong>Right to delete</strong> — you may request that we delete your personal information, subject to certain exceptions.</li>
                <li><strong>Right to correct</strong> — you may request correction of inaccurate personal information.</li>
                <li><strong>Right to opt out of sale/sharing</strong> — we do not sell or share your personal information for cross-context behavioral advertising, so this right does not apply.</li>
                <li><strong>Non-discrimination</strong> — we will not discriminate against you for exercising your privacy rights.</li>
              </ul>
              <p className="mt-1">
                To exercise these rights, contact us at{' '}
                <a href="mailto:support@lucidia.travel" className="text-gold underline hover:text-gold-light">support@lucidia.travel</a>.
                We will verify your identity before fulfilling your request.
              </p>
            </div>

            <div>
              <h3>European Economic Area, UK, and Switzerland (GDPR/UK GDPR)</h3>
              <p className="mt-1">If you are located in the EEA, UK, or Switzerland, you may have additional rights including:</p>
              <ul className="mt-1">
                <li><strong>Right of access</strong> — obtain a copy of your personal data.</li>
                <li><strong>Right to rectification</strong> — correct inaccurate or incomplete data.</li>
                <li><strong>Right to erasure</strong> — request deletion of your data under certain circumstances.</li>
                <li><strong>Right to restrict processing</strong> — request limitation of processing under certain circumstances.</li>
                <li><strong>Right to data portability</strong> — receive your data in a structured, machine-readable format.</li>
                <li><strong>Right to object</strong> — object to processing based on legitimate interests.</li>
                <li><strong>Right to withdraw consent</strong> — where processing is based on consent, withdraw it at any time without affecting the lawfulness of prior processing.</li>
              </ul>
              <p className="mt-1">
                Our legal bases for processing are: (a) performance of a contract (providing the Services you signed up for), (b) legitimate interests (improving and securing the Services), and (c) consent (SMS notifications). You may lodge a complaint with your local data protection authority.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2>10. International Data Transfers</h2>
          <p className="mt-3">
            The Services are operated from the United States. If you access the Services from outside the United States, your information will be transferred to, stored, and processed in the United States, where data protection laws may differ from those in your jurisdiction. By using the Services, you consent to the transfer of your information to the United States.
          </p>
          <p className="mt-2">
            Where required by applicable law, we rely on appropriate safeguards for international data transfers, including standard contractual clauses or your explicit consent.
          </p>
        </section>

        <section>
          <h2>11. Children&apos;s Privacy</h2>
          <p className="mt-3">
            The Services are not directed to individuals under the age of 18, and you must be at least 18 years old to create an account. We do not knowingly collect personal information from children under 13.
          </p>
          <p className="mt-2">
            As part of the travel planning features, you may provide the ages of children in your travel party when configuring alerts. This information is used solely to check room occupancy and pricing accuracy and is not used for any other purpose.
          </p>
          <p className="mt-2">
            If you believe we have inadvertently collected personal information from a child under 13, please contact us at{' '}
            <a href="mailto:support@lucidia.travel" className="text-gold underline hover:text-gold-light">support@lucidia.travel</a>,
            and we will promptly delete it.
          </p>
        </section>

        <section>
          <h2>12. Third-Party Links &amp; Services</h2>
          <p className="mt-3">
            The Services may contain links to third-party websites or services, including Walt Disney World resort pages. We are not responsible for the privacy practices of these third parties. We encourage you to review the privacy policies of any third-party services you visit.
          </p>
          <p className="mt-2">
            Room Genie is not affiliated with, endorsed by, or sponsored by The Walt Disney Company or any of its subsidiaries or affiliates.
          </p>
        </section>

        <section>
          <h2>13. Service Discontinuation</h2>
          <p className="mt-3">
            If we permanently discontinue the Services, we will provide at least thirty (30) days&apos; advance notice via the email address associated with your account. During this notice period, you may export or save any information you wish to retain. After the discontinuation date, all user data will be permanently deleted, except as required by law (e.g., financial records, consent logs).
          </p>
        </section>

        <section>
          <h2>14. Changes to This Privacy Policy</h2>
          <p className="mt-3">
            We may update this Privacy Policy from time to time. When we make material changes, we will update the &quot;Last Updated&quot; date at the top of this page and, where required, notify you by email or through a prominent notice within the Services. Your continued use of the Services after any changes constitutes your acceptance of the updated Privacy Policy.
          </p>
          <p className="mt-2">
            We encourage you to periodically review this page for the latest information on our privacy practices.
          </p>
        </section>

        <section>
          <h2>15. Contact Us</h2>
          <p className="mt-3">
            If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
          </p>
          <p className="mt-2">
            Lucidia Solutions, LLC<br />
            Email:{' '}
            <a href="mailto:support@lucidia.travel" className="text-gold underline hover:text-gold-light">
              support@lucidia.travel
            </a>
          </p>
          <p className="mt-2">
            We will respond to all privacy-related inquiries within thirty (30) days, or within the time required by applicable law, whichever is shorter.
          </p>
        </section>
      </div>
    </div>
  )
}
