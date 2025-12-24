import { Container } from "react-bootstrap";
import "./ImportantDays.scss";

const ImportantDays = () => {
  return (
    <>
      <section className="importantdays-banner"></section>

      <section className="pt-5 time-banner">
        <Container>
          <div className="text-center mb-4">
            <div>
              <span className="line-left"></span>
              <p className="text-uppercase">List Of</p>
              <span className="line-right"></span>
            </div>
            <h1 className="mt-3">Important Days</h1>
          </div>

          <div className="important-table-wrapper table-responsive">
            <table className="important-table ">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Month</th>
                  <th>Fortnight</th>
                  <th>Tithi</th>
                  <th>Festival / Ritual</th>
                </tr>
              </thead>

              <tbody>
                <tr><td>1</td><td>Chaitra</td><td>Dark</td><td>Fifth</td><td>Ranga Panchami, Phag and Dwija - Pujana</td></tr>
                <tr><td>2</td><td>Chaitra</td><td>Bright</td><td>First</td><td>New Samvatsara celebration and Panchang - Pujana</td></tr>
                <tr><td>3</td><td>Vaishakha</td><td>Dark</td><td>First</td><td>Jalasthra for continuous two months</td></tr>
                <tr><td>4</td><td>Vaishakha</td><td>Bright</td><td>Third (Akshaya - Tritiya)</td><td>Jala - mahotsava, Phala - dana</td></tr>
                <tr><td>5</td><td>Jyeshtha</td><td>Dark</td><td>Nakshatra</td><td>Parijana Jnanthra for eleven days</td></tr>
                <tr><td>6</td><td>Ashadha</td><td>Bright</td><td>Guru Purnima</td><td>Special Sngava on the advent of month, Chaturmasa begins</td></tr>
                <tr><td>7</td><td>Shravana</td><td>Dark</td><td>Every Monday</td><td>Sawari</td></tr>
                <tr><td>8</td><td>Shravana</td><td>Dark</td><td>Amavasya</td><td>Dipa - pujana</td></tr>
                <tr><td>9</td><td>Shravana</td><td>Bright</td><td>Naga - Panchami</td><td>The Darsana of Naga Chandresvara</td></tr>
                <tr><td>10</td><td>Shravana</td><td>Bright</td><td>Purnima (the full moon day)</td><td>Raksha - sutra Parva, Bhoga and Sringara</td></tr>
                <tr><td>11</td><td>Bhadrapada</td><td>Dark</td><td>Every Monday upto Amavasya</td><td>Sawari</td></tr>
                <tr><td>12</td><td>Bhadrapada</td><td>Dark</td><td>Eighth (Janmashtami)</td><td>Janmashtami celebrations after evening arati</td></tr>
                <tr><td>13</td><td>Ashwin</td><td>Dark</td><td>Ekadashi (Indira)</td><td>Umasankalp Vrata begins</td></tr>
                <tr><td>14</td><td>Ashwin</td><td>Bright</td><td>Second (Dwitiya)</td><td>Final day of Uma - sankalp fast</td></tr>
                <tr><td>15</td><td>Ashwin</td><td>Bright</td><td>Tenth (Dashami)</td><td>Vijayadashami Parva, Sawari pujan and Sawari</td></tr>
                <tr><td>16</td><td>Ashwin</td><td>Bright</td><td>Full moon day</td><td>Sharadotsava and distribution of Krisna in midnight</td></tr>
                <tr><td>17</td><td>Kartika</td><td>Dark</td><td>14th day (Chaturdashi)</td><td>Annakuta</td></tr>
                <tr><td>18</td><td>Kartika</td><td>Dark</td><td>Amavasya</td><td>Lighting of lamps on the Deepavali festival</td></tr>
                <tr><td>19</td><td>Kartika</td><td>Bright</td><td>Every Monday</td><td>Sawari (Procession)</td></tr>
                <tr><td>20</td><td>Kartika</td><td>Bright</td><td>Balachaturdashi</td><td>Harsha - mela (Procession)</td></tr>
                <tr><td>21</td><td>Margashirsha</td><td>Dark</td><td>Every Monday</td><td>Sawari</td></tr>
                <tr><td>22</td><td>Pausha</td><td>Bright</td><td>Dhanasankranti (Ekadashi)</td><td>Annakuta</td></tr>
                <tr><td>23</td><td>Magha</td><td>Dark</td><td>Basant Panchami</td><td>Special Puja</td></tr>
                <tr><td>24</td><td>Phalguna</td><td>Dark</td><td>Mahashivaratri</td><td>Mahotsava, Special Puja and Abhisheka</td></tr>
                <tr><td>25</td><td>Phalguna</td><td>Bright</td><td>Second (Dwitiya)</td><td>Darsana of five - forms of Siva (Pancha Swarupa)</td></tr>
                <tr><td>26</td><td>Phalguna</td><td>Bright</td><td>Second (Dwitiya)</td><td>Darsana of five - forms of Siva (Pancha Swarupa)</td></tr>
              </tbody>
            </table>
          </div>

          <div className="important-note">
            <p>
              भगवान श्री महाकालेश्वर जी की होने वाली आरतियों के समय में परिवर्तन होने के कारण कार्तिक कृष्ण प्रतिपदा से फाल्गुन पूर्णिमा तक प्रोटोकाल दर्शन व्यवस्था हेतु समय प्रातः 08.20 बजे से 10.20 बजे तक एवं दोपहर 02.00 बजे से 04.00 बजे तक निर्धारित रहेगा।
            </p>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ImportantDays;
