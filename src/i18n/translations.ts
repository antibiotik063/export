import { Language, ProductCategoryKey } from '../types';

export interface HomeCategoryItem {
  id: string;
  imageKey: 'sunflowerOil' | 'wheatGrains' | 'pulsesChickpeas' | 'halalDairy' | 'customSourcing';
  title: string;
  subtitle: string;
  specs: string;
  packaging: string;
  moq: string;
  ctaLabel: string;
}

export interface ProductSpecItem {
  id: string;
  category: Exclude<ProductCategoryKey, 'all'>;
  imageKey: 'sunflowerOil' | 'wheatGrains' | 'pulsesChickpeas' | 'halalDairy' | 'customSourcing';
  name: string;
  gradeLabel: string;
  gradeValue: string;
  specs: Array<{ label: string; value: string }>;
  packaging: string;
  moq: string;
  incoterms: string;
}

export interface TranslationSchema {
  dir: 'ltr' | 'rtl';
  langCode: string;
  brandName: string;
  brandLegal: string;
  nav: {
    home: string;
    products: string;
    logistics: string;
    requestQuote: string;
    menuOpen: string;
    menuClose: string;
  };
  hero: {
    originMarker: string;
    headline: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
    badges: [string, string, string];
  };
  homeCategories: {
    sectionTitle: string;
    sectionSubtitle: string;
    viewFullCatalog: string;
    packagingLabel: string;
    moqLabel: string;
    items: HomeCategoryItem[];
  };
  advantages: {
    sectionTitle: string;
    sectionSubtitle: string;
    items: Array<{
      number: string;
      title: string;
      description: string;
    }>;
  };
  quickQuote: {
    sectionTitle: string;
    sectionSubtitle: string;
    directCardTitle: string;
    directCardSubtitle: string;
    emailLabel: string;
    whatsappLabel: string;
    officeLabel: string;
    officeValue: string;
    moqNoteLabel: string;
    moqNoteValue: string;
  };
  productsPage: {
    eyebrow: string;
    title: string;
    subtitle: string;
    tabs: Record<ProductCategoryKey, string>;
    gradeTitle: string;
    packagingTitle: string;
    moqTitle: string;
    incotermsTitle: string;
    requestSpecBtn: string;
    items: ProductSpecItem[];
    procurementBanner: {
      eyebrow: string;
      title: string;
      description: string;
      highlights: string[];
      cta: string;
    };
  };
  logisticsPage: {
    eyebrow: string;
    title: string;
    subtitle: string;
    moqBannerLabel: string;
    moqBannerValue: string;
    corridorsTitle: string;
    corridorsSubtitle: string;
    incotermsLabel: string;
    incotermsList: Array<{ code: string; name: string; desc: string }>;
    hubs: Array<{
      code: string;
      hubName: string;
      region: string;
      mode: string;
      details: string;
    }>;
    paymentsBlock: {
      eyebrow: string;
      title: string;
      description: string;
      methods: Array<{ title: string; details: string }>;
    };
    workflowTitle: string;
    workflowSubtitle: string;
    workflowSteps: Array<{
      step: string;
      title: string;
      description: string;
    }>;
    contactsTitle: string;
    contactsSubtitle: string;
    companyDetailsTitle: string;
    companyNameLabel: string;
    companyNameValue: string;
    jurisdictionLabel: string;
    jurisdictionValue: string;
    emailLabel: string;
    phoneLabel: string;
    whatsappBtn: string;
    contactFormTitle: string;
  };
  form: {
    modalTitle: string;
    modalSubtitle: string;
    closeModal: string;
    nameLabel: string;
    namePlaceholder: string;
    companyLabel: string;
    companyPlaceholder: string;
    contactLabel: string;
    contactPlaceholder: string;
    productLabel: string;
    productPlaceholder: string;
    volumeLabel: string;
    volumePlaceholder: string;
    destinationLabel: string;
    destinationPlaceholder: string;
    notesLabel: string;
    notesPlaceholder: string;
    submitBtn: string;
    submittingBtn: string;
    validationError: string;
    successTitle: string;
    successMessage: string;
    sendWhatsAppBtn: string;
    newInquiryBtn: string;
    selectOptions: Array<{ id: string; label: string }>;
  };
  footer: {
    description: string;
    navTitle: string;
    contactTitle: string;
    corridorsTitle: string;
    corridorsSummary: string;
    copyright: string;
    jurisdiction: string;
  };
  whatsappDefaultMsg: string;
}

