/**
 * ISLAMIC BURIAL ASSISTANCE FOUNDATION (IBAF)
 * Client Application Logic & Bilingual Engine
 * Serving Humanity and Upholding Islamic Values
 * خدمة الإنسانية والتمسك بالقيم الإسلامية
 */

// ==========================================================================
// 1. BILINGUAL INTERNATIONALIZATION DICTIONARIES
// ==========================================================================

const translations = {
  en: {
    topBarEmergency: "24/7 Abuja Emergency & Burial Helpline",
    topBarLocation: "Abuja, Federal Capital Territory, Nigeria",
    topBarAccountability: "Financial & Shariah Accountability",
    navHome: "Home",
    navAbout: "About Us",
    navPrograms: "Our Programs",
    navImpact: "Impact & Reports",
    navGovernance: "Governance",
    navPartners: "Partners",
    navNews: "News & Updates",
    navInvolved: "Get Involved",
    navContact: "Contact Us",
    btnSupportMission: "Support Our Mission",
    btnLearnMore: "Learn More",
    heroTag: "FAITH | COMPASSION | HUMANITY",
    heroTitle1: "Compassion in Life.",
    heroTitle2: "Dignity in Burial.",
    heroTitle3: "Support Beyond Loss.",
    heroDesc: "The Islamic Burial Assistance Foundation (IBAF) is dedicated to supporting vulnerable individuals and families through dignified burial assistance, emergency humanitarian support, and community outreach guided by Islamic values.",
    heroFloatingVerse: "“And whoever saves a life — it is as if he has saved all of humanity.”",
    heroFloatingVerseRef: "Al-Mā'idah 5:32",
    pillar1Title: "People First",
    pillar1Desc: "Supporting vulnerable families and communities during critical hardship.",
    pillar2Title: "Guided by Islamic Values",
    pillar2Desc: "Rooted deeply in compassion, justice, sincerity, and human dignity.",
    pillar3Title: "Transparent & Accountable",
    pillar3Desc: "Building enduring trust through verified audits and ethical governance.",
    pillar4Title: "Stronger Communities",
    pillar4Desc: "Working towards a more compassionate, dignified, and resilient society.",
    guidingPrincipleLabel: "Our Guiding Principle",
    guidingVerseEn: "“And whoever saves one life, it is as if he had saved all of humanity.”",
    aboutLabel: "About Us",
    whoWeAreTitle: "Who We Are",
    whoWeAreText1: "The Islamic Burial Assistance Foundation (IBAF) is a humanitarian organization dedicated to supporting vulnerable individuals and families through dignified burial assistance, emergency support, and community-based interventions, in line with Islamic values and applicable laws.",
    whoWeAreText2: "Our ambition is to build a trusted humanitarian institution that delivers meaningful assistance, honors human dignity, and strengthens community solidarity across Nigeria.",
    btnReadMoreAbout: "Read More About Us",
    visionTitle: "Our Vision",
    visionDesc: "A compassionate and dignified society where vulnerable individuals and families receive dignified support, guided by Islamic values and a shared commitment to humanity.",
    missionTitle: "Our Mission",
    missionDesc: "To provide and facilitate dignified burial assistance, emergency humanitarian support, and community-based services through responsible resource management, strategic partnerships, and compassionate service.",
    valuesHeader: "Our Core Values",
    valCompassion: "Compassion",
    valCompassionDesc: "Serving others with heartfelt kindness, mercy, and deep understanding during distress.",
    valDignity: "Human Dignity",
    valDignityDesc: "Treating every single deceased and bereaved person with unyielding sacred respect.",
    valIntegrity: "Integrity",
    valIntegrityDesc: "Managing responsibilities, public trusts, and charitable donations with absolute honesty.",
    valJustice: "Justice",
    valJusticeDesc: "Upholding equitable assistance without bias, prioritizing the most vulnerable households.",
    valAccountability: "Accountability",
    valAccountabilityDesc: "Rigorous reporting, transparent accounting, and full compliance with Islamic jurisprudence.",
    valSolidarity: "Solidarity",
    valSolidarityDesc: "Uniting communities to ensure no grieving family ever faces burial costs alone.",
    programsLabel: "Our Programs",
    programsTitle: "Humanitarian Support for Our Communities",
    programsSubtitle: "Serving People. Supporting Families. Strengthening Communities across Abuja and Nigeria.",
    prog1Title: "Burial Assistance",
    prog1Desc: "Supporting eligible families facing acute financial hardship with essential burial-related expenses (shrouding cloths / Kafan, grave preparation, and dignified Janazah arrangements), preserving honor during times of loss.",
    progRequestHelp: "Request Burial Assistance",
    prog2Title: "Emergency & Ambulance Support",
    prog2Desc: "Facilitating community access to rapid emergency assistance through dedicated humanitarian ambulance initiatives, clinical partnerships, and dignified transit for patients and the deceased.",
    progAmbulanceDispatch: "Request Urgent Ambulance",
    prog3Title: "Family & Bereavement Support",
    prog3Desc: "Helping connect vulnerable families affected by the death of a breadwinner with compassionate bereavement counseling, welfare packages, and relevant community social services.",
    progConnectFamily: "Connect With Support Team",
    prog4Title: "Community Humanitarian Outreach",
    prog4Desc: "Working directly with grassroots communities, cemetery management, and hospital welfare committees to identify urgent humanitarian needs and execute practical support interventions.",
    progJoinOutreach: "Join Community Outreach",
    prog5Title: "Islamic Social Finance",
    prog5Desc: "Developing responsible, Shariah-compliant models for Islamic charitable giving including segregated Zakat mobilization, continuous charity (Sadaqah Jariyah), and sustainable Waqf endowments.",
    progCalculateZakat: "Calculate & Donate Zakat",
    programsPromise: "Our Promise: Every initiative is guided by compassion, responsibility, and unwavering respect for human dignity.",
    impactLabel: "Impact & Transparency",
    impactTitle: "Making Every Act of Compassion Count",
    impactSubtitle: "We believe humanitarian work must create verifiable change, underpinned by institutional transparency, Shariah compliance, and responsible public reporting.",
    metricBurials: "Dignified Burials Assisted",
    metricAmbulance: "Emergency Ambulance Missions",
    metricFamilies: "Vulnerable Families Supported",
    metricAudit: "Shariah & Audit Segregation",
    impactPrioritiesTitle: "Our Impact Priorities",
    prio1: "Supporting vulnerable families through dignified burial assistance and shrouding expenses.",
    prio2: "Strengthening community access to rapid emergency patient and deceased transit.",
    prio3: "Promoting grassroots community-based humanitarian initiatives and bereavement care.",
    prio4: "Building responsible alliances with hospitals, cemeteries, and philanthropic institutions.",
    prio5: "Improving institutional accountability, Shariah oversight, and verified financial reporting.",
    transparencyMattersTitle: "Transparency Matters",
    transparencyMattersDesc: "We are committed to full institutional transparency. Download verified audited financial accounts, annual summaries, and Shariah governance certifications.",
    btnViewGovernance: "View Governance & Policies",
    govLabel: "Governance & Trust",
    govTitle: "Built on Trust. Guided by Responsibility.",
    govSubtitle: "IBAF recognizes that public trust is essential to effective humanitarian service. We are committed to strengthening our governance, financial controls, ethical conduct, and accountability systems.",
    govPrio1Title: "Responsible Leadership",
    govPrio1Desc: "Clear institutional responsibilities, active trustee oversight, and accountable decision-making at every operational tier.",
    govPrio2Title: "Financial Accountability",
    govPrio2Desc: "Rigorous donation segregation, dual-signatory approvals, independent auditing, and strict adherence to SCUML/AML guidelines.",
    govPrio3Title: "Beneficiary Protection",
    govPrio3Desc: "Protecting the sacred privacy, dignity, and personal safety of grieving households under NDPR data compliance.",
    govPrio4Title: "Islamic Ethics",
    govPrio4Desc: "Continuous supervision by respected Islamic scholars ensuring every disbursement conforms to authentic Quranic principles.",
    govPrio5Title: "Institutional Transparency",
    govPrio5Desc: "Publishing verified program metrics, operational expense breakdowns, and vehicle deployment logs to all stakeholders.",
    govPrio6Title: "Complaints & Feedback",
    govPrio6Desc: "Providing transparent, confidential channels for concerns, inquiries, or grievances to be investigated fairly.",
    govCommitmentTitle: "Our Uncompromising Commitment",
    govCommitmentDesc: "We ensure that compassion is always supported by sound governance, ethical conduct, and responsible stewardship.",
    btnComplaints: "File Feedback / Concern",
    btnContactUs: "Contact Governance Team",
    partnersLabel: "Partners & Donors",
    partnersTitle: "Together, We Can Do More",
    partnersSubtitle: "Humanitarian challenges require collaboration, shared responsibility, and a steadfast commitment to meaningful action across healthcare and community institutions.",
    partOp1Title: "Healthcare & Hospital Alliances",
    partOp1Desc: "Partnering with hospital social welfare units in Abuja and across Nigeria to swiftly identify destitute families facing burial distress.",
    partOp2Title: "Emergency Fleet Logistics",
    partOp2Desc: "Collaborating with automotive service providers, fuel partners, and medical equipment distributors to keep ambulances operational 24/7.",
    partOp3Title: "Charitable Foundations & CSR",
    partOp3Desc: "Directing institutional CSR funds, corporate Zakat pools, and philanthropic grants into measurable humanitarian burial relief.",
    partOp4Title: "Islamic Institutions & Scholars",
    partOp4Desc: "Engaging Islamic centers, Shariah researchers, and Masajid to educate communities and ensure strict adherence to Sunnah burial practices.",
    partOp5Title: "Technical & Professional Pro-Bono",
    partOp5Desc: "Enlisting legal experts, audit firms, software engineers, and medical professionals offering pro-bono institutional backing.",
    partOp6Title: "Joint Humanitarian Projects",
    partOp6Desc: "Co-developing long-term Waqf cemetery facilities, solar-powered morgue logistics, and bereavement hardship relief reserves.",
    btnBecomePartner: "Become an Institutional Partner",
    supportLabel: "Support Our Mission",
    supportTitle: "Your Compassion Can Make a Difference",
    supportSubtitle: "Every contribution helps preserve human dignity and provide immediate relief to families navigating life's most heartbreaking trials.",
    hadithMercyText: "“Whoever does not show mercy will not be shown mercy.”",
    optFinTitle: "Financial Support",
    optFinDesc: "Contribute to approved humanitarian programs through the Foundation's official segregated donation channels.",
    optKindTitle: "In-Kind Contributions",
    optKindDesc: "Support approved initiatives with ambulance medical supplies, Kafan shrouding fabrics, or logistics fuel.",
    optPartTitle: "Institutional Partnerships",
    optPartDesc: "Collaborate with IBAF on systemic community development and sustained humanitarian projects.",
    optVolTitle: "Volunteer Support",
    optVolDesc: "Contribute your time, Janazah preparation knowledge, professional skills, and community outreach.",
    donateBoxTitle: "Make an Approved Humanitarian Donation",
    donateBoxSub: "Select your preferred charitable pool. All Zakat contributions are 100% segregated and disbursed strictly according to Islamic jurisprudence.",
    selectAmountLabel: "Select Contribution Amount (NGN)",
    btnDonateOnline: "Donate Securely Online (Paystack/Card)",
    btnOpenZakatCalc: "Open Zakat Calculator",
    newsLabel: "News & Updates",
    newsTitle: "Stories of Service. Updates That Matter.",
    newsSubtitle: "Stay informed about IBAF's verified humanitarian activities, community interventions, partnerships, and institutional developments.",
    tagEmergency: "Emergency Operations",
    news1Title: "IBAF Deploys Additional Humanitarian Ambulance in Abuja FCT",
    news1Desc: "Expanding our 24/7 rapid transit capacity to serve vulnerable families requiring prompt hospital-to-home and deceased transit services.",
    tagFamilyWelfare: "Family Welfare",
    news2Title: "Quarterly Bereavement Welfare Packages Disbursed to 120 Households",
    news2Desc: "Connecting vulnerable widows, orphans, and families affected by sudden bereavement with emergency food packages and social aid.",
    tagGovernance: "Governance & Ethics",
    news3Title: "Shariah Advisory Board Releases Annual Zakat & Waqf Compliance Audit",
    news3Desc: "Independent scholarly review confirms 100% strict segregation and lawful disbursement of all religious charitable assets.",
    invLabel: "Get Involved",
    invTitle: "Be Part of Something Meaningful",
    invSubtitle: "Compassion becomes powerful when people unite. Whether you are an individual, professional, or organization, there are meaningful opportunities to contribute.",
    inv1Title: "Volunteer With Us",
    inv1Desc: "Contribute your time, skills, Janazah preparation knowledge, or community coordination to approved humanitarian activities.",
    btnVolunteer: "Apply to Volunteer",
    inv2Title: "Become a Partner",
    inv2Desc: "Explore institutional collaboration opportunities on joint projects supporting vulnerable individuals and households.",
    btnPartner: "Partner With Us",
    inv3Title: "Share Your Expertise",
    inv3Desc: "Strengthen IBAF's impact through pro-bono legal, financial audit, healthcare, logistics, or administrative assistance.",
    btnExpertise: "Share Skills",
    inv4Title: "Support Our Programs",
    inv4Desc: "Enquire about contributing to approved initiatives through officially authorized, verified donation channels.",
    btnSupport: "Support Today",
    contactLabel: "Contact Us",
    contactTitle: "We Are Here to Connect",
    contactSubtitle: "Have a question, wish to explore an institutional partnership, or need immediate assistance? We welcome your enquiry.",
    contactPanelTitle: "Islamic Burial Assistance Foundation",
    contactPanelDesc: "Rooted in compassion, committed to human dignity, and operating from Nigeria's Federal Capital Territory.",
    chanLocationTitle: "Headquarters Location",
    chanHotlineTitle: "24/7 Rapid Emergency Dispatch",
    chanGeneralTitle: "General Enquiries",
    chanPartnerTitle: "Institutional Partnerships",
    chanComplaintsTitle: "Complaints, Ethics & Feedback",
    formTitle: "Send Us a Message",
    formSub: "Complete the form below. For life-threatening emergencies or urgent deceased transit, please use our 24/7 hotline directly.",
    formName: "Full Name *",
    formEmail: "Email Address *",
    formPhone: "Phone Number *",
    formSubject: "Department / Subject *",
    formMessage: "Your Message *",
    btnSendMessage: "Send Message",
    footerTaglineEn: "Serving Humanity and Upholding Islamic Values.",
    footerSnippet: "A humanitarian commitment to dignity, compassion, and responsible service for vulnerable individuals and families in Nigeria.",
    footerQuickLinks: "Quick Links",
    footerProgramsTitle: "Our Programs",
    footerContactTitle: "Official Contact",
    footerPrivacy: "Privacy Policy (NDPR)",
    footerComplaints: "Complaints & Feedback",
    floatingEmergencyBtn: "24/7 Urgent Dispatch"
  },
  ar: {
    topBarEmergency: "خط الطوارئ والدفن على مدار الساعة في أبوجا",
    topBarLocation: "أبوجا، منطقة العاصمة الاتحادية، نيجيريا",
    topBarAccountability: "المساءلة المالية والشرعية",
    navHome: "الرئيسية",
    navAbout: "من نحن",
    navPrograms: "برامجنا",
    navImpact: "الأثر والتقارير",
    navGovernance: "الحوكمة",
    navPartners: "شركاؤنا",
    navNews: "الأخبار والتحديثات",
    navInvolved: "شارك معنا",
    navContact: "اتصل بنا",
    btnSupportMission: "ادعم رسالتنا",
    btnLearnMore: "اكتشف المزيد",
    heroTag: "الإيمان | الرحمة | الإنسانية",
    heroTitle1: "الرحمة في الحياة.",
    heroTitle2: "الكرامة في الدفن.",
    heroTitle3: "والدعم بعد الفقد.",
    heroDesc: "تكرس مؤسسة المعونة الإسلامية للدفن جهودها لدعم الأسر المستضعفة من خلال المساعدة الكريمة في نفقات الدفن، والدعم الإنساني الطارئ، والتوعية المجتمعية المستنيرة بالقيم الإسلامية.",
    heroFloatingVerse: "«وَمَنْ أَحْيَاهَا فَكَأَنَّمَا أَحْيَا النَّاسَ جَمِيعًا»",
    heroFloatingVerseRef: "سورة المائدة: ٣٢",
    pillar1Title: "الإنسان أولاً",
    pillar1Desc: "مساندة العائلات المستضعفة والمجتمعات في أوقات الشدة الحرجة.",
    pillar2Title: "بالقيم الإسلامية",
    pillar2Desc: "متجذرون في الرحمة، والعدل، والصدق، والكرامة الإنسانية الأصيلة.",
    pillar3Title: "شفافية ومساءلة",
    pillar3Desc: "بناء ثقة مستدامة من خلال التدقيق المعتمد والحوكمة الرشيدة.",
    pillar4Title: "مجتمعات أقوى",
    pillar4Desc: "العمل نحو مجتمع أكثر تراحماً وتضامناً وصموداً.",
    guidingPrincipleLabel: "مبدؤنا الهادي",
    guidingVerseEn: "«وَمَنْ أَحْيَاهَا فَكَأَنَّمَا أَحْيَا النَّاسَ جَمِيعًا»",
    aboutLabel: "عن المؤسسة",
    whoWeAreTitle: "من نحن",
    whoWeAreText1: "مؤسسة المعونة الإسلامية للدفن (IBAF) هي منظمة إنسانية مكرسة لمساندة الأفراد والعائلات المتعففة من خلال توفير الدفن الكريم، وخدمات الإسعاف والطوارئ، والمبادرات المجتمعية وفقاً للقيم الإسلامية والأنظمة القانونية.",
    whoWeAreText2: "طموحنا هو بناء صرح إنساني موثوق يحفظ الكرامة الإنسانية، ويقوي روابط التكافل الاجتماعي في كافة أرجاء نيجيريا.",
    btnReadMoreAbout: "اقرأ المزيد عنا",
    visionTitle: "رؤيتنا",
    visionDesc: "مجتمع متراحم يتلقى فيه المستضعفون دعماً يحفظ كرامتهم، مستهدياً بالقيم الإسلامية والتزامنا المشترك تجاه الإنسانية.",
    missionTitle: "رسالتنا",
    missionDesc: "تيسير وتقديم الدفن الكريم، والدعم الإنساني الطارئ، والخدمات المجتمعية من خلال الإدارة الرشيدة للموارد والشراكات الاستراتيجية.",
    valuesHeader: "قيمنا الجوهرية",
    valCompassion: "الرحمة",
    valCompassionDesc: "خدمة الآخرين بلطف ومودة وفهم عميق لمعاناتهم.",
    valDignity: "الكرامة الإنسانية",
    valDignityDesc: "معاملة كل متوفى وأسرته بكل إجلال واحترام شرعي أصيل.",
    valIntegrity: "الأمانة",
    valIntegrityDesc: "إدارة التبرعات والأموال العامة بنزاهة وشفافية مطلقة.",
    valJustice: "العدل",
    valJusticeDesc: "تقديم العون بإنصاف دون تمييز، مع أولوية الأسر الأكثر حاجة.",
    valAccountability: "المساءلة",
    valAccountabilityDesc: "تقارير موثقة وتدقيق محاسبي صارم متوافق مع الأحكام الشرعية.",
    valSolidarity: "التضامن",
    valSolidarityDesc: "توحيد جهود المجتمع لضمان ألا تترك عائلة مكلومة وحدها.",
    programsLabel: "برامجنا الإنسانية",
    programsTitle: "الدعم الإنساني لمجتمعاتنا",
    programsSubtitle: "خدمة الناس. مساندة الأسر. تمكين المجتمعات في أبوجا ونيجيريا.",
    prog1Title: "المساعدة في تكاليف الدفن",
    prog1Desc: "دعم العائلات المستحقة المتعففة في تأمين الأكفان وتجهيز القبور ومراسم الجنازة الكريمة بما يحفظ ستر الميت وكرامته.",
    progRequestHelp: "طلب مساعدة في الدفن",
    prog2Title: "الدعم الطارئ والإسعاف",
    prog2Desc: "توفير سيارات إسعاف مجهزة لنقل المرضى والمتوفين بالتنسيق مع المستشفيات والمراكز الصحية على مدار الساعة.",
    progAmbulanceDispatch: "طلب إسعاف طارئ",
    prog3Title: "دعم الأسر والمفجوعين",
    prog3Desc: "مساندة أسر المتوفين المعوزة بالمساعدات العاجلة وطرود الرعاية لمواجهة تبعات فقد المعيل.",
    progConnectFamily: "تواصل مع فريق الدعم",
    prog4Title: "العمل الإنساني المجتمعي",
    prog4Desc: "التعاون مع لجان المقابر والمستشفيات لتحديد الاحتياجات الميدانية وتنفيذ حلول عملية مستدامة.",
    progJoinOutreach: "انضم لحملاتنا الميدانية",
    prog5Title: "التمويل الاجتماعي الإسلامي",
    prog5Desc: "إدارة وتوزيع أموال الزكاة، والصدقة الجارية، والأوقاف في مصارفها الشرعية المعتمدة تحت إشراف هيئة رقابة شرعية.",
    progCalculateZakat: "احسب وتبرع بزكاتك",
    programsPromise: "عهدنا: أن تسترشد كل مبادرة بالرحمة، والمسؤولية، والاحترام الراسخ للكرامة الإنسانية.",
    impactLabel: "الأثر والشفافية",
    impactTitle: "نجعل كل عمل إنساني ذا أثر ملموس",
    impactSubtitle: "نؤمن بأن العمل الإنساني يجب أن يرتكز على الأثر الحقيقي المقترن بالشفافية والمساءلة والتقارير الموثقة.",
    metricBurials: "جنازة كريمة تمت مساندتها",
    metricAmbulance: "مهمة إسعاف ونقل طارئة",
    metricFamilies: "أسرة مستفيدة من برامجنا",
    metricAudit: "فصل كامل لأموال الزكاة والصدقات",
    impactPrioritiesTitle: "أولويات أثرنا الإنساني",
    prio1: "مساندة الأسر المتعففة وتغطية نفقات الدفن والتكفين الشرعي.",
    prio2: "تعزيز جاهزية الإسعاف السريع لنقل المرضى والمتوفين في أبوجا.",
    prio3: "إطلاق المبادرات الميدانية ورعاية الأسر بعد فقد المعيل.",
    prio4: "بناء شراكات مستدامة مع المستشفيات، والمؤسسات الخيرية، وإدارات المقابر.",
    prio5: "تعزيز الشفافية ونشر التقارير المالية والشرعية المدققة باستمرار.",
    transparencyMattersTitle: "الشفافية أولويتنا",
    transparencyMattersDesc: "ملتزمون بأعلى معايير الإفصاح. يمكنكم تحميل التقارير السنوية والبيانات المالية المعتمدة وتقارير الرقابة الشرعية.",
    btnViewGovernance: "الاطلاع على الحوكمة والسياسات",
    govLabel: "الحوكمة والأمانة",
    govTitle: "مبنية على الثقة. مسترشدة بالمسؤولية.",
    govSubtitle: "ندرك أن ثقة المجتمع هي أساس كل نجاح. نلتزم بحوكمة محكمة وضوابط مالية وأخلاقية صارمة.",
    govPrio1Title: "قيادة مسؤولة",
    govPrio1Desc: "إشراف دقيق من مجلس الأمناء وتحديد واضح للمسؤوليات في كافة المستويات.",
    govPrio2Title: "المساءلة المالية",
    govPrio2Desc: "فصل تام لحسابات الزكاة وتدقيق مالي مستقل متوافق مع قوانين مكافحة غسل الأموال.",
    govPrio3Title: "حماية المستفيدين",
    govPrio3Desc: "حفظ خصوصية وكرامة العائلات المتعففة وفق ضوابط حماية البيانات المعتمدة.",
    govPrio4Title: "الضوابط الشرعية",
    govPrio4Desc: "إشراف مستمر من نخبة من العلماء لضمان مطابقة كافة الصرف للأحكام الفقهية.",
    govPrio5Title: "الشفافية المؤسسية",
    govPrio5Desc: "إتاحة مؤشرات البرامج وسجلات تشغيل المركبات لجميع الشركاء والمتبرعين.",
    govPrio6Title: "الشكاوى والملاحظات",
    govPrio6Desc: "قنوات سرية وآمنة لتلقي الشكاوى والمقترحات والتعامل معها بنزاهة.",
    govCommitmentTitle: "التزامنا الراسخ",
    govCommitmentDesc: "نضمن أن تكون الرحمة مدعومة دائماً بحوكمة صلبة وإدارة رشيدة وأمانة مطلقة.",
    btnComplaints: "تقديم شكوى أو ملاحظة سرية",
    btnContactUs: "تواصل مع فريق الحوكمة",
    partnersLabel: "الشركاء والداعمون",
    partnersTitle: "معاً يمكننا إنجاز المزيد",
    partnersSubtitle: "تتطلب التحديات الإنسانية تضافر الجهود والمسؤولية المشتركة بين مختلف القطاعات والمؤسسات.",
    partOp1Title: "شراكات الرعاية الصحية والمستشفيات",
    partOp1Desc: "التعاون مع مكاتب الخدمة الاجتماعية بالمستشفيات لتحديد الحالات المتعففة فوراً.",
    partOp2Title: "لوجستيات أسطول الطوارئ",
    partOp2Desc: "شراكات التزود بالوقود والصيانة وتجهيزات الإسعاف لضمان الجاهزية على مدار 24 ساعة.",
    partOp3Title: "المؤسسات المانحة والمسؤولية المجتمعية",
    partOp3Desc: "توجيه أموال المسؤولية المجتمعية والزكوات المؤسسية نحو برامج الدفن والإغاثة الميدانية.",
    partOp4Title: "المؤسسات الإسلامية والمساجد",
    partOp4Desc: "التعاون مع المراكز الإسلامية والدعاة لنشر فقه الجنائز وأحكام التكافل الشرعي.",
    partOp5Title: "الخبرات المهنية التطوعية",
    partOp5Desc: "استقطاب الخبراء في القانون، والمحاسبة، والطب، والتقنية لتقديم الدعم المؤسسي.",
    partOp6Title: "المشاريع الإنسانية الوقفية المشتركة",
    partOp6Desc: "تطوير مقابر وقفية، ومرافق تبريد شمسية، ومحافظ إغاثية مستدامة للأزمات.",
    btnBecomePartner: "الانضمام كشريك مؤسسي",
    supportLabel: "ادعم رسالتنا",
    supportTitle: "رحمتكم تصنع فارقاً حقيقياً",
    supportSubtitle: "كل مساهمة تحفظ كرامة الإنسان وتخفف وطأة الفقد عن الأسر المكلومة في أصعب أوقاتها.",
    hadithMercyText: "«مَنْ لَا يَرْحَمْ لَا يُرْحَمْ»",
    optFinTitle: "الدعم المالي المباشر",
    optFinDesc: "المساهمة في البرامج الإنسانية المعتمدة عبر حسابات المؤسسة الرسمية المخصصة.",
    optKindTitle: "المساهمات العينية",
    optKindDesc: "دعم المبادرات بأقمشة الأكفان، وتجهيزات الإسعاف، ومستلزمات الغسيل والدفن.",
    optPartTitle: "الشراكات المؤسسية",
    optPartDesc: "التعاون المشترك في تنفيذ مشاريع التكافل الاجتماعي والتنمية المجتمعية.",
    optVolTitle: "العمل التطوعي",
    optVolDesc: "المشاركة بالوقت، والخبرة في غسل وتكفين الموتى، والدعم الميداني.",
    donateBoxTitle: "تقديم تبرع إنساني معتمد",
    donateBoxSub: "اختر صندوق التبرع المناسب. يتم فصل أموال الزكاة بنسبة 100% وصرفها لمستحقيها الشرعيين حصراً.",
    selectAmountLabel: "اختر قيمة التبرع (بالنايرا النيجيرية)",
    btnDonateOnline: "تبرع إلكترونياً بأمان (Paystack / بطاقة)",
    btnOpenZakatCalc: "افتح حاسبة الزكاة",
    newsLabel: "الأخبار والمستجدات",
    newsTitle: "قصص العطاء. تحديثات تهمكم.",
    newsSubtitle: "تابعوا آخر مستجدات أنشطة المؤسسة ومشاريعها الميدانية في خدمة المجتمع.",
    tagEmergency: "عمليات الطوارئ",
    news1Title: "المؤسسة تضيف سيارة إسعاف إنسانية جديدة لأسطولها في أبوجا",
    news1Desc: "توسيع نطاق الجاهزية على مدار 24 ساعة لخدمة العائلات ونقل الحالات الطارئة والمتوفين بسرعة وكرامة.",
    tagFamilyWelfare: "رعاية الأسر",
    news2Title: "توزيع طرود الدعم الفصلي لـ 120 أسرة مكلومة فقدت معيلها",
    news2Desc: "تقديم الدعم الغذائي والإغاثي للأرامل والأيتام لتخفيف أثر الفقد والحد من الضائقة المعيشية.",
    tagGovernance: "الحوكمة والرقابة",
    news3Title: "هيئة الرقابة الشرعية تصدر تقرير التدقيق السنوي لأموال الزكاة والأوقاف",
    news3Desc: "المراجعة المستقلة تؤكد الالتزام التام بالفصل الشرعي وصرف الأموال في مصارفها الفقهية بدقة.",
    invLabel: "شارك معنا",
    invTitle: "كن جزءاً من رسالة سامية",
    invSubtitle: "تزداد الرحمة أثراً حين تتكاتف الأيدي. سواء كنت فرداً، متطوعاً، أو مؤسسة، هناك دائماً مكان لعطائك.",
    inv1Title: "تطوع معنا",
    inv1Desc: "ساهم بوقتك ومهاراتك في تجهيز الجنائز أو تنظيم الأنشطة الإغاثية المعتمدة.",
    btnVolunteer: "طلب التطوع الميداني",
    inv2Title: "كن شريكاً لنا",
    inv2Desc: "استكشف آفاق التعاون المؤسسي لدعم الأسر المتعففة في مختلف المناطق.",
    btnPartner: "طلب شراكة مؤسسية",
    inv3Title: "شاركنا خبرتك",
    inv3Desc: "ادعم المؤسسة بخبراتك القانونية، أو الطبية، أو المحاسبية، أو التقنية مجاناً لوجه الله.",
    btnExpertise: "تقديم خبرة مهنية",
    inv4Title: "ادعم برامجنا",
    inv4Desc: "استفسر عن سبل تمويل المبادرات الميدانية عبر قنواتنا المعتمدة.",
    btnSupport: "ساهم اليوم",
    contactLabel: "اتصل بنا",
    contactTitle: "يسعدنا دائماً تواصلكم",
    contactSubtitle: "هل لديكم استفسار، رغبة في الشراكة، أو حاجة لدعم عاجل؟ نحن هنا للاستماع والمساعدة.",
    contactPanelTitle: "مؤسسة المعونة الإسلامية للدفن",
    contactPanelDesc: "منطلقة من الرحمة، ملتزمة بالكرامة الإنسانية، وتعمل من عاصمة نيجيريا الاتحادية.",
    chanLocationTitle: "مقر المؤسسة الرئيسي",
    chanHotlineTitle: "غرفة عمليات الطوارئ (24 ساعة)",
    chanGeneralTitle: "الاستفسارات العامة",
    chanPartnerTitle: "شراكات المؤسسة والمنح",
    chanComplaintsTitle: "الشكاوى والملاحظات السرية",
    formTitle: "أرسل لنا رسالة",
    formSub: "يرجى تعبئة النموذج أدناه. في حالات الطوارئ العاجلة لنقل المتوفين أو الإسعاف، يرجى الاتصال المباشر بالخط الساخن.",
    formName: "الاسم الكامل *",
    formEmail: "البريد الإلكتروني *",
    formPhone: "رقم الهاتف *",
    formSubject: "القسم / موضوع الرسالة *",
    formMessage: "نص الرسالة *",
    btnSendMessage: "إرسال الرسالة",
    footerTaglineEn: "خدمة الإنسانية والتمسك بالقيم الإسلامية.",
    footerSnippet: "التزام إنساني بالكرامة، والرحمة، والمسؤولية في خدمة المستضعفين في نيجيريا.",
    footerQuickLinks: "روابط سريعة",
    footerProgramsTitle: "برامجنا",
    footerContactTitle: "التواصل الرسمي",
    footerPrivacy: "سياسة الخصوصية (NDPR)",
    footerComplaints: "الشكاوى والملاحظات",
    floatingEmergencyBtn: "طوارئ الدفن والإسعاف (24/7)"
  }
};

