import "./Booking.scss";
import SlotBooking from "./SlotBooking";

const Booking = () => {
  return (
    <>
      <section className="booking-banner"></section>
      <section className="booking-detail">
        <div className="container">
          <h1 className="text-center mt-5">
            Bhasm Aarti Advance Booking Request
          </h1>
          <p>Disclaimer:</p>
          <ul className="list-unstyled">
            <li className="mb-2">
              1. The “Bhasm Aarti Advance Booking Request” is presently active
              and accepting requests for the months of February , March and
              April presently.
            </li>
            <li className="mb-2">
              2. Devotees are advised and requested to place advance requests if
              they are interested in Bhasm Aarti bookings.
            </li>
            <li className="mb-2">
              3. Details regarding “Bhasm Aarti Booking Request” are visible on
              the request page here.
            </li>
          </ul>

          <ul className="list-unstyled">
            <li className="mb-2">
              1. "भस्म आरती एडवांस बुकिंग अनुरोध" वर्तमान में सक्रिय है और
              वर्तमान में फ़रवरी , मार्च और अप्रैल के महीनों के लिए अनुरोध
              स्वीकार कर रहा है।
            </li>
            <li className="mb-2">
              2. भक्तों को सलाह और अनुरोध किया जाता है कि यदि वे भस्म आरती
              बुकिंग में रुचि रखते हैं तो वे अग्रिम अनुरोध करें।
            </li>
            <li className="mb-2">
              3. "भस्म आरती बुकिंग अनुरोध" से संबंधित जानकारी यहां अनुरोध पृष्ठ
              पर उपलब्ध है।
            </li>
          </ul>
          <p>
            Bhasmarti booking allowed between 8 AM to 9 PM !! Important Note:
            Bhasma Aarti slots are released at 08:00 AM. If you miss the slots
            at 08:00 AM, all registrations who have not completed their payment
            within 15 minutes will be re-released every 20 minutes i.e. 08:20
            AM, 08:40 AM, 09:00 AM and so on. Please keep trying every 20
            minutes from 08:00 AM onwards to book Bhasma Aarti successfully and
            ensure you complete the payment process within 15 minutes of
            successful registration.{" "}
          </p>
          <p>
            महत्वपूर्ण सूचना: भस्म आरती स्लॉट सुबह 08:00 बजे जारी किए जाते हैं।
            यदि आप सुबह 08:00 बजे स्लॉट पंजीकरण करने से चूक जाते हैं, तो सभी
            पंजीकरण जिन्होंने 15 मिनट के भीतर अपना भुगतान पूरा नहीं किया है,
            उन्हें हर 20 मिनट में फिर से जारी किया जाएगा यानी 08:20, 08:40,
            09:00, इत्यादि। कृपया भस्म आरती सफलता पूर्वक बुक करने के लिए सुबह
            08:00 बजे से हर 20 मिनट में प्रयास करते रहें और पंजीकरण के १५ मिनट
            के भीतर भुगतान प्रक्रिया निश्चित रूप से पूर्ण कर लेवें।
          </p>
        </div>

      <SlotBooking />
      </section>
    </>
  );
};

export default Booking;