export const TRANSLATIONS: Record<Language, TranslationSchema> = {
  en: {
    dir: 'ltr',
    langCode: 'en',
    brandName: 'LLC Eurasia Technology',
    brandLegal: 'Russian Federation',
    nav: {
      home: 'Home',
      products: 'Products & Sourcing',
      logistics: 'Logistics & Contacts',
      requestQuote: 'Request Quote',
      menuOpen: 'Open menu',
      menuClose: 'Close menu',
    },
    hero: {
      originMarker: 'Russian Federation · Direct Exporter & Procurement Partner',
      headline: 'Direct Turnkey Export of Russian Food & Agricultural Commodities',
      subheadline:
        'Bulk supply of sunflower oil, milling wheat, calibrated pulses, and Halal dairy ingredients from Russia to Afghanistan, Iran, and Central Asia.',
      primaryCta: 'Request Price Quote',
      secondaryCta: 'Chat on WhatsApp',
      badges: [
        'MOQ: From 20 MT (1 Truck / 1 Container)',
        '100% Halal & Vet Certified',
        'DAP / CIF / FCA Terms',
      ],
    },
    homeCategories: {
      sectionTitle: 'Core Export Categories',
      sectionSubtitle:
        'Direct contracts from certified Russian oil extraction plants, grain elevators, and dairy processors with full export clearance.',
      viewFullCatalog: 'Explore All Specifications',
      packagingLabel: 'Packaging',
      moqLabel: 'MOQ',
      items: [
        {
          id: 'sunflower-oil',
          imageKey: 'sunflowerOil',
          title: 'Refined & Crude Sunflower Oil',
          subtitle: 'GOST 1129-2013 Certified',
          specs: '100% pure Russian sunflower oil; winterized deodorized refined or crude press grades.',
          packaging: 'PET 1L, 3L, 5L cartons · Flexitanks (21–23 MT)',
          moq: 'From 20 MT',
          ctaLabel: 'Get Quote',
        },
        {
          id: 'wheat-grains',
          imageKey: 'wheatGrains',
          title: 'Wheat & Milling Grains',
          subtitle: 'Food & Feed Grade',
          specs: 'Customizable protein (11.5%–14.5%), wet gluten, and falling number tailored to buyer specification.',
          packaging: 'Bulk wagons/containers · 50 kg PP bags',
          moq: 'From 20 MT',
          ctaLabel: 'Get Quote',
        },
        {
          id: 'pulses-legumes',
          imageKey: 'pulsesChickpeas',
          title: 'Pulses & Legumes',
          subtitle: 'Machine-Cleaned & Calibrated',
          specs: 'Calibrated Kabuli Chickpeas 7–9 mm, Whole & Split Yellow/Green Peas, Red & Green Lentils.',
          packaging: '25 kg / 50 kg PP woven bags · Big Bags',
          moq: 'From 20 MT',
          ctaLabel: 'Get Quote',
        },
        {
          id: 'halal-dairy',
          imageKey: 'halalDairy',
          title: 'Halal Dairy Ingredients',
          subtitle: 'Official Halal & Vet Control',
          specs: 'Halal Certified Skimmed Milk Powder (SMP 1.5%), Whole Milk Powder (WMP 26%), Demineralized Whey D-20 to D-90.',
          packaging: '25 kg multi-wall kraft bags with PE liner',
          moq: 'From 20 MT',
          ctaLabel: 'Get Quote',
        },
        {
          id: 'custom-sourcing',
          imageKey: 'customSourcing',
          title: 'Turnkey Custom Sourcing',
          subtitle: 'Procurement Agent in Russia',
          specs: 'Need any other food or industrial goods from Russia? We source, certify, consolidate, and export on demand.',
          packaging: 'Factory-sealed pallets · 20ft / 40ft containers · Tilt trucks',
          moq: 'From 20 MT',
          ctaLabel: 'Get Quote',
        },
      ],
    },
    advantages: {
      sectionTitle: 'Built for Cross-Border B2B Reliability',
      sectionSubtitle:
        'Every shipment is backed by state-accredited laboratory inspection, structured settlement corridors, and verified Eurasian transit lanes.',
      items: [
        {
          number: '01.',
          title: 'Official Halal & State Phytosanitary Control',
          description:
            'Every batch undergoes Rosselkhoznadzor veterinary and phytosanitary clearance alongside accredited Halal certification for dairy and food products.',
        },
        {
          number: '02.',
          title: 'Established Logistics Hubs',
          description:
            'Regular rail, road, and sea-rail dispatch to DAP Hairatan (Afghanistan), CIF Bandar Abbas (Iran), and DAP Tashkent (Uzbekistan / Central Asia).',
        },
        {
          number: '03.',
          title: 'Flexible Payment Solutions via UAE & CIS Hubs',
          description:
            'Seamless B2B settlements including Irrevocable L/C, T/T bank transfers, and structured cross-border clearing through verified UAE (Dubai) and CIS banking hubs.',
        },
        {
          number: '04.',
          title: 'Full Export Documentation & Customs Clearance',
          description:
            'Complete documentation package prepared in-house: ST-1 Certificate of Origin, Health & Halal Certificates, Lab Assay, CMR, and Bill of Lading.',
        },
      ],
    },
    quickQuote: {
      sectionTitle: 'Request a Commercial Offer (FCO / Proforma)',
      sectionSubtitle:
        'Specify your commodity, target Incoterm, and destination hub. Our export desk responds with verified pricing and transit lead times within 24 hours.',
      directCardTitle: 'Direct Export Desk',
      directCardSubtitle: 'Connect directly with LLC Eurasia Technology export managers in English, Russian, or Dari.',
      emailLabel: 'Official Email',
      whatsappLabel: 'WhatsApp / Direct Phone',
      officeLabel: 'Jurisdiction',
      officeValue: 'LLC Eurasia Technology · Russian Federation',
      moqNoteLabel: 'Minimum Order Quantity',
      moqNoteValue: 'From 20 Metric Tons (1 full truckload or 1 shipping container)',
    },
    productsPage: {
      eyebrow: 'Export Commodity Catalog',
      title: 'B2B Product Specifications & Custom Sourcing',
      subtitle:
        'Standardized Russian export grades and buyer-tailored commodity specifications ready for container, rail, or truck dispatch.',
      tabs: {
        all: 'All Commodities',
        oils: 'Oils & Fats',
        grains_pulses: 'Grains & Pulses',
        halal_dairy: 'Halal Dairy',
        custom_sourcing: 'Custom Sourcing',
      },
      gradeTitle: 'Grade & Standard',
      packagingTitle: 'Packaging Options',
      moqTitle: 'Minimum Order',
      incotermsTitle: 'Delivery Terms',
      requestSpecBtn: 'Request Spec & Price',
      items: [
        {
          id: 'refined-sunflower-oil',
          category: 'oils',
          imageKey: 'sunflowerOil',
          name: 'Refined Deodorized Sunflower Oil (Grade P / Premium)',
          gradeLabel: 'Quality Standard',
          gradeValue: 'GOST 1129-2013 · Winterized, Clear',
          specs: [
            { label: 'Free Fatty Acid (FFA)', value: 'Max 0.15%' },
            { label: 'Peroxide Value', value: 'Max 2.0 meq/kg' },
            { label: 'Moisture & Volatiles', value: 'Max 0.10%' },
            { label: 'Shelf Life', value: '12–18 Months' },
          ],
          packaging: 'PET Bottles 1L, 2L, 3L, 5L (in export cartons) · Flexitanks (21–23 MT)',
          moq: '20 MT (1 Container / 1 Truck)',
          incoterms: 'FCA / FOB / CIF / DAP',
        },
        {
          id: 'crude-sunflower-oil',
          category: 'oils',
          imageKey: 'sunflowerOil',
          name: 'Crude Unrefined Sunflower Oil (First Press)',
          gradeLabel: 'Quality Standard',
          gradeValue: 'GOST 1129-2013 · Industrial Refining Grade',
          specs: [
            { label: 'Acid Value', value: 'Max 1.5–4.0 mg KOH/g' },
            { label: 'Moisture & Impurities', value: 'Max 0.20%' },
            { label: 'Phosphorus Content', value: 'Max 0.10%' },
            { label: 'Flash Point', value: 'Min 225 °C' },
          ],
          packaging: 'Flexitanks (21–23 MT) · Rail Tank Cars · ISO Tanks',
          moq: '20 MT (1 Flexitank Container)',
          incoterms: 'FCA / FOB / CIF / DAP',
        },
        {
          id: 'milling-wheat',
          category: 'grains_pulses',
          imageKey: 'wheatGrains',
          name: 'Russian Milling & Feed Wheat (Customizable Specs)',
          gradeLabel: 'Quality Standard',
          gradeValue: 'GOST 9353-2016 · Grade 3, 4 & Feed',
          specs: [
            { label: 'Protein Content', value: '11.5% – 14.5% (Tailored to buyer spec)' },
            { label: 'Moisture', value: 'Max 13.5% – 14.0%' },
            { label: 'Test Weight', value: '750 – 790 g/L' },
            { label: 'Foreign Matter', value: 'Max 2.0%' },
          ],
          packaging: '50 kg PP Woven Bags · Big Bags (1,000 kg) · Bulk Hopper Wagons / Containers',
          moq: '20 MT (1 Truck / 1 Container)',
          incoterms: 'FCA / FOB / CIF / DAP',
        },
        {
          id: 'calibrated-chickpeas',
          category: 'grains_pulses',
          imageKey: 'pulsesChickpeas',
          name: 'Calibrated Kabuli Chickpeas (7–9 mm)',
          gradeLabel: 'Calibration',
          gradeValue: '7 mm · 8 mm · 9 mm Machine-Sorted',
          specs: [
            { label: 'Purity', value: 'Min 99.0% – 99.5%' },
            { label: 'Moisture', value: 'Max 12.0% – 13.0%' },
            { label: 'Damaged / Broken', value: 'Max 1.5%' },
            { label: 'Color', value: 'Uniform Natural Cream' },
          ],
          packaging: '25 kg / 50 kg PP Woven Bags · 1,000 kg Big Bags',
          moq: '20 MT (1 Truck / 1 Container)',
          incoterms: 'FCA / FOB / CIF / DAP',
        },
        {
          id: 'peas-lentils',
          category: 'grains_pulses',
          imageKey: 'pulsesChickpeas',
          name: 'Yellow & Green Peas, Red & Green Lentils',
          gradeLabel: 'Processing',
          gradeValue: 'Whole & Split · Double Color-Sorted',
          specs: [
            { label: 'Purity', value: 'Min 99.0%' },
            { label: 'Moisture', value: 'Max 13.5%' },
            { label: 'Admixture', value: 'Max 0.5%' },
            { label: 'Crop', value: 'Current Harvest, Non-GMO' },
          ],
          packaging: '25 kg / 50 kg PP Woven Bags · 1,000 kg Big Bags',
          moq: '20 MT (1 Truck / 1 Container)',
          incoterms: 'FCA / FOB / CIF / DAP',
        },
        {
          id: 'halal-smp-wmp',
          category: 'halal_dairy',
          imageKey: 'halalDairy',
          name: 'Halal Skimmed Milk Powder (SMP 1.5%) & WMP (26%)',
          gradeLabel: 'Certification',
          gradeValue: '100% Halal Certified · GOST 33629-2015',
          specs: [
            { label: 'Protein (SMP)', value: 'Min 34.0% (on SNF)' },
            { label: 'Fat Content', value: 'SMP Max 1.5% · WMP Min 26.0%' },
            { label: 'Moisture', value: 'Max 4.0%' },
            { label: 'Solubility Index', value: 'Max 0.2 ml' },
          ],
          packaging: '25 kg Multi-Wall Kraft Paper Bags with Food-Grade PE Inner Liner',
          moq: '20 MT (1 Truck / 1 Container)',
          incoterms: 'FCA / FOB / CIF / DAP',
        },
        {
          id: 'demineralized-whey',
          category: 'halal_dairy',
          imageKey: 'halalDairy',
          name: 'Halal Demineralized Whey Powder (D-20 to D-90)',
          gradeLabel: 'Demineralization',
          gradeValue: 'D-20 · D-40 · D-50 · D-70 · D-90',
          specs: [
            { label: 'Demineralization Rate', value: '20% to 90% per buyer formula' },
            { label: 'Protein', value: '11.0% – 13.0%' },
            { label: 'Lactose', value: '70.0% – 82.0%' },
            { label: 'Certification', value: 'Halal + State Veterinary Certificate' },
          ],
          packaging: '25 kg Multi-Wall Kraft Bags with PE Liner (Palletized or Loose)',
          moq: '20 MT (1 Truck / 1 Container)',
          incoterms: 'FCA / FOB / CIF / DAP',
        },
        {
          id: 'turnkey-custom-sourcing',
          category: 'custom_sourcing',
          imageKey: 'customSourcing',
          name: 'Turnkey Custom Commodity & Industrial Sourcing',
          gradeLabel: 'Scope',
          gradeValue: 'End-to-End Russian Federation Procurement',
          specs: [
            { label: 'Categories', value: 'Flour, Sugar, Confectionery, Oils, Industrial Inputs' },
            { label: 'Verification', value: 'Factory Audit, Pre-Shipment Lab & Photo Inspection' },
            { label: 'Consolidation', value: 'Multi-SKU Container & Truck Consolidation' },
            { label: 'Customs', value: 'Full Russian Export Customs & ST-1 / Halal Issuance' },
          ],
          packaging: 'Buyer-specified retail, bulk, or palletized export packaging',
          moq: '20 MT (1 Truck / 1 Container)',
          incoterms: 'FCA / FOB / CIF / DAP',
        },
      ],
      procurementBanner: {
        eyebrow: 'Dedicated Export Desk',
        title: 'Turnkey Procurement Agent in Russia',
        description:
          'International importers can delegate the complete sourcing cycle of any Russian food or industrial goods to LLC Eurasia Technology. We identify verified manufacturers, audit production lines, arrange independent SGS/lab and Halal certification, consolidate cargo, and manage customs clearance to your border.',
        highlights: [
          'Direct manufacturer pricing with transparent agency terms',
          'Independent pre-shipment lab & Halal certification',
          'Multi-factory cargo consolidation into 20 MT+ loads',
        ],
        cta: 'Request Custom Sourcing',
      },
    },
    logisticsPage: {
      eyebrow: 'Eurasian Transit & Trade Finance',
      title: 'Logistics Corridors, Payments & Direct Contacts',
      subtitle:
        'Reliable multimodal supply chains across Afghanistan, Iran, and Central Asia paired with compliant UAE and CIS banking settlement channels.',
      moqBannerLabel: 'Standard Minimum Order Quantity (MOQ)',
      moqBannerValue: 'From 20 Metric Tons (1 full truckload or 1 shipping container)',
      corridorsTitle: 'Key Delivery Hubs & Incoterms',
      corridorsSubtitle:
        'We operate under FCA, FOB, CIF, and DAP terms with regular dispatch schedules to primary regional border and port hubs.',
      incotermsLabel: 'Supported Incoterms 2020',
      incotermsList: [
        { code: 'FCA', name: 'Free Carrier', desc: 'Loaded at Russian factory or rail terminal' },
        { code: 'FOB', name: 'Free On Board', desc: 'Black Sea, Caspian, or Baltic ports' },
        { code: 'CIF', name: 'Cost, Insurance & Freight', desc: 'Sea & Caspian transit to port of destination' },
        { code: 'DAP', name: 'Delivered At Place', desc: 'Cleared to border rail/road terminal' },
      ],
      hubs: [
        {
          code: 'DAP HAIRATAN',
          hubName: 'Hairatan Border Hub',
          region: 'Afghanistan Transit Corridor',
          mode: 'Rail Wagons & Containerized Truck Freight',
          details:
            'Direct dispatch through Kazakhstan and Uzbekistan rail/road corridors to Hairatan terminal with complete transit customs paperwork.',
        },
        {
          code: 'CIF BANDAR ABBAS',
          hubName: 'Bandar Abbas Port',
          region: 'Iran & Persian Gulf Transit',
          mode: 'Caspian-Sea / Multimodal & Container Shipping',
          details:
            'Regular containerized and bulk vessel schedules serving Iranian importers and re-export corridors across the Persian Gulf.',
        },
        {
          code: 'DAP TASHKENT',
          hubName: 'Tashkent Logistics Hub',
          region: 'Uzbekistan & Central Asia',
          mode: 'Direct Rail Freight & Refrigerated/Dry Trucks',
          details:
            'Fast overland rail and truck transit from Southern Russia and Volga industrial regions directly to Tashkent and regional CIS hubs.',
        },
      ],
      paymentsBlock: {
        eyebrow: 'Cross-Border Settlement Infrastructure',
        title: 'Flexible Payment Solutions via UAE & CIS Banking Hubs',
        description:
          'LLC Eurasia Technology provides compliant, reliable international settlement pathways specifically structured for buyers in challenging corridors—eliminating banking friction while maintaining full contractual security.',
        methods: [
          {
            title: 'Irrevocable Letters of Credit (L/C)',
            details: 'Documentary L/Cs processed through partner correspondent banks for large-volume contracts.',
          },
          {
            title: 'T/T Bank Wire Transfers',
            details: 'Standard USD, EUR, AED, or RUB telegraphic transfers routed via verified UAE (Dubai) and CIS banking hubs.',
          },
          {
            title: 'Structured Trade Settlements',
            details: 'Tailored milestone payment schedules (deposit against Proforma + balance against Bill of Lading / CMR scan).',
          },
        ],
      },
      workflowTitle: 'Step-by-Step Export Workflow',
      workflowSubtitle: 'Transparent milestone execution from initial specification inquiry to border arrival.',
      workflowSteps: [
        {
          step: '01.',
          title: 'Inquiry & Specification',
          description:
            'Buyer submits product grade, packaging, volume (min. 20 MT), and destination hub. We issue a formal commercial offer within 24 hours.',
        },
        {
          step: '02.',
          title: 'Proforma & Payment',
          description:
            'Signed supply contract and Proforma Invoice issued; payment settled via verified UAE (Dubai) or CIS banking channels (T/T or L/C).',
        },
        {
          step: '03.',
          title: 'Lab & Halal Certification',
          description:
            'Production batch undergoes Rosselkhoznadzor vet/phyto control, lab quality testing, ST-1 Origin, and Halal certificate issuance.',
        },
        {
          step: '04.',
          title: 'Border Delivery',
          description:
            'Cargo dispatched by container, rail wagon, or truck with live tracking and full CMR / Bill of Lading packet to DAP or CIF hub.',
        },
      ],
      contactsTitle: 'Official Company Details & Direct Inquiry',
      contactsSubtitle: 'Reach our export department directly by email, WhatsApp, or the inquiry form below.',
      companyDetailsTitle: 'Corporate & Export Desk Details',
      companyNameLabel: 'Legal Entity',
      companyNameValue: 'LLC Eurasia Technology',
      jurisdictionLabel: 'Country of Registration',
      jurisdictionValue: 'Russian Federation',
      emailLabel: 'Official Email',
      phoneLabel: 'WhatsApp / Direct Phone',
      whatsappBtn: 'Open WhatsApp Chat',
      contactFormTitle: 'Contact Us',
    },
    form: {
      modalTitle: 'Request Price Quote',
      modalSubtitle: 'Receive an official FCO / Proforma quotation with current Russian export pricing and freight rates.',
      closeModal: 'Close modal',
      nameLabel: 'Full Name',
      namePlaceholder: 'e.g., Ahmad Mansoor',
      companyLabel: 'Company Name',
      companyPlaceholder: 'e.g., Balkh Trade & Logistics Ltd.',
      contactLabel: 'Email or WhatsApp Number',
      contactPlaceholder: 'e.g., +93 70 000 0000 or name@company.com',
      productLabel: 'Commodity / Service',
      productPlaceholder: 'Select commodity',
      volumeLabel: 'Estimated Quantity (MT)',
      volumePlaceholder: 'Min. 20 MT (e.g., 100 MT / 5 Containers)',
      destinationLabel: 'Destination Hub & Incoterm',
      destinationPlaceholder: 'e.g., DAP Hairatan, CIF Bandar Abbas, DAP Tashkent',
      notesLabel: 'Technical Specifications / Notes',
      notesPlaceholder: 'Protein level, packaging (PET, 25kg kraft, 50kg PP), Halal requirements, or custom goods...',
      submitBtn: 'Submit Price Inquiry',
      submittingBtn: 'Submitting Inquiry...',
      validationError: 'Please enter your name, company or contact details, and select a commodity.',
      successTitle: 'Inquiry Received',
      successMessage:
        'Thank you! Your inquiry has been received. Our export manager will contact you via WhatsApp/Email shortly.',
      sendWhatsAppBtn: 'Also Send This Inquiry via WhatsApp',
      newInquiryBtn: 'Submit Another Inquiry',
      selectOptions: [
        { id: 'refined-sunflower-oil', label: 'Refined Sunflower Oil (PET 1L–5L / Flexitanks)' },
        { id: 'crude-sunflower-oil', label: 'Crude Sunflower Oil (Bulk / Flexitanks)' },
        { id: 'milling-wheat', label: 'Wheat & Milling Grains (Custom Protein Spec)' },
        { id: 'calibrated-chickpeas', label: 'Calibrated Chickpeas (7–9 mm)' },
        { id: 'peas-lentils', label: 'Yellow & Green Peas / Lentils' },
        { id: 'halal-smp-wmp', label: 'Halal Milk Powder (SMP 1.5% / WMP 26%)' },
        { id: 'demineralized-whey', label: 'Halal Demineralized Whey (D-20 to D-90)' },
        { id: 'turnkey-custom-sourcing', label: 'Turnkey Custom Sourcing from Russia' },
      ],
    },
    footer: {
      description:
        'Direct turnkey export of Russian food, agricultural commodities, and Halal dairy ingredients to Afghanistan, Iran, and Central Asia.',
      navTitle: 'Navigation',
      contactTitle: 'Export Desk',
      corridorsTitle: 'Primary Corridors',
      corridorsSummary: 'DAP Hairatan · CIF Bandar Abbas · DAP Tashkent · MOQ from 20 MT',
      copyright: '© 2026 LLC Eurasia Technology. All rights reserved.',
      jurisdiction: 'Registered in the Russian Federation · B2B International Commodity Trade',
    },
    whatsappDefaultMsg: 'Hello LLC Eurasia Technology, I would like to request an export price quote.',
  },

  ru: {
    dir: 'ltr',
    langCode: 'ru',
    brandName: 'ООО «Евразия Технология»',
    brandLegal: 'Российская Федерация',
    nav: {
      home: 'Главная',
      products: 'Продукция и закупки',
      logistics: 'Логистика и контакты',
      requestQuote: 'Запросить цену',
      menuOpen: 'Открыть меню',
      menuClose: 'Закрыть меню',
    },
    hero: {
      originMarker: 'Российская Федерация · Прямой экспортер и закупочный агент',
      headline: 'Прямой экспорт российского продовольствия и сельхозпродукции под ключ',
      subheadline:
        'Оптовые поставки подсолнечного масла, продовольственной пшеницы, калиброванных бобовых и халяльных молочных ингредиентов из России в Афганистан, Иран и страны Центральной Азии.',
      primaryCta: 'Запросить коммерческое предложение',
      secondaryCta: 'Написать в WhatsApp',
      badges: [
        'MOQ: От 20 тонн (1 фура / 1 контейнер)',
        '100% Халяль и Вет/Фитоконтроль',
        'Условия DAP / CIF / FCA',
      ],
    },
    homeCategories: {
      sectionTitle: 'Основные экспортные категории',
      sectionSubtitle:
        'Прямые контракты с сертифицированными российскими МЭЗ, элеваторами и молочными комбинатами с полным таможенным оформлением.',
      viewFullCatalog: 'Все спецификации продукции',
      packagingLabel: 'Упаковка',
      moqLabel: 'Мин. партия',
      items: [
        {
          id: 'sunflower-oil',
          imageKey: 'sunflowerOil',
          title: 'Рафинированное и нерафинированное подсолнечное масло',
          subtitle: 'Качество по ГОСТ 1129-2013',
          specs: '100% российское подсолнечное масло: рафинированное дезодорированное вымороженное и прессовое наливное.',
          packaging: 'ПЭТ 1 л, 3 л, 5 л (в коробах) · Флекситанки (21–23 т)',
          moq: 'От 20 т',
          ctaLabel: 'Запросить цену',
        },
        {
          id: 'wheat-grains',
          imageKey: 'wheatGrains',
          title: 'Пшеница и зерновые культуры',
          subtitle: 'Продовольственная и фуражная',
          specs: 'Настраиваемый уровень протеина (11,5%–14,5%), клейковины и числа падения строго под спецификацию покупателя.',
          packaging: 'Навал (вагоны/контейнеры) · Мешки ПП 50 кг',
          moq: 'От 20 т',
          ctaLabel: 'Запросить цену',
        },
        {
          id: 'pulses-legumes',
          imageKey: 'pulsesChickpeas',
          title: 'Бобовые культуры',
          subtitle: 'Очистка и калибровка',
          specs: 'Калиброванный нут Кабули 7–9 мм, желтый и зеленый горох (целый/колотый), красная и зеленая чечевица.',
          packaging: 'Мешки ПП 25 кг / 50 кг · Биг-бэги',
          moq: 'От 20 т',
          ctaLabel: 'Запросить цену',
        },
        {
          id: 'halal-dairy',
          imageKey: 'halalDairy',
          title: 'Халяльные молочные ингредиенты',
          subtitle: 'Сертификация Халяль и Ветконтроль',
          specs: 'Сертифицированное Халяль СОМ 1,5%, СЦМ 26%, деминерализованная молочная сыворотка от D-20 до D-90.',
          packaging: 'Крафт-мешки 25 кг с полиэтиленовым вкладышем',
          moq: 'От 20 т',
          ctaLabel: 'Запросить цену',
        },
        {
          id: 'custom-sourcing',
          imageKey: 'customSourcing',
          title: 'Индивидуальный поиск и поставка под ключ',
          subtitle: 'Закупочный агент в России',
          specs: 'Нужны другие продовольственные или промышленные товары из России? Найдем, сертифицируем, консолидируем и экспортируем под запрос.',
          packaging: 'Паллеты · Контейнеры 20/40 фут · Еврофуры',
          moq: 'От 20 т',
          ctaLabel: 'Запросить цену',
        },
      ],
    },
    advantages: {
      sectionTitle: 'Надежность международных B2B-поставок',
      sectionSubtitle:
        'Каждая отгрузка сопровождается аккредитованной лабораторной проверкой, отлаженными платежными маршрутами и проверенной логистикой.',
      items: [
        {
          number: '01.',
          title: 'Сертификация Халяль и госконтроль Россельхознадзора',
          description:
            'Обязательный ветеринарный и фитосанитарный контроль каждой партии, а также официальная сертификация Халяль для молочной и пищевой продукции.',
        },
        {
          number: '02.',
          title: 'Отработанные логистические хабы',
          description:
            'Регулярные ж/д, авто и мультимодальные отгрузки на DAP Хайратон (Афганистан), CIF Бендер-Аббас (Иран) и DAP Ташкент (Узбекистан / ЦА).',
        },
        {
          number: '03.',
          title: 'Гибкие платежи через банковские хабы ОАЭ и СНГ',
          description:
            'Надежные международные расчеты: безотзывные аккредитивы (L/C), банковские переводы T/T и структурированные платежи через проверенные банки ОАЭ (Дубай) и СНГ.',
        },
        {
          number: '04.',
          title: 'Полное экспортное оформление и документы',
          description:
            'Подготовка полного пакета документов: сертификат происхождения СТ-1, сертификаты здоровья и Халяль, лабораторные протоколы, CMR и коносамент (B/L).',
        },
      ],
    },
    quickQuote: {
      sectionTitle: 'Запросить коммерческое предложение',
      sectionSubtitle:
        'Укажите интересующую продукцию, базис Инкотермс и пункт назначения. Экспортный отдел подготовит расчет цены и сроков доставки в течение 24 часов.',
      directCardTitle: 'Прямой контакт экспортного отдела',
      directCardSubtitle: 'Общение с менеджерами ООО «Евразия Технология» на русском, английском или дари.',
      emailLabel: 'Электронная почта',
      whatsappLabel: 'WhatsApp / Прямой телефон',
      officeLabel: 'Юрисдикция',
      officeValue: 'ООО «Евразия Технология» · Российская Федерация',
      moqNoteLabel: 'Минимальный объем заказа',
      moqNoteValue: 'От 20 метрических тонн (1 еврофура или 1 морской контейнер)',
    },
    productsPage: {
      eyebrow: 'Экспортный каталог продукции',
      title: 'Спецификации B2B-товаров и закупки под заказ',
      subtitle:
        'Стандартизированные экспортные позиции по ГОСТ и индивидуальные спецификации под требования импортера с отгрузкой от 20 тонн.',
      tabs: {
        all: 'Все категории',
        oils: 'Масла и жиры',
        grains_pulses: 'Зерно и бобовые',
        halal_dairy: 'Халяль молочная продукция',
        custom_sourcing: 'Закупка под заказ',
      },
      gradeTitle: 'Стандарт и сорт',
      packagingTitle: 'Варианты фасовки',
      moqTitle: 'Мин. партия (MOQ)',
      incotermsTitle: 'Условия поставки',
      requestSpecBtn: 'Запросить спецификацию и цену',
      items: [
        {
          id: 'refined-sunflower-oil',
          category: 'oils',
          imageKey: 'sunflowerOil',
          name: 'Масло подсолнечное рафинированное дезодорированное (сорт П / Высший)',
          gradeLabel: 'Стандарт качества',
          gradeValue: 'ГОСТ 1129-2013 · Вымороженное',
          specs: [
            { label: 'Кислотное число', value: 'Не более 0,15–0,4 мг KOH/г' },
            { label: 'Перекисное число', value: 'Не более 2,0 ммоль/кг' },
            { label: 'Влага и летучие вещества', value: 'Не более 0,10%' },
            { label: 'Срок годности', value: '12–18 месяцев' },
          ],
          packaging: 'ПЭТ-бутылки 1 л, 2 л, 3 л, 5 л (в гофрокоробах) · Флекситанки (21–23 т)',
          moq: '20 т (1 контейнер / 1 фура)',
          incoterms: 'FCA / FOB / CIF / DAP',
        },
        {
          id: 'crude-sunflower-oil',
          category: 'oils',
          imageKey: 'sunflowerOil',
          name: 'Масло подсолнечное нерафинированное (сырое прессовое)',
          gradeLabel: 'Стандарт качества',
          gradeValue: 'ГОСТ 1129-2013 · Для промышленной рафинации',
          specs: [
            { label: 'Кислотное число', value: '1,5–4,0 мг KOH/г' },
            { label: 'Влага и примеси', value: 'Не более 0,20%' },
            { label: 'Фосфоросодержащие в-ва', value: 'Не более 0,10%' },
            { label: 'Температура вспышки', value: 'От 225 °C' },
          ],
          packaging: 'Флекситанки (21–23 т) · Ж/д цистерны · ISO-танки',
          moq: '20 т (1 контейнер-флекситанк)',
          incoterms: 'FCA / FOB / CIF / DAP',
        },
        {
          id: 'milling-wheat',
          category: 'grains_pulses',
          imageKey: 'wheatGrains',
          name: 'Пшеница продовольственная и фуражная (под спецификацию)',
          gradeLabel: 'Стандарт качества',
          gradeValue: 'ГОСТ 9353-2016 · 3, 4 класс и фураж',
          specs: [
            { label: 'Протеин (белок)', value: '11,5% – 14,5% (по запросу клиента)' },
            { label: 'Влажность', value: 'Не более 13,5% – 14,0%' },
            { label: 'Натура', value: '750 – 790 г/л' },
            { label: 'Сорная примесь', value: 'Не более 2,0%' },
          ],
          packaging: 'Мешки ПП 50 кг · Биг-бэги (1000 кг) · Навалом (хопперы / контейнеры)',
          moq: '20 т (1 фура / 1 контейнер)',
          incoterms: 'FCA / FOB / CIF / DAP',
        },
        {
          id: 'calibrated-chickpeas',
          category: 'grains_pulses',
          imageKey: 'pulsesChickpeas',
          name: 'Нут калиброванный (Кабули 7–9 мм)',
          gradeLabel: 'Калибр',
          gradeValue: '7 мм · 8 мм · 9 мм (машинная калибровка)',
          specs: [
            { label: 'Чистота', value: 'Мин. 99,0% – 99,5%' },
            { label: 'Влажность', value: 'Макс. 12,0% – 13,0%' },
            { label: 'Битые / поврежденные', value: 'Макс. 1,5%' },
            { label: 'Цвет', value: 'Однородный светло-кремовый' },
          ],
          packaging: 'Мешки ПП 25 кг / 50 кг · Биг-бэги 1000 кг',
          moq: '20 т (1 фура / 1 контейнер)',
          incoterms: 'FCA / FOB / CIF / DAP',
        },
        {
          id: 'peas-lentils',
          category: 'grains_pulses',
          imageKey: 'pulsesChickpeas',
          name: 'Горох желтый и зеленый, чечевица красная и зеленая',
          gradeLabel: 'Обработка',
          gradeValue: 'Целый и колотый · Двойная фотосепарация',
          specs: [
            { label: 'Чистота', value: 'Мин. 99,0%' },
            { label: 'Влажность', value: 'Макс. 13,5%' },
            { label: 'Примеси', value: 'Макс. 0,5%' },
            { label: 'Урожай', value: 'Текущий урожай, без ГМО' },
          ],
          packaging: 'Мешки ПП 25 кг / 50 кг · Биг-бэги 1000 кг',
          moq: '20 т (1 фура / 1 контейнер)',
          incoterms: 'FCA / FOB / CIF / DAP',
        },
        {
          id: 'halal-smp-wmp',
          category: 'halal_dairy',
          imageKey: 'halalDairy',
          name: 'Сухое молоко Халяль: СОМ (1,5%) и СЦМ (26%)',
          gradeLabel: 'Сертификация',
          gradeValue: '100% Халяль · ГОСТ 33629-2015',
          specs: [
            { label: 'Белок (СОМ)', value: 'Не менее 34,0%' },
            { label: 'Массовая доля жира', value: 'СОМ до 1,5% · СЦМ от 26,0%' },
            { label: 'Влага', value: 'Не более 4,0%' },
            { label: 'Индекс растворимости', value: 'Не более 0,2 мл' },
          ],
          packaging: 'Многослойные крафт-мешки 25 кг с пищевым ПЭ-вкладышем',
          moq: '20 т (1 фура / 1 контейнер)',
          incoterms: 'FCA / FOB / CIF / DAP',
        },
        {
          id: 'demineralized-whey',
          category: 'halal_dairy',
          imageKey: 'halalDairy',
          name: 'Деминерализованная молочная сыворотка Халяль (D-20 – D-90)',
          gradeLabel: 'Деминерализация',
          gradeValue: 'D-20 · D-40 · D-50 · D-70 · D-90',
          specs: [
            { label: 'Уровень деминерализации', value: 'От 20% до 90% под рецептуру' },
            { label: 'Белок', value: '11,0% – 13,0%' },
            { label: 'Лактоза', value: '70,0% – 82,0%' },
            { label: 'Сертификаты', value: 'Халяль + Ветеринарный сертификат' },
          ],
          packaging: 'Крафт-мешки 25 кг с ПЭ-вкладышем (на паллетах или навалом)',
          moq: '20 т (1 фура / 1 контейнер)',
          incoterms: 'FCA / FOB / CIF / DAP',
        },
        {
          id: 'turnkey-custom-sourcing',
          category: 'custom_sourcing',
          imageKey: 'customSourcing',
          name: 'Закупка продовольственных и промышленных товаров под ключ',
          gradeLabel: 'Формат работы',
          gradeValue: 'Комплексный закупочный агент в РФ',
          specs: [
            { label: 'Номенклатура', value: 'Мука, сахар, кондитерка, масла, стройматериалы и др.' },
            { label: 'Контроль', value: 'Аудит завода, отбор проб, фото/видео погрузки' },
            { label: 'Консолидация', value: 'Сборные партии от нескольких производителей' },
            { label: 'Оформление', value: 'Экспортное декларирование, СТ-1, Халяль, фито/вет' },
          ],
          packaging: 'Заводская упаковка, паллетирование, контейнеры 20/40 фут',
          moq: '20 т (1 фура / 1 контейнер)',
          incoterms: 'FCA / FOB / CIF / DAP',
        },
      ],
      procurementBanner: {
        eyebrow: 'Агентское сопровождение в РФ',
        title: 'Закупочный агент в России под ключ',
        description:
          'Зарубежные компании могут полностью делегировать ООО «Евразия Технология» поиск производителей, проверку фабрик, получение сертификатов Халяль и лабораторных анализов, консолидацию груза и экспортную логистику любых российских товаров.',
        highlights: [
          'Прямые отгрузочные цены заводов-производителей',
          'Независимая предотгрузочная инспекция и Халяль-контроль',
          'Консолидация сборных грузов от 20 тонн',
        ],
        cta: 'Заказать подбор товара',
      },
    },
    logisticsPage: {
      eyebrow: 'Евразийская логистика и расчеты',
      title: 'Маршруты доставки, оплата и прямые контакты',
      subtitle:
        'Налаженные мультимодальные коридоры в Афганистан, Иран и Центральную Азию в сочетании с надежными расчетами через банки ОАЭ и СНГ.',
      moqBannerLabel: 'Минимальный объем отгрузки (MOQ)',
      moqBannerValue: 'От 20 метрических тонн (1 полная фура или 1 морской контейнер)',
      corridorsTitle: 'Ключевые логистические хабы и Инкотермс',
      corridorsSubtitle:
        'Работаем на условиях FCA, FOB, CIF и DAP с регулярными графиками отправки до основных пограничных и портовых терминалов.',
      incotermsLabel: 'Поддерживаемые условия Инкотермс 2020',
      incotermsList: [
        { code: 'FCA', name: 'Франко перевозчик', desc: 'Погрузка на заводе или ж/д станции в РФ' },
        { code: 'FOB', name: 'Свободно на борту', desc: 'Порты Черного, Каспийского или Балтийского морей' },
        { code: 'CIF', name: 'Стоимость, страхование и фрахт', desc: 'Морская доставка до порта назначения' },
        { code: 'DAP', name: 'Поставка в месте назначения', desc: 'Доставка до пограничного терминала' },
      ],
      hubs: [
        {
          code: 'DAP ХАЙРАТОН',
          hubName: 'Терминал Хайратон',
          region: 'Направление: Афганистан',
          mode: 'Ж/д вагоны и контейнерные автоперевозки',
          details:
            'Прямая отправка через транзитные коридоры Казахстана и Узбекистана до станции Хайратон с полным транзитным оформлением.',
        },
        {
          code: 'CIF БЕНДЕР-АББАС',
          hubName: 'Порт Бендер-Аббас',
          region: 'Направление: Иран и Персидский залив',
          mode: 'Каспийско-морские и контейнерные линии',
          details:
            'Регулярные судовые и контейнерные отправки для иранских импортеров и транзита по региону Персидского залива.',
        },
        {
          code: 'DAP ТАШКЕНТ',
          hubName: 'Логистический узел Ташкент',
          region: 'Направление: Узбекистан и Центральная Азия',
          mode: 'Прямые ж/д отправки и автотранспорт',
          details:
            'Оперативная наземная доставка из Поволжья и Юга России непосредственно в Ташкент и ключевые хабы Центральной Азии.',
        },
      ],
      paymentsBlock: {
        eyebrow: 'Инфраструктура международных расчетов',
        title: 'Гибкие платежные решения через банковские хабы ОАЭ и СНГ',
        description:
          'ООО «Евразия Технология» обеспечивает защищенные и отработанные механизмы оплаты для сложных торговых направлений — мы принимаем безотзывные аккредитивы (L/C), банковские переводы T/T и структурированные трансграничные платежи через проверенные банки-партнеры в ОАЭ (Дубай) и странах СНГ.',
        methods: [
          {
            title: 'Безотзывные аккредитивы (L/C)',
            details: 'Документарные аккредитивы через банки-корреспонденты для крупных контрактных поставок.',
          },
          {
            title: 'Банковские переводы (T/T)',
            details: 'Оплата в USD, EUR, AED или RUB через верифицированные расчетные счета в ОАЭ (Дубай) и СНГ.',
          },
          {
            title: 'Поэтапные расчеты по отгрузке',
            details: 'Согласованные графики оплаты: аванс по счету-проформе и баланс по скану коносамента / CMR.',
          },
        ],
      },
      workflowTitle: 'Пошаговый процесс экспорта',
      workflowSubtitle: 'Прозрачное исполнение каждого этапа от заявки до прибытия груза на границу.',
      workflowSteps: [
        {
          step: '01.',
          title: 'Заявка и спецификация',
          description:
            'Покупатель указывает сорт, фасовку, объем (от 20 т) и пункт доставки. Мы готовим официальное КП в течение 24 часов.',
        },
        {
          step: '02.',
          title: 'Контракт и оплата',
          description:
            'Подписание контракта и выставление Proforma Invoice; оплата через проверенные банковские хабы ОАЭ или СНГ (T/T или L/C).',
        },
        {
          step: '03.',
          title: 'Лаборатория и Халяль',
          description:
            'Партия проходит контроль Россельхознадзора, лабораторные испытания, оформление СТ-1 и официального сертификата Халяль.',
        },
        {
          step: '04.',
          title: 'Доставка на границу',
          description:
            'Отгрузка контейнером, вагоном или фурой с передачей полного комплекта документов (CMR / B/L) до терминала DAP или CIF.',
        },
      ],
      contactsTitle: 'Официальные реквизиты и прямая связь',
      contactsSubtitle: 'Свяжитесь с экспортным отделом по электронной почте, WhatsApp или через форму ниже.',
      companyDetailsTitle: 'Реквизиты компании и контакты',
      companyNameLabel: 'Юридическое лицо',
      companyNameValue: 'ООО «Евразия Технология»',
      jurisdictionLabel: 'Страна регистрации',
      jurisdictionValue: 'Российская Федерация',
      emailLabel: 'Электронная почта',
      phoneLabel: 'WhatsApp / Прямой телефон',
      whatsappBtn: 'Открыть чат в WhatsApp',
      contactFormTitle: 'Связаться с нами',
    },
    form: {
      modalTitle: 'Запрос коммерческого предложения',
      modalSubtitle: 'Получите официальный расчет стоимости товара и логистики из России до вашего терминала.',
      closeModal: 'Закрыть окно',
      nameLabel: 'Ваше имя',
      namePlaceholder: 'Например: Ахмад Мансур',
      companyLabel: 'Название компании',
      companyPlaceholder: 'Например: Balkh Trade & Logistics Ltd.',
      contactLabel: 'Email или номер WhatsApp',
      contactPlaceholder: 'Например: +7 987 000-00-00 или info@company.com',
      productLabel: 'Товар / Услуга',
      productPlaceholder: 'Выберите категорию товара',
      volumeLabel: 'Требуемый объем (тонн)',
      volumePlaceholder: 'От 20 т (например: 100 т / 5 контейнеров)',
      destinationLabel: 'Пункт назначения и Инкотермс',
      destinationPlaceholder: 'Например: DAP Хайратон, CIF Бендер-Аббас, DAP Ташкент',
      notesLabel: 'Требования к спецификации / Комментарий',
      notesPlaceholder: 'Уровень протеина, фасовка (ПЭТ, крафт-мешки 25 кг, ПП 50 кг), требования Халяль...',
      submitBtn: 'Отправить запрос',
      submittingBtn: 'Отправка заявки...',
      validationError: 'Пожалуйста, укажите ваше имя, контактные данные и выберите товар.',
      successTitle: 'Заявка успешно отправлена',
      successMessage:
        'Спасибо! Ваша заявка получена. Наш менеджер по экспорту свяжется с вами в ближайшее время по WhatsApp или Email.',
      sendWhatsAppBtn: 'Дублировать заявку в WhatsApp',
      newInquiryBtn: 'Отправить еще одну заявку',
      selectOptions: [
        { id: 'refined-sunflower-oil', label: 'Рафинированное подсолнечное масло (ПЭТ 1–5 л / Флекситанк)' },
        { id: 'crude-sunflower-oil', label: 'Нерафинированное подсолнечное масло (Налив / Флекситанк)' },
        { id: 'milling-wheat', label: 'Пшеница и зерновые (индивидуальный протеин)' },
        { id: 'calibrated-chickpeas', label: 'Калиброванный нут (7–9 мм)' },
        { id: 'peas-lentils', label: 'Горох желтый и зеленый / Чечевица' },
        { id: 'halal-smp-wmp', label: 'Сухое молоко Халяль (СОМ 1,5% / СЦМ 26%)' },
        { id: 'demineralized-whey', label: 'Деминерализованная сыворотка Халяль (D-20 – D-90)' },
        { id: 'turnkey-custom-sourcing', label: 'Индивидуальный поиск и закупка товаров в РФ' },
      ],
    },
    footer: {
      description:
        'Прямой экспорт российского продовольствия, сельхозпродукции и халяльных молочных ингредиентов в Афганистан, Иран и Центральную Азию.',
      navTitle: 'Навигация',
      contactTitle: 'Экспортный отдел',
      corridorsTitle: 'Основные маршруты',
      corridorsSummary: 'DAP Хайратон · CIF Бендер-Аббас · DAP Ташкент · От 20 тонн',
      copyright: '© 2026 ООО «Евразия Технология». Все права защищены.',
      jurisdiction: 'Зарегистрировано в Российской Федерации · Международная B2B-торговля',
    },
    whatsappDefaultMsg: 'Здравствуйте, ООО «Евразия Технология»! Хочу запросить экспортную цену.',
  },

  fa: {
    dir: 'rtl',
    langCode: 'fa-AF',
    brandName: 'شرکت «اوراسیا تکنالوژی»',
    brandLegal: 'فدراسیون روسیه',
    nav: {
      home: 'صفحه اصلی',
      products: 'محصولات و تأمین',
      logistics: 'لوجستیک و تماس',
      requestQuote: 'درخواست نرخ',
      menuOpen: 'باز کردن مینو',
      menuClose: 'بستن مینو',
    },
    hero: {
      originMarker: 'فدراسیون روسیه · صادرکننده مستقیم و شریک تدارکاتی',
      headline: 'صادرات مستقیم و کلیددر‌دست مواد غذایی و محصولات زراعتی روسیه',
      subheadline:
        'تأمین عمده روغن آفتاب‌پرست، گندم آسیابی، حبوبات سورت‌شده و مواد لبنی حلال از روسیه به افغانستان، ایران و آسیای مرکزی.',
      primaryCta: 'درخواست نرخ و پیش‌فاکتور',
      secondaryCta: 'گفتگو در واتساپ',
      badges: [
        'حداقل سفارش: از ۲۰ تن (۱ موتر / ۱ کانتینر)',
        '۱۰۰٪ تصدیق حلال و کنترول وترنری',
        'شرایط DAP / CIF / FCA',
      ],
    },
    homeCategories: {
      sectionTitle: 'بخش‌های اصلی صادرات',
      sectionSubtitle:
        'قراردادهای مستقیم با کارخانه‌های معتبر روغن‌کشی، سیلوهای غله و کارخانه‌های لبنیات روسیه با طی مراحل کامل گمرکی.',
      viewFullCatalog: 'مشاهده تمام مشخصات تخنیکی',
      packagingLabel: 'بسته‌بندی',
      moqLabel: 'حداقل سفارش',
      items: [
        {
          id: 'sunflower-oil',
          imageKey: 'sunflowerOil',
          title: 'روغن آفتاب‌پرست تصفیه‌شده و خام',
          subtitle: 'کیفیت معیاری GOST 1129-2013',
          specs: 'روغن خالص آفتاب‌پرست روسی؛ تصفیه‌شده بی‌بو (وینترایز) و یا روغن خام فله.',
          packaging: 'بوتل PET ۱، ۳ و ۵ لیتر در کارتن · فلکسی‌تانک (۲۱–۲۳ تن)',
          moq: 'از ۲۰ تن',
          ctaLabel: 'درخواست نرخ',
        },
        {
          id: 'wheat-grains',
          imageKey: 'wheatGrains',
          title: 'گندم آسیابی و غلات',
          subtitle: 'درجه خوراکی و علوفه‌ای',
          specs: 'امکان تنظیم میزان پروتئین (۱۱.۵٪ تا ۱۴.۵٪)، گلوتن و شاخص کیفیت مطابق سفارش خریدار.',
          packaging: 'فله (واگون/کانتینر) · بوجی PP ۵۰ کیلوگرام',
          moq: 'از ۲۰ تن',
          ctaLabel: 'درخواست نرخ',
        },
        {
          id: 'pulses-legumes',
          imageKey: 'pulsesChickpeas',
          title: 'حبوبات و بنشن سورت‌شده',
          subtitle: 'پاک‌کاری ماشینی و کالیبره‌شده',
          specs: 'نخود کابلی کالیبره ۷ تا ۹ میلی‌متر، ماش و نخود زرد/سبز (سالم و لپه)، عدس سرخ و سبز.',
          packaging: 'بوجی ۲۵ / ۵۰ کیلوگرام PP · بیگ‌بگ ۱۰۰۰ کیلوگرام',
          moq: 'از ۲۰ تن',
          ctaLabel: 'درخواست نرخ',
        },
        {
          id: 'halal-dairy',
          imageKey: 'halalDairy',
          title: 'مواد اولیه لبنی حلال',
          subtitle: 'تصدیق رسمی حلال و وترنری دولتی',
          specs: 'شیر خشک کم‌چرب حلال (SMP 1.5%)، شیر خشک پرچرب (WMP 26%)، پودر آب‌پنیر دمینرالیزه‌شده D-20 تا D-90.',
          packaging: 'خریطه‌های چندلایه کرافت ۲۵ کیلوگرام با پوشش داخلی PE',
          moq: 'از ۲۰ تن',
          ctaLabel: 'درخواست نرخ',
        },
        {
          id: 'custom-sourcing',
          imageKey: 'customSourcing',
          title: 'تأمین و تدارک سفارشی از روسیه',
          subtitle: 'نماینده تدارکات در روسیه',
          specs: 'به هر نوع مواد غذایی یا کالای صنعتی دیگر از روسیه نیاز دارید؟ ما خریداری، تصدیق، تجمیع و صادر می‌کنیم.',
          packaging: 'پالت‌های معیاری کارخانه · کانتینر ۲۰/۴۰ فوت · موتر باربری',
          moq: 'از ۲۰ تن',
          ctaLabel: 'درخواست نرخ',
        },
      ],
    },
    advantages: {
      sectionTitle: 'اعتماد و معیار در تجارت بین‌المللی B2B',
      sectionSubtitle:
        'هر محموله همراه با آزمایش لابراتواری معتبر، مسیرهای تصفیه مالی مطمئن و خطوط ترانزیتی شناخته‌شده در منطقه ارسال می‌شود.',
      items: [
        {
          number: '01.',
          title: 'تصدیق رسمی حلال و کنترول دولتی نباتی و وترنری',
          description:
            'تمامی محموله‌ها تحت بررسی دقیق وترنری و قرنطین نباتی روسیه (روس‌سلخوزنادزور) و تصدیق رسمی حلال برای محصولات لبنی و غذایی قرار می‌گیرند.',
        },
        {
          number: '02.',
          title: 'بنادر و شاهراه‌های لوجستیکی فعال',
          description:
            'ارسال منظم خط آهن، موتر و بحری به بندر حیرتان (افغانستان - DAP)، بندرعباس (ایران - CIF) و تاشکند (ازبکستان / آسیای مرکزی - DAP).',
        },
        {
          number: '03.',
          title: 'راه‌حل‌های انعطاف‌پذیر پرداخت از طریق بانک‌های امارات و CIS',
          description:
            'انجام مطمئن تصفیه حساب‌های بین‌المللی شامل اعتبار اسنادی غیرقابل برگشت (L/C)، حواله بانکی (T/T) و پرداخت‌های ساختاریافته از طریق بانک‌های معتبر امارات (دبی) و کشورهای CIS.',
        },
        {
          number: '04.',
          title: 'اسناد کامل صادراتی و ترخیص گمرکی',
          description:
            'تنظیم کامل اسناد صادراتی: تصدیق مبدأ ST-1، گواهی صحی و حلال، نتیجه لابراتوار، بارنامه CMR و بارنامه بحری (Bill of Lading).',
        },
      ],
    },
    quickQuote: {
      sectionTitle: 'درخواست نرخ تجاری و پیش‌فاکتور',
      sectionSubtitle:
        'نوع کالا، شرایط تحویل (Incoterm) و بندر مقصد را مشخص نمایید. بخش صادرات ما ظرف ۲۴ ساعت نرخ دقیق و زمان تحویل را ارسال می‌کند.',
      directCardTitle: 'ارتباط مستقیم با بخش صادرات',
      directCardSubtitle: 'با مدیران صادرات شرکت اوراسیا تکنالوژی به زبان‌های دری، انگلیسی و روسی در تماس شوید.',
      emailLabel: 'ایمیل رسمی',
      whatsappLabel: 'واتساپ / تماس مستقیم',
      officeLabel: 'ثبت قانونی',
      officeValue: 'LLC Eurasia Technology · فدراسیون روسیه',
      moqNoteLabel: 'حداقل مقدار سفارش (MOQ)',
      moqNoteValue: 'از ۲۰ تن متریک (۱ موتر باربری کامل یا ۱ کانتینر)',
    },
    productsPage: {
      eyebrow: 'کتالوگ محصولات صادراتی',
      title: 'مشخصات تخنیکی محصولات B2B و تدارک سفارشی',
      subtitle:
        'انواع کالاهای معیاری صادراتی روسیه و مشخصات سفارشی مطابق نیاز خریدار آماده بارگیری از طریق کانتینر، خط آهن و موتر.',
      tabs: {
        all: 'همه محصولات',
        oils: 'روغن و چربی‌ها',
        grains_pulses: 'غلات و حبوبات',
        halal_dairy: 'لبنیات حلال',
        custom_sourcing: 'تأمین سفارشی',
      },
      gradeTitle: 'معیار و درجه کیفیت',
      packagingTitle: 'نوع بسته‌بندی',
      moqTitle: 'حداقل سفارش',
      incotermsTitle: 'شرایط تحویل',
      requestSpecBtn: 'درخواست مشخصات و نرخ',
      items: [
        {
          id: 'refined-sunflower-oil',
          category: 'oils',
          imageKey: 'sunflowerOil',
          name: 'روغن آفتاب‌پرست تصفیه‌شده بی‌بو (درجه عالی / P)',
          gradeLabel: 'استاندارد کیفیت',
          gradeValue: 'GOST 1129-2013 · وینترایز و شفاف',
          specs: [
            { label: 'اسیدیته آزاد (FFA)', value: 'حداکثر ۰.۱۵٪' },
            { label: 'شاخص پراکسید', value: 'حداکثر ۲.۰ meq/kg' },
            { label: 'رطوبت و مواد فرار', value: 'حداکثر ۰.۱۰٪' },
            { label: 'مدت اعتبار', value: '۱۲ تا ۱۸ ماه' },
          ],
          packaging: 'بوتل PET ۱، ۲، ۳ و ۵ لیتر در کارتن صادراتی · فلکسی‌تانک (۲۱–۲۳ تن)',
          moq: '۲۰ تن (۱ کانتینر / ۱ موتر)',
          incoterms: 'FCA / FOB / CIF / DAP',
        },
        {
          id: 'crude-sunflower-oil',
          category: 'oils',
          imageKey: 'sunflowerOil',
          name: 'روغن آفتاب‌پرست خام تصفیه‌نشده (پرس اول)',
          gradeLabel: 'استاندارد کیفیت',
          gradeValue: 'GOST 1129-2013 · مخصوص تصفیه‌خانه‌ها',
          specs: [
            { label: 'عدد اسیدی', value: '۱.۵ تا ۴.۰ mg KOH/g' },
            { label: 'رطوبت و ناخالصی', value: 'حداکثر ۰.۲۰٪' },
            { label: 'مقدار فسفر', value: 'حداکثر ۰.۱۰٪' },
            { label: 'نقطه اشتعال', value: 'حداقل ۲۲۵ درجه سانتی‌گراد' },
          ],
          packaging: 'فلکسی‌تانک (۲۱–۲۳ تن) · واگون مخزنی · تانکر ISO',
          moq: '۲۰ تن (۱ کانتینر فلکسی‌تانک)',
          incoterms: 'FCA / FOB / CIF / DAP',
        },
        {
          id: 'milling-wheat',
          category: 'grains_pulses',
          imageKey: 'wheatGrains',
          name: 'گندم آسیابی و علوفه‌ای روسیه (مشخصات قابل تنظیم)',
          gradeLabel: 'استاندارد کیفیت',
          gradeValue: 'GOST 9353-2016 · درجه ۳، ۴ و علوفه‌ای',
          specs: [
            { label: 'میزان پروتئین', value: '۱۱.۵٪ تا ۱۴.۵٪ (مطابق سفارش خریدار)' },
            { label: 'رطوبت', value: 'حداکثر ۱۳.۵٪ – ۱۴.۰٪' },
            { label: 'وزن مخصوص (هکتولیتر)', value: '۷۵۰ تا ۷۹۰ گرم/لیتر' },
            { label: 'ناخالصی خارجی', value: 'حداکثر ۲.۰٪' },
          ],
          packaging: 'بوجی ۵۰ کیلوگرام PP · بیگ‌بگ (۱۰۰۰ کیلوگرام) · فله در واگون یا کانتینر',
          moq: '۲۰ تن (۱ موتر / ۱ کانتینر)',
          incoterms: 'FCA / FOB / CIF / DAP',
        },
        {
          id: 'calibrated-chickpeas',
          category: 'grains_pulses',
          imageKey: 'pulsesChickpeas',
          name: 'نخود کابلی کالیبره‌شده (سایز ۷ تا ۹ میلی‌متر)',
          gradeLabel: 'سایزبندی',
          gradeValue: '۷ میلی‌متر · ۸ میلی‌متر · ۹ میلی‌متر سورت ماشینی',
          specs: [
            { label: 'درجه خلوص', value: 'حداقل ۹۹.۰٪ – ۹۹.۵٪' },
            { label: 'رطوبت', value: 'حداکثر ۱۲.۰٪ – ۱۳.۰٪' },
            { label: 'دانه شکسته / آسیب‌دیده', value: 'حداکثر ۱.۵٪' },
            { label: 'رنگ', value: 'کرم طبیعی یکنواخت' },
          ],
          packaging: 'بوجی ۲۵ / ۵۰ کیلوگرام PP · بیگ‌بگ ۱۰۰۰ کیلوگرام',
          moq: '۲۰ تن (۱ موتر / ۱ کانتینر)',
          incoterms: 'FCA / FOB / CIF / DAP',
        },
        {
          id: 'peas-lentils',
          category: 'grains_pulses',
          imageKey: 'pulsesChickpeas',
          name: 'نخود زرد و سبز، عدس سرخ و سبز',
          gradeLabel: 'فرآوری',
          gradeValue: 'سالم و لپه · سورت لیزری دوگانه',
          specs: [
            { label: 'درجه خلوص', value: 'حداقل ۹۹.۰٪' },
            { label: 'رطوبت', value: 'حداکثر ۱۳.۵٪' },
            { label: 'ناخالصی', value: 'حداکثر ۰.۵٪' },
            { label: 'محصول', value: 'تولید فصل جاری، غیر تراریخته' },
          ],
          packaging: 'بوجی ۲۵ / ۵۰ کیلوگرام PP · بیگ‌بگ ۱۰۰۰ کیلوگرام',
          moq: '۲۰ تن (۱ موتر / ۱ کانتینر)',
          incoterms: 'FCA / FOB / CIF / DAP',
        },
        {
          id: 'halal-smp-wmp',
          category: 'halal_dairy',
          imageKey: 'halalDairy',
          name: 'شیر خشک حلال کم‌چرب (SMP 1.5%) و پرچرب (WMP 26%)',
          gradeLabel: 'تصدیق‌نامه',
          gradeValue: '۱۰۰٪ حلال · GOST 33629-2015',
          specs: [
            { label: 'پروتئین (SMP)', value: 'حداقل ۳۴.۰٪' },
            { label: 'میزان چربی', value: 'SMP حداکثر ۱.۵٪ · WMP حداقل ۲۶.۰٪' },
            { label: 'رطوبت', value: 'حداکثر ۴.۰٪' },
            { label: 'شاخص حلالیت', value: 'حداکثر ۰.۲ میلی‌لیتر' },
          ],
          packaging: 'خریطه‌های چندلایه کرافت ۲۵ کیلوگرام با پوشش داخلی PE مخصوص مواد غذایی',
          moq: '۲۰ تن (۱ موتر / ۱ کانتینر)',
          incoterms: 'FCA / FOB / CIF / DAP',
        },
        {
          id: 'demineralized-whey',
          category: 'halal_dairy',
          imageKey: 'halalDairy',
          name: 'پودر آب‌پنیر دمینرالیزه‌شده حلال (D-20 تا D-90)',
          gradeLabel: 'درجه دمینرالیزاسیون',
          gradeValue: 'D-20 · D-40 · D-50 · D-70 · D-90',
          specs: [
            { label: 'میزان دمینرالیزاسیون', value: '۲۰٪ تا ۹۰٪ مطابق فرمول خریدار' },
            { label: 'پروتئین', value: '۱۱.۰٪ – ۱۳.۰٪' },
            { label: 'لاکتوز', value: '۷۰.۰٪ – ۸۲.۰٪' },
            { label: 'اسناد', value: 'گواهی حلال + گواهی وترنری دولتی' },
          ],
          packaging: 'خریطه‌های کرافت ۲۵ کیلوگرام با لاینر داخلی PE',
          moq: '۲۰ تن (۱ موتر / ۱ کانتینر)',
          incoterms: 'FCA / FOB / CIF / DAP',
        },
        {
          id: 'turnkey-custom-sourcing',
          category: 'custom_sourcing',
          imageKey: 'customSourcing',
          name: 'تأمین و خرید سفارشی کالاهای غذایی و صنعتی در روسیه',
          gradeLabel: 'دامنه خدمات',
          gradeValue: 'نمایندگی تدارکات و صادرات کلیددر‌دست',
          specs: [
            { label: 'اقلام قابل تأمین', value: 'آرد، شکر، شیرینی‌جات، روغن، مواد اولیه صنعتی' },
            { label: 'بازرسی کیفیت', value: 'ارزیابی کارخانه، آزمایش لابراتواری و گزارش تصویری' },
            { label: 'تجمیع محموله', value: 'ترکیب چند قلم کالا در یک کانتینر یا موتر' },
            { label: 'امور گمرکی', value: 'ترخیص صادراتی روسیه و صدور ST-1 و حلال' },
          ],
          packaging: 'بسته‌بندی فابریکی، پالت‌گذاری، کانتینر ۲۰/۴۰ فوت و موتر چادری',
          moq: '۲۰ تن (۱ موتر / ۱ کانتینر)',
          incoterms: 'FCA / FOB / CIF / DAP',
        },
      ],
      procurementBanner: {
        eyebrow: 'خدمات تخصصی تدارکات',
        title: 'نماینده تدارکات کلیددر‌دست شما در روسیه',
        description:
          'خریداران بین‌المللی می‌توانند تمام مراحل جستجوی کارخانه، ارزیابی تولیدکننده، اخذ گواهی حلال و نتایج لابراتواری، بسته‌بندی و صادرات هر نوع کالای روسی را به شرکت اوراسیا تکنالوژی بسپارند.',
        highlights: [
          'قیمت مستقیم کارخانه با شرایط شفاف نمایندگی',
          'آزمایش مستقل پیش از ارسال و تصدیق حلال',
          'تجمیع محموله‌های ترکیبی از ۲۰ تن به بالا',
        ],
        cta: 'درخواست تأمین سفارشی',
      },
    },
    logisticsPage: {
      eyebrow: 'ترانزیت اوراسیا و مالی تجاری',
      title: 'مسیرهای تحویل، روش‌های پرداخت و تماس مستقیم',
      subtitle:
        'زنجیره تأمین مطمئن به مقصد افغانستان، ایران و آسیای مرکزی همراه با کانال‌های بانکی تائیدشده در امارات و کشورهای CIS.',
      moqBannerLabel: 'حداقل مقدار سفارش معیاری (MOQ)',
      moqBannerValue: 'از ۲۰ تن متریک (۱ موتر باربری کامل یا ۱ کانتینر)',
      corridorsTitle: 'بنادر کلیدی تحویل و شرایط اینکوترمز',
      corridorsSubtitle:
        'ارسال منظم تحت شرایط FCA، FOB، CIF و DAP به مهم‌ترین بنادر سرحدی و بحری منطقه.',
      incotermsLabel: 'شرایط تحویل پشتیبانی‌شده (Incoterms 2020)',
      incotermsList: [
        { code: 'FCA', name: 'تحویل به حمل‌کننده', desc: 'بارگیری در کارخانه یا ایستگاه خط آهن در روسیه' },
        { code: 'FOB', name: 'تحویل روی عرشه کشتی', desc: 'بنادر بحیره سیاه، خزر یا بالتیک' },
        { code: 'CIF', name: 'قیمت، بیمه و کرایه', desc: 'حمل بحری تا بندر مقصد' },
        { code: 'DAP', name: 'تحویل در محل توافق‌شده', desc: 'تحویل در ترمینال خط آهن یا گمرک سرحدی' },
      ],
      hubs: [
        {
          code: 'DAP حیرتان',
          hubName: 'بندر حیرتان (مرز افغانستان)',
          region: 'مسیر ترانزیتی افغانستان',
          mode: 'واگون خط آهن و موتر کانتینری',
          details:
            'ارسال مستقیم از مسیر خط آهن و جاده‌ای قزاقستان و ازبکستان تا ترمینال حیرتان با تکمیل کامل اسناد ترانزیتی.',
        },
        {
          code: 'CIF بندرعباس',
          hubName: 'اسکله شهید رجایی / بندرعباس',
          region: 'مسیر ایران و خلیج فارس',
          mode: 'کشتیرانی خزر، حمل ترکیبی و کانتینر',
          details:
            'برنامه‌های منظم کشتی‌های کانتینری و فله برای واردکنندگان ایران و ترانزیت به حوزه خلیج فارس.',
        },
        {
          code: 'DAP تاشکند',
          hubName: 'مرکز لوجستیکی تاشکند',
          region: 'ازبکستان و آسیای مرکزی',
          mode: 'خط آهن مستقیم و موترهای باربری',
          details:
            'انتقال سریع زمینی از مناطق صنعتی جنوب و ولگای روسیه مستقیماً به تاشکند و مراکز تجاری آسیای مرکزی.',
        },
      ],
      paymentsBlock: {
        eyebrow: 'ساختار پرداخت‌های بین‌المللی',
        title: 'راه‌حل‌های انعطاف‌پذیر پرداخت از طریق بانک‌های امارات و CIS',
        description:
          'شرکت اوراسیا تکنالوژی مسیرهای تصفیه حساب قانونی و مطمئن را ویژه بازارهای منطقه فراهم کرده است؛ شامل اعتبار اسنادی غیرقابل برگشت (L/C)، حواله بانکی (T/T) و پرداخت‌های ساختاریافته از طریق بانک‌های معتبر در امارات متحده عربی (دبی) و کشورهای CIS.',
        methods: [
          {
            title: 'اعتبار اسنادی غیرقابل برگشت (L/C)',
            details: 'پذیرش اعتبارات اسنادی از طریق بانک‌های همکار برای قراردادهای کلان تجاری.',
          },
          {
            title: 'حواله بانکی مستقیم (T/T)',
            details: 'تصفیه حساب به دالر، یورو، درهم امارات یا روبل از طریق حساب‌های معتبر در دبی و کشورهای CIS.',
          },
          {
            title: 'پرداخت مرحله‌ای بر اساس اسناد حمل',
            details: 'زمان‌بندی منعطف پرداخت (پیش‌پرداخت طبق پیش‌فاکتور و تصفیه نهایی پس از ارائه اسکن بارنامه / CMR).',
          },
        ],
      },
      workflowTitle: 'مراحل گام‌به‌گام صادرات',
      workflowSubtitle: 'اجرای شفاف قرارداد از ثبت درخواست اولیه تا تحویل بار در سرحد.',
      workflowSteps: [
        {
          step: '01.',
          title: 'ثبت درخواست و مشخصات',
          description:
            'خریدار نوع کالا، بسته‌بندی، مقدار (حداقل ۲۰ تن) و مقصد را ارسال می‌کند. ما ظرف ۲۴ ساعت نرخ رسمی ارائه می‌دهیم.',
        },
        {
          step: '02.',
          title: 'پیش‌فاکتور و پرداخت',
          description:
            'عقد قرارداد و صدور پیش‌فاکتور رسمی؛ تصفیه حساب از طریق بانک‌های معتبر امارات (دبی) یا CIS (به‌صورت T/T یا L/C).',
        },
        {
          step: '03.',
          title: 'لابراتوار و تصدیق حلال',
          description:
            'بررسی محموله توسط کنترول وترنری و نباتی روسیه، آزمایش کیفیت، صدور تصدیق مبدأ ST-1 و گواهی رسمی حلال.',
        },
        {
          step: '04.',
          title: 'تحویل در بندر / سرحد',
          description:
            'ارسال محموله با کانتینر، واگون یا موتر همراه با اسناد کامل CMR یا Bill of Lading تا مقصد DAP یا CIF.',
        },
      ],
      contactsTitle: 'مشخصات رسمی شرکت و تماس مستقیم',
      contactsSubtitle: 'از طریق ایمیل، واتساپ یا فورم زیر مستقیماً با بخش صادرات ما در ارتباط باشید.',
      companyDetailsTitle: 'مشخصات حقوقی و ارتباطی',
      companyNameLabel: 'نام شرکت',
      companyNameValue: 'LLC Eurasia Technology (اوراسیا تکنالوژی)',
      jurisdictionLabel: 'کشور ثبت',
      jurisdictionValue: 'فدراسیون روسیه',
      emailLabel: 'ایمیل رسمی',
      phoneLabel: 'واتساپ / تلفن مستقیم',
      whatsappBtn: 'شروع گفتگو در واتساپ',
      contactFormTitle: 'تماس با ما',
    },
    form: {
      modalTitle: 'درخواست نرخ و پیش‌فاکتور',
      modalSubtitle: 'نرخ به‌روز صادراتی روسیه همراه با کرایه حمل تا بندر مورد نظر خود را دریافت کنید.',
      closeModal: 'بستن پنجره',
      nameLabel: 'نام و تخلص',
      namePlaceholder: 'مثلاً: احمد منصور',
      companyLabel: 'نام شرکت تجارتی',
      companyPlaceholder: 'مثلاً: شرکت تجارتی و لوجستیکی بلخ',
      contactLabel: 'ایمیل یا شماره واتساپ',
      contactPlaceholder: 'مثلاً: +93 70 000 0000 یا email@company.com',
      productLabel: 'محصول / خدمات مورد نظر',
      productPlaceholder: 'انتخاب محصول',
      volumeLabel: 'مقدار مورد نیاز (تن)',
      volumePlaceholder: 'حداقل ۲۰ تن (مثلاً ۱۰۰ تن / ۵ کانتینر)',
      destinationLabel: 'بندر مقصد و شرایط تحویل',
      destinationPlaceholder: 'مثلاً: DAP حیرتان، CIF بندرعباس، DAP تاشکند',
      notesLabel: 'مشخصات تخنیکی / یادداشت',
      notesPlaceholder: 'درصد پروتئین، نوع بسته‌بندی (PET، کرافت ۲۵ کیلو، بوجی ۵۰ کیلو)، تصدیق حلال یا کالای سفارشی...',
      submitBtn: 'ارسال درخواست نرخ',
      submittingBtn: 'در حال ارسال...',
      validationError: 'لطفاً نام، معلومات تماس و نوع محصول مورد نظر خود را وارد نمایید.',
      successTitle: 'درخواست شما ثبت گردید',
      successMessage:
        'تشکر! درخواست شما دریافت شد. مدیر صادرات ما به‌زودی از طریق واتساپ یا ایمیل با شما تماس خواهد گرفت.',
      sendWhatsAppBtn: 'ارسال همزمان این درخواست به واتساپ',
      newInquiryBtn: 'ثبت درخواست جدید',
      selectOptions: [
        { id: 'refined-sunflower-oil', label: 'روغن آفتاب‌پرست تصفیه‌شده (PET ۱–۵ لیتر / فلکسی‌تانک)' },
        { id: 'crude-sunflower-oil', label: 'روغن آفتاب‌پرست خام (فله / فلکسی‌تانک)' },
        { id: 'milling-wheat', label: 'گندم آسیابی و غلات (پروتئین سفارشی)' },
        { id: 'calibrated-chickpeas', label: 'نخود کالیبره‌شده (۷ تا ۹ میلی‌متر)' },
        { id: 'peas-lentils', label: 'نخود زرد و سبز / عدس' },
        { id: 'halal-smp-wmp', label: 'شیر خشک حلال (SMP 1.5% / WMP 26%)' },
        { id: 'demineralized-whey', label: 'پودر آب‌پنیر دمینرالیزه‌شده حلال (D-20 تا D-90)' },
        { id: 'turnkey-custom-sourcing', label: 'تأمین و تدارک سفارشی از روسیه' },
      ],
    },
    footer: {
      description:
        'صادرات مستقیم و کلیددر‌دست مواد غذایی، غلات، حبوبات و لبنیات حلال روسیه به افغانستان، ایران و آسیای مرکزی.',
      navTitle: 'بخش‌های سایت',
      contactTitle: 'دفتر صادرات',
      corridorsTitle: 'مسیرهای اصلی',
      corridorsSummary: 'DAP حیرتان · CIF بندرعباس · DAP تاشکند · حداقل ۲۰ تن',
      copyright: '© ۲۰۲۶ LLC Eurasia Technology. تمامی حقوق محفوظ است.',
      jurisdiction: 'ثبت‌شده در فدراسیون روسیه · تجارت بین‌المللی B2B',
    },
    whatsappDefaultMsg: 'سلام به تیم اوراسیا تکنالوژی، می‌خواهم درخواست نرخ صادراتی بدهم.',
  },
};