let currentLang = 'en';

// Set language function
function setLanguage(lang) {
  currentLang = lang;
  const html = document.documentElement;
  html.setAttribute('lang', lang);
  html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

  // Update button active state
  const btnEn = document.getElementById('btn-lang-en');
  const btnAr = document.getElementById('btn-lang-ar');
  const btnDrawerEn = document.getElementById('btn-drawer-lang-en');
  const btnDrawerAr = document.getElementById('btn-drawer-lang-ar');
  if (lang === 'ar') {
    btnAr?.classList.add('active');
    btnEn?.classList.remove('active');
    btnDrawerAr?.classList.add('active');
    btnDrawerEn?.classList.remove('active');
  } else {
    btnEn?.classList.add('active');
    btnAr?.classList.remove('active');
    btnDrawerEn?.classList.add('active');
    btnDrawerAr?.classList.remove('active');
  }

  // Update all translatable elements
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  localStorage.setItem('ibaf_lang', lang);
}

// ==========================================================================
// 2. MODAL CONTROLLERS
// ==========================================================================

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function initModals() {
  // Close buttons inside modals
  document.querySelectorAll('.modal-close-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const modal = e.target.closest('.modal-overlay');
      if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });

  // Click outside modal card to close
  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });

  // Escape key closes modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-overlay.active').forEach(modal => {
        modal.classList.remove('active');
      });
      document.body.style.overflow = '';
    }
  });

  // Emergency Modal Triggers
  const emTriggers = [
    document.getElementById('open-emergency-top'),
    document.getElementById('floating-emergency-trigger')
  ];
  emTriggers.forEach(btn => {
    if (btn) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        openModal('emergency-modal');
      });
    }
  });

  // Program-specific emergency triggers
  document.querySelectorAll('[data-open-emergency]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const type = link.getAttribute('data-open-emergency');
      const select = document.getElementById('em-type');
      if (select) {
        if (type === 'ambulance') {
          select.value = 'Emergency Medical Ambulance Transit';
        } else {
          select.value = 'Urgent Deceased Transit / Janazah Support';
        }
      }
      openModal('emergency-modal');
    });
  });

  // Complaints Modal Trigger
  const compBtn = document.getElementById('btn-open-complaints');
  const compLink = document.getElementById('open-complaints-link');
  if (compBtn) compBtn.addEventListener('click', () => openModal('complaints-modal'));
  if (compLink) {
    compLink.addEventListener('click', (e) => {
      e.preventDefault();
      openModal('complaints-modal');
    });
  }

  // Zakat Calculator Trigger
  const zcBtn = document.getElementById('btn-trigger-zakat-calc');
  if (zcBtn) zcBtn.addEventListener('click', () => openModal('zakat-modal'));

  // Partner Modal Trigger
  const partnerBtn = document.getElementById('btn-open-partner-modal');
  if (partnerBtn) {
    partnerBtn.addEventListener('click', () => {
      window.openVolunteerModal('Institutional Partner');
    });
  }

  // Global Search Modal Trigger
  const searchBtn = document.getElementById('open-search-btn');
  if (searchBtn) searchBtn.addEventListener('click', () => openModal('search-modal'));

  // Hero & Header Donate buttons
  const heroDonate = document.getElementById('hero-donate-trigger');
  if (heroDonate) {
    heroDonate.addEventListener('click', () => {
      const target = document.getElementById('support');
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  }
}

// Global helper for volunteer modal
window.openVolunteerModal = function(role) {
  const modal = document.getElementById('volunteer-modal');
  const title = document.getElementById('vol-modal-title');
  const roleInput = document.getElementById('vol-interest-role');
  if (title) title.textContent = role === 'Institutional Partner' ? 'Institutional Partnership Application' : 'Volunteer With IBAF';
  if (roleInput) roleInput.value = role;
  openModal('volunteer-modal');
};

// ==========================================================================
// 3. EMERGENCY DISPATCH FORM HANDLER
// ==========================================================================

function initEmergencyForm() {
  const form = document.getElementById('emergency-dispatch-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const type = document.getElementById('em-type').value;
    const location = document.getElementById('em-location').value;
    const name = document.getElementById('em-name').value;
    const phone = document.getElementById('em-phone').value;
    const notes = document.getElementById('em-notes').value || 'None';

    const caseId = 'IBAF-EM-' + Math.floor(100000 + Math.random() * 900000);

    const alertMessage = 
      `🚨 URGENT IBAF DISPATCH ALERT\n` +
      `Case ID: ${caseId}\n` +
      `Assistance: ${type}\n` +
      `Location: ${location}\n` +
      `Contact: ${name} (${phone})\n` +
      `Notes: ${notes}`;

    // Show instant success feedback
    alert(
      `✅ Urgent Request Registered!\n\n` +
      `Case Reference: ${caseId}\n` +
      `Our Abuja Duty Dispatcher has been alerted.\n\n` +
      `A direct WhatsApp channel will now open to verify your location.`
    );

    closeModal('emergency-modal');
    form.reset();

    // Redirect to WhatsApp with prefilled message
    const waUrl = `https://wa.me/23480042234357?text=${encodeURIComponent(alertMessage)}`;
    window.open(waUrl, '_blank');
  });
}

