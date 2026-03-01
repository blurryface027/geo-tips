import { Page, NavCategory, Region } from './types';

export const pages: Record<string, Page> = {
  // ... (previous pages remain the same)
  home: {
    id: 'home',
    title: 'Geoguessr Note',
    description: 'A comprehensive collection of tips, tricks, and visual clues to help you master GeoGuessr. This knowledge base covers everything from language indicators to architectural styles across different regions.',
    content: (
      <>
        <h2>Contribute</h2>

        <h3>Contribute from Website</h3>
        <p>You can submit hints directly through our website using the contribution form. This is the fastest way to share your findings with the community.</p>
        <ul>
          <li>Upload an image of the clue</li>
          <li>Select the appropriate category</li>
          <li>Add a descriptive title and detailed description</li>
          <li>Click Submit to make it live instantly</li>
        </ul>

        <h3>Contribute via GitHub</h3>
        <p>For more technical contributions or structural changes, you can contribute directly to our open-source repository.</p>
        <ol>
          <li>Fork the repository on GitHub</li>
          <li>Add or update content in the correct category file</li>
          <li>Submit a pull request with your changes</li>
          <li>Wait for review and merge</li>
        </ol>
      </>
    ),
  },
  language: {
    id: 'language',
    title: 'Language',
    description: 'Language is one of the most powerful clues in GeoGuessr. Written text on signs, storefronts, and advertisements can instantly narrow down your location to specific countries or regions.',
    content: (
      <>
        <h2>Key Indicators</h2>
        <ul>
          <li>Script type (Latin, Cyrillic, Arabic, etc.)</li>
          <li>Special characters and diacritics</li>
          <li>Common words and phrases</li>
          <li>Language families and regional variations</li>
        </ul>

        <hr className="content-divider" />

        <h2>Language Deep Reference</h2>

        <section className="deep-ref-section">
          <h3>Regional Distribution</h3>
          <table className="data-table">
            <thead>
              <tr>
                <th>Language/Script</th>
                <th>Countries</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Dutch</td>
                <td>Netherland, Belgium</td>
              </tr>
              <tr>
                <td>French</td>
                <td>France, Belgium, Switzerland</td>
              </tr>
              <tr>
                <td>German</td>
                <td>Germany, Belgium, Luxembourg, Austria, Switzerland</td>
              </tr>
              <tr>
                <td>Slavic</td>
                <td>Poland, Czechia, Slovakia, Yugoslavia (Slovenia, Croatia, Bosnia, Montenegro, Serbia, North Macedonia)</td>
              </tr>
              <tr>
                <td>Cyrillic script</td>
                <td>Russia, Ukraine, Bulgaria, Bosnia, Montenegro, Serbia, North Macedonia, Central Asia</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="deep-ref-section">
          <h3>Word (Street Identifiers)</h3>
          <table className="data-table">
            <thead>
              <tr>
                <th>Term</th>
                <th>Language / Country</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>rue</td>
                <td>French</td>
              </tr>
              <tr>
                <td>calle</td>
                <td>Spanish</td>
              </tr>
              <tr>
                <td>rua</td>
                <td>Portuguese</td>
              </tr>
              <tr>
                <td>carrer</td>
                <td>Catalan</td>
              </tr>
              <tr>
                <td>straat</td>
                <td>Dutch</td>
              </tr>
              <tr>
                <td>gasse</td>
                <td>German</td>
              </tr>
              <tr>
                <td>straße</td>
                <td>German</td>
              </tr>
              <tr>
                <td>gade</td>
                <td>Denmark</td>
              </tr>
              <tr>
                <td>strasse</td>
                <td>Switzerland</td>
              </tr>
              <tr>
                <td>gate</td>
                <td>Norway</td>
              </tr>
              <tr>
                <td>strada</td>
                <td>Romania, Italy</td>
              </tr>
              <tr>
                <td>gatan</td>
                <td>Sweden</td>
              </tr>
              <tr>
                <td>stryd</td>
                <td>Wales (UK)</td>
              </tr>
              <tr>
                <td>gatvė, g.</td>
                <td>Lithuania</td>
              </tr>
              <tr>
                <td>katu</td>
                <td>Finland</td>
              </tr>
              <tr>
                <td>-weg</td>
                <td>Dutch, German</td>
              </tr>
              <tr>
                <td>ulica, ul.</td>
                <td>Slavic</td>
              </tr>
              <tr>
                <td>-vej</td>
                <td>Denmark</td>
              </tr>
              <tr>
                <td>utca, út.</td>
                <td>Hungary</td>
              </tr>
              <tr>
                <td>-veien, vei</td>
                <td>Norway</td>
              </tr>
              <tr>
                <td>улица, ул.</td>
                <td>Cyrillic</td>
              </tr>
              <tr>
                <td>-vägen</td>
                <td>Sweden</td>
              </tr>
              <tr>
                <td>вулиця, вул.</td>
                <td>Ukraine</td>
              </tr>
              <tr>
                <td>tee</td>
                <td>Estonia</td>
              </tr>
              <tr>
                <td>tänav, tn.</td>
                <td>Estonia</td>
              </tr>
              <tr>
                <td>-tie</td>
                <td>Finland</td>
              </tr>
              <tr>
                <td>iela</td>
                <td>Latvia</td>
              </tr>
              <tr>
                <td>via</td>
                <td>Italy</td>
              </tr>
              <tr>
                <td>triq</td>
                <td>Malta</td>
              </tr>
              <tr>
                <td>rruga</td>
                <td>Albania</td>
              </tr>
              <tr>
                <td>kalea</td>
                <td>Basque</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="deep-ref-section">
          <h3>Misc</h3>
          <ul>
            <li><strong>-ije:</strong> Croatian</li>
            <li><strong>Einbahn, Oneway:</strong> Austria</li>
            <li><strong>EinbahnStraße, Oneway:</strong> Germany</li>
            <li><strong>Araf, Slow:</strong> Wales</li>
            <li><strong>AWAS, Caution:</strong> Malaysia, Indonesia</li>
            <li><strong>Paunawa, Caution:</strong> The Phillipines</li>
            <li><strong>Gual permanent, No parking:</strong> Catalonia</li>
          </ul>
        </section>

        <section className="deep-ref-section">
          <h3>Alphabet Summary</h3>
          <p><strong>č, š, ž:</strong> Czech, Slovakia, Slovenia, Croatian, Baltics</p>
          <p><strong>In Nordic countries:</strong></p>
          <ul>
            <li><strong>Å:</strong> All</li>
            <li><strong>ø, æ:</strong> Norway, Denmark, Faroe</li>
            <li><strong>ö, ä:</strong> Sweden, Finland</li>
            <li><strong>ö, æ:</strong> Iceland</li>
          </ul>
        </section>

        <section className="deep-ref-section">
          <h3>Table of characters</h3>
          <table className="data-table">
            <thead>
              <tr>
                <th>Country</th>
                <th>Characters</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Czech</td>
                <td>ů ě ř ý ň ď ť Ď Ť č š ž á é í ó ú</td>
              </tr>
              <tr>
                <td>Slovakia</td>
                <td>ô ŕ ĺ ľ ý ň ď ť Ď Ť č š ž ä á é í ó ú</td>
              </tr>
              <tr>
                <td>Croatia</td>
                <td>Ð đ č š ž ć</td>
              </tr>
              <tr>
                <td>Slovenia</td>
                <td>Ð đ č š ž ć</td>
              </tr>
              <tr>
                <td>Hungary</td>
                <td>ő ű ö ü á é í ó ú</td>
              </tr>
              <tr>
                <td>Romania</td>
                <td>ă ș ț â î</td>
              </tr>
              <tr>
                <td>Albania</td>
                <td>ç ë</td>
              </tr>
              <tr>
                <td>Turkey</td>
                <td>İ ı ğ ş ç ö ü</td>
              </tr>
              <tr>
                <td>Estonia</td>
                <td>õ š ž ä ö ü</td>
              </tr>
              <tr>
                <td>Lativia</td>
                <td>ģ ķ ļ ņ Ģ č š ž ā ē ī ū</td>
              </tr>
              <tr>
                <td>Lithuania</td>
                <td>ė ą ę į ų č š ž ū</td>
              </tr>
              <tr>
                <td>Poland</td>
                <td>ł ż ą ę ć ń ś ź ó</td>
              </tr>
              <tr>
                <td>Norway</td>
                <td>ø æ å</td>
              </tr>
              <tr>
                <td>Denmark</td>
                <td>ø æ å</td>
              </tr>
              <tr>
                <td>Faroe</td>
                <td>ø æ Ð ð á í ú ý</td>
              </tr>
              <tr>
                <td>Iceland</td>
                <td>þ æ Ð ð ö á é í ó ú ý</td>
              </tr>
              <tr>
                <td>Sweden</td>
                <td>å ä ö</td>
              </tr>
              <tr>
                <td>Finland</td>
                <td>å ä ö</td>
              </tr>
              <tr>
                <td>Spain</td>
                <td>ñ</td>
              </tr>
              <tr>
                <td>Portugal</td>
                <td>ç ã õ â ê ô á é í ó ú à</td>
              </tr>
              <tr>
                <td>France</td>
                <td>ç æ œ</td>
              </tr>
              <tr>
                <td>Malta</td>
                <td>ċ ġ ż ħ</td>
              </tr>
            </tbody>
          </table>
          <p><em>Note ş ș, ă ā are identical in some fonts. Be careful when reading ad billboard</em></p>
        </section>

        <section className="deep-ref-section">
          <h3>Romance languages</h3>

          <div className="sub-ref">
            <h4>Spanish</h4>
            <p>y for and</p>
            <p>-ción, -dad, -miento</p>
            <p>todas direcciones</p>
            <p>supermercado</p>
            <p>calle, avenida</p>
          </div>

          <div className="sub-ref">
            <h4>Catalan</h4>
            <p>i for and</p>
            <p>-ció, -tat, -ment</p>
            <p>totes direccions</p>
            <p>supermercat</p>
            <p>carrer, avinguda</p>
          </div>

          <div className="sub-ref">
            <h4>Portuguese</h4>
            <p>e for and</p>
            <p>-ção, -dade, -mente, -ismo</p>
          </div>

          <div className="sub-ref">
            <h4>Galician</h4>
            <p>Rúa (without accent in portuguese)</p>
            <p>Town name with O, A articles: A Pena, O Burgo</p>
            <p>concello for municipality</p>
          </div>

          <div className="sub-ref">
            <h4>Basque</h4>
            <p>An isolated language Northern Spain to Southern France</p>
            <p>Common letters: k, x, z, tx</p>
            <p>kalea for street</p>
          </div>
        </section>

        <section className="deep-ref-section">
          <h3>Celtic languages</h3>

          <div className="sub-ref">
            <h4>Welsh</h4>
            <p>common letters: ll, dd, w, y</p>
            <p>accents: circumflex (ˆ), acute (´)</p>
          </div>

          <div className="sub-ref">
            <h4>Scottish Gaelic</h4>
            <p>common letters: bh, dh, fh, mh</p>
            <p>accents: grave (`)</p>
          </div>

          <div className="sub-ref">
            <h4>Irish</h4>
            <p>Use accents frequently: acute (´)</p>
          </div>
        </section>

        <section className="deep-ref-section">
          <h3>Cyrillic</h3>
          <p><em>Note: The only useful part is to distinguish between Ukraine and Russia</em></p>
          <ul>
            <li>Federal subjects of russia</li>
            <li><strong>Russian:</strong> а б в г д е ё ж з и й к л м н о п р с т у ф х ц ч ш щ ъ ы ь э ю я</li>
            <li>Characters in Russian but not in the following regions are <span className="text-grey">marked in grey</span></li>
          </ul>

          <div className="sub-ref">
            <h4>Balkan</h4>
            <ul>
              <li><strong>Serbia:</strong> њ љ џ ј ђ <span className="text-grey">ъ й ё ы э</span></li>
              <li><strong>Macedonia:</strong> њ љ џ ј ѕ ѓ ќ <span className="text-grey">ъ й ё ы э</span></li>
              <li><strong>Bulgaria:</strong> ѕ <span className="text-grey">й ё ы э</span></li>
              <li><strong>Ukraine:</strong> ґ є і ї <span className="text-grey">ъ й ё ы э</span></li>
            </ul>
          </div>

          <div className="sub-ref">
            <h4>Russia</h4>
            <ul>
              <li><strong>Tatarstan (Kazan):</strong> җ ң ө ү һ ә</li>
              <li><strong>Bashkortostan (Ufa):</strong> ғ ҙ ҡ ң ө ҫ ү һ ә</li>
              <li><strong>Chuvashia (West Tatar):</strong> ӑ ӗ ҫ ӳ</li>
              <li><strong>Udmurt (North Tatar):</strong> ӝ ӟ ӥ ӧ ӵ</li>
              <li><strong>Mari El (North Chuvashia):</strong> ҥ ӧ ӱ</li>
              <li><strong>Komi:</strong> і ӧ</li>
              <li><strong>Tuva (NW Mongolia):</strong> ң ө ү</li>
              <li><strong>Buryatia (Ulan-Ude):</strong> ө ү һ</li>
              <li><strong>Kalmykia (South Volgograd):</strong> ә һ җ ң ө ү</li>
              <li><strong>Chechen (North Caucasus):</strong> аь къ оь уь хь юь яь ӏ гӏ кӏ пӏ тӏ хӏ цӏ чӏ кх</li>
            </ul>
          </div>

          <div className="sub-ref">
            <h4>Central Asia</h4>
            <ul>
              <li><strong>Kazakhstan:</strong> ә ғ қ ң ө ұ ү һ</li>
              <li><strong>Kyrgyzstan:</strong> ң ө ү</li>
              <li><strong>Mongolia:</strong> ө ү</li>
            </ul>
          </div>
        </section>

        <section className="deep-ref-section">
          <h3>Summary</h3>
          <ul>
            <li>Kalmyk is closed to Mongolic, but within europe</li>
            <li>Northern oblasts (Udmurt, Mari El, Komi) using ö just like finnish</li>
            <li>ө ү is used by central asia and the surrounding regions</li>
          </ul>
        </section>
      </>
    ),
  },
  sign: {
    id: 'sign',
    title: 'Sign',
    description: 'Road signs vary significantly by country and can provide instant clues about your location.',
    content: (
      <>
        <h2>Types of Signs</h2>
        <ul>
          <li>Warning signs</li>
          <li>Regulatory signs</li>
          <li>Information signs</li>
          <li>Direction signs</li>
        </ul>
      </>
    ),
  },
  bollard: {
    id: 'bollard',
    title: 'Bollard',
    description: 'Bollards are the small posts along roadsides. Different countries use distinctive bollard styles.',
    content: null,
  },
  chevron: {
    id: 'chevron',
    title: 'Chevron',
    description: 'Chevron signs (curve warning markers) have unique designs across countries.',
    content: null,
  },
  guardrail: {
    id: 'guardrail',
    title: 'Guardrail',
    description: 'Guardrails vary in color, shape, and material by region.',
    content: null,
  },
  pole: {
    id: 'pole',
    title: 'Pole',
    description: 'Utility poles have distinct characteristics depending on the country.',
    content: null,
  },
  'road-markings': {
    id: 'road-markings',
    title: 'Road Markings',
    description: 'Road markings and line styles differ across regions.',
    content: null,
  },
  vegetation: {
    id: 'vegetation',
    title: 'Vegetation',
    description: 'Flora can indicate climate zones and geographic regions.',
    content: null,
  },
  pavement: {
    id: 'pavement',
    title: 'Pavement',
    description: 'Road surface types and colors vary by country.',
    content: null,
  },
  architecture: {
    id: 'architecture',
    title: 'Architecture',
    description: 'Building styles reflect regional traditions and history.',
    content: null,
  },
  'road-numbering': {
    id: 'road-numbering',
    title: 'Road Numbering',
    description: 'Road numbering systems are country-specific.',
    content: null,
  },
  'place-name': {
    id: 'place-name',
    title: 'Place Name',
    description: 'Place name suffixes and prefixes can indicate language and region.',
    content: null,
  },
  telephone: {
    id: 'telephone',
    title: 'Telephone',
    description: 'Telephone area codes and formats vary by country.',
    content: null,
  },
  company: {
    id: 'company',
    title: 'Company',
    description: 'Regional companies and brands can pinpoint locations.',
    content: null,
  },
  domain: {
    id: 'domain',
    title: 'Domain',
    description: 'Country-code top-level domains (ccTLDs) on signs, vehicle stickers, or websites can instantly reveal a country.',
    content: (
      <>
        <h2>Country-Code Top-Level Domains (ccTLDs)</h2>
        <p>Each country has one or more ccTLDs. Many EU members also share <strong>.eu</strong>. Internationalised domains (IDNs) are shown where they exist.</p>
        <table className="data-table">
          <thead>
            <tr>
              <th>Country</th>
              <th>Domain(s)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Albania</td><td>.al</td></tr>
            <tr><td>American Samoa</td><td>.as</td></tr>
            <tr><td>Andorra</td><td>.ad</td></tr>
            <tr><td>Argentina</td><td>.ar</td></tr>
            <tr><td>Australia</td><td>.au</td></tr>
            <tr><td>Austria</td><td>.at, .eu</td></tr>
            <tr><td>Bangladesh</td><td>.bd, .বাংলা</td></tr>
            <tr><td>Belarus</td><td>.by</td></tr>
            <tr><td>Belgium</td><td>.be, .eu</td></tr>
            <tr><td>Bhutan</td><td>.bt</td></tr>
            <tr><td>Bolivia</td><td>.bo</td></tr>
            <tr><td>Bosnia and Herzegovina</td><td>.ba</td></tr>
            <tr><td>Botswana</td><td>.bw</td></tr>
            <tr><td>Brazil</td><td>.br</td></tr>
            <tr><td>Bulgaria</td><td>.bg, .eu, .бг, .ею</td></tr>
            <tr><td>Cambodia</td><td>.kh</td></tr>
            <tr><td>Canada</td><td>.ca</td></tr>
            <tr><td>Chile</td><td>.cl</td></tr>
            <tr><td>Christmas Island</td><td>.cx</td></tr>
            <tr><td>Colombia</td><td>.co</td></tr>
            <tr><td>Costa Rica</td><td>.cr</td></tr>
            <tr><td>Croatia</td><td>.hr, .eu</td></tr>
            <tr><td>Curaçao</td><td>.cw</td></tr>
            <tr><td>Cyprus</td><td>.cy, .eu</td></tr>
            <tr><td>Czech Republic</td><td>.cz, .eu</td></tr>
            <tr><td>Denmark</td><td>.dk, .eu</td></tr>
            <tr><td>Dominican Republic</td><td>.do</td></tr>
            <tr><td>Ecuador</td><td>.ec</td></tr>
            <tr><td>Estonia</td><td>.ee, .eu</td></tr>
            <tr><td>Eswatini</td><td>.sz</td></tr>
            <tr><td>Faroe Islands</td><td>.fo</td></tr>
            <tr><td>Finland</td><td>.fi, .eu</td></tr>
            <tr><td>France</td><td>.fr, .eu</td></tr>
            <tr><td>Germany</td><td>.de, .eu</td></tr>
            <tr><td>Ghana</td><td>.gh</td></tr>
            <tr><td>Gibraltar</td><td>.gi</td></tr>
            <tr><td>Greece</td><td>.gr, .eu, .ελ</td></tr>
            <tr><td>Greenland</td><td>.gl</td></tr>
            <tr><td>Guam</td><td>.gu</td></tr>
            <tr><td>Guatemala</td><td>.gt</td></tr>
            <tr><td>Hungary</td><td>.hu, .eu</td></tr>
            <tr><td>Iceland</td><td>.is</td></tr>
            <tr><td>India</td><td>.in, .बھارत, .भारत, .ভারত, .ਭਾਰਤ, .ભારત, .ଭାରତ, .இந்தியா, .భారత్, .ಭಾರತ, .ഭാരതം</td></tr>
            <tr><td>Indonesia</td><td>.id</td></tr>
            <tr><td>Ireland</td><td>.ie, .eu</td></tr>
            <tr><td>Isle of Man</td><td>.im</td></tr>
            <tr><td>Israel</td><td>.il</td></tr>
            <tr><td>Italy</td><td>.it, .eu</td></tr>
            <tr><td>Japan</td><td>.jp</td></tr>
            <tr><td>Jersey</td><td>.je</td></tr>
            <tr><td>Jordan</td><td>.jo, .الاردن</td></tr>
            <tr><td>Kazakhstan</td><td>.kz</td></tr>
            <tr><td>Kenya</td><td>.ke</td></tr>
            <tr><td>Kyrgyzstan</td><td>.kg</td></tr>
            <tr><td>Laos</td><td>.la, .ລາວ</td></tr>
            <tr><td>Latvia</td><td>.lv, .eu</td></tr>
            <tr><td>Lesotho</td><td>.ls</td></tr>
            <tr><td>Liechtenstein</td><td>.li</td></tr>
            <tr><td>Lithuania</td><td>.lt, .eu</td></tr>
            <tr><td>Luxembourg</td><td>.lu, .eu</td></tr>
            <tr><td>Madagascar</td><td>.mg</td></tr>
            <tr><td>Malaysia</td><td>.my, .مليسيا</td></tr>
            <tr><td>Malta</td><td>.mt, .eu</td></tr>
            <tr><td>Mexico</td><td>.mx</td></tr>
            <tr><td>Monaco</td><td>.mc</td></tr>
            <tr><td>Mongolia</td><td>.mn, .мон</td></tr>
            <tr><td>Montenegro</td><td>.me</td></tr>
            <tr><td>Namibia</td><td>.na</td></tr>
            <tr><td>Nepal</td><td>.np</td></tr>
            <tr><td>Netherlands</td><td>.nl, .eu</td></tr>
            <tr><td>New Zealand</td><td>.nz</td></tr>
            <tr><td>Nigeria</td><td>.ng</td></tr>
            <tr><td>North Macedonia</td><td>.mk, .мкд</td></tr>
            <tr><td>Northern Mariana Islands</td><td>.mp</td></tr>
            <tr><td>Norway</td><td>.no</td></tr>
            <tr><td>Palestine</td><td>.ps</td></tr>
            <tr><td>Panama</td><td>.pa</td></tr>
            <tr><td>Paraguay</td><td>.py</td></tr>
            <tr><td>Peru</td><td>.pe</td></tr>
            <tr><td>Philippines</td><td>.ph</td></tr>
            <tr><td>Poland</td><td>.pl, .eu</td></tr>
            <tr><td>Portugal</td><td>.pt, .eu</td></tr>
            <tr><td>Puerto Rico</td><td>.pr</td></tr>
            <tr><td>Qatar</td><td>.qa</td></tr>
            <tr><td>Romania</td><td>.ro, .eu</td></tr>
            <tr><td>Russia</td><td>.ru, .рф</td></tr>
            <tr><td>Rwanda</td><td>.rw</td></tr>
            <tr><td>San Marino</td><td>.sm</td></tr>
            <tr><td>São Tomé and Príncipe</td><td>.st</td></tr>
            <tr><td>Senegal</td><td>.sn</td></tr>
            <tr><td>Serbia</td><td>.rs, .срб</td></tr>
            <tr><td>Singapore</td><td>.sg</td></tr>
            <tr><td>Slovakia</td><td>.sk, .eu</td></tr>
            <tr><td>Slovenia</td><td>.si, .eu</td></tr>
            <tr><td>South Africa</td><td>.za</td></tr>
            <tr><td>South Korea</td><td>.kr, .한국</td></tr>
            <tr><td>Spain</td><td>.es, .eu</td></tr>
            <tr><td>Sri Lanka</td><td>.lk, .இலங்கை, .ලංකා</td></tr>
            <tr><td>Sweden</td><td>.se, .eu</td></tr>
            <tr><td>Switzerland</td><td>.ch, .swiss</td></tr>
            <tr><td>Taiwan</td><td>.tw, .台湾, .台灣</td></tr>
            <tr><td>Thailand</td><td>.th, .ไทย</td></tr>
            <tr><td>Tunisia</td><td>.tn, .تونس</td></tr>
            <tr><td>Turkey</td><td>.tr</td></tr>
            <tr><td>Uganda</td><td>.ug</td></tr>
            <tr><td>Ukraine</td><td>.ua, .укр</td></tr>
            <tr><td>United Arab Emirates</td><td>.ae, .امارات</td></tr>
            <tr><td>United Kingdom</td><td>.uk</td></tr>
            <tr><td>United States</td><td>.us</td></tr>
            <tr><td>United States Virgin Islands</td><td>.vi</td></tr>
            <tr><td>Uruguay</td><td>.uy</td></tr>
            <tr><td>Vietnam</td><td>.vn</td></tr>
            <tr><td>Åland</td><td>.ax</td></tr>
          </tbody>
        </table>
      </>
    ),
  },
  'license-plate': {
    id: 'license-plate',
    title: 'License Plate',
    description: 'License plates have distinctive colors and formats.',
    content: null,
  },
  'car-meta': {
    id: 'car-meta',
    title: 'Car Meta',
    description: 'Google Street View car metadata can reveal location information.',
    content: null,
  },
  contribute: {
    id: 'contribute',
    title: 'Contribute',
    description: 'Have a great GeoGuessr tip or clue? Share it with the community! Fill out the form below to add a new hint to our knowledge base. Your contribution will be immediately visible on the corresponding category page.',
    content: null,
  },
  github: {
    id: 'github',
    title: 'GitHub',
    description: 'This project is open source and hosted on GitHub.',
    content: (
      <>
        <h2>Repository</h2>
        <p>Visit our <a href="https://github.com/blurryface027/geo-tips" target="_blank" rel="noopener noreferrer">GitHub repository</a> to contribute or report issues.</p>
        <h2>Contributing</h2>
        <p>We welcome contributions from the community. Please read our contribution guidelines before submitting a pull request.</p>
      </>
    ),
  },

  // Countries
  // Western Europe
  andorra: { id: 'andorra', title: '🇦🇩 Andorra', description: 'Tips and visual clues for identifying Andorra in GeoGuessr.', content: null },
  austria: { id: 'austria', title: '🇦🇹 Austria', description: 'Tips and visual clues for identifying Austria in GeoGuessr.', content: null },
  belgium: { id: 'belgium', title: '🇧🇪 Belgium', description: 'Tips and visual clues for identifying Belgium in GeoGuessr.', content: null },
  france: { id: 'france', title: '🇫🇷 France', description: 'Tips and visual clues for identifying France in GeoGuessr.', content: null },
  germany: { id: 'germany', title: '🇩🇪 Germany', description: 'Tips and visual clues for identifying Germany in GeoGuessr.', content: null },
  greece: { id: 'greece', title: '🇬🇷 Greece', description: 'Tips and visual clues for identifying Greece in GeoGuessr.', content: null },
  ireland: { id: 'ireland', title: '🇮🇪 Ireland', description: 'Tips and visual clues for identifying Ireland in GeoGuessr.', content: null },
  'isle-of-man': { id: 'isle-of-man', title: '🇮🇲 Isle of Man', description: 'Tips and visual clues for identifying Isle of Man in GeoGuessr.', content: null },
  italy: { id: 'italy', title: '🇮🇹 Italy', description: 'Tips and visual clues for identifying Italy in GeoGuessr.', content: null },
  luxembourg: { id: 'luxembourg', title: '🇱🇺 Luxembourg', description: 'Tips and visual clues for identifying Luxembourg in GeoGuessr.', content: null },
  malta: { id: 'malta', title: '🇲🇹 Malta', description: 'Tips and visual clues for identifying Malta in GeoGuessr.', content: null },
  monaco: { id: 'monaco', title: '🇲🇨 Monaco', description: 'Tips and visual clues for identifying Monaco in GeoGuessr.', content: null },
  netherlands: { id: 'netherlands', title: '🇳🇱 Netherlands', description: 'Tips and visual clues for identifying Netherlands in GeoGuessr.', content: null },
  portugal: { id: 'portugal', title: '🇵🇹 Portugal', description: 'Tips and visual clues for identifying Portugal in GeoGuessr.', content: null },
  spain: { id: 'spain', title: '🇪🇸 Spain', description: 'Tips and visual clues for identifying Spain in GeoGuessr.', content: null },
  switzerland: { id: 'switzerland', title: '🇨🇭 Switzerland', description: 'Tips and visual clues for identifying Switzerland in GeoGuessr.', content: null },
  uk: { id: 'uk', title: '🇬🇧 United Kingdom (UK)', description: 'Tips and visual clues for identifying United Kingdom (UK) in GeoGuessr.', content: null },

  // Eastern Europe
  albania: { id: 'albania', title: '🇦🇱 Albania', description: 'Tips and visual clues for identifying Albania in GeoGuessr.', content: null },
  bulgaria: { id: 'bulgaria', title: '🇧🇬 Bulgaria', description: 'Tips and visual clues for identifying Bulgaria in GeoGuessr.', content: null },
  croatia: { id: 'croatia', title: '🇭🇷 Croatia', description: 'Tips and visual clues for identifying Croatia in GeoGuessr.', content: null },
  'czech-republic': { id: 'czech-republic', title: '🇨🇿 Czech Republic', description: 'Tips and visual clues for identifying Czech Republic in GeoGuessr.', content: null },
  hungary: { id: 'hungary', title: '🇭🇺 Hungary', description: 'Tips and visual clues for identifying Hungary in GeoGuessr.', content: null },
  montenegro: { id: 'montenegro', title: '🇲🇪 Montenegro', description: 'Tips and visual clues for identifying Montenegro in GeoGuessr.', content: null },
  'north-macedonia': { id: 'north-macedonia', title: '🇲🇰 North Macedonia', description: 'Tips and visual clues for identifying North Macedonia in GeoGuessr.', content: null },
  poland: { id: 'poland', title: '🇵🇱 Poland', description: 'Tips and visual clues for identifying Poland in GeoGuessr.', content: null },
  romania: { id: 'romania', title: '🇷🇴 Romania', description: 'Tips and visual clues for identifying Romania in GeoGuessr.', content: null },
  russia: { id: 'russia', title: '🇷🇺 Russia', description: 'Tips and visual clues for identifying Russia in GeoGuessr.', content: null },
  serbia: { id: 'serbia', title: '🇷🇸 Serbia', description: 'Tips and visual clues for identifying Serbia in GeoGuessr.', content: null },
  slovakia: { id: 'slovakia', title: '🇸🇰 Slovakia', description: 'Tips and visual clues for identifying Slovakia in GeoGuessr.', content: null },
  slovenia: { id: 'slovenia', title: '🇸🇮 Slovenia', description: 'Tips and visual clues for identifying Slovenia in GeoGuessr.', content: null },
  ukraine: { id: 'ukraine', title: '🇺🇦 Ukraine', description: 'Tips and visual clues for identifying Ukraine in GeoGuessr.', content: null },

  // Nordics
  denmark: { id: 'denmark', title: '🇩🇰 Denmark', description: 'Tips and visual clues for identifying Denmark in GeoGuessr.', content: null },
  'faroe-islands': { id: 'faroe-islands', title: '🇫🇴 Faroe Islands', description: 'Tips and visual clues for identifying Faroe Islands in GeoGuessr.', content: null },
  finland: { id: 'finland', title: '🇫🇮 Finland', description: 'Tips and visual clues for identifying Finland in GeoGuessr.', content: null },
  greenland: { id: 'greenland', title: '🇬🇱 Greenland', description: 'Tips and visual clues for identifying Greenland in GeoGuessr.', content: null },
  iceland: { id: 'iceland', title: '🇮🇸 Iceland', description: 'Tips and visual clues for identifying Iceland in GeoGuessr.', content: null },
  norway: { id: 'norway', title: '🇳🇴 Norway', description: 'Tips and visual clues for identifying Norway in GeoGuessr.', content: null },
  sweden: { id: 'sweden', title: '🇸🇪 Sweden', description: 'Tips and visual clues for identifying Sweden in GeoGuessr.', content: null },

  // Baltics
  estonia: { id: 'estonia', title: '🇪🇪 Estonia', description: 'Tips and visual clues for identifying Estonia in GeoGuessr.', content: null },
  latvia: { id: 'latvia', title: '🇱🇻 Latvia', description: 'Tips and visual clues for identifying Latvia in GeoGuessr.', content: null },
  lithuania: { id: 'lithuania', title: '🇱🇹 Lithuania', description: 'Tips and visual clues for identifying Lithuania in GeoGuessr.', content: null },

  // Latin America
  argentina: { id: 'argentina', title: '🇦🇷 Argentina', description: 'Tips and visual clues for identifying Argentina in GeoGuessr.', content: null },
  bolivia: { id: 'bolivia', title: '🇧🇴 Bolivia', description: 'Tips and visual clues for identifying Bolivia in GeoGuessr.', content: null },
  brazil: { id: 'brazil', title: '🇧🇷 Brazil', description: 'Tips and visual clues for identifying Brazil in GeoGuessr.', content: null },
  chile: { id: 'chile', title: '🇨🇱 Chile', description: 'Tips and visual clues for identifying Chile in GeoGuessr.', content: null },
  colombia: { id: 'colombia', title: '🇨🇴 Colombia', description: 'Tips and visual clues for identifying Colombia in GeoGuessr.', content: null },
  'costa-rica': { id: 'costa-rica', title: '🇨🇷 Costa Rica', description: 'Tips and visual clues for identifying Costa Rica in GeoGuessr.', content: null },
  curacao: { id: 'curacao', title: '🇨🇼 Curaçao', description: 'Tips and visual clues for identifying Curaçao in GeoGuessr.', content: null },
  'dominican-republic': { id: 'dominican-republic', title: '🇩🇴 Dominican Republic', description: 'Tips and visual clues for identifying Dominican Republic in GeoGuessr.', content: null },
  ecuador: { id: 'ecuador', title: '🇪🇨 Ecuador', description: 'Tips and visual clues for identifying Ecuador in GeoGuessr.', content: null },
  guatemala: { id: 'guatemala', title: '🇬🇹 Guatemala', description: 'Tips and visual clues for identifying Guatemala in GeoGuessr.', content: null },
  mexico: { id: 'mexico', title: '🇲🇽 Mexico', description: 'Tips and visual clues for identifying Mexico in GeoGuessr.', content: null },
  panama: { id: 'panama', title: '🇵🇦 Panama', description: 'Tips and visual clues for identifying Panama in GeoGuessr.', content: null },
  peru: { id: 'peru', title: '🇵🇪 Peru', description: 'Tips and visual clues for identifying Peru in GeoGuessr.', content: null },
  'puerto-rico': { id: 'puerto-rico', title: '🇵🇷 Puerto Rico', description: 'Tips and visual clues for identifying Puerto Rico in GeoGuessr.', content: null },
  'vi-islands': { id: 'vi-islands', title: '🇻🇮 U.S. Virgin Islands', description: 'Tips and visual clues for identifying U.S. Virgin Islands in GeoGuessr.', content: null },
  uruguay: { id: 'uruguay', title: '🇺🇾 Uruguay', description: 'Tips and visual clues for identifying Uruguay in GeoGuessr.', content: null },

  // North America
  bermuda: { id: 'bermuda', title: '🇧🇲 Bermuda', description: 'Tips and visual clues for identifying Bermuda in GeoGuessr.', content: null },
  canada: { id: 'canada', title: '🇨🇦 Canada', description: 'Tips and visual clues for identifying Canada in GeoGuessr.', content: null },
  usa: { id: 'usa', title: '🇺🇸 United States of America (USA)', description: 'Tips and visual clues for identifying United States of America (USA) in GeoGuessr.', content: null },

  // South & South-East Asia
  bangladesh: { id: 'bangladesh', title: '🇧🇩 Bangladesh', description: 'Tips and visual clues for identifying Bangladesh in GeoGuessr.', content: null },
  bhutan: { id: 'bhutan', title: '🇧🇹 Bhutan', description: 'Tips and visual clues for identifying Bhutan in GeoGuessr.', content: null },
  cambodia: { id: 'cambodia', title: '🇰🇭 Cambodia', description: 'Tips and visual clues for identifying Cambodia in GeoGuessr.', content: null },
  'christmas-island': { id: 'christmas-island', title: '🇨🇽 Christmas Island', description: 'Tips and visual clues for identifying Christmas Island in GeoGuessr.', content: null },
  india: { id: 'india', title: '🇮🇳 India', description: 'Tips and visual clues for identifying India in GeoGuessr.', content: null },
  indonesia: { id: 'indonesia', title: '🇮🇩 Indonesia', description: 'Tips and visual clues for identifying Indonesia in GeoGuessr.', content: null },
  laos: { id: 'laos', title: '🇱🇦 Laos', description: 'Tips and visual clues for identifying Laos in GeoGuessr.', content: null },
  malaysia: { id: 'malaysia', title: '🇲🇾 Malaysia', description: 'Tips and visual clues for identifying Malaysia in GeoGuessr.', content: null },
  pakistan: { id: 'pakistan', title: '🇵🇰 Pakistan', description: 'Tips and visual clues for identifying Pakistan in GeoGuessr.', content: null },
  philippines: { id: 'philippines', title: '🇵🇭 Philippines', description: 'Tips and visual clues for identifying Philippines in GeoGuessr.', content: null },
  singapore: { id: 'singapore', title: '🇸🇬 Singapore', description: 'Tips and visual clues for identifying Singapore in GeoGuessr.', content: null },
  'sri-lanka': { id: 'sri-lanka', title: '🇱🇰 Sri Lanka', description: 'Tips and visual clues for identifying Sri Lanka in GeoGuessr.', content: null },
  thailand: { id: 'thailand', title: '🇹🇭 Thailand', description: 'Tips and visual clues for identifying Thailand in GeoGuessr.', content: null },
  vietnam: { id: 'vietnam', title: '🇻🇳 Vietnam', description: 'Tips and visual clues for identifying Vietnam in GeoGuessr.', content: null },

  // Rest of Asia
  china: { id: 'china', title: '🇨🇳 China', description: 'Tips and visual clues for identifying China in GeoGuessr.', content: null },
  hongkong: { id: 'hongkong', title: '🇭🇰 Hong Kong', description: 'Tips and visual clues for identifying Hong Kong in GeoGuessr.', content: null },
  japan: { id: 'japan', title: '🇯🇵 Japan', description: 'Tips and visual clues for identifying Japan in GeoGuessr.', content: null },
  kazakhstan: { id: 'kazakhstan', title: '🇰🇿 Kazakhstan', description: 'Tips and visual clues for identifying Kazakhstan in GeoGuessr.', content: null },
  kyrgyzstan: { id: 'kyrgyzstan', title: '🇰🇬 Kyrgyzstan', description: 'Tips and visual clues for identifying Kyrgyzstan in GeoGuessr.', content: null },
  mongolia: { id: 'mongolia', title: '🇲🇳 Mongolia', description: 'Tips and visual clues for identifying Mongolia in GeoGuessr.', content: null },
  southkorea: { id: 'southkorea', title: '🇰🇷 South Korea', description: 'Tips and visual clues for identifying South Korea in GeoGuessr.', content: null },
  taiwan: { id: 'taiwan', title: '🇹🇼 Taiwan', description: 'Tips and visual clues for identifying Taiwan in GeoGuessr.', content: null },

  // Oceania
  'american-samoa': { id: 'american-samoa', title: '🇦🇸 American Samoa', description: 'Tips and visual clues for identifying American Samoa in GeoGuessr.', content: null },
  australia: { id: 'australia', title: '🇦🇺 Australia', description: 'Tips and visual clues for identifying Australia in GeoGuessr.', content: null },
  guam: { id: 'guam', title: '🇬🇺 Guam', description: 'Tips and visual clues for identifying Guam in GeoGuessr.', content: null },
  newzealand: { id: 'newzealand', title: '🇳🇿 New Zealand', description: 'Tips and visual clues for identifying New Zealand in GeoGuessr.', content: null },
  'mariana-islands': { id: 'mariana-islands', title: '🇲🇵 Northern Mariana Islands', description: 'Tips and visual clues for identifying Northern Mariana Islands in GeoGuessr.', content: null },
  'us-minor-islands': { id: 'us-minor-islands', title: '🇺🇲 U.S. Minor Outlying Islands', description: 'Tips and visual clues for identifying U.S. Minor Outlying Islands in GeoGuessr.', content: null },

  // Africa
  botswana: { id: 'botswana', title: '🇧🇼 Botswana', description: 'Tips and visual clues for identifying Botswana in GeoGuessr.', content: null },
  eswatini: { id: 'eswatini', title: '🇸🇿 Eswatini', description: 'Tips and visual clues for identifying Eswatini in GeoGuessr.', content: null },
  ghana: { id: 'ghana', title: '🇬🇭 Ghana', description: 'Tips and visual clues for identifying Ghana in GeoGuessr.', content: null },
  kenya: { id: 'kenya', title: '🇰🇪 Kenya', description: 'Tips and visual clues for identifying Kenya in GeoGuessr.', content: null },
  lesotho: { id: 'lesotho', title: '🇱🇸 Lesotho', description: 'Tips and visual clues for identifying Lesotho in GeoGuessr.', content: null },
  madagascar: { id: 'madagascar', title: '🇲🇬 Madagascar', description: 'Tips and visual clues for identifying Madagascar in GeoGuessr.', content: null },
  nigeria: { id: 'nigeria', title: '🇳🇬 Nigeria', description: 'Tips and visual clues for identifying Nigeria in GeoGuessr.', content: null },
  reunion: { id: 'reunion', title: '🇷🇪 Réunion', description: 'Tips and visual clues for identifying Réunion in GeoGuessr.', content: null },
  rwanda: { id: 'rwanda', title: '🇷🇼 Rwanda', description: 'Tips and visual clues for identifying Rwanda in GeoGuessr.', content: null },
  senegal: { id: 'senegal', title: '🇸🇳 Senegal', description: 'Tips and visual clues for identifying Senegal in GeoGuessr.', content: null },
  southafrica: { id: 'southafrica', title: '🇿🇦 South Africa', description: 'Tips and visual clues for identifying South Africa in GeoGuessr.', content: null },
  uganda: { id: 'uganda', title: '🇺🇬 Uganda', description: 'Tips and visual clues for identifying Uganda in GeoGuessr.', content: null },

  // Middle East
  israel: { id: 'israel', title: '🇮🇱 Israel', description: 'Tips and visual clues for identifying Israel in GeoGuessr.', content: null },
  jordan: { id: 'jordan', title: '🇯🇴 Jordan', description: 'Tips and visual clues for identifying Jordan in GeoGuessr.', content: null },
  palestine: { id: 'palestine', title: '🇵🇸 Palestine', description: 'Tips and visual clues for identifying Palestine in GeoGuessr.', content: null },
  qatar: { id: 'qatar', title: '🇶🇦 Qatar', description: 'Tips and visual clues for identifying Qatar in GeoGuessr.', content: null },
  tunisia: { id: 'tunisia', title: '🇹🇳 Tunisia', description: 'Tips and visual clues for identifying Tunisia in GeoGuessr.', content: null },
  turkey: { id: 'turkey', title: '🇹🇷 Turkey', description: 'Tips and visual clues for identifying Turkey in GeoGuessr.', content: null },
  uae: { id: 'uae', title: '🇦🇪 United Arab Emirates (UAE)', description: 'Tips and visual clues for identifying United Arab Emirates (UAE) in GeoGuessr.', content: null },
};

export const regions: Region[] = [
  { id: 'western-europe', label: 'Western Europe', pages: ['andorra', 'austria', 'belgium', 'france', 'germany', 'greece', 'ireland', 'isle-of-man', 'italy', 'luxembourg', 'malta', 'monaco', 'netherlands', 'portugal', 'spain', 'switzerland', 'uk'] },
  { id: 'eastern-europe', label: 'Eastern Europe', pages: ['albania', 'bulgaria', 'croatia', 'czech-republic', 'hungary', 'montenegro', 'north-macedonia', 'poland', 'romania', 'russia', 'serbia', 'slovakia', 'slovenia', 'ukraine'] },
  { id: 'nordics', label: 'Nordics', pages: ['denmark', 'faroe-islands', 'finland', 'greenland', 'iceland', 'norway', 'sweden'] },
  { id: 'baltics', label: 'Baltics', pages: ['estonia', 'latvia', 'lithuania'] },
  { id: 'latin-america', label: 'Latin America', pages: ['argentina', 'bolivia', 'brazil', 'chile', 'colombia', 'costa-rica', 'curacao', 'dominican-republic', 'ecuador', 'guatemala', 'mexico', 'panama', 'peru', 'puerto-rico', 'vi-islands', 'uruguay'] },
  { id: 'north-america', label: 'North America', pages: ['bermuda', 'canada', 'usa'] },
  { id: 'south-east-asia', label: 'South & South-East Asia', pages: ['bangladesh', 'bhutan', 'cambodia', 'christmas-island', 'india', 'indonesia', 'laos', 'malaysia', 'pakistan', 'philippines', 'singapore', 'sri-lanka', 'thailand', 'vietnam'] },
  { id: 'rest-of-asia', label: 'Rest of Asia', pages: ['china', 'hongkong', 'japan', 'kazakhstan', 'kyrgyzstan', 'mongolia', 'southkorea', 'taiwan'] },
  { id: 'oceania', label: 'Oceania', pages: ['american-samoa', 'australia', 'guam', 'newzealand', 'mariana-islands', 'us-minor-islands'] },
  { id: 'africa', label: 'Africa', pages: ['botswana', 'eswatini', 'ghana', 'kenya', 'lesotho', 'madagascar', 'nigeria', 'reunion', 'rwanda', 'senegal', 'southafrica', 'uganda'] },
  { id: 'middle-east', label: 'Middle East', pages: ['israel', 'jordan', 'palestine', 'qatar', 'tunisia', 'turkey', 'uae'] },
];

export const navCategories: NavCategory[] = [
  { id: 'visual-clues', label: 'Visual Clues', pages: ['language', 'sign', 'bollard', 'chevron', 'guardrail', 'pole', 'road-markings', 'vegetation', 'pavement', 'architecture'], isExpanded: true },
  { id: 'identifiers', label: 'Identifiers', pages: ['road-numbering', 'place-name', 'telephone', 'company', 'domain'], isExpanded: true },
  { id: 'vehicles', label: 'Vehicles', pages: ['license-plate', 'car-meta'], isExpanded: true },
  { id: 'resources', label: 'Resources', pages: ['contribute', 'github'], isExpanded: true },
];
