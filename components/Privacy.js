var React = require('react');

var Privacy = React.createClass({

  componentDidMount: function() {
    document.title = "Slowpost - Privacy Policy";
  },

  render() {

    return (
      <div className="document">
        <h1>Slowpost Privacy Policy</h1>

        <p className="detail-text">Last Updated: November 9, 2015</p>

        <p className="detail-text">Slowpost was created to enable friends and family to communicate more meaningfully, by sharing time-delayed photos and notes with each other - like having a postcard on your phone!</p>

        <p className="detail-text">This privacy policy describes how we (Slowpost) collect, store and use information you provide while you are using the app. It may change over time, and if it does we will update the date on the top of the policy, as well as send out an email notice for major updates.</p>

        <h3>What information does the application obtain, and how is it used?</h3>

        <p>User Provided Information</p>

        <p className="detail-text">Slowpost collects basic account information from you when you register, including your name, email address, a username and a password of your choice. Over time, we may enable you to enter additional information on your profile, such as a photo or a birthday. You may optionally give Slowpost access to the contacts on your phone, enabling us to search for registered users among your contact list, and making it easier to send emails to people from the app if they are not on Slowpost yet. We do not keep a permanent record of your contacts on our servers.</p>

        <p className="detail-text">As you use Slowpost, we will also store the content you create, including the messages you write, the images you add, and associated metadata such as who the messages are to, and when they were created.</p>

        <p className="detail-text">We may use the information you provide us with, such as your email address, to contact you and provide you with important information such as marketing promotions and required notices.</p>

        <p>Automatically Collected Information</p>

        <p className="detail-text">In addition, the Application may collect certain information automatically, including, but not limited to, the type of mobile device you use, your mobile device&#39;s unique device ID, the IP address of your mobile device, your mobile operating system, and information about the way you use Slowpost.</p>

        <h3>Does the application collect real-time, precise location information about the device?</h3>

        <p className="detail-text">This Application does not collect precise information about the location of your mobile device.</p>

        <h3>Do third parties see and/or have access to information obtained by the Application?</h3>

        <p className="detail-text">Slowpost does submit aggregated, anonymized data to external services to help us improve the application and the services we offer you. We will share your information with third parties only in the ways that are described in this privacy statement.</p>

        <p className="detail-text">We may disclose User Provided and Automatically Collected Information:</p>

        <li>As required by law, such as to comply with a subpoena, or similar Privacy process;</li>
        <li>When we believe in good faith that disclosure is necessary to protect our rights, protect your safety or the safety of others, investigate fraud, or respond to a government request;</li>
        <li>With our trusted services providers who work on our behalf, do not have independent use of the information we disclose to them, and have agreed to adhere to the rules set forth in this privacy statement.</li>
        <li>If Slowpost and its parent company are involved in a merger, acquisition, or sale of all or a portion of its assets, you will be notified via email and/or a prominent notice on our Web site of any change in ownership or uses of this information, as well as any choices you may have regarding this information.</li>

        <h3>What are my opt-out rights?</h3>

        <p className="detail-text">You can always uninstall Slowpost if you would like to stop using the application and stop all further collection of information. You may also contact us at <a href="mailto:support@slowpost.me" className="link">support@slowpost.me</a> if you have any questions about any information we have stored from your previous use of the application.</p>

        <h3>Data Retention Policy</h3>

        <p className="detail-text">We will retain User Provided data for as long as you use Slowpost and for a reasonable time thereafter. We will retain Automatically Collected information for up to 24 months and thereafter may store it in aggregate. If you’d like us to delete User Provided Data that you have provided, please contact us at <a href="mailto:support@slowpost.me" className="link">support@slowpost.me</a>. Please note that some or all of the User Provided Data may be required in order for Slowpost to function properly, and that we may not be able to remove any aggregated information we have submitted to third parties.</p>

        <h3>Children</h3>

        <p className="detail-text">We do not use Slowpost to knowingly solicit data from, or market to, children under the age of 13. If a parent or guardian becomes aware that his or her child has provided us with information without their consent, he or she should contact us at <a href="mailto:support@slowpost.me" className="link">support@slowpost.me</a>. We will delete such information as requested by parents or guardians.</p>

        <h3>Security</h3>

        <p className="detail-text">We are concerned about safeguarding the confidentiality of your information and provide physical, electronic, and procedural safeguards to protect information we process and maintain. User Provided data and Automatically Collected information are securely stored in the cloud via a third-party provider (Heroku). We limit access to this data to authorized employees and contractors. Please be aware that, although we endeavor provide reasonable security for information we process and maintain, no security system can prevent all potential security breaches.</p>

        <h3>Law Enforcement</h3>

        <p className="detail-text">Slowpost requires that Law Enforcement agencies provide a federal or state search warrant for any requests that include message content. For other user-attributable data, Slowpost requires a court order, subpoena, or other legal process in accordance with applicable law.</p>

        <h3>Changes</h3>

        <p className="detail-text">This Privacy Policy may be updated from time to time for any reason. As stated above, we will update the date at the top of this policy each time it changes, and will send an email announcing any major updates to the policy. You are advised to consult this Privacy Policy regularly for any changes, as continued use is deemed approval of all changes.</p>

        <h3>Your consent</h3>

        <p className="detail-text">By using Slowpost, you are consenting to our collecting, storing, deleting, using, combining and disclosing your information as set forth in this Privacy Policy now and as amended by us.</p>

        <h3>Contact Us</h3>

        <p className="detail-text">If you have any questions regarding privacy while using the Application, or have questions about our practices, please contact us via email at <a href="mailto:support@slowpost.me" className="link">support@slowpost.me</a>.</p>

        <div className="page-bottom"></div>
      </div>
    );

  }

});

module.exports = Privacy;