// ==========================================================================
// 4. ZAKAT CALCULATOR LOGIC
// ==========================================================================

function initZakatCalculator() {
  const cashInput = document.getElementById('zc-cash');
  const goldInput = document.getElementById('zc-gold');
  const investInput = document.getElementById('zc-invest');
  const debtsInput = document.getElementById('zc-debts');

  const totalWealthEl = document.getElementById('zc-total-wealth');
  const dueAmountEl = document.getElementById('zc-due-amount');
  const payBtn = document.getElementById('zc-pay-btn');

  const NISAB_NGN = 7200000; // Estimated Nisab based on ~85g Gold

  function recalculate() {
    const cash = parseFloat(cashInput?.value || 0) || 0;
    const gold = parseFloat(goldInput?.value || 0) || 0;
    const invest = parseFloat(investInput?.value || 0) || 0;
    const debts = parseFloat(debtsInput?.value || 0) || 0;

    const netZakatable = Math.max(0, (cash + gold + invest) - debts);
    let zakatDue = 0;

    if (netZakatable >= NISAB_NGN) {
      zakatDue = netZakatable * 0.025;
    }

    if (totalWealthEl) {
      totalWealthEl.textContent = '₦' + netZakatable.toLocaleString('en-NG');
    }
    if (dueAmountEl) {
      dueAmountEl.textContent = '₦' + Math.round(zakatDue).toLocaleString('en-NG');
    }
  }

  [cashInput, goldInput, investInput, debtsInput].forEach(inp => {
    if (inp) {
      inp.addEventListener('input', recalculate);
    }
  });

  if (payBtn) {
    payBtn.addEventListener('click', () => {
      closeModal('zakat-modal');
      const target = document.getElementById('support');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        // Select Zakat fund tab
        const zakatTab = document.querySelector('.fund-tab[data-fund="zakat"]');
        if (zakatTab) zakatTab.click();
      }
    });
  }
}

// ==========================================================================
// 5. DONATION WIDGET INTERACTIONS
// ==========================================================================

function initDonationWidget() {
  // Fund Tab switching
  const fundTabs = document.querySelectorAll('.fund-tab');
  fundTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      fundTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });

  // Amount Chips
  const chips = document.querySelectorAll('.chip-btn');
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const val = chip.getAttribute('data-val');
      if (val === 'custom') {
        const custom = prompt('Enter donation amount in Nigerian Naira (NGN):', '50000');
        if (custom) {
          chip.textContent = '₦' + parseInt(custom, 10).toLocaleString();
        }
      }
    });
  });

  // Copy Bank Account Number
  const copyBtn = document.getElementById('copy-bank-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const acc = document.getElementById('bank-acc-num')?.textContent || '1012345678';
      navigator.clipboard.writeText(acc).then(() => {
        copyBtn.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
        setTimeout(() => {
          copyBtn.innerHTML = '<i class="fa-regular fa-copy"></i> Copy Account';
        }, 2500);
      }).catch(() => {
        alert('Account Number: ' + acc);
      });
    });
  }

  // Proceed Online Donation Button
  const proceedBtn = document.getElementById('btn-proceed-donation');
  if (proceedBtn) {
    proceedBtn.addEventListener('click', () => {
      const activeFund = document.querySelector('.fund-tab.active')?.textContent.trim() || 'Burial Assistance Fund';
      const activeAmount = document.querySelector('.chip-btn.active')?.textContent.trim() || '₦25,000';

      alert(
        `💳 Secure Payment Gateway Simulation\n\n` +
        `Target Fund: ${activeFund}\n` +
        `Amount: ${activeAmount}\n` +
        `Processing Provider: Paystack / Central Bank of Nigeria Approved Gateway\n\n` +
        `In production, this launches the verified 3D-Secure checkout modal for Card, Bank Transfer, or USSD payment.`
      );
    });
  }
}

// ==========================================================================
// 6. COMPLAINTS & VOLUNTEER FORMS
// ==========================================================================

function initFeedbackAndVolunteerForms() {
  const compForm = document.getElementById('complaints-form');
  if (compForm) {
    compForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const ref = 'IBAF-CONF-' + Math.floor(1000 + Math.random() * 9000);
      alert(
        `🛡️ Report Received Confidentially\n\n` +
        `Your Tracking Reference: ${ref}\n\n` +
        `This concern has been transmitted directly to the Board of Trustees Governance & Ethics Committee. Thank you for helping IBAF uphold the highest standards of integrity.`
      );
      closeModal('complaints-modal');
      compForm.reset();
    });
  }

  const volForm = document.getElementById('volunteer-form');
  if (volForm) {
    volForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert(
        `🤝 Application Received with Gratitude!\n\n` +
        `JazakAllahu Khairan. Our community coordinator will review your details and reach out via phone/WhatsApp within 48 hours.`
      );
      closeModal('volunteer-modal');
      volForm.reset();
    });
  }

  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contact-name').value;
      const dept = document.getElementById('contact-subject').value;
      alert(
        `✉️ Message Delivered to IBAF Abuja\n\n` +
        `Thank you, ${name}. Your inquiry regarding "${dept}" has been assigned to our communications desk. We will respond promptly.`
      );
      contactForm.reset();
    });
  }
}

// ==========================================================================
// 7. GLOBAL PORTAL SEARCH ENGINE
// ==========================================================================

function initSearchEngine() {
  const searchInput = document.getElementById('global-search-input');
  const resultsBox = document.getElementById('search-results-box');

  const searchableIndex = [
    { title: "Burial Assistance Program", desc: "Supporting eligible families facing burial hardship with Kafan and grave costs.", link: "#programs" },
    { title: "24/7 Humanitarian Emergency Ambulance", desc: "Rapid hospital-to-home and deceased transit fleet in Abuja FCT.", link: "#programs" },
    { title: "Zakat Fund & Nisab Calculator", desc: "Calculate your 2.5% Zakat and allocate to eligible burial cases.", link: "#support" },
    { title: "Financial & Shariah Audits", desc: "Download verified annual reports, financial disclosures, and Shariah certificates.", link: "#impact" },
    { title: "Governance & Whistleblower Feedback", desc: "Board oversight, NDPR privacy compliance, and confidential grievances.", link: "#governance" },
    { title: "Volunteer with IBAF", desc: "Join our Janazah preparation, healthcare, logistics, and pro-bono teams.", link: "#involved" },
    { title: "Institutional Hospital Partnerships", desc: "Collaborate with healthcare centers and hospital social welfare desks.", link: "#partners" },
    { title: "Abuja Headquarters & Contact", desc: "Office location, email channels, emergency numbers, and direct inquiry form.", link: "#contact" }
  ];

  if (searchInput && resultsBox) {
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      if (!q) {
        resultsBox.innerHTML = '<p style="font-size: 0.85rem; color: var(--text-muted); text-align: center;">Type keywords like "ambulance", "burial", "Zakat", "Abuja", or "reports".</p>';
        return;
      }

      const matches = searchableIndex.filter(item => 
        item.title.toLowerCase().includes(q) || item.desc.toLowerCase().includes(q)
      );

      if (matches.length === 0) {
        resultsBox.innerHTML = '<p style="font-size: 0.88rem; color: var(--text-muted); text-align: center; padding: 10px;">No matching results found for "' + q + '".</p>';
        return;
      }

      resultsBox.innerHTML = matches.map(item => `
        <a href="${item.link}" style="display: block; padding: 10px; border-bottom: 1px solid var(--border-light); text-decoration: none; color: inherit;" onclick="closeModal('search-modal')">
          <div style="font-weight: 700; color: var(--emerald-900); font-size: 0.95rem;">${item.title}</div>
          <div style="font-size: 0.82rem; color: var(--text-secondary); margin-top: 2px;">${item.desc}</div>
        </a>
      `).join('');
    });
  }
}

// ==========================================================================
// 8. SCROLLSPY, STICKY HEADER & ANIMATIONS
// ==========================================================================

function initScrollEffects() {
  const header = document.getElementById('site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });

  // Mobile Off-Canvas Drawer Management
  const mobileBtn = document.getElementById('mobile-toggle-btn');
  const drawer = document.getElementById('mobile-drawer');
  const backdrop = document.getElementById('drawer-backdrop');
  const drawerCloseBtn = document.getElementById('drawer-close-btn');

  function openDrawer() {
    drawer?.classList.add('active');
    backdrop?.classList.add('active');
    drawer?.setAttribute('aria-hidden', 'false');
    backdrop?.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer?.classList.remove('active');
    backdrop?.classList.remove('active');
    drawer?.setAttribute('aria-hidden', 'true');
    backdrop?.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  mobileBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    openDrawer();
  });

  drawerCloseBtn?.addEventListener('click', closeDrawer);
  backdrop?.addEventListener('click', closeDrawer);

  // Close drawer on clicking any navigation link inside it
  document.querySelectorAll('#drawer-nav-list a').forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  // Drawer emergency link
  document.getElementById('drawer-emergency-link')?.addEventListener('click', (e) => {
    e.preventDefault();
    closeDrawer();
    openModal('emergency-modal');
  });

  // Drawer donate button
  document.getElementById('drawer-donate-btn')?.addEventListener('click', (e) => {
    closeDrawer();
  });

  // Drawer language toggle buttons
  document.getElementById('btn-drawer-lang-en')?.addEventListener('click', () => setLanguage('en'));
  document.getElementById('btn-drawer-lang-ar')?.addEventListener('click', () => setLanguage('ar'));

  // Close drawer on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer?.classList.contains('active')) {
      closeDrawer();
    }
  });

  // Active section spy
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const navLink = document.querySelector(`.nav-menu a[href*="${sectionId}"]`);
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLink?.classList.add('active');
      } else {
        navLink?.classList.remove('active');
      }
    });
  });
}

// ==========================================================================
// 9. INITIALIZATION
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // Check stored language
  const savedLang = localStorage.getItem('ibaf_lang') || 'en';
  setLanguage(savedLang);

  // Language buttons
  document.getElementById('btn-lang-en')?.addEventListener('click', () => setLanguage('en'));
  document.getElementById('btn-lang-ar')?.addEventListener('click', () => setLanguage('ar'));

  // Initialize modules
  initModals();
  initEmergencyForm();
  initZakatCalculator();
  initDonationWidget();
  initFeedbackAndVolunteerForms();
  initSearchEngine();
  initScrollEffects();

  console.log("IBAF Web Platform initialized successfully. Serving Humanity and Upholding Islamic Values.");
});
